<!-- eslint-disable vue/block-lang -->
<script setup>
import { ref, onMounted, computed } from 'vue'

// 滚动动画逻辑
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

  document.querySelectorAll('.animate-trigger').forEach(section => {
    observer.observe(section)
  })

  // 为项目卡片添加交错动画效果
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('visible');
    }, 100 * index);
  });
})

// 状态颜色映射
const statusColor = {
  active: 'green',
  developing: 'orange',
  completed: 'blue',
  planned: 'purple'
}

// 状态文本映射
const statusText = {
  active: '进行中',
  developing: '开发中',
  completed: '已完成',
  planned: '规划中'
}

// 图片导入
import ljtc from '@/assets/index/ljtc.jpeg'
import fhxy from '@/assets/index/fhxy.png'

// 重点项目数据
const projectList = ref([
  {
    title: '临界拓池',
    image: ljtc,
    description: '专业线程池监控系统。实时监控、动态调参、及时预警，助力系统提升性能、优化资源、增强稳定性。',
    detailUrl: '/project/ljtc',
    tags: ['核心技术', '高可用', '监控系统'],
    status: 'active',
    date: '2023-2024',
    progress: 85,
    team: ['张教授', '李博士', '王研究员'],
    highlights: [
      '线程实时状态可视化',
      '自适应参数调优',
      '系统性能瓶颈预测'
    ]
  },
  {
    title: '智润田园',
    image: '@/assets/index/zrty-banner.png',
    description: '探索人工智能技术在农业领域的前沿应用，实现智慧农业数字化管理。通过传感器网络、机器学习算法优化农作物生长环境。',
    detailUrl: '/project/zrty',
    tags: ['AI应用', '农业', '物联网'],
    status: 'active',
    date: '2023-2025',
    progress: 65,
    team: ['陈教授', '赵博士', '钱研究员'],
    highlights: [
      '作物生长智能分析',
      '农业资源优化分配',
      '产量预测模型构建'
    ]
  },
  {
    title: '数据湖平台',
    image: '@/assets/index/sjh-banner.png',
    description: '企业级数据湖解决方案，实现数据统一存储、处理与分析。支持多源异构数据接入，提供完整数据治理能力。',
    detailUrl: '/project/sjh',
    tags: ['大数据', '数据治理', '云原生'],
    status: 'developing',
    date: '2024-2025',
    progress: 40,
    team: ['吴教授', '孙博士', '周研究员'],
    highlights: [
      '分布式存储架构',
      '数据血缘追踪',
      '自动化数据质量控制'
    ]
  },
])

// 科研类项目
const scientificProjects = ref([
  {
    title: '临界拓池',
    image: ljtc,
    description: '专业线程池监控系统。实时监控、动态调参、及时预警，助力系统提升性能、优化资源、增强稳定性。',
    detailUrl: '/project/ljtc',
    tags: ['核心技术', '高可用', '监控系统'],
    status: 'active',
    date: '2023-2025',
    progress: 85,
    publications: ['IEEE Transactions on Cloud Computing', 'ACM SIGOPS'],
    patents: 2
  },
  {
    title: '风花雪月',
    image: fhxy,
    description: '集成智能监控、自动化运维、多系统管理于一体，助力企业提升运维效率与数字化转型效能。',
    detailUrl: '/project/fhxy',
    tags: ['管理平台', '运维', '自动化'],
    status: 'active',
    date: '2023-2025',
    progress: 70,
    publications: ['Journal of Network and Systems Management'],
    patents: 1
  },
  {
    title: '量子计算仿真',
    image: ljtc,
    description: '开发高效量子计算仿真环境，支持多种量子算法验证与测试，为未来量子计算研究奠定基础。',
    detailUrl: '/project/lzjs',
    tags: ['量子计算', '算法研究', '高性能计算'],
    status: 'developing',
    date: '2024-2026',
    progress: 30,
    publications: ['Quantum Information Processing'],
    patents: 0
  },
  {
    title: '分布式边缘计算',
    image: fhxy,
    description: '研究边缘计算环境下的分布式系统协同机制，解决低延迟、高可靠性计算问题。',
    detailUrl: '/project/fbsyj',
    tags: ['边缘计算', '分布式系统', '网络优化'],
    status: 'planned',
    date: '2024-2026',
    progress: 10,
    publications: [],
    patents: 0
  }
])

