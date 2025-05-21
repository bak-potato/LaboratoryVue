import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: { title: '大学生创新创业实验室-欢迎来到我们的官网' },
      component: () => import('@/layouts/IndexLayout.vue'),
      children: [
        {
          path: '',
          name: 'index',
          component: () => import('@/views/index/IndexView.vue'),
        },
        // 组织架构
        {
          path: 'organizational',
          name: 'Organizational',
          component: () => import('@/views/index/OrganizationalView.vue'),
        },
          // 软件部
        {
          path: 'software',
          name: 'software',
          component: () => import('@/views/software/SoftWare.vue'),
        },
        {
          path:'software/members',
          name:'softwaremembers',
          component: () => import('@/views/software/SoftWareMember.vue'),
        },
        {
          path:'software/web',
          name:'SoftwareWeb',
          component: () => import('@/views/software/SoftwareWeb.vue'),
        }
        ,
        {
          path: 'software/ops',
          name: 'softwareops',
          component: () => import('@/views/software/SoftwareOps.vue'),
        },
        {
          path: 'software/test',
          name: 'softwaretest',
          component: () => import('@/views/software/SoftwareTest.vue'),
        },
        {
          path: 'software/ai',
          name: 'softwareai',
          component: () => import('@/views/software/SoftwareAI.vue'),
        },
            //前端
        {
          path:'software/web',
          name:'SoftwareWeb',
          component: () => import('@/views/software/SoftwareWeb.vue'),
        },
          // 设计部
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
          // 文案部
        {
          path:'copywriting/members',
          name:'copywritingmembers',
          component: () => import('@/views/copywriting/CopyWritingMember.vue'),
        },
        {
          path:'copywriting',
          name:'copywriting',
          component: () => import('@/views/copywriting/CopyWriting.vue'),
        },
          // 硬件部
        {

          path:'hardware',
          name:'hardware',
          component: () => import('@/views/hardware/HardwareVue.vue'),
        },
        {
          path:'software/backend',
          name:'SoftWarebackend',
          component: () => import('@/views/software/SoftWarebackend.vue'),
        },
        {
          path:'hardware/members',
          name:'hardwaremembers',
          component: () => import('@/views/hardware/HardwareMember.vue'),
        },
          // 创新创业部
        {
          path:'introduction',
          name:'introduction',
          component: () => import('@/views/business/BusinessVue.vue'),
        },
        // 关于实验室
        {
          path:'about',
          name:'about',
          meta: { title: '大学生创新创业实验室-关于实验室' },
          component: () => import('@/layouts/AboutLayout.vue'),
          children: [
            {
              path:'',
              name:'AboutIndex',
              component: () => import('@/views/about/AboutIndex.vue'),
            },
            {
              path:'contact',
              name:'AboutContact',
              component: () => import('@/views/about/AboutContact.vue'),
            },
            {
              path:'profile',
              name:'AboutProfile',
              component: () => import('@/views/about/AboutProfile.vue'),
            }
          ]
        },
        // 相关成员
        {
          path: 'member',
          name: 'member',
          component: () => import('@/views/index/MemberView.vue'),
        },
        // 项目
        {
          path:'project',
          name:'project',
          component: () => import('@/views/index/ProjectView.vue'),
        },
        {
          path: 'introduction/members',
          name: 'introductionmembers',
          component: () => import('@/views/software/IntroductionMembers.vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  next()
})

export default router
