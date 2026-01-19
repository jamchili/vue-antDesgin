<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'

import { useSiderbarStore } from '@/stores'

const siderbarStore = useSiderbarStore()
</script>

<template>
  <!-- 顶部nav -->
  <div class="flex items-center h-12">
    <div class="flex-1 flex items-center gap-4">
      <CpIcon
        @click="siderbarStore.changeShowSiderbar"
        class="pl-2 text-3xl"
        name="hamburger"
      ></CpIcon>
      <div>
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item>promotion management</el-breadcrumb-item>
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div>112</div>
  </div>
  <!-- tag栏 -->
</template>
<style lang="scss" scoped>
.is-active {
  transform: rotate(360deg);
}
</style>
