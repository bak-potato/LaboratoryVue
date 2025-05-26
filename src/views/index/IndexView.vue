<!-- eslint-disable vue/block-lang -->
<script setup>
import { ref, onMounted } from 'vue'
// 图片导入
import tp1 from '@/assets/index/ljtc-banner.png'
import tp2 from '@/assets/index/zrty-banner.png'
import ljtc from '@/assets/index/ljtc.jpeg'
import fhxy from '@/assets/index/fhxy.png'
import zrty from '@/assets/index/zrty.png'
import dachuang1 from '@/assets/honors/dachuangguojia.png'
import dachuang2 from '@/assets/honors/dachuangshengji.png'
import jisuanjidasai1 from '@/assets/honors/jisuanjishejiguojia.jpg'
import lanqiaobei1 from '@/assets/honors/lanqiaobei1.jpg'
import rz1 from '@/assets/copyright/1.png'
import rz2 from '@/assets/copyright/2.png'
import rz3 from '@/assets/copyright/3.png'
import rz4 from '@/assets/copyright/4.png'
import rz5 from '@/assets/copyright/5.png'
import rz6 from '@/assets/copyright/6.png'
import rz7 from '@/assets/copyright/7.jpg'
// 国际化
import zhCN from 'ant-design-vue/es/locale/zh_CN'

// 添加滚动动画逻辑
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated')
        // 根据不同的区块设置不同的动画效果
        if (entry.target.classList.contains('intro-section')) {
          entry.target.classList.add('animate__fadeInLeft')
        } else if (entry.target.classList.contains('features')) {
          entry.target.classList.add('animate__fadeInUp')
        } else if (entry.target.classList.contains('honors')) {
          entry.target.classList.add('animate__fadeInUp')
        } else if (entry.target.classList.contains('software-section')) {
          entry.target.classList.add('animate__fadeInUp')
        } else if (entry.target.classList.contains('team-section')) {
          entry.target.classList.add('animate__fadeInRight')
        } else if (entry.target.classList.contains('news-section')) {
          entry.target.classList.add('animate__fadeInLeft')
        }
      }
    })
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  })

  // 观察所有带animate-on-scroll类的区块
  document.querySelectorAll('.animate-on-scroll').forEach(section => {
    observer.observe(section)
  })

  // 添加数字滚动动画
  const animateNumbers = () => {
    const counters = document.querySelectorAll('.stat-value')
    counters.forEach(counter => {
      const target = parseInt(counter.textContent.replace(/\D/g, ''))
      const suffix = counter.textContent.replace(/\d/g, '')
      let current = 0
      const increment = target / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          counter.textContent = target + suffix
          clearInterval(timer)
        } else {
          counter.textContent = Math.floor(current) + suffix
        }
      }, 30)
    })
  }

  setTimeout(animateNumbers, 1000)
})

// 轮播图数据
const carouselItems = ref([
  {
    image: tp1,
    title: '计算机创新实验室',
    subtitle: '创新驱动发展，科技引领未来',
    description: '培养具有创新精神和实践能力的高素质人才'
  },
  {
    image: tp1,
    title: '临界拓池',
    subtitle: '专业线程池监控系统',
    description: '实时监控、动态调参、及时预警'
  },
  {
    image: tp2,
    title: '智润田园',
    subtitle: '探索人工智能技术的前沿应用',
    description: '运用物联网和人工智能的技术，助力农业现代化发展'
  },
])

const projectList = ref([
  {
    title: '临界拓池',
    image: ljtc,
    description: '专业线程池监控系统。实时监控、动态调参、及时预警，助力系统提升性能、优化资源、增强稳定性。',
    tags: ['性能监控', '系统优化', 'Java'],
    status: '进行中',
    team: '6人团队',
    url: '/project/ljtc'
  },
  {
    title: '智润田园',
    image: zrty,
    description: '基于物联网和人工智能的智慧农业管理平台，实现精准培肥功能，防止肥料的浪费，提高农业效率。',
    tags: ['物联网', 'AI算法', '农业科技'],
    status: '已完成',
    team: '4人团队',
    url: '/project/zrty'
  },
  {
    title: '风花雪月',
    image: fhxy,
    description: '集成智能监控、自动化运维、多系统管理于一体，助力企业提升运维效率与数字化转型效能。',
    tags: ['运维自动化', '系统集成', 'DevOps'],
    status: '测试中',
    team: '5人团队',
    url: '/project/fhxy'
  },
])

const newsList = ref([
  {
    title: '中国大学生计算机设计大赛物联网省赛答辩',
    date: '2025-05-17',
    summary: '实验室师生在8号楼1楼会议室进行中国大学生计算机设计大赛物联网省赛线上答辩。',
    category: '竞赛现场',
    author: '实验室'
  },
  {
    title: '中国大学生计算机设计大赛省赛答辩',
    date: '2025-05-11',
    summary: '实验室师生在8号楼1楼会议室进行中国大学生计算机设计大赛省赛线上答辩。',
    category: '竞赛现场',
    author: '实验室'
  },
  {
    title: '前往济南参观学习',
    date: '2025-04-18',
    summary: '实验室核心成员前往济南参观学习科技公司。',
    category: '学习参观',
    author: '实验室'
  },
  {
    title: '蓝桥杯全国软件和信息技术专业人才大赛',
    date: '2025-04-12',
    summary: '实验室师生前往考场参加蓝桥杯全国软件和信息技术专业人才大赛。',
    category: '竞赛现场',
    author: '实验室'
  },
])

// 实验室统计
const stats = ref([
  { label: '建设项目', value: '10+', icon: '🚀' },
  { label: '软著专利', value: '5+', icon: '📜' },
  { label: '竞赛奖项', value: '15+', icon: '🏆' },
  { label: '在读成员', value: '20+', icon: '👥' }
])

