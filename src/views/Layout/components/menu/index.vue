<script setup lang="ts">
import { useDynamicRouterStore, useSiderbarStore } from '@/stores'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
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
        <!-- 使用 transition 组件控制标题动画 -->
        <transition name="sidebar-title" mode="out-in">
          <h2
            v-if="siderbarStore.isShowSiderbar"
            key="title-show"
            class="text-base font-medium text-gray-800 flex-1 transition-all duration-300 ease-in-out whitespace-nowrap"
          >
            Vue Element Admin
          </h2>
        </transition>
      </a>
    </div>

    <el-scrollbar>
      <el-menu
        class="el-menu-vertical-demo"
        :collapse="!siderbarStore.isShowSiderbar"
        :router="true"
        :default-active="route.path"
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
<style lang="scss" scoped>
.menu-item-enter-active,
.menu-item-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  white-space: nowrap;
}

.menu-item-enter-from {
  opacity: 0;
  transform: translateX(-10px);
  max-width: 0;
}

.menu-item-enter-to {
  opacity: 1;
  transform: translateX(0);
  max-width: 200px;
}

.menu-item-leave-from {
  opacity: 1;
  transform: translateX(0);
  max-width: 200px;
}

.menu-item-leave-to {
  opacity: 0;
  transform: translateX(-5px);
  max-width: 0;
}

/* 覆盖 Element Plus 菜单样式以匹配动画 */
:deep(.el-menu) {
  border-right: 0px;
  background-color: transparent;
}

:deep(.el-menu-item.is-active) {
  background-color: #ecf5ff !important;
}

:deep(.el-menu--vertical) {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Logo 缩放动画增强 */
.w-9 {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}
</style>
