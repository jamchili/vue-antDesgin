<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.matched)

const breadCrumbList = ref()

const initBreadCrumblist = () => {
  breadCrumbList.value = route.matched
}

watch(
  route,
  () => {
    initBreadCrumblist()
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<template>
  <div>
    <el-breadcrumb>
      <!-- <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item> -->

      <el-breadcrumb-item v-for="(item, index) in breadCrumbList" :key="index">{{
        item.meta.title
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<style lang="scss" scoped></style>