const honorList = ref([
  {
    image: dachuang1,
    title: '全国大学生创新创业大赛',
    award: '国家级立项',
    date: '2024',
    level: 'national'
  },
  {
    image: dachuang2,
    title: '全国大学生创新创业大赛',
    award: '省级立项',
    date: '2024',
    level: 'provincial'
  },
  {
    image: jisuanjidasai1,
    title: '中国大学生计算机设计大赛',
    award: '国赛三等奖',
    date: '2024-07',
    level: 'national'
  },
  {
    image: lanqiaobei1,
    title: '蓝桥杯全国软件大赛',
    award: '全国选拔赛三等奖',
    date: '2024-05',
    level: 'national'
  }
])

const honorTextList = ref([
  {
    title: '第十七届全国大学生软件创新大赛',
    award: '华东赛区三等奖',
    date: '2024-04',
    participants: '4人团队'
  },
  {
    title: '中国大学生计算机设计大赛',
    award: '省级二等奖',
    date: '2024-08',
    participants: '5人团队'
  },
  {
    title: '中国大学生计算机设计大赛',
    award: '省级二等奖',
    date: '2024-02',
    participants: '3人团队'
  },
  {
    title: '第十四届蓝桥杯大赛专项赛暨首届"元境杯"元宇宙创想+数字内容创作大赛',
    award: '全国三等奖',
    date: '2023-11',
    participants: '个人赛'
  },
  {
    title: '中国高校计算机大赛-网络技术赛',
    award: '华东赛区二等奖',
    date: '2024-07',
    participants: '6人团队'
  }
])

const softwareCopyright = ref([
  {
    name: '基于Netty框架的网络连接设计系统',
    regNo: '2025SR0143561',
    image: rz1,
    year: '2025',
    inventors: '刘文婕,张洋,张富康,张树祥,尹巍然'
  },
  {
    name: 'Web网络安全防火墙系统',
    regNo: '2025SR0088766',
    image: rz2,
    year: '2025',
    inventors: '张洋,庞敏慧,颜瑞池,李东亭,王家伸'
  },
  {
    name: '服务端异步执行系统',
    regNo: '2024SR2202398',
    image: rz3,
    year: '2024',
    inventors: '孔岩松,张洋,付庆浩,刘文婕,邵语彤,庞敏慧'
  },
  {
    name: 'RPC远程调用系统',
    regNo: '2024SR2200568',
    image: rz4,
    year: '2024',
    inventors: '张洋,孔岩松,邵语彤,刘文婕,刘倩,侯思宇'
  },
  {
    name: '低代码智能编程管理系统',
    regNo: '2024SR1693889',
    image: rz5,
    year: '2024',
    inventors: '张洋,付庆浩,褚馨璐'
  },
  {
    name: '社交交易一站式服务平台',
    regNo: '2024SR0947626',
    image: rz6,
    year: '2024',
    inventors: '张洋,赵宇轩,褚馨璐'
  },
  {
    name: '星灿-动态线程池组件系统',
    regNo: '2025SR0783583',
    image: rz7,
    year: '2025',
    inventors: '张洋,李建鏊,丁俊凯,庞敏慧,许致豪,孙山清'
  }
])

// 实验室氛围
const atmosphere = ref([
  {
    name: '开放包容',
    description: '欢迎来自不同专业和学院的小伙伴加入我们',
    icon: '🌐'
  },
  {
    name: '创新驱动',
    description: '我们鼓励学生探索创新和解决实际问题，推动实验室的发展',
    icon: '🚀'
  },
  {
    name: '团队合作',
    description: '团队合作和协作精神是我们的核心价值观，可以促进团队之间的凝聚力',
    icon: '🤝'
  },
  {
    name: '实践导向',
    description: '实践和项目是我们的重要组成部分，让学生在实际的项目中获得经验',
    icon: '💡'
  }
])

// 单击跳转项目详情
const handleProjectClick = (project) => {
  window.location.href = project
}
</script>

