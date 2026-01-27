import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDynamicRouterStore = defineStore('dynamicRouter', () => {
  const curRouter = ref()


  const addCurRouter = (asyncRoutes) => {
    curRouter.value = [...asyncRoutes]
  }

  return { curRouter, addCurRouter }
}, {
  persist: true
})

