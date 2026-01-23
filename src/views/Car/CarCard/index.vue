<script lang="ts" setup>
import { delCardAPI, getCardListAPI } from '@/api/user/car'
import type { getCardListReq, getCardListRes, getCardListResRow } from '@/types/user'
import { cardStatusList, MAP } from '@/views/utils/configs'
import { ElMessage, ElMessageBox } from 'element-plus'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const loading = ref(true)
const formInline = ref<Partial<getCardListReq>>({
  carNumber: '',
  personName: '',
  cardStatus: '',
  page: 1,
  pageSize: 5
})

const carData = ref<getCardListRes>()

const onSubmit = () => {
  getList()
}

const getList = async () => {
  const res = await getCardListAPI(formInline.value)
  carData.value = res.data
  loading.value = false
}

const formatStatus = (row: getCardListResRow) => {
  return MAP[row.cardStatus]
}

const currentChange = (val: number) => {
  formInline.value.page = val
  getList()
}

const indexMethod = (row: number) => {
  return (formInline.value.page! - 1) * formInline.value.pageSize! + 1 + row
}

const editEvent = (row: getCardListResRow) => {
  router.push({
    path: '/cardAdd',
    query: {
      id: row.id
    }
  })
}

// 删除逻辑
const delCard = id => {
  ElMessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      await delCardAPI(id)

      getList()
      ElMessage({
        type: 'success',
        message: '删除成功!'
      })
    })
    .catch(error => {
      console.log(error)
    })
}
onMounted(() => {
  getList()
})
</script>

<template>
  <div>
    <div class="pt-4 border-bt border-b-[1px]">
      <!-- 搜索区域 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="车牌号码：">
          <el-input v-model="formInline.carNumber" placeholder="Approved by" clearable />
        </el-form-item>
        <el-form-item label="车主姓名：">
          <el-input v-model="formInline.personName" placeholder="Approved by" clearable />
        </el-form-item>
        <el-form-item label="状态：">
          <el-select v-model="formInline.cardStatus" placeholder="Activity zone" clearable>
            <el-option
              v-for="(item, index) in cardStatusList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 新增删除操作区域 -->
    <div class="create-container py-4">
      <el-button type="primary" @click="router.push('/cardAdd')">添加月卡</el-button>
      <el-button>批量删除</el-button>
    </div>
    <!-- 表格区域 -->
    <div class="w-full scroll-auto">
      <el-table :data="carData?.rows" style="width: 100%" v-loading="loading">
        <el-table-column type="index" prop="id" label="序号" width="80" :index="indexMethod" />
        <el-table-column prop="personName" label="车主名称" />
        <el-table-column prop="phoneNumber" label="联系方式" />
        <el-table-column prop="carNumber" label="车牌号码" />
        <el-table-column prop="carBrand" label="车辆品牌" />
        <el-table-column prop="totalEffectiveDate" label="剩余有效天数" />
        <el-table-column prop="cardStatus" :formatter="formatStatus" label="状态" />
        <el-table-column label="操作">
          <template #default="scope">
            <div>
              <el-button link type="primary">续费</el-button>
              <el-button link type="primary">查看</el-button>
              <el-button link type="primary" @click="editEvent(scope.row)">编辑</el-button>
              <el-button link type="primary" @click="delCard(scope.row.id)">删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page-container">
      <el-pagination
        layout="total, prev, pager, next"
        :total="carData?.total"
        :page-size="formInline.pageSize"
        :v-model:current-page="formInline.page"
        @current-change="currentChange"
      />
    </div>
    <!-- 添加楼宇 -->
    <el-dialog title="添加楼宇" width="580px">
      <!-- 表单接口 -->
      <div class="form-container">
        <!-- <el-form ref="addForm" :model="addForm" :rules="addFormRules">
          <el-form-item label="楼宇名称" prop="name">
            <el-input v-model="addForm.name" />
          </el-form-item>
          <el-form-item label="楼宇层数" prop="floors">
            <el-input v-model="addForm.floors" />
          </el-form-item>
          <el-form-item label="在管面积" prop="area">
            <el-input v-model="addForm.area" />
          </el-form-item>
          <el-form-item label="物业费" prop="propertyFeePrice">
            <el-input v-model="addForm.propertyFeePrice" />
          </el-form-item>
        </el-form> -->
      </div>
      <template #footer>
        <el-button size="mini">取 消</el-button>
        <el-button size="mini" type="primary">确 定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>
