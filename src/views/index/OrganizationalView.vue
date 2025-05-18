<!-- eslint-disable vue/block-lang -->
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
// 新增跳转方法
const navigate = (url) => {
  if (url) router.push(url)
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__fadeInUp')
      }
    })
  }, {
    threshold: 0.2, // 元素20%进入视口时触发
    rootMargin: '0px 0px -50px 0px' // 底部边界提前50px触发
  })

  // 观察所有带 animate-on-scroll 类的区块
  document.querySelectorAll('.animate-on-scroll').forEach(section => {
    observer.observe(section)
  })
})

// 组织结构数据
const orgStructure = ref([
  {
    title: '创新创业部',
    description: '负责创新项目孵化、创业指导、竞赛组织等工作',
    memberCount: 1,
    url: '/introduction',
  },
  {
    title: '软件部',
    description: '负责软件开发、技术研究、项目实践等工作',
    memberCount: 10,
    url: '/software',
    children: [
      { title: '前端组', role: 'Web界面开发', url: '/software/web', },
      { title: '后端组', role: '服务端架构设计', url: '/software/backend', },
      { title: '运维组', role: '系统部署维护', url: '/software/ops', },
      { title: '测试组', role: '质量保障', url: '/software/test', },
      { title: 'AI组', role: 'AI技术研究', url: '/software/ai', },
    ]
  },
  {
    title: '硬件部',
    description: '负责硬件设备设计、系统开发、项目实施等工作',
    memberCount: 2,
    url: '/hardware',
  },
  {
    title: '设计部',
    description: '负责视觉设计、用户体验等工作',
    memberCount: 3,
    url: '/copywriting',
  },
  {
    title: '文案部',
    description: '负责项目文案撰写、宣传推广等工作',
    memberCount: 2,
    url: '/design',
  }
])
</script>

<template>
  <div class="org-container">
    <!-- 部门概览 -->
    <div class="section animate-on-scroll">
      <h2 class="section-title">组织架构</h2>
      <a-row :gutter="[24, 24]">
        <a-col :xs="24" :sm="12" :md="8" v-for="(dept, index) in orgStructure" :key="index">
          <a-card hoverable class="dept-card">
            <template #title>
              <div class="dept-title" @click="navigate(dept.url)">{{ dept.title }}</div>
            </template>
            <template #extra>
              <a-tag color="blue">{{ dept.memberCount }}人</a-tag>
            </template>

            <div class="dept-content">
              <p class="dept-desc">{{ dept.description }}</p>
              <a-divider dashed />
              <div class="sub-groups">
                <div v-for="(group, gIndex) in dept.children" :key="gIndex" class="group-item"
                  @click="navigate(group.url)">
                  <div class="group-title">{{ group.title }}</div>
                  <div class="group-role">{{ group.role }}</div>
                </div>
              </div>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>

    <!-- 完整架构图 -->
    <div class="section full-structure animate-on-scroll">
      <h2 class="section-title">完整架构体系</h2>
      <a-card>
        <div class="structure-tree">
          <div v-for="dept in orgStructure" :key="dept.title" class="org-node">
            <div class="node-main">{{ dept.title }}</div>
            <div class="node-children">
              <div v-for="group in dept.children" :key="group.title" class="child-node">
                {{ group.title }}
              </div>
            </div>
          </div>
        </div>
      </a-card>
    </div>
  </div>
</template>

<style scoped lang="less">
.org-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 16px;
  /* 增加左右小内边距提升移动端体验 */

  .section-title {
    color: #1890ff;
    border-left: 4px solid #1890ff;
    padding-left: 12px;
    margin-bottom: 32px;
    font-size: 24px;
    font-weight: 600;
    /* 标题加粗更突出 */
  }

  .dept-card {
    border-radius: 12px;
    transition: transform 0.3s, box-shadow 0.3s;
    height: 100%;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 6px 18px rgba(24, 144, 255, 0.15);
    }

    .dept-title {
      font-size: 20px;
      font-weight: 600;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }

    .dept-content {
      padding: 16px;

      .dept-desc {
        color: #444;
        line-height: 1.7;
        margin-bottom: 16px;
      }

      .sub-groups {
        display: grid;
        gap: 10px;

        .group-item {
          padding: 10px 12px;
          background: #f0f6ff;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s;

          &:hover {
            background: #e6f4ff;
          }

          .group-title {
            font-weight: 500;
            margin-bottom: 4px;
            color: #1890ff;
          }

          .group-role {
            color: #666;
            font-size: 13px;
          }
        }
      }
    }
  }

  .full-structure {
    margin-top: 64px;

    .structure-tree {
      display: flex;
      justify-content: center;
      gap: 40px;
      padding: 32px 16px;

      .org-node {
        text-align: center;

        .node-main {
          padding: 14px 24px;
          background: #1890ff;
          color: #fff;
          border-radius: 8px;
          margin-bottom: 20px;
          font-size: 18px;
          font-weight: 500;
          box-shadow: 0 2px 8px rgba(24, 144, 255, 0.2);
        }

        .node-children {
          display: flex;
          flex-direction: column;
          gap: 8px;

          .child-node {
            padding: 6px 12px;
            background: #e6f4ff;
            border-radius: 6px;
            transition: all 0.3s;
            font-size: 14px;

            &:hover {
              background: #bae0ff;
              transform: translateX(6px);
              box-shadow: 0 2px 4px rgba(24, 144, 255, 0.15);
            }
          }
        }
      }
    }
  }

  .animate-on-scroll {
    opacity: 0;
    transition: opacity 0.3s;
  }

  .animate-on-scroll.animate__animated {
    opacity: 1;
  }

  .animate__animated {
    --animate-duration: 0.8s;
  }
}
</style>