// 竞赛类项目
const competitionProjects = ref([
  {
    title: '临界拓池',
    image: ljtc,
    description: '专业线程池监控系统。实时监控、动态调参、及时预警，助力系统提升性能、优化资源、增强稳定性。',
    detailUrl: '/project/ljtc',
    tags: ['核心技术', '高可用', '监控系统'],
    status: 'active',
    date: '2023-2025',
    progress: 85,
    awards: ['全国软件创新大赛一等奖', '互联网+大学生创新创业大赛金奖'],
    team: ['张教授', '李博士', '王研究员']
  },
  {
    title: '风花雪月',
    image: fhxy,
    description: '集成智能监控、自动化运维、多系统管理于一体，助力企业提升运维效率与数字化转型效能。',
    detailUrl: '/project/fhxy',
    tags: ['管理平台', '运维', '自动化'],
    status: 'active',
    date: '2023-2025',
    progress: 70,
    awards: ['挑战杯大学生课外学术科技作品竞赛特等奖'],
    team: ['陈教授', '赵博士', '钱研究员']
  },
  {
    title: '智润田园',
    image: ljtc,
    description: '探索人工智能技术在农业领域的前沿应用，实现智慧农业数字化管理。',
    detailUrl: '/project/zrty',
    tags: ['AI应用', '农业', '物联网'],
    status: 'active',
    date: '2023-2025',
    progress: 65,
    awards: ['中国高校计算机大赛二等奖'],
    team: ['吴教授', '孙博士', '周研究员']
  },
  {
    title: '星海韵梦',
    image: fhxy,
    description: '基于深度学习的音乐创作辅助系统，支持智能旋律生成与风格迁移。',
    detailUrl: '/project/xhym',
    tags: ['AI应用', '音乐生成', '深度学习'],
    status: 'active',
    date: '2023-2025',
    progress: 60,
    awards: ['全国人工智能创新大赛三等奖'],
    team: ['郑教授', '冯博士', '杨研究员']
  },
  {
    title: '智能题站',
    image: '@/assets/index/txyt-banner.png',
    description: '计算机视觉驱动的天文图像分析系统，实现恒星识别与轨迹预测。',
    detailUrl: '/project/txyt',
    tags: ['计算机视觉', '天文', '图像处理'],
    status: 'completed',
    date: '2022-2024',
    progress: 100,
    awards: ['中国国际"互联网+"大学生创新创业大赛铜奖'],
    team: ['沈教授', '韩博士', '刘研究员']
  },
  {
    title: '推星予瞳',
    image: '@/assets/index/yxf-banner.png',
    description: '基于深度学习的图像识别与分类系统，支持多模态数据处理与分析。',
    detailUrl: '/project/yxf',
    tags: ['深度学习', '图像识别', '多模态'],
    status: 'active',
    date: '2023-2025',
    progress: 75,
    awards: ['中国高校大数据挑战赛一等奖'],
    team: ['黄教授', '金博士', '马研究员']
  },
  {
    title: '智图分析',
    image: '@/assets/index/ztfx-banner.png',
    description: '基于深度学习的图像识别与分类系统，支持多模态数据处理与分析。',
    detailUrl: '/project/ztfx',
    tags: ['图像分析', '机器学习', '数据挖掘'],
    status: 'developing',
    date: '2024-2025',
    progress: 35,
    awards: [],
    team: ['董教授', '程博士', '胡研究员']
  },
  {
    title: '调星破影',
    image: '@/assets/index/dxpy-banner.png',
    description: '基于深度学习的图像识别与分类系统，支持多模态数据处理与分析。',
    detailUrl: '/project/dxpy',
    tags: ['图像处理', '计算机视觉', 'AR技术'],
    status: 'active',
    date: '2023-2025',
    progress: 55,
    awards: ['全国大学生电子设计竞赛二等奖'],
    team: ['谢教授', '唐博士', '梁研究员']
  },
  {
    title: '慧流立方体',
    image: '@/assets/index/hldft-banner.png',
    description: '基于深度学习的图像识别与分类系统，支持多模态数据处理与分析。',
    detailUrl: '/project/hldft',
    tags: ['3D建模', '数据可视化', '交互设计'],
    status: 'planned',
    date: '2024-2026',
    progress: 15,
    awards: [],
    team: ['傅教授', '曾博士', '邓研究员']
  },
  {
    title: '数据银河',
    image: '@/assets/index/sjyh-banner.png',
    description: '基于深度学习的图像识别与分类系统，支持多模态数据处理与分析。',
    detailUrl: '/project/sjyh',
    tags: ['大数据', '数据治理', '数据挖掘'],
    status: 'active',
    date: '2023-2025',
    progress: 50,
    awards: ['全国大学生数据挑战赛二等奖'],
    team: ['曹教授', '彭博士', '蒋研究员']
  },
  {
    title: '低码未来',
    image: '@/assets/index/dmwl-banner.png',
    description: '基于深度学习的图像识别与分类系统，支持多模态数据处理与分析。',
    detailUrl: '/project/dmwl',
    tags: ['低代码平台', '开发效率', '软件工程'],
    status: 'developing',
    date: '2024-2025',
    progress: 25,
    awards: [],
    team: ['谭教授', '秦博士', '贾研究员']
  },
  {
    title: '代码神器',
    image: '@/assets/index/dmsq-banner.png',
    description: '基于深度学习的图像识别与分类系统，支持多模态数据处理与分析。',
    detailUrl: '/project/dmsq',
    tags: ['开发工具', '自动化测试', '代码生成'],
    status: 'active',
    date: '2023-2025',
    progress: 45,
    awards: ['全国软件创新大赛三等奖'],
    team: ['萧教授', '黎博士', '方研究员']
  }
])

