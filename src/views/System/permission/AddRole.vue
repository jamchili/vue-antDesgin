<script lang="ts" setup>
import { createRoleUserAPI, getRoleAPI, getTreeListAPI, updateRoleAPI } from '@/api/user/car'
import { deepCopy } from '@/utils'
import { ElMessage, type FormInstance, type TreeInstance } from 'element-plus'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

const route = useRoute()

const activeStep = ref(1)

const roleFormRef = ref<FormInstance>()

const roleForm = ref({
  roleName: '二狗',
  remark: '3',
  perms: []
})
const roleRules = {
  roleName: [{ required: true, message: '请输入角色名称', trigger: 'blur' }],
  remark: [{ required: true, message: '请输入描述名称', trigger: 'blur' }]
}

const treeRef = ref<TreeInstance>()
const treeList = ref() // 权限树形列表

const diabledTreeRef = ref<TreeInstance>()
const disableTreeList = ref()

const decreseStep = () => {
  if (activeStep.value === 1) return
  activeStep.value--
}

// 下一步
const increseStep = async (formEl: FormInstance | undefined) => {
  if (activeStep.value === 3 || !formEl) return
  if (activeStep.value === 1) {
    // 当前是角色信息状态，进行表单校验
    await formEl.validate(valid => {
      if (valid) {
        // 校验通过才能进入下一个状态
        activeStep.value++
      }
    })
  } else if (activeStep.value === 2) {
    roleForm.value.perms = []
    treeRef.value!.forEach(i => {
      roleForm.value.perms.push(i.getCheckedKeys())
    })
    if (roleForm.value.perms.flat().length === 0) {
      ElMessage({
        type: 'error',
        message: '请至少选择一个权限点'
      })
    } else {
      // 进入到下一页
      activeStep.value++

      diabledTreeRef.value!.forEach((tree, index) => {
        tree.setCheckedKeys(roleForm.value.perms[index])
      })
    }
  }
}

/**
 * 给所有tree添加disable属性
 * @param arr tree
 */
const addDisabled = arr => {
  arr.forEach(e => {
    e.disabled = true
    if (e.children) {
      addDisabled(e.children)
    }
  })
}

const getTreeList = async () => {
  const res = await getTreeListAPI()
  treeList.value = res.data
  disableTreeList.value = deepCopy(treeList.value)
  addDisabled(disableTreeList.value)
}

const submit = async () => {
  let message = ''
  if (route.query.id) {
    await updateRoleAPI(roleForm.value)
    message = '修改角色成功'
  } else {
    await createRoleUserAPI(roleForm.value)
    message = '添加角色成功'
  }

  ElMessage({
    type: 'success',
    message: message
  })
  router.back()
}

const getRoleDetail = async () => {
  const res = await getRoleAPI(route.query.id as string)
  console.log('res', res)

  const { perms, remark, roleId, roleName } = res.data
  // // 回填基础表单
  roleForm.value = { perms, remark, roleId, roleName }
  // // 回填Tree
  treeRef.value.forEach((tree, index) => {
    tree.setCheckedKeys(roleForm.value.perms[index])
  })
}

onMounted(() => {
  getTreeList()
  if (route.query.id) {
    getRoleDetail()
  }
})
</script>
<template>
  <div class="add-role">
    <header class="add-header">
      <div class="left">
        <span class="arrow" @click="$router.back()"><i class="el-icon-arrow-left" />返回</span>
        <span>|</span>
        <span>添加角色</span>
      </div>
      <div class="right">黑马程序员</div>
    </header>
    <main class="add-main">
      <div class="step-container">
        <el-steps direction="vertical" :active="activeStep" :space="100">
          <el-step title="角色信息" />
          <el-step title="权限信息" />
          <el-step title="检查并完成" />
        </el-steps>
      </div>
      <div v-show="activeStep === 1" class="form-container">
        <div class="title">权限配置</div>
        <div class="form">
          <el-form :model="roleForm" :rules="roleRules" ref="roleFormRef">
            <el-form-item label="角色名称" prop="roleName">
              <el-input v-model="roleForm.roleName" />
            </el-form-item>
            <el-form-item label="角色描述" prop="remark">
              <el-input v-model="roleForm.remark" />
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div v-show="activeStep === 2" class="form-container">
        <div class="title">权限配置</div>
        <div class="tree-wrapper">
          <div v-for="item in treeList" :key="item.id" class="tree-item">
            <div class="tree-title">{{ item.title }}</div>
            <el-tree
              node-key="id"
              highlight-current
              ref="treeRef"
              :props="{
                children: 'children',
                label: 'title',
                disabled: 'disabled'
              }"
              :data="item.children"
              show-checkbox
              :default-expand-all="true"
            />
          </div>
        </div>
      </div>
      <div v-show="activeStep === 3" class="form-container">
        <div class="title">检查并完成</div>
        <div class="form">
          <div class="info">
            <div class="form-item">角色名称：{{ roleForm.roleName }}</div>
            <div class="form-item">角色描述：{{ roleForm.remark }}</div>
            <div class="form-item">角色权限：</div>
            <div class="tree-wrapper">
              <div v-for="item in disableTreeList" :key="item.id" class="tree-item">
                <div class="tree-title">{{ item.title }}</div>
                <el-tree
                  node-key="id"
                  highlight-current
                  ref="diabledTreeRef"
                  :props="{
                    children: 'children',
                    label: 'title',
                    disabled: 'disabled'
                  }"
                  :data="item.children"
                  show-checkbox
                  :default-expand-all="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="add-footer">
      <div class="btn-container">
        <el-button v-if="activeStep > 1" @click="decreseStep">上一步</el-button>
        <el-button v-if="activeStep < 3" type="primary" @click="increseStep(roleFormRef)"
          >下一步</el-button
        >
        <el-button v-if="activeStep === 3" type="primary" @click="submit">确认添加</el-button>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.add-role {
  background-color: #f4f6f8;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .add-header {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    height: 64px;
    line-height: 64px;
    background-color: #fff;

    .left {
      span {
        margin-right: 4px;
      }

      .arrow {
        cursor: pointer;
      }
    }

    .right {
      text-align: right;
    }
  }

  .add-main {
    flex: 1;
    background: #f4f6f8;
    .step-container {
      position: absolute;
      top: 108px;
      left: 24px;
    }
    .form-container {
      background-color: #fff;
      width: 70%;
      margin: 0 auto;
      padding: 0 20px;
      height: 100%;
      .title {
        height: 60px;
        line-height: 60px;
        padding-left: 20px;
      }
      .form {
        margin-bottom: 20px;
      }
      .form-box {
        width: 600px;
        display: flex;
        flex-direction: column;
      }
    }
  }

  .add-footer {
    bottom: 0;
    width: 100%;
    padding: 24px 50px;
    color: #000000d9;
    font-size: 14px;
    background: #fff;
    text-align: center;
    z-index: 10001;
  }
  .tree-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .tree-item {
      flex: 1;
      padding: 0px 4px;
      text-align: center;
      .tree-title {
        background: #f5f7fa;
        text-align: center;
        padding: 10px 0;
        margin-bottom: 12px;
      }
    }
  }
}
</style>