<template>
  <a-config-provider :locale="zhCN">
    <!-- 轮播图 -->
    <a-carousel autoplay class="hero-carousel animate__animated animate__fadeIn">
      <div v-for="(item, index) in carouselItems" :key="index" class="carousel-item">
        <img :src="item.image" :alt="item.title">
        <div class="carousel-content">
          <div class="carousel-text">
            <h1 class="carousel-title">{{ item.title }}</h1>
            <p class="carousel-subtitle">{{ item.subtitle }}</p>
            <p class="carousel-description">{{ item.description }}</p>
            <div class="carousel-actions">
              <!-- <a-button type="primary" size="large" class="cta-button">
                了解更多
              </a-button>
              <a-button size="large" ghost class="cta-button-secondary">
                查看项目
              </a-button> -->
            </div>
          </div>
        </div>
      </div>
    </a-carousel>

    <!-- 实验室简介 -->
    <div class="section intro-section animate-on-scroll">
      <div class="container">
        <a-row :gutter="[48, 32]" type="flex" align="middle">
          <a-col :xs="24" :lg="14">
            <div class="intro-content">
              <h2 class="section-title">实验室简介</h2>
              <div class="intro-highlight">
                <span class="highlight-badge">成立于2023年</span>
                <!-- <span class="highlight-badge">国家级实验室</span> -->
              </div>
              <a-typography class="intro-text">
                <a-typography-paragraph>
                  计算机创新实验室成立于2010年，是集科研创新、项目实践、学科竞赛为一体的综合性实验平台。实验室致力于培养具有创新精神和实践能力的高素质人才，为学生提供良好的学习环境和实践机会。
                </a-typography-paragraph>
                <a-typography-paragraph>
                  实验室拥有先进的硬件设备和软件环境，配备专业的指导教师团队，为学生提供全方位的支持和指导。在人工智能、物联网、软件工程等领域取得了丰硕的研究成果。
                </a-typography-paragraph>
                <a-typography-paragraph>
                  我们秉承"创新、协作、卓越、服务"的理念，致力于成为计算机科学技术创新的重要基地和高素质人才培养的摇篮。
                </a-typography-paragraph>
              </a-typography>
              <div class="intro-actions">
                <a-button type="primary" size="large" class="learn-more-btn">
                  了解更多
                </a-button>
                <a-button size="large" class="contact-btn">
                  联系我们
                </a-button>
              </div>
            </div>
          </a-col>
          <a-col :xs="24" :lg="10">
            <div class="intro-visual">
              <img :src="ljtc" class="intro-image" />
              <div class="intro-stats-mini">
                <!-- <div class="stat-mini">
                  <span class="stat-mini-value">14年</span>
                  <span class="stat-mini-label">历史沉淀</span>
                </div> -->
                <div class="stat-mini">
                  <span class="stat-mini-value">20+</span>
                  <span class="stat-mini-label">培养学生</span>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>

    <!-- 统计数字 -->
    <section class="stats-section animate-on-scroll">
      <div class="container">
        <div class="stats-wrapper">
          <div v-for="stat in stats" :key="stat.label" class="stat-item">
            <div class="stat-icon">{{ stat.icon }}</div>
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心项目 -->
    <div class="section features animate-on-scroll">
      <div class="container">
        <h2 class="section-title">核心项目</h2>
        <p class="section-subtitle">探索前沿技术，打造创新产品</p>
        <a-row :gutter="[24, 24]">
          <a-col :xs="24" :sm="12" :lg="8" v-for="item in projectList" :key="item.title">
            <a-card hoverable class="project-card">
              <template #cover>
                <div class="project-image-wrapper">
                  <img alt="项目封面" :src="item.image" class="project-image" />
                  <div class="project-overlay">
                    <a-button type="primary" ghost @click="handleProjectClick(item.url)">查看详情</a-button>
                  </div>
                  <div class="project-status" :class="item.status">
                    {{ item.status }}
                  </div>
                </div>
              </template>
              <a-card-meta :title="item.title">
                <template #description>
                  <div class="project-content">
                    <a-typography-paragraph class="project-desc">
                      {{ item.description }}
                    </a-typography-paragraph>
                    <div class="project-meta">
                      <span class="project-team">{{ item.team }}</span>
                    </div>
                    <div class="project-tags">
                      <a-tag v-for="tag in item.tags" :key="tag" :color="getTagColor(tag)">
                        {{ tag }}
                      </a-tag>
                    </div>
                  </div>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>
      </div>
    </div>

    <!-- 实验室氛围 -->
    <div class="section facilities-section animate-on-scroll">
      <div class="container">
        <h2 class="section-title">实验室氛围</h2>
        <p class="section-subtitle">团队活跃的氛围，让你感受到团队的魅力</p>
        <a-row :gutter="[24, 24]">
          <a-col :xs="24" :sm="12" :lg="6" v-for="facility in atmosphere" :key="facility.name">
            <div class="facility-card">
              <div class="facility-icon">{{ facility.icon }}</div>
              <h3 class="facility-name">{{ facility.name }}</h3>
              <p class="facility-description">{{ facility.description }}</p>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>

    <!-- 最新动态 -->
    <div class="section news-section animate-on-scroll">
      <div class="container">
        <h2 class="section-title">最新动态</h2>
        <p class="section-subtitle">了解实验室最新进展和成果</p>
        <a-row :gutter="[24, 24]">
          <a-col :xs="24" :lg="16">
            <div class="news-list">
              <div v-for="news in newsList" :key="news.title" class="news-item">
                <div class="news-category">{{ news.category }}</div>
                <h3 class="news-title">{{ news.title }}</h3>
                <p class="news-summary">{{ news.summary }}</p>
                <div class="news-meta">
                  <span class="news-author">{{ news.author }}</span>
                  <span class="news-date">{{ news.date }}</span>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :xs="24" :lg="8">
            <div class="news-sidebar">
              <div class="sidebar-widget">
                <h4>本页快速链接</h4>
                <ul class="quick-links">
                  <li><a href="#honors">实验室荣誉</a></li>
                  <li><a href="#software">软件著作权</a></li>
                  <li><a href="#join">加入我们</a></li>
                </ul>
              </div>
              <!-- <div class="sidebar-widget">
                <h4>联系方式</h4>
                <div class="contact-info">
                  <p>📧 lab@university.edu</p>
                  <p>📞 +86-xxx-xxxx-xxxx</p>
                  <p>📍 科技楼A座501室</p>
                </div>
              </div> -->
            </div>
          </a-col>
        </a-row>
      </div>
    </div>

    <!-- 获得荣誉 -->
    <a name="honors"></a>
    <div class="section honors animate-on-scroll">
      <div class="container">
        <h2 class="section-title">实验室荣誉</h2>
        <p class="section-subtitle">在各类竞赛和评比中取得优异成绩</p>
        <a-tabs default-active-key="1" centered size="large">
          <a-tab-pane key="1" tab="竞赛奖项">
            <a-row :gutter="[24, 24]">
              <a-col :xs="24" :sm="12" :lg="6" v-for="item in honorList" :key="item.title">
                <a-card hoverable class="honor-card">
                  <template #cover>
                    <div class="honor-image-wrapper">
                      <img :src="item.image" alt="荣誉证书" />
                      <div class="honor-level" :class="item.level">
                        {{ item.level === 'national' ? '国家级' : '省级' }}
                      </div>
                    </div>
                  </template>
                  <a-card-meta :title="item.title">
                    <template #description>
                      <div class="honor-info">
                        <div class="honor-award">{{ item.award }}</div>
                        <div class="honor-date">{{ item.date }}</div>
                      </div>
                    </template>
                  </a-card-meta>
                </a-card>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane key="2" tab="获奖记录">
            <a-list :data-source="honorTextList" bordered class="honor-text-list">
              <template #renderItem="{ item }">
                <a-list-item class="honor-list-item">
                  <div class="honor-content">
                    <div class="honor-main">
                      <h4 class="award-title">{{ item.title }}</h4>
                      <div class="award-participants">参赛人员：{{ item.participants }}</div>
                    </div>
                    <div class="honor-side">
                      <a-tag color="blue" class="award-tag">{{ item.award }}</a-tag>
                      <span class="award-date">{{ item.date }}</span>
                    </div>
                  </div>
                </a-list-item>
              </template>
            </a-list>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>

    <!-- 软著模块 -->
    <a name="software"></a>
    <div class="section software-section animate-on-scroll">
      <div class="container">
        <h2 class="section-title">软件著作权</h2>
        <p class="section-subtitle">自主研发的软件产品获得知识产权保护</p>
        <a-row :gutter="[24, 24]">
          <a-col :xs="24" :sm="12" :lg="8" v-for="item in softwareCopyright" :key="item.regNo">
            <a-card hoverable class="software-card">
              <template #cover>
                <div class="software-image-wrapper">
                  <a-image :src="item.image" alt="软件著作权证书" />
                  <div class="software-year">{{ item.year }}</div>
                </div>
              </template>
              <a-card-meta :title="item.name">
                <template #description>
                  <div class="software-meta">
                    <div class="reg-info">
                      <div class="reg-no">登记号：{{ item.regNo }}</div>
                      <div class="inventors">发明人：{{ item.inventors }}</div>
                    </div>
                    <a-tag color="green">软件著作权</a-tag>
                  </div>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>
      </div>
    </div>

    <!-- 加入我们 -->
    <a name="join"></a>
    <div class="section join-us animate-on-scroll">
      <div class="container">
        <h2 class="section-title">加入我们</h2>
        <p class="section-subtitle">成为创新团队的一员，共同创造美好未来</p>
        <a-row :gutter="[48, 32]">
          <a-col :xs="24" :lg="12">
            <div class="recruitment-info">
              <h3>招新要求</h3>
              <a-collapse default-active-key="1" accordion size="large">
                <a-collapse-panel key="1" header="软件部招新要求">
                  <div class="requirements-list">
                    <div class="requirement-item">
                      <span class="requirement-icon">💻</span>
                      <span>计算机相关专业，有编程基础</span>
                    </div>
                    <div class="requirement-item">
                      <span class="requirement-icon">🚀</span>
                      <span>热爱编程，喜欢折腾新技术</span>
                    </div>
                    <div class="requirement-item">
                      <span class="requirement-icon">🤝</span>
                      <span>具有良好的团队协作能力</span>
                    </div>
                    <div class="requirement-item">
                      <span class="requirement-icon">⭐</span>
                      <span>有相关项目经验者优先</span>
                    </div>
                  </div>
                </a-collapse-panel>
                <a-collapse-panel key="2" header="硬件部招新要求">
                  <div class="requirements-list">
                    <div class="requirement-item">
                      <span class="requirement-icon">🔧</span>
                      <span>电子信息/计算机相关专业</span>
                    </div>
                    <div class="requirement-item">
                      <span class="requirement-icon">📚</span>
                      <span>接收无相关知识基础，愿意学习</span>
                    </div>
                    <div class="requirement-item">
                      <span class="requirement-icon">💡</span>
                      <span>对硬件开发有浓厚兴趣</span>
                    </div>
                    <div class="requirement-item">
                      <span class="requirement-icon">🎯</span>
                      <span>认真学习，积极参与实践</span>
                    </div>
                  </div>
                </a-collapse-panel>
                <a-collapse-panel key="3" header="设计部招新要求">
                  <div class="requirements-list">
                    <div class="requirement-item">
                      <span class="requirement-icon">🎨</span>
                      <span>积极学习设计相关内容</span>
                    </div>
                    <div class="requirement-item">
                      <span class="requirement-icon">🖥️</span>
                      <span>具有基本的设计软件使用能力</span>
                    </div>
                    <div class="requirement-item">
                      <span class="requirement-icon">✨</span>
                      <span>有创意和审美能力</span>
                    </div>
                    <div class="requirement-item">
                      <span class="requirement-icon">📝</span>
                      <span>善于沟通，理解项目需求</span>
                    </div>
                  </div>
                </a-collapse-panel>
                <a-collapse-panel key="4" header="创新创业部招新要求">
                  <div class="requirements-list">
                    <div class="requirement-item">
                      <span class="requirement-icon">💡</span>
                      <span>暂无招新需求</span>
                    </div>
                    <!-- <div class="requirement-item">
                      <span class="requirement-icon">🚀</span>
                      <span>对创新创业有浓厚兴趣</span>
                    </div>
                    <div class="requirement-item">
                      <span class="requirement-icon">💡</span>
                      <span>具备一定的市场分析能力</span>
                    </div>
                    <div class="requirement-item">
                      <span class="requirement-icon">🤝</span>
                      <span>良好的团队合作精神</span>
                    </div>
                    <div class="requirement-item">
                      <span class="requirement-icon">📈</span>
                      <span>有相关项目经验者优先</span>
                    </div> -->
                  </div>
                </a-collapse-panel>
                <a-collapse-panel key="5" header="文案部招新要求">
                  <div class="requirements-list">
                    <div class="requirement-item">
                      <span class="requirement-icon">📝</span>
                      <span>具备一定的文案功底</span>
                    </div>
                    <div class="requirement-item">
                      <span class="requirement-icon">🎨</span>
                      <span>对文案有浓厚兴趣</span>
                    </div>
                    <div class="requirement-item">
                      <span class="requirement-icon">📚</span>
                      <span>具备良好的文字功底</span>
                    </div>
                    <div class="requirement-item">
                      <span class="requirement-icon">💡</span>
                      <span>有较强的表达能力</span>
                    </div>
                  </div>
                </a-collapse-panel>
              </a-collapse>
            </div>
          </a-col>
          <a-col :xs="24" :lg="12">
            <div class="recruitment-process">
              <h3>招新流程</h3>
              <a-steps direction="vertical" :current="0" size="small">
                <a-step title="准备相关信息" description="现在-9月10日">
                  <template #icon>
                    <span class="step-icon">📋</span>
                  </template>
                </a-step>
                <a-step title="报名申请" description="9月10日-10月10日">
                  <template #icon>
                    <span class="step-icon">📝</span>
                  </template>
                </a-step>
                <a-step title="技术笔试/面试考核" description="10月12/16日">
                  <template #icon>
                    <span class="step-icon">💻</span>
                  </template>
                </a-step>
                <a-step title="录取通知" description="10月18日">
                  <template #icon>
                    <span class="step-icon">🎉</span>
                  </template>
                </a-step>
              </a-steps>
              <div class="recruitment-actions">
                <a-button type="primary" size="large" class="recruit-btn">
                  立即报名
                </a-button>
                <!-- <a-button size="large" class="info-btn">
                  了解详情
                </a-button> -->
              </div>
              <div class="contact-card">
                <h4>联系我们</h4>
                <div class="contact-item">
                  <span class="contact-icon">📧</span>
                  <span>admin@2119.online</span>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">💬</span>
                  <span>QQ群：123456789</span>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>

    <!-- 页脚 -->
    <!-- <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>关于实验室</h4>
            <p>计算机创新实验室致力于培养具有创新精神和实践能力的高素质人才，为学生提供良好的学习环境和实践机会。</p>
          </div>
          <div class="footer-section">
            <h4>快速链接</h4>
            <ul>
              <li><a href="#">实验室简介</a></li>
              <li><a href="#">核心项目</a></li>
              <li><a href="#">团队成员</a></li>
              <li><a href="#">加入我们</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>联系方式</h4>
            <div class="footer-contact">
              <p>📧 lab@university.edu</p>
              <p>📞 +86-xxx-xxxx-xxxx</p>
              <p>📍 科技楼A座501室</p>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 计算机创新实验室. All rights reserved.</p>
        </div>
      </div>
    </footer> -->
  </a-config-provider>