// 项目统计数据
const statisticsData = computed(() => {
  return {
    total: projectList.value.length + scientificProjects.value.length + competitionProjects.value.length,
    active: [...projectList.value, ...scientificProjects.value, ...competitionProjects.value].filter(p => p.status === 'active').length,
    developing: [...projectList.value, ...scientificProjects.value, ...competitionProjects.value].filter(p => p.status === 'developing').length,
    completed: [...projectList.value, ...scientificProjects.value, ...competitionProjects.value].filter(p => p.status === 'completed').length,
    planned: [...projectList.value, ...scientificProjects.value, ...competitionProjects.value].filter(p => p.status === 'planned').length
  }
})

// 推荐项目（基于特定条件筛选）
const recommendedProjects = computed(() => {
  const allProjects = [...projectList.value, ...scientificProjects.value, ...competitionProjects.value]
  // 按进度和状态排序
  return allProjects
    .filter(p => p.status === 'active' && p.progress > 60)
    .sort((a, b) => b.progress - a.progress)
    .slice(0, 3)
})

// 图片国际化（如果需要）
import zhCN from 'ant-design-vue/es/locale/zh_CN'
</script>

<template>
  <a-config-provider :locale="zhCN">
    <div class="project-view">
      <!-- 项目统计概览 -->
      <div class="section statistics-section animate-trigger">
        <h2 class="section-title">项目数据概览</h2>
        <a-row :gutter="[24, 24]" class="statistics-cards">
          <a-col :xs="12" :sm="12" :md="6">
            <a-card class="statistic-card animate-float" style="animation-delay: 0s">
              <a-statistic title="项目总数" :value="statisticsData.total"
                :value-style="{ color: '#1890ff', fontWeight: 'bold' }">
                <template #prefix>
                  <a-icon type="project" />
                </template>
              </a-statistic>
            </a-card>
          </a-col>
          <a-col :xs="12" :sm="12" :md="6">
            <a-card class="statistic-card animate-float" style="animation-delay: 0.3s">
              <a-statistic title="进行中" :value="statisticsData.active"
                :value-style="{ color: '#52c41a', fontWeight: 'bold' }">
                <template #prefix>
                  <a-icon type="play-circle" />
                </template>
              </a-statistic>
            </a-card>
          </a-col>
          <a-col :xs="12" :sm="12" :md="6">
            <a-card class="statistic-card animate-float" style="animation-delay: 0.6s">
              <a-statistic title="开发中" :value="statisticsData.developing"
                :value-style="{ color: '#faad14', fontWeight: 'bold' }">
                <template #prefix>
                  <a-icon type="code" />
                </template>
              </a-statistic>
            </a-card>
          </a-col>
          <a-col :xs="12" :sm="12" :md="6">
            <a-card class="statistic-card animate-float" style="animation-delay: 0.9s">
              <a-statistic title="已完成" :value="statisticsData.completed"
                :value-style="{ color: '#1d39c4', fontWeight: 'bold' }">
                <template #prefix>
                  <a-icon type="check-circle" />
                </template>
              </a-statistic>
            </a-card>
          </a-col>
        </a-row>
      </div>

      <!-- 推荐项目轮播 -->
      <div class="section recommended-section animate-trigger">
        <h2 class="section-title">推荐项目</h2>
        <a-typography-paragraph class="section-subtitle">
          探索我们最具代表性的研究项目
        </a-typography-paragraph>

        <a-carousel autoplay class="recommended-carousel">
          <div v-for="project in recommendedProjects" :key="project.title" class="carousel-item">
            <div class="carousel-content">
              <div class="carousel-image-container">
                <img :src="project.image" :alt="project.title" class="carousel-image" />
              </div>
              <div class="carousel-text">
                <h3 class="carousel-title">{{ project.title }}</h3>
                <a-progress :percent="project.progress" :status="project.progress === 100 ? 'success' : 'active'" />
                <p class="carousel-description">{{ project.description }}</p>
                <div class="carousel-tags">
                  <a-tag v-for="tag in project.tags" :key="tag"
                    :color="tag === '核心技术' ? 'blue' : tag === 'AI应用' ? 'purple' : ''">
                    {{ tag }}
                  </a-tag>
                </div>
                <a-button type="primary" :href="project.detailUrl" class="carousel-button">
                  了解更多
                </a-button>
              </div>
            </div>
          </div>
        </a-carousel>
      </div>

      <!-- 项目分类容器 -->
      <div class="section project-section animate-trigger">
        <h2 class="section-title">实验室项目总览</h2>
        <a-typography-paragraph class="section-subtitle">
          探索我们正在进行的创新项目和研究
        </a-typography-paragraph>

        <!-- 项目分类选项卡 -->
        <a-tabs default-active-key="1" class="project-tabs">
          <!-- 重点项目 -->
          <a-tab-pane key="1" tab="重点项目">
            <a-empty v-if="projectList.length === 0" description="没有找到符合条件的项目" />
            <a-row :gutter="[24, 24]" v-else>
              <a-col :xs="24" :sm="12" :md="8" v-for="item in projectList" :key="item.title">
                <a-card hoverable class="project-card">
                  <template #cover>
                    <div class="project-image-container">
                      <img :src="item.image" alt="项目封面" class="project-image" />
                      <a-tag :color="statusColor[item.status]" class="status-tag">
                        {{ statusText[item.status] }}
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
                        <a-progress :percent="item.progress" size="small"
                          :status="item.progress === 100 ? 'success' : 'active'" />
                        <a-typography-paragraph class="project-desc">
                          {{ item.description }}
                        </a-typography-paragraph>

                        <!-- 亮点展示 -->
                        <a-typography-paragraph v-if="item.highlights && item.highlights.length"
                          class="project-highlights">
                          <strong>项目亮点：</strong>
                          <a-tag v-for="highlight in item.highlights" :key="highlight" color="cyan"
                            class="highlight-tag">
                            {{ highlight }}
                          </a-tag>
                        </a-typography-paragraph>

                        <!-- 团队展示 -->
                        <a-typography-paragraph v-if="item.team && item.team.length" class="project-team">
                          <strong>研究团队：</strong>
                          <a-avatar-group>
                            <a-tooltip v-for="member in item.team" :key="member" :title="member">
                              <a-avatar>{{ member.substr(0, 1) }}</a-avatar>
                            </a-tooltip>
                          </a-avatar-group>
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
            <a-empty v-if="scientificProjects.length === 0" description="没有找到符合条件的项目" />
            <a-row :gutter="[24, 24]" v-else>
              <a-col :xs="24" :sm="12" :md="8" v-for="item in scientificProjects" :key="item.title">
                <a-card hoverable class="project-card">
                  <template #cover>
                    <div class="project-image-container">
                      <img :src="item.image" alt="项目封面" class="project-image" />
                      <a-tag :color="statusColor[item.status]" class="status-tag">
                        {{ statusText[item.status] }}
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
                        <a-progress :percent="item.progress" size="small"
                          :status="item.progress === 100 ? 'success' : 'active'" />
                        <a-typography-paragraph class="project-desc">
                          {{ item.description }}
                        </a-typography-paragraph>

                        <!-- 发表成果 -->
                        <a-typography-paragraph v-if="item.publications && item.publications.length"
                          class="project-publications">
                          <strong>发表论文：</strong> {{ item.publications.length }} 篇
                          <a-popover title="发表论文" trigger="click">
                            <template #content>
                              <ul class="publication-list">
                                <li v-for="pub in item.publications" :key="pub">{{ pub }}</li>
                              </ul>
                            </template>
                            <a-button type="link" size="small">查看</a-button>
                          </a-popover>
                        </a-typography-paragraph>

                        <!-- 专利信息 -->
                        <a-typography-paragraph v-if="item.patents !== undefined" class="project-patents">
                          <strong>专利数量：</strong> {{ item.patents }} 项
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
            <a-empty v-if="competitionProjects.length === 0" description="没有找到符合条件的项目" />
            <a-row :gutter="[24, 24]" v-else>
              <a-col :xs="24" :sm="12" :md="8" v-for="item in competitionProjects" :key="item.title">
                <a-card hoverable class="project-card">
                  <template #cover>
                    <div class="project-image-container">
                      <img :src="item.image" alt="项目封面" class="project-image" />
                      <a-tag :color="statusColor[item.status]" class="status-tag">
                        {{ statusText[item.status] }}
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
                        <a-progress :percent="item.progress" size="small"
                          :status="item.progress === 100 ? 'success' : 'active'" />
                        <a-typography-paragraph class="project-desc">
                          {{ item.description }}
                        </a-typography-paragraph>

                        <!-- 获奖情况 -->
                        <a-typography-paragraph v-if="item.awards && item.awards.length" class="project-awards">
                          <strong>获奖情况：</strong>
                          <a-popover title="获奖情况" trigger="click">
                            <template #content>
                              <ul class="awards-list">
                                <li v-for="award in item.awards" :key="award">{{ award }}</li>
                              </ul>
                            </template>
                            <a-button type="link" size="small">{{ item.awards.length }}项奖励</a-button>
                          </a-popover>
                        </a-typography-paragraph>

                        <!-- 团队展示 -->
                        <a-typography-paragraph v-if="item.team && item.team.length" class="project-team">
                          <strong>参赛团队：</strong>
                          <a-avatar-group>
                            <a-tooltip v-for="member in item.team" :key="member" :title="member">
                              <a-avatar>{{ member.substr(0, 1) }}</a-avatar>
                            </a-tooltip>
                          </a-avatar-group>
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
    </div>
  </a-config-provider>
