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
    component: () => import(/* webpackChunkName: "about" */ '../views/IndexView.vue')
  },
  {
    path: '/chart',
    name: 'chart',
    component: () => import(/* webpackChunkName: "about" */ '../views/ChartView.vue')
  },
  {
    path: '/AModal',
    name: 'AModal',
    component: () => import(/* webpackChunkName: "about" */ '../views/AModalView.vue')
  },
  {
    path: '/BModal',
    name: 'BModal',
    component: () => import(/* webpackChunkName: "about" */ '../views/BModalView.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import(/* webpackChunkName: "about" */ '../views/FormView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
