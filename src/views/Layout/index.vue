<script setup lang="ts">
import Menu from './components/menu/index.vue'
import Header from './components/header/index.vue'
import { useSiderbarStore } from '@/stores'

const siderbarStore = useSiderbarStore()
</script>

<template>
  <div>
    <el-container class="layout-container-demo">
      <el-aside :width="siderbarStore.isShowSiderbar ? '200px' : 'auto'"> <Menu></Menu></el-aside>
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
/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.layout-container-demo {
  height: 100vh;
}

.layout-container-demo .el-menu {
  border-right: none;
}
</style>
