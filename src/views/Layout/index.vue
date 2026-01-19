<script setup lang="ts">
import Menu from './components/menu/index.vue'
import Header from './components/header/index.vue'
import { useSiderbarStore } from '@/stores'

const siderbarStore = useSiderbarStore()
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="siderbarStore.isShowSiderbar ? '200px' : 'auto'"> <Menu></Menu></el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.el-header {
  padding: 0px;
}
</style>