</template>

<script>
// 辅助函数
const getTagColor = (tag) => {
  const colorMap = {
    '性能监控': 'blue',
    '系统优化': 'cyan',
    'Java': 'orange',
    '物联网': 'green',
    'AI算法': 'purple',
    '农业科技': 'lime',
    '运维自动化': 'red',
    '系统集成': 'geekblue',
    'DevOps': 'magenta',
    '微服务': 'volcano',
    'Spring Cloud': 'gold',
    '校园管理': 'blue',
    '区块链': 'cyan',
    '溯源技术': 'green',
    '智能合约': 'purple',
    '深度学习': 'red',
    '医疗AI': 'orange',
    '图像识别': 'pink'
  }
  return colorMap[tag] || 'default'
}
</script>

<style lang="less">
:root {
  --primary-color: #1890ff;
  --primary-light: #40a9ff;
  --primary-dark: #096dd9;
  --success-color: #52c41a;
  --warning-color: #faad14;
  --error-color: #ff4d4f;
  --text-primary: #262626;
  --text-secondary: #595959;
  --text-light: #8c8c8c;
  --bg-light: #fafafa;
  --bg-white: #ffffff;
  --border-color: #f0f0f0;
  --shadow-light: 0 2px 8px rgba(0, 0, 0, 0.06);
  --shadow-medium: 0 4px 16px rgba(0, 0, 0, 0.12);
  --shadow-heavy: 0 8px 24px rgba(0, 0, 0, 0.15);
  --border-radius: 8px;
  --border-radius-lg: 12px;
}
</style>
<style scoped lang="less">
// 引入动画库
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');

