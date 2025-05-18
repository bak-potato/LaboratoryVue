<!-- eslint-disable vue/block-lang -->
<script setup>
import { ref, onMounted } from 'vue'

// 滚动动画逻辑（复用 IndexView 实现）
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__fadeInUp')
      }
    })
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  })

  document.querySelectorAll('.project-section').forEach(section => {
    observer.observe(section)
  })
})

// 状态颜色映射
const statusColor = {
  active: 'green',
  developing: 'orange',
  completed: 'blue'
}

// 图片
import ljtc from '@/assets/index/ljtc.jpeg'
import fhxy from '@/assets/index/fhxy.png'

// 项目数据（可根据实际需求扩展）
const projectList = ref([
  {
    title: '临界拓池',
    image: ljtc,
    description: '专业线程池监控系统。实时监控、动态调参、及时预警，助力系统提升性能、优化资源、增强稳定性。',
    detailUrl: '/project/ljtc',
    tags: ['核心技术', '高可用'],
    status: 'active', // active/developing/completed
    date: '2023-2024'
  },
  {
    title: '智润田园',
    image: '@/assets/index/zrty-banner.png',
    description: '探索人工智能技术在农业领域的前沿应用，实现智慧农业数字化管理。',
    detailUrl: '/project/zrty',
    tags: ['AI应用', '农业'],
    status: 'active',
    date: '2023-2025'
  },
])

const scientificProjects = ref([
  {
    title: '临界拓池',
    image: ljtc,  // 使用实际图片路径
    description: '专业线程池监控系统。实时监控、动态调参、及时预警，助力系统提升性能、优化资源、增强稳定性。',
    detailUrl: '/project/ljtc',
    tags: ['核心技术', '高可用'],
    status: 'active',
    date: '2023-2025'
  },
  {
    title: '风花雪月',
    image: fhxy,
    description: '集成智能监控、自动化运维、多系统管理于一体，助力企业提升运维效率与数字化转型效能。',
    detailUrl: '/project/fhxy',
    tags: ['管理平台', '运维'],
    status: 'active',
    date: '2023-2025'
  }
])
const competitionProjects = ref([
  {
    title: '临界拓池',
    image: ljtc,  // 使用实际图片路径
    description: '专业线程池监控系统。实时监控、动态调参、及时预警，助力系统提升性能、优化资源、增强稳定性。',
    detailUrl: '/project/ljtc',
    tags: ['核心技术', '高可用'],
    status: 'active',
    date: '2023-2025'
  },
  {
    title: '风花雪月',
    image: fhxy,
    description: '集成智能监控、自动化运维、多系统管理于一体，助力企业提升运维效率与数字化转型效能。',
    detailUrl: '/project/fhxy',
    tags: ['管理平台', '运维'],
    status: 'active',
    date: '2023-2025'
  },
  {
    title: '智润田园',
    image: '@/assets/index/zrty-banner.png',
    description: '探索人工智能技术在农业领域的前沿应用，实现智慧农业数字化管理。',
    detailUrl: '/project/zrty',
    tags: ['AI应用', '农业'],
    status: 'active',
    date: '2023-2025'
  },
  {
    title: '星海韵梦',
    image: '@/assets/index/xhym-banner.png',  // 假设新增图片
    description: '基于深度学习的音乐创作辅助系统，支持智能旋律生成与风格迁移。',
    detailUrl: '/project/xhym',
    tags: ['AI应用', '农业'],
    status: 'active',
    date: '2023-2025'
  },
  {
    title: '智能题站',
    image: '@/assets/index/txyt-banner.png',  // 假设新增图片
    description: '计算机视觉驱动的天文图像分析系统，实现恒星识别与轨迹预测。',
    detailUrl: '/project/txyt',
    tags: ['AI应用', '农业'],
    status: 'active',
    date: '2023-2025'
  },
  {
    title: '推星予瞳',
    image: '@/assets/index/yxf-banner.png',  // 假设新增图片
    description: '基于深度学习的图像识别与分类系统，支持多模态数据处理与分析。',
    detailUrl: '/project/yxf',
    tags: ['AI应用', '农业'],
    status: 'active',
    date: '2023-2025'
  },
  {
    title: '智图分析',
    image: '@/assets/index/ztfx-banner.png',  // 假设新增图片
    description: '基于深度学习的图像识别与分类系统，支持多模态数据处理与分析。',
    detailUrl: '/project/ztfx',
    tags: ['AI应用', '农业'],
    status: 'active',
    date: '2023-2025'
  },
  {
    title: '调星破影',
    image: '@/assets/index/dxpy-banner.png',  // 假设新增图片
    description: '基于深度学习的图像识别与分类系统，支持多模态数据处理与分析。',
    detailUrl: '/project/dxpy',
    tags: ['AI应用', '农业'],
    status: 'active',
    date: '2023-2025'
  },
  {
    title: '慧流立方体',
    image: '@/assets/index/hldft-banner.png',  // 假设新增图片
    description: '基于深度学习的图像识别与分类系统，支持多模态数据处理与分析。',
    detailUrl: '/project/hldft',
    tags: ['AI应用', '农业'],
    status: 'active',
    date: '2023-2025'
  },
  {
    title: '数据银河',
    image: '@/assets/index/sjyh-banner.png',  // 假设新增图片
    description: '基于深度学习的图像识别与分类系统，支持多模态数据处理与分析。',
    detailUrl: '/project/sjyh',
    tags: ['AI应用', '农业'],
    status: 'active',
    date: '2023-2025'
  },
  {
    title: '低码未来',
    image: '@/assets/index/dmwl-banner.png',  // 假设新增图片
    description: '基于深度学习的图像识别与分类系统，支持多模态数据处理与分析。',
    detailUrl: '/project/dmwl',
    tags: ['AI应用', '农业'],
    status: 'active',
    date: '2023-2025'
  },
  {
    title: '代码神器',
    image: '@/assets/index/dmsq-banner.png',  // 假设新增图片
    description: '基于深度学习的图像识别与分类系统，支持多模态数据处理与分析。',
    detailUrl: '/project/dmsq',
    tags: ['AI应用', '农业'],
    status: 'active',
    date: '2023-2025'
  }
])

