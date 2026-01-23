
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
    path: '/car',
    component: Layout,
    meta: { title: '行车管理', icon: 'el-icon-guide' },
    children: [{
      path: 'area',
      component: () => import('@/views/Car/CarArea/index.vue'),
      meta: { title: '区域管理' }
    }, {
      path: 'monthCard',
      component: () => import('@/views/Car/CarCard/index.vue'),
      meta: { title: '月卡管理' }
    }, {
      path: 'pay',

      component: () => import('@/views/Car/CarPay/index.vue'),
      meta: { title: '停车缴费管理' }
    },
    {
      path: 'billing',
      component: () => import('@/views/Car/CarRule/index.vue'),
      meta: { title: '计费规则管理' }
    }]
  },
  {
    path: '/cardAdd',
    component: () => import('@/views/Car/CarCard/add-card.vue')
  }
  ],
})



export default router