</template>

<style scoped lang="less">
/* 全局变量 */
@primary-color: #1890ff;
@success-color: #52c41a;
@warning-color: #faad14;
@error-color: #f5222d;
@heading-color: #262626;
@text-color: #595959;
@text-color-secondary: #8c8c8c;
@disabled-color: rgba(0, 0, 0, 0.25);
@border-radius-base: 12px;
@border-color-base: #d9d9d9;
@box-shadow-base: 0 4px 12px rgba(0, 0, 0, 0.08);
@transition-duration: 0.3s;

/* 渐变 */
@gradient-primary: linear-gradient(135deg, @primary-color 0%, darken(@primary-color, 10%) 100%);
@gradient-success: linear-gradient(135deg, @success-color 0%, darken(@success-color, 10%) 100%);
@gradient-warning: linear-gradient(135deg, @warning-color 0%, darken(@warning-color, 10%) 100%);
@gradient-error: linear-gradient(135deg, @error-color 0%, darken(@error-color, 10%) 100%);

.project-view {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
}

/* 页面容器 */
.section {
  margin-bottom: 4rem;
  padding: 2.5rem 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 1px;
    background: linear-gradient(to right, transparent, @border-color-base, transparent);
  }

  &:last-child::after {
    display: none;
  }
}

.section-title {
  font-size: 2.2rem;
  color: @heading-color;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 1.2rem;
  font-weight: 600;
  text-align: center;
  letter-spacing: -0.5px;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: @gradient-primary;
    border-radius: 2px;
  }
}

