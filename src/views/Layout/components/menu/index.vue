<script setup lang="ts">
import { useDynamicRouterStore, useSiderbarStore } from '@/stores'
import { onMounted, ref } from 'vue'

const siderbarStore = useSiderbarStore()

const dynamicRouterStore = useDynamicRouterStore()

onMounted(() => {})
</script>

<template>
  <div>
    <div>
      <a src="" href="#" class="flex gap-1 items-center justify-center h-12">
        <img
          class="w-9"
          src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png"
          alt=""
        />
        <h2 v-show="siderbarStore.isShowSiderbar" class="text-sm">Vue Element Admin</h2>
      </a>
    </div>
    <el-scrollbar>
      <el-menu
        class="el-menu-vertical-demo"
        :collapse="!siderbarStore.isShowSiderbar"
        :router="true"
      >
        <template v-for="(item, index) in dynamicRouterStore.curRouter" :key="index">
          <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 0">
            <template #title>
              <el-icon> <img :src="item.meta.icon" alt="" /> </el-icon>
              <span>{{ item.meta.title }}</span>
            </template>

            <el-menu-item
              :index="item.path + '/' + v.path"
              v-for="(v, u) in item.children"
              :key="u"
            >
              {{ v.meta.title }}
            </el-menu-item>
          </el-sub-menu>

          <el-menu-item :index="item.path" v-else>
            <el-icon> <img :src="item.icon" alt="" /> </el-icon>
            <span>{{ item.meta.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<style scoped>
.el-menu {
  border: 0 !important;
}
</style>
