import { loginApi, parkUserProfileApi } from "@/api/user"
import type { loginReq, loginRes } from "@/types/user"
import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useUserStore = defineStore('user', () => {
  // 定义用户信息接口


  // 提供初始值
  const userInfo = ref<loginRes>({
    token: ''
  })


  const userProfile = ref()


  //获取用户信息
  const getUserProfile = async () => {
    const res = await parkUserProfileApi()
    userProfile.value = res.data
    return res.data
  }



  // 批量更新用户信息
  const setUserInfo = async (val: loginReq) => {
    const res = await loginApi(val)
    userInfo.value = res.data
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


  const getToken = computed(() => {
    return userInfo.value.token
  })

  return {
    userInfo,
    setUserInfo,
    clearUserInfo,
    isLoggedIn,
    getToken,
    getUserProfile,
    userProfile
  }
}, {
  persist: {
    pick: ['userInfo']
  },
})