.section-subtitle {
  color: @text-color-secondary;
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* 统计卡片样式优化 */
.statistics-section {
  background: linear-gradient(135deg, #f5f7fa 0%, #e6f7ff 100%);
  padding: 3.5rem 2.5rem;
  border-radius: 12px;
  margin: 2rem 0 5rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
}

.statistics-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%);
  opacity: 0.6;
}

.statistics-cards {
  position: relative;
  z-index: 2;
}

.statistic-card {
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  background: white;
  overflow: hidden;
  position: relative;
  padding: 1.2rem;
  border: none;
}

.statistic-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: @gradient-primary;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.statistic-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.12);
}

.statistic-card:hover::before {
  opacity: 1;
}

/* 统计卡片内容样式 */
.statistics-cards .ant-statistic-title {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: @text-color;
  position: relative;
  padding-left: 10px;
}

.statistics-cards .ant-statistic-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 16px;
  background: @primary-color;
  border-radius: 1.5px;
}

.statistics-cards .ant-statistic-content {
  font-size: 2.5rem;
  font-weight: 700;
  background: @gradient-primary;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.statistics-cards .ant-statistic-content-prefix {
  margin-right: 0.8rem;
  color: @primary-color;
  -webkit-text-fill-color: @primary-color;
}

/* 添加微动画 */
@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0px);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}

