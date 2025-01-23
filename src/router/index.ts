import { createRouter, createWebHistory } from 'vue-router'

const routes: Array<any> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home/Home.vue')
  },
  {
    path: '/houDuan',
    name: 'HouDuan',
    component: () => import('../components/Home/Home.vue')
  },
  {
    path: '/qianDuan',
    name: 'QianDuan',
    component: () => import('../views/QianDuan/index.vue')
  },
  {
    path: '/tools',
    name: 'Tool',
    component: () => import('../components/Home/Home.vue')
  },
  {
    path: '/log',
    name: 'Log',
    component: () => import('../components/Home/Home.vue')
  },
  {
    path: '/board',
    name: 'Board',
    component: () => import('../components/Home/Home.vue')
  },
  {
    path: '/other',
    name: 'Other',
    component: () => import('../components/Home/Home.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
