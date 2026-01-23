<script setup lang="ts">
import { useSiderbarStore } from '@/stores'
import { useRoute, useRouter } from 'vue-router'
import Breadcrumb from './breadcrumb.vue'

const siderbarStore = useSiderbarStore()
</script>

<template>
  <!-- 顶部nav -->
  <div class="flex items-center h-12 w-full">
    <div class="flex-1 flex items-center gap-4">
      <CpIcon
        @click="siderbarStore.changeShowSiderbar"
        class="pl-2 text-3xl"
        name="hamburger"
      ></CpIcon>
      <div><Breadcrumb></Breadcrumb></div>
    </div>
    <div class="lg:block hidden">promotion managementpromotion</div>
  </div>
  <!-- tag栏 -->
</template>
<style lang="scss" scoped>
.is-active {
  transform: rotate(360deg);
}
</style>
