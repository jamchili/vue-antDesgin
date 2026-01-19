<script setup lang="ts">
import { loginApi } from '@/api/user'
import type { FormInstance, FormRules } from 'element-plus'
import { ref } from 'vue'

//组件实例
const ruleFormRef = ref<FormInstance>()

const formData = ref({
  username: 'admin',
  password: 'admin123',
  remember: true
})

const login = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  const ok = await formEl.validate()

  if (ok) {
    const res = await loginApi({
      username: formData.value.username,
      password: formData.value.password
    })
    console.log('res', res.data.token)
  }
}

const rules: FormRules = {
  username: [{ required: true }],
  password: [{ required: true }]
}
</script>

<template>
  <div class="w-full h-[100vh] grid place-items-center">
    <div>
      <el-form ref="ruleFormRef" :rules="rules" :model="formData">
        <el-form-item label="账号" prop="username">
          <el-input v-model="formData.username" />
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password" />
        </el-form-item>

        <el-form-item>
          <el-checkbox v-model="formData.remember">记住我</el-checkbox>
        </el-form-item>

        <el-form-item>
          <el-button @click="login(ruleFormRef)" class="w-full" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
