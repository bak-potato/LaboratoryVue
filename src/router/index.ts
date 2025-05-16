import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/layouts/IndexLayout.vue'),
      children: [
        {
          path: '',
          name: 'index',
          component: () => import('@/views/index/IndexView.vue'),
        }
      ],
    },
    {
      path: '/',
      name: '',
      component: () => import('@/layouts/IndexLayout.vue'),
      children: [
        {
          path: 'software',
          name: 'software',
          component: () => import('@/views/software/SoftWare.vue'),
        },
        {
          path:'design',
          name:'design',
          component: () => import('@/views/design/DesignVue.vue'),
        }
      ],
    }
  ],
})

export default router