// 图片国际化（如果需要）
import zhCN from 'ant-design-vue/es/locale/zh_CN'
</script>

<template>
  <a-config-provider :locale="zhCN">
    <!-- 项目分类容器 -->
    <div class="section project-section animate-on-scroll">
      <h2 class="section-title">实验室项目总览</h2>
      <a-typography-paragraph class="section-subtitle">
        探索我们正在进行的创新项目和研究
      </a-typography-paragraph>

      <!-- 项目分类选项卡 -->
      <a-tabs default-active-key="1" class="project-tabs">
        <!-- 重点项目 -->
        <a-tab-pane key="1" tab="重点项目">
          <a-row :gutter="[24, 24]">
            <a-col :xs="24" :sm="12" :md="8" v-for="item in projectList" :key="item.title">
              <a-card hoverable class="project-card">
                <template #cover>
                  <div class="project-image-container">
                    <img :src="item.image" alt="项目封面" class="project-image" />
                    <a-tag :color="statusColor[item.status]" class="status-tag">
                      {{ item.status === 'active' ? '进行中' : item.status === 'developing' ? '开发中' : '已完成' }}
                    </a-tag>
                  </div>
                </template>
                <a-card-meta :title="item.title">
                  <template #description>
                    <div class="project-content">
                      <div class="project-meta">
                        <span class="project-date">{{ item.date }}</span>
                        <div class="project-tags">
                          <a-tag v-for="tag in item.tags" :key="tag">{{ tag }}</a-tag>
                        </div>
                      </div>
                      <a-typography-paragraph class="project-desc">
                        {{ item.description }}
                      </a-typography-paragraph>
                      <a-button type="primary" class="project-button" :href="item.detailUrl">
                        探索详情
                      </a-button>
                    </div>
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
          </a-row>
        </a-tab-pane>

        <!-- 科研类项目 -->
        <a-tab-pane key="2" tab="科研类项目">
          <a-row :gutter="[24, 24]">
            <a-col :xs="24" :sm="12" :md="8" v-for="item in scientificProjects" :key="item.title">
              <a-card hoverable class="project-card">
                <template #cover>
                  <div class="project-image-container">
                    <img :src="item.image" alt="项目封面" class="project-image" />
                    <a-tag :color="statusColor[item.status]" class="status-tag">
                      {{ item.status === 'active' ? '进行中' : item.status === 'developing' ? '开发中' : '已完成' }}
                    </a-tag>
                  </div>
                </template>
                <a-card-meta :title="item.title">
                  <template #description>
                    <div class="project-content">
                      <div class="project-meta">
                        <span class="project-date">{{ item.date }}</span>
                        <div class="project-tags">
                          <a-tag v-for="tag in item.tags" :key="tag">{{ tag }}</a-tag>
                        </div>
                      </div>
                      <a-typography-paragraph class="project-desc">
                        {{ item.description }}
                      </a-typography-paragraph>
                      <a-button type="primary" class="project-button" :href="item.detailUrl">
                        探索详情
                      </a-button>
                    </div>
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
          </a-row>
        </a-tab-pane>

        <!-- 竞赛类项目 -->
        <a-tab-pane key="3" tab="竞赛类项目">
          <a-row :gutter="[24, 24]">
            <a-col :xs="24" :sm="12" :md="8" v-for="item in competitionProjects" :key="item.title">
              <a-card hoverable class="project-card">
                <template #cover>
                  <div class="project-image-container">
                    <img :src="item.image" alt="项目封面" class="project-image" />
                    <a-tag :color="statusColor[item.status]" class="status-tag">
                      {{ item.status === 'active' ? '进行中' : item.status === 'developing' ? '开发中' : '已完成' }}
                    </a-tag>
                  </div>
                </template>
                <a-card-meta :title="item.title">
                  <template #description>
                    <div class="project-content">
                      <div class="project-meta">
                        <span class="project-date">{{ item.date }}</span>
                        <div class="project-tags">
                          <a-tag v-for="tag in item.tags" :key="tag">{{ tag }}</a-tag>
                        </div>
                      </div>
                      <a-typography-paragraph class="project-desc">
                        {{ item.description }}
                      </a-typography-paragraph>
                      <a-button type="primary" class="project-button" :href="item.detailUrl">
                        探索详情
                      </a-button>
                    </div>
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
          </a-row>
        </a-tab-pane>
      </a-tabs>
    </div>
  </a-config-provider>
