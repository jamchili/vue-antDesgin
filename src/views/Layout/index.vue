<script setup lang="ts">
import Menu from './components/menu/index.vue'
import Header from './components/header/index.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"><Menu></Menu></el-aside>
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
