
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/login', component: () => import('@/views/Login/index.vue'),

  },
  {
    path: '/', component: () => Layout,

  },
  {
    path: '/workbench',
    component: Layout,
    children: [{
      path: '', // 地址为空
      name: 'workbench',
      component: () => import('@/views/workbench/index.vue'),
      meta: { title: '工作台', icon: 'el-icon-eleme' }
    }]
  },
  {
    path: '/park',
    component: Layout,
    meta: { title: '园区管理', icon: 'el-icon-office-building' },
    children: [{
      path: 'building',
      meta: { title: '楼宇管理' },
      component: () => import('@/views/Park/Building/index.vue')
    },
    {
      path: 'enterprise',
      meta: { title: '企业管理' },
      component: () => import('@/views/Park/Enterprise/index.vue')
    }]
  },
  ],
})



export default router






