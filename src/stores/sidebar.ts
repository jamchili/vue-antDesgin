import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSiderbarStore = defineStore('siderbar', () => {
  const isShowSiderbar = ref(true)

  const changeShowSiderbar = () => {
    isShowSiderbar.value = !isShowSiderbar.value
    console.log(isShowSiderbar.value);

  }



  return { isShowSiderbar, changeShowSiderbar }
}, {
  persist: true
})