.animate-float {
  animation: float 5s ease-in-out infinite;
}

.animate-pulse {
  animation: pulse 3s ease-in-out infinite;
}

/* 增强项目标签和高亮 */
.highlight-tag {
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
  border-radius: 16px;
  padding: 4px 14px;
  border: none;
  background: linear-gradient(to right, rgba(0, 183, 255, 0.08), rgba(0, 129, 255, 0.08));
  color: @primary-color;
  font-weight: 500;
  transition: all 0.3s ease;
}

.highlight-tag:hover {
  transform: translateY(-2px);
  background: linear-gradient(to right, rgba(0, 183, 255, 0.12), rgba(0, 129, 255, 0.12));
}

/* 增强项目细节展示 */
.project-highlights,
.project-publications,
.project-patents,
.project-awards,
.project-team {
  margin-bottom: 1.5rem;
  color: @text-color;
  position: relative;
  // padding-left: 1.2rem;
}

.project-highlights strong,
.project-publications strong,
.project-patents strong,
.project-awards strong,
.project-team strong {
  position: relative;
  color: @heading-color;
  font-weight: 600;
}

/* 推荐项目轮播 */
.recommended-section {
  overflow: hidden;
  padding: 2rem 0 3rem;
}

.recommended-carousel {
  margin-bottom: 3rem;
  box-shadow: @box-shadow-base;
  border-radius: @border-radius-base;
  overflow: hidden;
  height: 450px;
}

.carousel-item {
  height: 450px;
  background: white;
}

.carousel-content {
  display: flex;
  height: 100%;
  position: relative;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
}

.carousel-image-container {
  flex: 1.2;
  overflow: hidden;
  position: relative;
}

.carousel-image-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
  z-index: 1;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease;
}

.carousel-content:hover .carousel-image {
  filter: brightness(1.05);
}

.carousel-text {
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.97), rgba(255, 255, 255, 0.95));
  position: relative;
  z-index: 2;
}

.carousel-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: @heading-color;
  font-weight: 700;
  line-height: 1.2;
  position: relative;
  padding-left: 1.5rem;
}

.carousel-description {
  margin: 1.5rem 0 2rem;
  color: @text-color;
  line-height: 1.8;
  font-size: 1.1rem;
  padding-left: 1.5rem;
}

.carousel-tags {
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.carousel-button {
  align-self: flex-start;
  margin-top: 1.5rem;
  padding: 0.8rem 2rem;
  height: auto;
  font-size: 1.1rem;
  border-radius: 24px;
  // background: var(--gradient-primary);
  border: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.carousel-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.3);
}

/* 项目分类容器 */
.project-section {
  padding-top: 1rem;
}