</template>

<style scoped lang="less">
.section-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 32px;
}

.project-image-container {
  position: relative;
  height: 200px;

  .project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .status-tag {
    position: absolute;
    top: 12px;
    right: 12px;
    font-weight: bold;
  }
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  .project-date {
    color: #888;
    font-size: 13px;
  }

  .project-tags {
    display: flex;
    gap: 6px;

    .ant-tag {
      margin-right: 0;
      font-size: 12px;
    }
  }
}

.project-tabs {
  margin-top: 32px;

  :deep(.ant-tabs-nav) {
    margin-bottom: 32px;
    justify-content: center;

    .ant-tabs-tab {
      font-size: 16px;
      padding: 12px 24px;
      border-radius: 24px;
      transition: all 0.3s;
    }
  }
}

// 复用 IndexView 的核心样式（滚动动画、卡片悬停效果等）
.animate-on-scroll {
  opacity: 0;
  transition: opacity 0.3s;

  &.animate__animated {
    opacity: 1;
  }
}

.animate__animated {
  --animate-duration: 0.8s;
}

.section {
  padding: 64px 24px;
  max-width: 1200px;
  margin: 0 auto;

  &-title {
    text-align: center;
    margin-bottom: 32px;
    font-size: 28px;
    color: #1d2129;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: #1890ff;
      margin: 16px auto 0;
    }
  }

  .project-card {
    :deep(.ant-card) {
      &-meta {
        padding: 16px 20px;

        &-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 12px;
        }
      }

      &:hover {
        box-shadow: 0 6px 16px -4px rgba(0, 0, 0, 0.12);
        transform: translateY(-4px);
      }
    }

    .project-content {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .project-desc {
      color: #666;
      font-size: 14px;
      line-height: 1.6;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: 8px;
    }

    .project-button {
      align-self: flex-start;
      padding: 8px 20px;
      height: auto;
      font-weight: 500;
      transition: all 0.3s;

      &:hover {
        box-shadow: 0 4px 10px rgba(24, 144, 255, 0.3);
      }
    }
  }
}
</style>
