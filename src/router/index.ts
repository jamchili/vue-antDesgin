
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'


export const routes = [

  {
    path: '/login', component: () => import('@/views/Login/index.vue'),

  },
  {
    path: '/',
    redirect: '/workbench',
    component: () => Layout,
    children: [
      {
        path: "/",
        component: () => import('@/views/workbench/index.vue')
      }
    ]

  },
  {
    path: '/cardAdd',
    component: () => import('@/views/Car/CarCard/add-card.vue')
  },
  {
    path: '/roleAdd',
    component: () => import('@/views/System/permission/AddRole.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404.vue')
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})





export default router