// 全局变量
// :root {
//   --primary-color: #1890ff;
//   --primary-light: #40a9ff;
//   --primary-dark: #096dd9;
//   --success-color: #52c41a;
//   --warning-color: #faad14;
//   --error-color: #ff4d4f;
//   --text-primary: #262626;
//   --text-secondary: #595959;
//   --text-light: #8c8c8c;
//   --bg-light: #fafafa;
//   --bg-white: #ffffff;
//   --border-color: #f0f0f0;
//   --shadow-light: 0 2px 8px rgba(0, 0, 0, 0.06);
//   --shadow-medium: 0 4px 16px rgba(0, 0, 0, 0.12);
//   --shadow-heavy: 0 8px 24px rgba(0, 0, 0, 0.15);
//   --border-radius: 8px;
//   --border-radius-lg: 12px;
// }

// 通用样式
* {
  box-sizing: border-box;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}

.section {
  padding: 80px 0;
  position: relative;

  &-title {
    text-align: center;
    margin-bottom: 16px;
    font-size: 36px;
    color: var(--text-primary);
    font-weight: 700;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, var(--primary-color), var(--primary-light));
      margin: 20px auto 0;
      border-radius: 2px;
    }
  }

  &-subtitle {
    text-align: center;
    font-size: 18px;
    color: var(--text-secondary);
    margin-bottom: 48px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
}

