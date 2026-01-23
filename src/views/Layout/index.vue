<script setup lang="ts">
import Menu from './components/menu/index.vue'
import Header from './components/header/index.vue'
import { useSiderbarStore } from '@/stores'
import { onMounted, onUnmounted, ref, watch } from 'vue'

const siderbarStore = useSiderbarStore()

const isMobile = ref(false)

// 检测屏幕尺寸
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768 // md breakpoint
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

// 移动端自动收起侧边栏
watch(isMobile, newVal => {
  if (newVal && siderbarStore.isShowSiderbar) {
    siderbarStore.changeShowSiderbar()
  }
})
</script>

<template>
  <div>
    <el-container class="layout-container-demo">
      <el-container
        v-show="isMobile && siderbarStore.isShowSiderbar"
        @click="siderbarStore.changeShowSiderbar()"
      >
        <div class="w-full h-full bg-color opacity-80 fixed z-10">123</div>
      </el-container>
      <el-aside
        :class="[
          'transition-all duration-300 ease-in-out',
          'z-50 md:z-auto',
          isMobile ? 'fixed inset-y-0 left-0 transform z-30' : 'relative',
          isMobile && !siderbarStore.isShowSiderbar ? '-translate-x-full' : 'translate-x-0'
        ]"
        class="h-full bg-nav-bg"
        :width="siderbarStore.isShowSiderbar ? '200px' : 'auto'"
      >
        <Menu></Menu
      ></el-aside>
      <el-container>
        <el-header class="backdrop-blur-sm">
          <Header></Header>
        </el-header>
        <el-main> <router-view /> </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.layout-container-demo {
  height: 100vh;
}
</style>
