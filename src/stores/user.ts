import { loginApi } from "@/api/user"
import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useUserStore = defineStore('user', () => {
  // 定义用户信息接口
  interface UserInfo {
    token: string

  }

  // 提供初始值
  const userInfo = ref<UserInfo>({
    token: ''
  })



  // 批量更新用户信息
  const setUserInfo = async (val) => {
    const res = await loginApi(val)
    console.log('res', res)
  }

  // 清空用户信息
  const clearUserInfo = () => {
    userInfo.value = {
      token: ''
    }
  }

  // 是否登录（计算属性）
  const isLoggedIn = computed(() => {
    return !!userInfo.value.token
  })

  return {
    userInfo,
    setUserInfo,
    clearUserInfo,
    isLoggedIn
  }
}, {
  persist: true
})