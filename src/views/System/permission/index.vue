<script lang="ts" setup>
import { getRoleDetailAPI, getRoleListAPI, getRoleUserAPI, getTreeListAPI } from '@/api/user/car'
import type { TreeInstance, TreeKey } from 'element-plus'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const roleList = ref()

const treeList = ref()

//左侧index
const activeIndex = ref(0)

//left-top index
const activeName = ref('tree')

// 当前角色权限点列表
const perms = ref([])

//树节点实例
const treeRef = ref<TreeInstance[]>()

//用户列表
const roleUserList = ref([])

const total = ref(0)

const roleId = ref()

const getList = async () => {
  const res = await getRoleListAPI()
  roleList.value = res.data
}
// 切换角色
const changeRole = async (idx: number) => {
  activeIndex.value = idx
  // 获取当前角色下的权限点数据列表
  roleId.value = roleList.value[idx].roleId
  await getRoleDetail(roleId.value)

  setCheckedKeys(treeRef.value!, perms.value)
  await getRoleUserList()
}

/**
 *
 * @param arr Tree
 * @param arr2
 */
const setCheckedKeys = (arr: TreeInstance[], arr2: number[]) => {
  arr.forEach((i, index) => {
    i.setCheckedKeys(arr2[index])
  })
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

// 获取当前角色详情
const getRoleDetail = async (roleId: string) => {
  const res = await getRoleDetailAPI(roleId)
  perms.value = res.data.perms
}

const getTreeList = async () => {
  const res = await getTreeListAPI()
  treeList.value = res.data
  // 目标：treeList里面的每一项以及嵌套的子项都添加一个disabled = true
  addDisabled(treeList.value)
}

// 封装获取当前角色下的成员的方法
const getRoleUserList = async () => {
  const res = await getRoleUserAPI(roleId.value)
  roleUserList.value = res.data.rows
  total.value = res.data.total
}

onMounted(async () => {
  await getList()
  await getTreeList()
  changeRole(0)
})
</script>

<template>
  <div class="role-container">
    <div class="left-wrapper">
      <div
        v-for="(item, index) in roleList"
        :key="item.roleId"
        class="role-item"
        :class="{ active: index === activeIndex }"
        @click="changeRole(index)"
      >
        <div class="role-info">
          <CpIcon :name="index === activeIndex ? 'user-active' : 'user'" class="icon" />
          {{ item.roleName }}
        </div>
        <div class="more">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <CpIcon name="more" />
            </span>
            <template #dropdown>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="$router.push(`/roleAdd?id=${item.roleId}`)"
                  >编辑角色</el-dropdown-item
                >
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu></template
            >
          </el-dropdown>
        </div>
      </div>
      <el-button class="addBtn" @click="router.push('/roleAdd')"> 添加角色 </el-button>
    </div>

    <div class="right-wrapper">
      <el-tabs v-model="activeName">
        <el-tab-pane label="功能权限" name="tree">
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
        </el-tab-pane>
        <el-tab-pane :label="`成员(${total})`" name="member">
          <el-table :data="roleUserList" style="width: 100%">
            <el-table-column type="index" width="250" label="序号" />
            <el-table-column prop="name" label="员工姓名" />
            <el-table-column prop="userName" label="登录账号" />
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style scoped lang="scss">
.role-container {
  display: flex;
  font-size: 14px;
  background-color: #fff;
  padding: 20px;
  .left-wrapper {
    width: 200px;
    border-right: 1px solid #e4e7ec;
    padding: 4px;
    text-align: center;

    .role-item {
      position: relative;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      cursor: pointer;

      &.active {
        background: #edf5ff;
        color: #4770ff;
      }
    }

    .role-info {
      display: flex;
      align-items: center;

      .icon {
        margin-right: 10px;
      }
    }

    .more {
      display: flex;
      align-items: center;
    }
    .addBtn {
      width: 100%;
      margin-top: 20px;
    }
  }

  .right-wrapper {
    flex: 1;

    .tree-wrapper {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .tree-item {
        flex: 1;
        border-right: 1px solid #e4e7ec;
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

    ::v-deep .el-tabs__nav-wrap {
      padding-left: 20px;
    }

    .user-wrapper {
      padding: 20px;
    }
  }
}
</style>