// 轮播图样式
.hero-carousel {
  height: 80vh;
  min-height: 600px;
  position: relative;
  overflow: hidden;

  :deep(.ant-carousel) {
    // height: 80vh;

    .slick-slide {
      position: relative;
      height: 80vh;
      min-height: 600px;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.6) 100%);
        z-index: 1;
      }
    }

    .slick-dots {
      bottom: 30px;
      z-index: 3;

      li button {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);

        &:hover {
          background: rgba(255, 255, 255, 0.8);
        }
      }

      .slick-active button {
        background: white;
      }
    }
  }
}

.carousel-item {
  position: relative;
  // height: 100%;
  // height: 100vh;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    filter: brightness(0.7);
  }
}

.carousel-content {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: white;
  z-index: 2;
  max-width: 600px;

  .carousel-text {
    animation: fadeInLeft 1s ease-out;
  }
}

.carousel-title {
  font-size: 56px;
  font-weight: 800;
  margin-bottom: 16px;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  line-height: 1.2;
}

.carousel-subtitle {
  font-size: 28px;
  margin-bottom: 12px;
  opacity: 0.95;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: 500;
}

.carousel-description {
  font-size: 18px;
  margin-bottom: 32px;
  opacity: 0.9;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  line-height: 1.6;
}

.carousel-actions {
  display: flex;
  gap: 16px;

  .cta-button,
  .cta-button-secondary {
    height: 48px;
    padding: 0 32px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 24px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
  }

  .cta-button-secondary {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.5);
    }
  }
}

// 实验室简介样式
.intro-section {
  background: linear-gradient(135deg, #f6f9fc 0%, #ffffff 100%);

  .intro-content {
    padding-right: 24px;
  }

  .intro-highlight {
    margin-bottom: 24px;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .highlight-badge {
    background: linear-gradient(45deg, var(--primary-color), var(--primary-light));
    color: white;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
  }

  .intro-text {
    font-size: 16px;
    line-height: 1.8;
    color: var(--text-secondary);
    margin-bottom: 32px;

    :deep(.ant-typography-paragraph) {
      margin-bottom: 16px;
    }
  }

  .intro-actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .learn-more-btn,
  .contact-btn {
    height: 48px;
    padding: 0 32px;
    font-size: 16px;
    font-weight: 500;
    border-radius: var(--border-radius);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-medium);
    }
  }

  .contact-btn {
    background: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);

    &:hover {
      background: var(--primary-color);
      color: white;
    }
  }
}

.intro-visual {
  position: relative;

  .intro-image {
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-heavy);
    width: 100%;
    transition: all 0.4s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  .intro-stats-mini {
    position: absolute;
    bottom: -20px;
    right: 20px;
    display: flex;
    gap: 12px;
  }

  .stat-mini {
    background: white;
    padding: 16px 20px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-medium);
    text-align: center;
    min-width: 80px;

    &-value {
      display: block;
      font-size: 20px;
      font-weight: 700;
      color: var(--primary-color);
      margin-bottom: 4px;
    }

    &-label {
      font-size: 12px;
      color: var(--text-light);
    }
  }
}

// 统计数字样式
.stats-section {
  background: var(--bg-light);
  padding: 80px 0;

  .stats-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 32px;
    max-width: 1000px;
    margin: 0 auto;
  }

  .stat-item {
    background: white;
    padding: 40px 24px;
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-light);
    text-align: center;
    transition: all 0.3s ease;
    border: 1px solid var(--border-color);

    &:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-heavy);
    }

    .stat-icon {
      font-size: 48px;
      margin-bottom: 16px;
      display: block;
    }

    .stat-value {
      font-size: 48px;
      font-weight: 800;
      background: linear-gradient(45deg, var(--primary-color), var(--primary-light));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 8px;
      display: block;
    }

    .stat-label {
      font-size: 16px;
      color: var(--text-secondary);
      font-weight: 500;
    }
  }
}

// 项目卡片样式
.features {
  .project-card {
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid var(--border-color);

    &:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-heavy);
    }

    .project-image-wrapper {
      position: relative;
      overflow: hidden;
      height: 240px;

      .project-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.4s ease;
      }

      .project-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: all 0.3s ease;
      }

      &:hover {
        .project-image {
          transform: scale(1.1);
        }

        .project-overlay {
          opacity: 1;
        }
      }

      .project-status {
        position: absolute;
        top: 12px;
        right: 12px;
        padding: 4px 12px;
        border-radius: 16px;
        font-size: 12px;
        font-weight: 500;
        color: white;

        &.进行中 {
          background: var(--primary-color);
        }

        &.已完成 {
          background: var(--success-color);
        }

        &.测试中 {
          background: var(--warning-color);
        }

        &.规划中 {
          background: var(--text-light);
        }
      }
    }

    :deep(.ant-card-meta) {
      padding: 24px;

      .ant-card-meta-title {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 12px;
        color: var(--text-primary);
      }
    }

    .project-content {
      .project-desc {
        color: var(--text-secondary);
        font-size: 14px;
        line-height: 1.6;
        margin-bottom: 16px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .project-meta {
        margin-bottom: 16px;

        .project-team {
          color: var(--text-light);
          font-size: 13px;
        }
      }

      .project-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        :deep(.ant-tag) {
          margin: 0;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
        }
      }
    }
  }
}

// 设施卡片样式
.facilities-section {
  .facility-card {
    background: white;
    border-radius: var(--border-radius-lg);
    padding: 32px 24px;
    text-align: center;
    box-shadow: var(--shadow-light);
    transition: all 0.3s ease;
    border: 1px solid var(--border-color);

    &:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-heavy);
    }

    .facility-icon {
      font-size: 48px;
      margin-bottom: 20px;
      display: block;
    }

    .facility-name {
      font-size: 20px;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 12px;
    }

    .facility-description {
      font-size: 14px;
      color: var(--text-secondary);
      line-height: 1.6;
    }
  }
}

