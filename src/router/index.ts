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
        },
        {
          path: 'software',
          name: 'software',
          component: () => import('@/views/software/SoftWare.vue'),
        },
        // 相关成员
        {
          path:'design',
          name:'design',
          component: () => import('@/views/design/DesignVue.vue'),
        },
        {
          path: 'member',
          name: 'member',
          component: () => import('@/views/index/MemberView.vue'),
        },
      ],
    },
  ],
})

export default router
