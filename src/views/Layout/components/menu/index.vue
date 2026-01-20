<script setup lang="ts">
import { parkUserRouterApi } from '@/api/user'
import { useSiderbarStore } from '@/stores'
import { onMounted, ref } from 'vue'

const siderbarStore = useSiderbarStore()

const menuList = ref()

const getMenuList = async () => {
  const res = await parkUserRouterApi()
  menuList.value = res.data
}

onMounted(() => {
  getMenuList()
})
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
        <template v-for="(item, index) in menuList" :key="index">
          <el-sub-menu :index="item.component" v-if="item.children && item.children.length > 0">
            <template #title>
              <el-icon> <img :src="item.icon" alt="" /> </el-icon>
              <span>{{ item.title }}</span>
            </template>

            <el-menu-item :index="v.component" v-for="(v, u) in item.children" :key="u">
              {{ v.title }}
            </el-menu-item>
          </el-sub-menu>

          <el-menu-item :index="item.component" v-else>
            <el-icon> <img :src="item.icon" alt="" /> </el-icon>
            <span>{{ item.title }}</span>
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