// 新闻动态样式
.news-section {
  background: var(--bg-light);

  .news-list {
    .news-item {
      background: white;
      border-radius: var(--border-radius);
      padding: 24px;
      margin-bottom: 20px;
      box-shadow: var(--shadow-light);
      transition: all 0.3s ease;
      border: 1px solid var(--border-color);

      &:hover {
        transform: translateX(8px);
        box-shadow: var(--shadow-medium);
      }

      .news-category {
        display: inline-block;
        background: var(--primary-color);
        color: white;
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 500;
        margin-bottom: 12px;
      }

      .news-title {
        font-size: 18px;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 12px;
        line-height: 1.4;
      }

      .news-summary {
        font-size: 14px;
        color: var(--text-secondary);
        line-height: 1.6;
        margin-bottom: 16px;
      }

      .news-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 13px;
        color: var(--text-light);

        .news-author {
          font-weight: 500;
        }
      }
    }
  }

  .news-sidebar {
    .sidebar-widget {
      background: white;
      border-radius: var(--border-radius);
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: var(--shadow-light);
      border: 1px solid var(--border-color);

      h4 {
        font-size: 18px;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 16px;
        padding-bottom: 12px;
        border-bottom: 2px solid var(--border-color);
      }

      .quick-links {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          margin-bottom: 12px;

          a {
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 14px;
            transition: all 0.3s ease;

            &:hover {
              color: var(--primary-color);
              padding-left: 8px;
            }
          }
        }
      }

      .contact-info {
        p {
          margin-bottom: 12px;
          font-size: 14px;
          color: var(--text-secondary);
        }
      }
    }
  }
}

// 荣誉样式
.honors {
  :deep(.ant-tabs) {
    .ant-tabs-nav {
      margin-bottom: 40px;
    }

    .ant-tabs-tab {
      font-size: 16px;
      font-weight: 500;
    }
  }

  .honor-card {
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    transition: all 0.4s ease;
    border: 1px solid var(--border-color);

    &:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-heavy);
    }

    .honor-image-wrapper {
      position: relative;
      height: 300px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .honor-level {
        position: absolute;
        top: 12px;
        left: 12px;
        padding: 6px 12px;
        border-radius: 16px;
        font-size: 12px;
        font-weight: 500;
        color: white;

        &.national {
          background: var(--error-color);
        }

        &.provincial {
          background: var(--primary-color);
        }
      }
    }

    :deep(.ant-card-meta) {
      padding: 20px;

      .ant-card-meta-title {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 8px;
      }
    }

    .honor-info {
      .honor-award {
        color: var(--primary-color);
        font-weight: 500;
        margin-bottom: 4px;
      }

      .honor-date {
        color: var(--text-light);
        font-size: 13px;
      }
    }
  }

  .honor-text-list {
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow-light);

    :deep(.ant-list-item) {
      padding: 20px 24px;
      transition: all 0.3s ease;
      border-bottom: 1px solid var(--border-color);

      &:hover {
        background: #f0f7ff;
        transform: translateX(8px);
      }

      &:last-child {
        border-bottom: none;
      }
    }

    .honor-content {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      gap: 16px;

      .honor-main {
        flex: 1;

        .award-title {
          font-size: 16px;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 8px;
          line-height: 1.4;
        }

        .award-participants {
          font-size: 13px;
          color: var(--text-light);
        }
      }

      .honor-side {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 8px;

        .award-tag {
          margin: 0;
          font-size: 12px;
        }

        .award-date {
          font-size: 13px;
          color: var(--text-light);
        }
      }
    }
  }
}

// 软件著作权样式
.software-section {
  background: var(--bg-light);

  .software-card {
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    transition: all 0.4s ease;
    border: 1px solid var(--border-color);

    &:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-heavy);
    }

    .software-image-wrapper {
      position: relative;
      height: 280px;

      :deep(.ant-image) {
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .software-year {
        position: absolute;
        top: 12px;
        right: 12px;
        background: var(--primary-color);
        color: white;
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 500;
      }
    }

    :deep(.ant-card-meta) {
      padding: 20px;

      .ant-card-meta-title {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 12px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }

    .software-meta {
      .reg-info {
        margin-bottom: 12px;

        .reg-no {
          font-size: 13px;
          color: var(--text-secondary);
          margin-bottom: 4px;
        }

        .inventors {
          font-size: 12px;
          color: var(--text-light);
        }
      }

      :deep(.ant-tag) {
        margin: 0;
        font-size: 12px;
      }
    }
  }
}

// 加入我们样式
.join-us {
  background: linear-gradient(135deg, #f6f9fc 0%, #ffffff 100%);

  .recruitment-info {
    h3 {
      font-size: 24px;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 24px;
    }

    :deep(.ant-collapse) {
      background: white;
      border-radius: var(--border-radius);
      box-shadow: var(--shadow-light);
      border: 1px solid var(--border-color);

      .ant-collapse-header {
        font-size: 16px;
        font-weight: 500;
        padding: 16px 20px;
      }

      .ant-collapse-content {
        .ant-collapse-content-box {
          padding: 20px;
        }
      }
    }

    .requirements-list {
      .requirement-item {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 16px;
        font-size: 15px;
        color: var(--text-secondary);

        &:last-child {
          margin-bottom: 0;
        }

        .requirement-icon {
          font-size: 18px;
          width: 24px;
          text-align: center;
        }
      }
    }
  }

  .recruitment-process {
    h3 {
      font-size: 24px;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 24px;
    }

    :deep(.ant-steps) {
      .ant-steps-item {
        .ant-steps-item-title {
          font-size: 16px;
          font-weight: 500;
        }

        .ant-steps-item-description {
          font-size: 14px;
          color: var(--text-light);
        }
      }
    }

    .step-icon {
      font-size: 16px;
    }

    .recruitment-actions {
      margin: 32px 0;
      display: flex;
      gap: 16px;

      .recruit-btn,
      .info-btn {
        height: 48px;
        padding: 0 32px;
        font-size: 16px;
        font-weight: 500;
        border-radius: var(--border-radius);
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-medium);
        }
      }

      .info-btn {
        background: transparent;
        border: 2px solid var(--primary-color);
        color: var(--primary-color);

        &:hover {
          background: var(--primary-color);
          color: white;
        }
      }
    }

    .contact-card {
      background: white;
      border-radius: var(--border-radius);
      padding: 20px;
      box-shadow: var(--shadow-light);
      border: 1px solid var(--border-color);

      h4 {
        font-size: 16px;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 16px;
      }

      .contact-item {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 12px;
        font-size: 14px;
        color: var(--text-secondary);

        &:last-child {
          margin-bottom: 0;
        }

        .contact-icon {
          font-size: 16px;
          width: 20px;
          text-align: center;
        }
      }
    }
  }
}

