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
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchView.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('../views/TableView.vue')
  },
  {
    path: '/landingPage',
    name: 'landingPage',
    component: () => import('../views/LandingPage.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/MainLayout.vue')
  },
  {
    path: '/cut',
    name: 'cut',
    component: () => import('../views/CutView.vue')
  },
  // 會有優惠碼
  {
    path: '/buy',
    name: 'buy',
    component: () => import('../views/BuyPageView.vue')
  },
  {
    path: '/buy/:id',
    name: 'buy',
    component: () => import('../views/BuyPageView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
