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
        // 关于实验室
        {
          path:'about',
          name:'about',
          component: () => import('@/layouts/AboutLayout.vue'),
          children: [
            {
              path:'',
              name:'AboutIndex',
              component: () => import('@/views/about/AboutIndex.vue'),
            },
          ]
        },
        {
          path: 'software',
          name: 'software',
          component: () => import('@/views/software/SoftWare.vue'),
        },
        {
          path:'design',
          name:'design',
          component: () => import('@/views/design/DesignVue.vue'),

        },
        {
          path:'design/members',
          name:'designmembers',
          component: () => import('@/views/design/DesignMember.vue'),
        },
        {
          path:'copywriting/members',
          name:'copywritingmembers',
          component: () => import('@/views/copywriting/CopyWritingMember.vue'),
        },
        {
          path:'copywriting',
          name:'copywriting',
          component: () => import('@/views/copywriting/CopyWriting.vue'),
        },{

          path:'hardware',
          name:'hardware',
          component: () => import('@/views/hardware/HardwareVue.vue'),
        },
        {
          path:'hardware/members',
          name:'hardwaremembers',
          component: () => import('@/views/hardware/HardwareMember.vue'),
        },
        // 相关成员
        {
          path: 'member',
          name: 'member',
          component: () => import('@/views/index/MemberView.vue'),
        },
        {
          path:'software',
          name:'software',
          component: () => import('@/views/software/SoftWare.vue'),
        },
        {
          path:'software/members',
          name:'softwaremembers',
          component: () => import('@/views/software/SoftWareMember.vue'),
        }
      ],
    },
  ],
})

export default router