// 页脚样式
// .footer {
//   background: #001529;
//   color: white;
//   padding: 60px 0 20px;

//   .footer-content {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//     gap: 40px;
//     margin-bottom: 40px;

//     .footer-section {
//       h4 {
//         font-size: 18px;
//         font-weight: 600;
//         margin-bottom: 20px;
//         color: white;
//       }

//       p {
//         color: rgba(255, 255, 255, 0.7);
//         line-height: 1.6;
//         font-size: 14px;
//       }

//       ul {
//         list-style: none;
//         padding: 0;
//         margin: 0;

//         li {
//           margin-bottom: 12px;

//           a {
//             color: rgba(255, 255, 255, 0.7);
//             text-decoration: none;
//             font-size: 14px;
//             transition: all 0.3s ease;

//             &:hover {
//               color: var(--primary-light);
//             }
//           }
//         }
//       }

//       .footer-contact {
//         p {
//           margin-bottom: 12px;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }
//       }
//     }
//   }

//   .footer-bottom {
//     border-top: 1px solid rgba(255, 255, 255, 0.1);
//     padding-top: 20px;
//     text-align: center;

//     p {
//       color: rgba(255, 255, 255, 0.5);
//       font-size: 14px;
//       margin: 0;
//     }
//   }
// }

// 动画效果
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  &.animate__animated {
    opacity: 1;
    transform: translateY(0);
  }
}

// 响应式设计
@media (max-width: 1200px) {
  .container {
    padding: 0 20px;
  }

  .section {
    padding: 60px 0;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }

  .section {
    padding: 40px 0;

    &-title {
      font-size: 28px;
      margin-bottom: 12px;
    }

    &-subtitle {
      font-size: 16px;
      margin-bottom: 32px;
    }
  }

  .hero-carousel {
    height: 60vh;
    min-height: 400px;

    :deep(.slick-slide) {
      height: 60vh;
      min-height: 400px;
    }
  }

  .carousel-content {
    left: 5%;
    right: 5%;
    max-width: none;
  }

  .carousel-title {
    font-size: 32px;
  }

  .carousel-subtitle {
    font-size: 20px;
  }

  .carousel-description {
    font-size: 16px;
  }

  .carousel-actions {
    flex-direction: column;
    align-items: flex-start;

    .cta-button,
    .cta-button-secondary {
      width: 100%;
      max-width: 200px;
    }
  }

  .stats-section {
    .stats-wrapper {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    .stat-item {
      padding: 24px 16px;

      .stat-value {
        font-size: 36px;
      }

      .stat-icon {
        font-size: 36px;
      }
    }
  }

  .intro-section {
    .intro-actions {
      justify-content: center;

      .learn-more-btn,
      .contact-btn {
        flex: 1;
        min-width: 120px;
      }
    }
  }

  .team-section {
    .team-card {
      padding: 24px 16px;

      .team-avatar img {
        width: 100px;
        height: 100px;
      }
    }
  }

  .news-section {
    .news-item {
      .news-meta {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
      }
    }
  }

  .honors {
    .honor-content {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;

      .honor-side {
        align-items: flex-start;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
      }
    }
  }

  .join-us {
    .recruitment-actions {
      flex-direction: column;

      .recruit-btn,
      .info-btn {
        width: 100%;
      }
    }
  }

  .footer {
    padding: 40px 0 20px;

    .footer-content {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
}

@media (max-width: 480px) {
  .carousel-title {
    font-size: 24px;
  }

  .carousel-subtitle {
    font-size: 16px;
  }

  .carousel-description {
    font-size: 14px;
  }

  .stats-section {
    .stats-wrapper {
      grid-template-columns: 1fr;
    }
  }

  .project-card {
    .project-image-wrapper {
      height: 200px;
    }
  }

  .honor-card {
    .honor-image-wrapper {
      height: 240px;
    }
  }

  .software-card {
    .software-image-wrapper {
      height: 240px;
    }
  }
}

// 打印样式
@media print {

  .hero-carousel,
  .carousel-content,
  .footer {
    display: none;
  }

  .section {
    padding: 20px 0;
    page-break-inside: avoid;
  }

  .project-card,
  .team-card,
  .honor-card,
  .software-card {
    box-shadow: none;
    border: 1px solid #ddd;
  }
}

// 深色模式支持
@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: #e6e6e6;
    --text-secondary: #b3b3b3;
    --text-light: #808080;
    --bg-light: #1a1a1a;
    --bg-white: #262626;
    --border-color: #404040;
  }

  .section {
    background: var(--bg-white);
  }

  .stats-section,
  .team-section,
  .news-section,
  .software-section {
    background: var(--bg-light);
  }

  .project-card,
  .team-card,
  .honor-card,
  .software-card,
  .facility-card,
  .news-item {
    background: var(--bg-white);
    border-color: var(--border-color);
  }
}
</style>
