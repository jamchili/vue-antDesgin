<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { computed, onMounted, ref, toRaw } from 'vue'
import { normalRuleFn } from '@/rules'
import { payMethodList } from '@/views/utils/configs'
import { ElMessage, type FormInstance } from 'element-plus'
import type { createCardReq } from '@/types/user'
import { createCardAPI, getCardDetailAPI, parkUserRouterApi } from '@/api/user/car'

const router = useRouter()
const route = useRoute()

const carInfoFormRef = ref<FormInstance>()
const feeFormRef = ref<FormInstance>()

const carInfoForm = ref({
  personName: '', // 车主姓名
  phoneNumber: '', // 联系方式
  carNumber: '', // 车牌号码
  carBrand: '', // 车辆品牌
  carInfoId: ''
})

const feeForm = ref({
  payTime: [''], // 支付时间
  paymentAmount: '', // 支付金额
  paymentMethod: '',
  rechargeId: '' // 支付方式
})

const carInfoRules = normalRuleFn(toRaw(carInfoForm.value))
const feeFormRules = normalRuleFn(toRaw(feeForm.value))

const sumbit = async (a: FormInstance | undefined, b: FormInstance | undefined) => {
  if (!a && !b) return
  console.log(a, b)

  const okA = await a?.validate()
  const okB = await b?.validate()

  if (okA && okB) {
    await sumbitFrom()
  }
}

const sumbitFrom = async () => {
  const payload: createCardReq = {
    ...carInfoForm.value,
    ...feeForm.value,
    // 单独处理时间
    cardStartDate: feeForm.value.payTime[0]!,
    cardEndDate: feeForm.value.payTime[1]!
  }
  delete payload.payTime

  let msg: string
  if (isQuery.value) {
    console.log('编辑', payload)

    msg = (await parkUserRouterApi(payload)).msg!
  } else {
    msg = (await createCardAPI(payload)).msg!
  }

  ElMessage.success(msg)
  router.back()
}

const isQuery = computed(() => {
  return !!route.query.id
})

onMounted(async () => {
  if (isQuery.value) {
    const res = await getCardDetailAPI(route.query.id as string)
    const {
      personName,
      phoneNumber,
      carNumber,
      carBrand,
      cardStartDate,
      cardEndDate,
      paymentAmount,
      paymentMethod,
      carInfoId,
      rechargeId
    } = res.data as createCardReq
    carInfoForm.value = {
      personName,
      phoneNumber,
      carNumber,
      carBrand,
      carInfoId
    }
    feeForm.value = {
      paymentAmount,
      paymentMethod,
      rechargeId,
      payTime: [cardStartDate, cardEndDate]
    }
  }
})
</script>

<template>
  <div class="min-h-screen flex flex-col w-full">
    <!-- 头部 -->
    <header class="p-4">
      <el-page-header
        :content="isQuery ? '编辑月卡' : '增加月卡'"
        @back="router.back()"
        class="max-w-7xl mx-auto"
      />
    </header>
    <!-- 车辆信息 -->
    <main class="flex-auto bg-[#f4f6f8]">
      <div class="w-9/12 mx-auto">
        <div class="bg-nav-bg my-4">
          <h2 class="py-4 px-4 pt-4 border-b-[1px] border-bt">车辆信息</h2>
          <div class="p-6">
            <el-form
              :rules="carInfoRules"
              :model="carInfoForm"
              ref="carInfoFormRef"
              class="grid lg:grid-cols-2 gap-2 grid-cols-1"
            >
              <el-form-item label="车主姓名" prop="personName">
                <el-input v-model="carInfoForm.personName" />
              </el-form-item>
              <el-form-item label="联系方式" prop="phoneNumber">
                <el-input v-model="carInfoForm.phoneNumber" />
              </el-form-item>
              <el-form-item label="车辆号码" prop="carNumber">
                <el-input v-model="carInfoForm.carNumber" />
              </el-form-item>
              <el-form-item label="车辆品牌" prop="carBrand">
                <el-input v-model="carInfoForm.carBrand" />
              </el-form-item>
            </el-form>
          </div>
        </div>

        <div class="bg-nav-bg my-4">
          <h2 class="py-4 px-4 pt-4 border-b-[1px] border-bt">最近一次月卡缴费信息</h2>
          <div class="p-6">
            <el-form
              :model="feeForm"
              :rules="feeFormRules"
              ref="feeFormRef"
              class="grid lg:grid-cols-2 gap-2 grid-cols-1"
            >
              <el-form-item label="有效日期" prop="payTime">
                <el-date-picker
                  v-model="feeForm.payTime"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                />
              </el-form-item>
              <el-form-item label="支付金额" prop="paymentAmount">
                <el-input v-model="feeForm.paymentAmount" />
              </el-form-item>
              <el-form-item label="支付方式" prop="paymentMethod">
                <el-select v-model="feeForm.paymentMethod">
                  <el-option
                    v-for="item in payMethodList"
                    :key="item.id"
                    :value="item.id"
                    :label="item.name"
                  />
                </el-select>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </main>
    <footer class="px-4 py-6 flex items-center justify-center gap-6">
      <el-button>重置</el-button>
      <el-button type="primary" @click="sumbit(carInfoFormRef, feeFormRef)">确定</el-button>
    </footer>
  </div>
</template>

<style></style>
