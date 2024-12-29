import { createRouter, createWebHistory } from 'vue-router'

const routes: Array<any> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 