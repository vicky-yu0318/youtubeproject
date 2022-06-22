import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/',
    name: 'index',
    component: () => import('../views/IndexView.vue')
  },
  {
    path: '/chart',
    name: 'chart',
    component: () => import('../views/ChartView.vue')
  },
  {
    path: '/AModal',
    name: 'AModal',
    component: () => import('../views/AModalView.vue')
  },
  {
    path: '/BModal',
    name: 'BModal',
    component: () => import('../views/BModalView.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/FormView.vue')
  },
  {
    path: '/form-pratice',
    name: 'form-pratice',
    component: () => import('../views/PracticeForm.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