/* 项目卡片容器 */
.ant-row {
  margin: -12px;
}

.ant-col {
  padding: 12px;
}

/* 项目卡片样式优化 */
.project-card {
  height: 100%;
  border-radius: @border-radius-base;
  background: white;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.project-image-container {
  position: relative;
  height: 200px;
  overflow: hidden;
  background: #f5f5f5;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease;
}

.project-card:hover .project-image {
  filter: brightness(1.05);
}

.status-tag {
  position: absolute;
  top: 12px;
  right: 12px;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

.project-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-meta {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
}

.project-date {
  display: inline-flex;
  align-items: center;
  color: @text-color-secondary;
  font-size: 0.9rem;
  font-weight: 500;
  background: #f5f7fa;
  padding: 6px 12px;
  border-radius: @border-radius-base;
  width: fit-content;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
}

.project-tags .ant-tag {
  margin: 0;
  border-radius: @border-radius-base;
  padding: 4px 12px;
  border: none;
  background: fade(@primary-color, 8%);
  color: @primary-color;
  font-size: 0.9rem;
  height: auto;
  line-height: 1.5;
}

.project-desc {
  margin: 16px 0;
  color: @text-color;
  line-height: 1.6;
  font-size: 0.95rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
}

.project-highlights,
.project-publications,
.project-patents,
.project-awards,
.project-team {
  margin-bottom: 16px;
  color: @text-color;
  font-size: 0.9rem;
}

.project-highlights strong,
.project-publications strong,
.project-patents strong,
.project-awards strong,
.project-team strong {
  color: @heading-color;
  font-weight: 600;
  margin-right: 8px;
}

.highlight-tag {
  margin: 4px;
  border-radius: 12px;
  padding: 2px 12px;
  border: none;
  background: rgba(0, 183, 255, 0.08);
  color: @primary-color;
  font-size: 0.85rem;
}

.project-button {
  margin-top: 20px;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  // background: var(--gradient-primary);
  border: none;
  font-weight: 500;
  font-size: 0.95rem;
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.2);
  transition: all @transition-duration ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(24, 144, 255, 0.3);
    // background: var(--gradient-primary);
  }
}

.project-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(24, 144, 255, 0.3);
  // background: var(--gradient-primary);
}

/* 选项卡样式优化 */
.project-tabs {
  margin-top: 24px;
}

.project-tabs .ant-tabs-nav {
  margin-bottom: 24px;
}

.project-tabs .ant-tabs-tab {
  padding: 12px 24px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.project-tabs .ant-tabs-tab-active {
  font-weight: 600;
}

.project-tabs .ant-tabs-ink-bar {
  height: 3px;
  border-radius: 3px;
  background: @gradient-primary;
}

/* 进度条样式优化 */
.ant-progress {
  margin: 16px 0;
}

.ant-progress-bg {
  background: @gradient-primary;
}

.ant-progress-text {
  color: @primary-color;
  font-weight: 600;
  font-size: 0.9rem;
}

/* 头像组样式优化 */
.ant-avatar-group {
  margin-left: 8px;
}

.ant-avatar {
  border: 2px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 响应式优化 */
@media (max-width: 768px) {
  .project-content {
    padding: 16px;
  }

  .project-image-container {
    height: 180px;
  }

  .project-tabs .ant-tabs-tab {
    padding: 8px 16px;
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .project-image-container {
    height: 160px;
  }

  .project-meta {
    margin-bottom: 12px;
  }

  .project-button {
    margin-top: 16px;
    height: 36px;
    font-size: 0.9rem;
  }
}

/* 动画效果 */
.animate__animated {
  animation-duration: 1s;
}

.animate__fadeInUp {
  animation-name: fadeInUp;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 60px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

/* 响应式调整增强 */
@media (max-width: 1200px) {
  .project-view {
    max-width: 100%;
    border-radius: 0;
    padding: 0 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 992px) {
  .project-view {
    padding: 0 1rem;
  }

  .recommended-carousel {
    height: auto;
  }

  .statistics-section {
    padding: 2.5rem 1.5rem;
  }
}

@media (max-width: 768px) {
  .section {
    margin-bottom: 3rem;
    padding: 2rem 0;
  }

  .section-title {
    font-size: 1.8rem;
    padding-bottom: 1rem;
  }

  .statistics-section {
    padding: 2rem 1rem;
    margin: 1rem 0 3rem;
  }

  .recommended-section {
    padding: 1rem 0 2rem;
  }

  .project-tabs .ant-tabs-tab {
    padding: 8px 16px;
    margin: 0 10px 0 0;
    font-size: 1rem;
  }
}

/* 选项卡样式增强 */
.project-tabs {
  margin-top: 1rem;
}

.project-tabs .ant-tabs-nav::before {
  border-bottom-color: #f0f0f0;
}

.project-tabs .ant-tabs-tab {
  position: relative;
  transition: all 0.3s ease;
  margin: 0 16px 0 0;
}

.project-tabs .ant-tabs-tab::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: @gradient-primary;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.project-tabs .ant-tabs-tab:hover::after {
  transform: scaleX(0.5);
}

.project-tabs .ant-tabs-tab-active::after {
  transform: scaleX(1);
}

/* 头像组样式 */
.ant-avatar-group {
  margin-left: 0.8rem;
}

.ant-avatar {
  border: 2px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 改进进度条样式 */
.ant-progress {
  margin-bottom: 1.2rem;
}

.ant-progress-bg {
  background: @gradient-primary;
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.2);
}

.ant-progress-text {
  color: @primary-color;
  font-weight: 600;
}

/* 美化标签组件 */
.ant-tag {
  border-radius: 12px;
  padding: 2px 10px;
  margin-right: 8px;
  margin-bottom: 8px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.ant-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

/* 增强空状态视觉效果 */
.ant-empty {
  margin: 3rem 0;
  padding: 3rem;
  background: linear-gradient(to bottom, #f9fbfd, #f0f7ff);
  border-radius: @border-radius-base;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.02);
}

.ant-empty-image {
  opacity: 0.7;
  transition: all 0.3s ease;
}

.ant-empty:hover .ant-empty-image {
  transform: scale(1.05);
  opacity: 0.9;
}

.ant-empty-description {
  color: @text-color-secondary;
  font-size: 1.1rem;
  margin-top: 1rem;
}

/* 添加项目卡片装饰元素 */
.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: @gradient-primary;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.project-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.15);
}

.project-card:hover::before {
  opacity: 1;
}

/* 增强项目标题效果 */
.ant-card-meta-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: @heading-color;
  margin-bottom: 1rem;
  position: relative;
  transition: all 0.3s ease;
}

.project-card:hover .ant-card-meta-title {
  color: @primary-color;
  transform: translateX(5px);
}

/* 美化标签过渡效果 */
.project-tags .ant-tag {
  margin: 0 8px 8px 0;
  transition: all 0.3s ease;
  border: none;
  background-color: rgba(24, 144, 255, 0.06);
}

.project-tags .ant-tag:hover {
  background-color: rgba(24, 144, 255, 0.12);
  color: @primary-color;
  transform: translateY(-2px) scale(1.05);
}

/* 按钮样式优化 */
.ant-btn-link {
  padding: 4px 8px;
  height: auto;
  line-height: 1.5;
  color: @primary-color;
  font-size: 0.9rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(24, 144, 255, 0.08);
    color: @primary-color;
  }
}

/* 项目信息块样式 */
.project-info-block {
  margin-bottom: 16px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;

  strong {
    display: block;
    margin-bottom: 8px;
    color: @heading-color;
    font-weight: 600;
  }
}

/* 列表样式优化 */
.publication-list,
.awards-list {
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    margin-bottom: 8px;
    padding-left: 16px;
    position: relative;
    line-height: 1.5;

    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: @primary-color;
    }
  }
}

/* 响应式优化 */
@media (max-width: 768px) {
  .project-meta {
    gap: 8px;
  }

  .project-date {
    font-size: 0.85rem;
    padding: 4px 10px;
  }

  .project-tags .ant-tag {
    font-size: 0.85rem;
    padding: 3px 10px;
  }
}

@media (max-width: 576px) {
  .project-content {
    padding: 16px;
  }

  .project-meta {
    margin-bottom: 12px;
  }

  .project-button {
    margin-top: 16px;
    height: 36px;
    font-size: 0.9rem;
  }
}
</style>
