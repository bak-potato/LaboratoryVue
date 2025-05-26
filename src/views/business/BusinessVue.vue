<template>
  <div class="innovation-page">
    <!-- 头部区域 - 添加了动画效果 -->
    <header class="header" :style="headerStyle">
      <div class="container">
        <div class="logo animate__animated animate__fadeInDown">实验室创新创业部</div>
        <div class="slogan animate__animated animate__fadeInUp animate__delay-1s">
          创新引领未来 · 创业成就梦想
        </div>
        <div class="scroll-indicator animate__animated animate__fadeIn animate__delay-2s">
          <span class="scroll-text">向下滚动</span>
          <i class="scroll-icon"></i>
        </div>
      </div>
    </header>

    <!-- 导航菜单 - 添加了滚动高亮效果 -->
    <nav class="nav" :class="{ 'sticky': isSticky }">
      <div class="container">
        <ul>
          <li v-for="(item, index) in navItems" :key="index">
            <a
              :href="'#' + item.id"
              :class="{ 'active': activeSection === item.id }"
              @click="handleNavClick(item.id)"
            >
              {{ item.text }}
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- 主要内容区域 -->
    <main class="main-content">
      <section
        id="about"
        class="section"
        ref="about"
        :class="{ 'animate__animated animate__fadeInUp': sectionVisible.about }"
      >
        <h2 class="section-title">
          <span class="title-decor"></span>
          部门简介
        </h2>
        <p class="content-text">{{ aboutContent.intro }}</p>

        <div class="highlight">
          <p class="quote-text">{{ aboutContent.quote }}</p>
        </div>

        <div class="achievement-grid">
          <div class="achievement-item" v-for="(item, index) in achievements" :key="index">
            <div class="achievement-number">{{ item.value }}</div>
            <div class="achievement-label">{{ item.label }}</div>
          </div>
        </div>
      </section>

      <section
        id="mission"
        class="section mission-section"
        ref="mission"
        :class="{ 'animate__animated animate__fadeInUp': sectionVisible.mission }"
      >
        <h2 class="section-title">
          <span class="title-decor"></span>
          使命与愿景
        </h2>

        <div class="mission-content">
          <div class="mission-card">
            <h3 class="mission-subtitle">
              <i class="icon icon-mission"></i>
              我们的使命
            </h3>
            <ul class="mission-list">
              <li v-for="(mission, index) in missions" :key="index">
                <i class="icon icon-check"></i>
                {{ mission }}
              </li>
            </ul>
          </div>

          <div class="vision-card">
            <h3 class="vision-subtitle">
              <i class="icon icon-vision"></i>
              我们的愿景
            </h3>
            <p class="vision-text">{{ vision }}</p>
          </div>
        </div>
      </section>

      <section
        id="activities"
        class="section"
        ref="activities"
        :class="{ 'animate__animated animate__fadeInUp': sectionVisible.activities }"
      >
        <h2 class="section-title">
          <span class="title-decor"></span>
          主要活动
        </h2>

        <div class="activity-tabs">
          <button
            v-for="(tab, index) in activityTabs"
            :key="index"
            :class="{ 'active': activeTab === tab.id }"
            @click="activeTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>

        <div class="tab-content">
          <div v-if="activeTab === 'regular'" class="team-grid">
            <div
              v-for="(activity, index) in activities"
              :key="index"
              class="activity-card"
              :style="{ '--hue': index * 60 }"
            >
              <div class="activity-icon">
                <i :class="activity.icon"></i>
              </div>
              <h3>{{ activity.title }}</h3>
              <p>{{ activity.description }}</p>
            </div>
          </div>

          <div v-if="activeTab === 'annual'" class="event-timeline">
            <div
              v-for="(event, index) in annualEvents"
              :key="index"
              class="timeline-item"
              :class="{ 'left': index % 2 === 0, 'right': index % 2 !== 0 }"
            >
              <div class="timeline-content">
                <div class="timeline-dot"></div>
                <div class="event-card">
                  <h4>{{ event.name }}</h4>
                  <div class="event-time">{{ event.time }}</div>
                  <p>{{ event.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="team"
        class="section team-section"
        ref="team"
        :class="{ 'animate__animated animate__fadeInUp': sectionVisible.team }"
      >
        <h2 class="section-title">
          <span class="title-decor"></span>
          团队介绍
        </h2>
        <p class="team-intro">{{ teamIntro }}</p>

        <div class="team-slider">
          <div class="slider-container" :style="sliderStyle">
            <div
              v-for="(member, index) in teamMembers"
              :key="index"
              class="team-member-card"
              :class="{ 'active': currentMemberIndex === index }"
            >
              <div class="member-image">
                <img :src="member.image" :alt="member.name">
                <div class="social-links">
                  <a v-for="(social, sIndex) in member.social" :key="sIndex" :href="social.url">
                    <i :class="social.icon"></i>
                  </a>
                </div>
              </div>
              <div class="member-info">
                <h3>{{ member.name }}</h3>
                <div class="member-position">{{ member.position }}</div>
                <p class="member-detail">{{ member.detail }}</p>
                <div class="member-skills">
                  <span v-for="(skill, skillIndex) in member.skills" :key="skillIndex">
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="slider-controls">
            <button @click="prevMember" class="slider-arrow left">
              <i class="icon icon-arrow-left"></i>
            </button>
            <div class="slider-dots">
              <span
                v-for="(dot, index) in teamMembers.length"
                :key="index"
                :class="{ 'active': currentMemberIndex === index }"
                @click="currentMemberIndex = index"
              ></span>
            </div>
            <button @click="nextMember" class="slider-arrow right">
              <i class="icon icon-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      <section
        id="join"
        class="section join-section"
        ref="join"
        :class="{ 'animate__animated animate__fadeInUp': sectionVisible.join }"
      >
        <h2 class="section-title">
          <span class="title-decor"></span>
          加入我们
        </h2>
        <p class="join-intro">{{ joinIntro }}</p>

        <div class="join-container">
          <div class="positions-container">
            <h3 class="join-subtitle">招募岗位</h3>
            <div class="position-list">
              <div
                v-for="(position, index) in recruitmentPositions"
                :key="index"
                class="position-card"
                @click="selectedPosition = index"
                :class="{ 'expanded': selectedPosition === index }"
              >
                <div class="position-header">
                  <h4>{{ position.title }}</h4>
                  <i class="icon" :class="selectedPosition === index ? 'icon-minus' : 'icon-plus'"></i>
                </div>
                <div class="position-content">
                  <p>{{ position.description }}</p>
                  <div class="position-requirements" v-if="position.requirements">
                    <h5>岗位要求:</h5>
                    <ul>
                      <li v-for="(req, reqIndex) in position.requirements" :key="reqIndex">
                        {{ req }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="benefits-container">
            <div class="benefits-card">
              <h3 class="benefits-title">加入我们可以获得</h3>
              <ul class="benefits-list">
                <li v-for="(benefit, index) in benefits" :key="index">
                  <i class="icon" :class="benefit.icon"></i>
                  <div>
                    <h5>{{ benefit.title }}</h5>
                    <p>{{ benefit.description }}</p>
                  </div>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </section>
    </main>



    <!-- 申请模态框 -->


    <!-- 返回顶部按钮 -->

  </div>
</template>
<!-- eslint-disable vue/block-lang -->

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'

// 响应式数据
const isSticky = ref(false)
const activeSection = ref('about')
const activeTab = ref('regular')
const currentMemberIndex = ref(0)
const selectedPosition = ref(0)
const showBackToTop = ref(false)

const sectionVisible = reactive({
  about: false,
  mission: false,
  activities: false,
  team: false,
  join: false
})

// 头部背景渐变效果
const headerStyle = computed(() => {
  const scrollY = window.scrollY || 0
  const opacity = Math.min(1 - scrollY / 300, 1)
  return {
    opacity: opacity,
    transform: `translateY(${Math.min(scrollY / 2, 50)}px)`
  }
})

// 团队成员滑动效果
const sliderStyle = computed(() => {
  return {
    transform: `translateX(-${currentMemberIndex.value * 100}%)`
  }
})

// 导航数据
const navItems = ref([
  { id: 'about', text: '部门简介' },
  { id: 'mission', text: '使命愿景' },
  { id: 'activities', text: '主要活动' },
  { id: 'team', text: '团队介绍' },
  { id: 'join', text: '加入我们' }
])

// 部门简介数据
const aboutContent = ref({
  intro: '实验室创新创业部成立于20XX年，是连接学术研究与产业应用的重要桥梁。我们致力于为实验室成员提供创新创业的平台和资源，促进科研成果转化，培养具有创新精神和创业能力的复合型人才。',
  quote: '在这里，创意不再只是纸上谈兵，而是有机会转化为改变世界的产品或服务。',
  achievement: '经过多年发展，我们已成功孵化XX个创业项目，获得XX项专利，并与XX家企业建立了合作关系，为实验室成员提供了丰富的实践机会。'
})

const achievements = ref([
  { value: 'XX+', label: '孵化项目' },
  { value: 'XX', label: '专利成果' },
  { value: 'XX+', label: '合作企业' },
  { value: '100%', label: '成员满意度' }
])

// 使命愿景数据
const missions = ref([
  '搭建实验室与产业界的沟通桥梁',
  '促进科研成果的商业化应用',
  '培养具有创新思维和创业能力的人才',
  '营造开放、协作的创新创业文化'
])

const vision = ref('成为国内领先的实验室创新创业平台，助力每一位有梦想的研究者将创意转化为现实，为社会创造价值。')

// 活动数据
const activityTabs = ref([
  { id: 'regular', label: '常规活动' },
  { id: 'annual', label: '年度活动' }
])

const activities = ref([
  {
    title: '创新工作坊',
    description: '定期举办创新思维训练、设计思维工作坊等活动，激发成员的创新潜能。',
    icon: 'icon icon-workshop'
  },
  {
    title: '创业沙龙',
    description: '邀请成功创业者、投资人、行业专家分享经验，搭建交流平台。',
    icon: 'icon icon-saloon'
  },
  {
    title: '项目孵化',
    description: '为有潜力的项目提供指导、资源和资金支持，助力项目落地。',
    icon: 'icon icon-incubate'
  },
  {
    title: '竞赛指导',
    description: '组织参加各类创新创业大赛，提供专业培训和辅导。',
    icon: 'icon icon-competition'
  }
])

const annualEvents = ref([
  {
    name: '春季创新挑战赛',
    time: '每年3月-5月',
    description: '为期两个月的创新竞赛，鼓励成员提出创新解决方案，评选优秀项目。'
  },
  {
    name: '暑期创业训练营',
    time: '每年7月-8月',
    description: '为期一个月的密集培训，邀请创业导师指导，帮助项目快速成型。'
  },
  {
    name: '秋季科技成果展',
    time: '每年10月',
    description: '展示实验室一年来的创新成果，吸引投资人和企业关注。'
  },
  {
    name: '年度创新创业论坛',
    time: '每年12月',
    description: '汇聚行业领袖、学者和创新者，共同探讨创新创业趋势和机遇。'
  }
])

// 团队数据
const teamIntro = ref('我们的团队由来自不同研究背景的实验室成员组成，既有科研经验丰富的博士生，也有充满创意的硕士生和本科生。')

const teamMembers = ref([
  {
    image: 'https://via.placeholder.com/300x300',
    name: '张教授',
    position: '部门指导老师',
    detail: '人工智能与大数据领域专家，拥有10年科研和产业经验。',
    skills: ['人工智能', '大数据', '机器学习'],
    social: [
      { icon: 'icon icon-linkedin', url: '#' },
      { icon: 'icon icon-google-scholar', url: '#' },
      { icon: 'icon icon-email', url: '#' }
    ]
  },
  {
    image: 'https://via.placeholder.com/300x300',
    name: '李博士',
    position: '部门负责人',
    detail: '成功孵化2个创业项目，拥有丰富的创业指导和项目管理经验。',
    skills: ['项目管理', '创业指导', '商业策划'],
    social: [
      { icon: 'icon icon-linkedin', url: '#' },
      { icon: 'icon icon-twitter', url: '#' },
      { icon: 'icon icon-email', url: '#' }
    ]
  },
  {
    image: 'https://via.placeholder.com/300x300',
    name: '王同学',
    position: '活动策划组组长',
    detail: '组织过10+场创新活动，擅长活动策划和团队协作。',
    skills: ['活动策划', '团队协作', '创意设计'],
    social: [
      { icon: 'icon icon-instagram', url: '#' },
      { icon: 'icon icon-twitter', url: '#' },
      { icon: 'icon icon-email', url: '#' }
    ]
  },
  {
    image: 'https://via.placeholder.com/300x300',
    name: '赵同学',
    position: '项目孵化组组长',
    detail: '协助5个项目成功落地，熟悉项目孵化和资源对接。',
    skills: ['项目孵化', '资源对接', '市场分析'],
    social: [
      { icon: 'icon icon-linkedin', url: '#' },
      { icon: 'icon icon-github', url: '#' },
      { icon: 'icon icon-email', url: '#' }
    ]
  }
])

// 加入我们数据
const joinIntro = ref('无论你是想寻找创业伙伴，还是希望提升创新能力，或是单纯对创新创业感兴趣，都欢迎加入我们！')

const recruitmentPositions = ref([
  {
    title: '项目组成员',
    description: '参与具体创新项目的研发和实施，与团队一起将创意转化为现实。',
    requirements: [
      '对创新创业有浓厚兴趣',
      '具备一定的专业背景或技能',
      '良好的团队合作精神',
      '每周能投入8小时以上'
    ]
  },
  {
    title: '活动策划',
    description: '负责部门各类活动的组织和执行，包括工作坊、沙龙、竞赛等。',
    requirements: [
      '优秀的组织和协调能力',
      '创意丰富，思维活跃',
      '有活动策划经验者优先',
      '良好的沟通表达能力'
    ]
  },
  {
    title: '对外联络',
    description: '与企业、投资机构等外部资源对接，建立和维护合作关系。',
    requirements: [
      '良好的沟通和社交能力',
      '熟悉商务礼仪和谈判技巧',
      '有相关资源者优先',
      '责任心强'
    ]
  },
  {
    title: '宣传推广',
    description: '负责部门品牌建设和新媒体运营，提升部门影响力。',
    requirements: [
      '熟悉社交媒体运营',
      '具备一定的文案写作能力',
      '会使用设计软件者优先',
      '对品牌建设有见解'
    ]
  }
])

const benefits = ref([
  {
    title: '实践机会',
    description: '参与真实项目，积累宝贵经验',
    icon: 'icon icon-experience'
  },
  {
    title: '专业指导',
    description: '获得创业导师一对一指导',
    icon: 'icon icon-mentor'
  },
  {
    title: '人脉网络',
    description: '结识行业专家和优秀同龄人',
    icon: 'icon icon-network'
  },
  {
    title: '融资渠道',
    description: '优秀项目可获得投资机会',
    icon: 'icon icon-funding'
  }
])



// 方法定义
const handleNavClick = (sectionId) => {
  activeSection.value = sectionId
  const element = document.getElementById(sectionId)
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    })
  }
}

const prevMember = () => {
  currentMemberIndex.value = (currentMemberIndex.value - 1 + teamMembers.value.length) % teamMembers.value.length
}

const nextMember = () => {
  currentMemberIndex.value = (currentMemberIndex.value + 1) % teamMembers.value.length
}


// 滚动监听
const handleScroll = () => {
  // 导航条固定
  isSticky.value = window.scrollY > 100

  // 返回顶部按钮显示
  showBackToTop.value = window.scrollY > 500

  // 区域可见性检测
  const scrollPosition = window.scrollY + window.innerHeight / 2
  sectionVisible.about = scrollPosition > document.getElementById('about')?.offsetTop
  sectionVisible.mission = scrollPosition > document.getElementById('mission')?.offsetTop
  sectionVisible.activities = scrollPosition > document.getElementById('activities')?.offsetTop
  sectionVisible.team = scrollPosition > document.getElementById('team')?.offsetTop
  sectionVisible.join = scrollPosition > document.getElementById('join')?.offsetTop

  // 更新当前活动区域
  const sections = ['about', 'mission', 'activities', 'team', 'join']
  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = section
        break
      }
    }
  }
}

// 生命周期钩子
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // 初始触发一次
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* 基础样式 */
.innovation-page {
  font-family: 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9fafc;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 头部样式 - 更现代的设计 */
.header {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 8rem 0 10rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;
  background-attachment: fixed;
}

.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==');
}

.logo {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  animation: bounce 2s infinite;
}

.logo::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: #4facfe;
  border-radius: 2px;
}

@keyframes bounce {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }
}

.slogan {
  font-size: 1.5rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  font-weight: 300;
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.scroll-text {
  font-size: 0.9rem;
  margin-bottom: 10px;
  opacity: 0.8;
}

.scroll-icon {
  width: 20px;
  height: 30px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  position: relative;
}

.scroll-icon::before {
  content: '';
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 8px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 2px;
  animation: scrollAnimation 2s infinite;
}

@keyframes scrollAnimation {
  0% {
    opacity: 1;
    transform: translateY(0) translateX(-50%);
  }

  100% {
    opacity: 0;
    transform: translateY(10px) translateX(-50%);
  }
}

/* 导航样式 - 毛玻璃效果 */
.nav {
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.nav.sticky {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

.nav li {
  padding: 1.2rem 2rem;
}

.nav a {
  text-decoration: none;
  color: #555;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
}

.nav a:hover {
  color: #1e3c72;
}

.nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #1e3c72, #2a5298);
  transition: width 0.3s ease;
}

.nav a:hover::after {
  width: 100%;
}

.nav a.active {
  color: #1e3c72;
  font-weight: 600;
}

.nav a.active::after {
  width: 100%;
}

/* 内容区域样式 - 卡片式设计 */
.main-content {
  margin: 0 auto;
  padding: 2rem 0;
  max-width: 1200px;
}

.section {
  background-color: white;
  margin: 2rem 0;
  padding: 3rem 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.section:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, #1e3c72, #2a5298);
}

.section-title {
  color: #1e3c72;
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
}

.title-decor {
  display: inline-block;
  width: 30px;
  height: 4px;
  background: linear-gradient(90deg, #1e3c72, #2a5298);
  margin-right: 15px;
  vertical-align: middle;
  border-radius: 2px;
}

.content-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
}

/* 高亮区域样式 */
.highlight {
  background-color: #f8faff;
  padding: 2rem;
  border-left: 4px solid #4facfe;
  margin: 2rem 0;
  border-radius: 0 8px 8px 0;
  position: relative;
}

.highlight::before {
  content: '"';
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 4rem;
  color: rgba(79, 172, 254, 0.1);
  font-family: serif;
  line-height: 1;
}

.quote-text {
  font-size: 1.2rem;
  font-style: italic;
  color: #1e3c72;
  position: relative;
  z-index: 1;
  line-height: 1.8;
}

/* 成就统计样式 - 网格布局 */
.achievement-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.achievement-item {
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;
}

.achievement-item:hover {
  transform: translateY(-3px);
}

.achievement-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3c72;
  margin-bottom: 0.5rem;
}

.achievement-label {
  font-size: 1rem;
  color: #666;
}

/* 活动标签样式 */
.activity-tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.activity-tabs button {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 25px;
  background-color: #f5f7fa;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.activity-tabs button.active {
  background: linear-gradient(90deg, #1e3c72, #2a5298);
  color: white;
  box-shadow: 0 2px 8px rgba(30, 60, 114, 0.2);
}

/* 活动卡片样式 */
.activity-card {
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  background-color: white;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
}

.activity-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.activity-card .activity-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f5ff;
  color: #1e3c72;
  font-size: 1.8rem;
}

/* 团队滑块样式 */
.team-slider {
  overflow: hidden;
  margin: 2rem 0;
  position: relative;
}

.slider-container {
  display: flex;
  transition: transform 0.5s ease;
}

.team-member-card {
  flex: 0 0 100%;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.member-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.5rem;
  position: relative;
  border: 5px solid #f0f5ff;
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.social-links {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}

.social-links a {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #1e3c72;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: #2a5298;
  transform: translateY(-3px);
}

.slider-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
}

.slider-arrow {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: #f0f5ff;
  color: #1e3c72;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.slider-arrow:hover {
  background: #1e3c72;
  color: white;
}

.slider-dots {
  display: flex;
  gap: 8px;
}
.slider-arrow.left {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231e3c72'><path d='M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z'/></svg>");
  background-repeat: no-repeat;
  background-position: center;
}

.slider-arrow.right {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231e3c72'><path d='M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z'/></svg>");
  background-repeat: no-repeat;
  background-position: center;
}

.slider-arrow:hover {
  background-color: #1e3c72;
}

.slider-arrow:hover.left {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'><path d='M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z'/></svg>");
}

.slider-arrow:hover.right {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'><path d='M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z'/></svg>");
}
.slider-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ddd;
  transition: all 0.3s ease;
  cursor: pointer;
}

.slider-dots span.active {
  width: 24px;
  background: linear-gradient(90deg, #1e3c72, #2a5298);
  border-radius: 6px;
}

/* 加入我们样式 */
.join-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.position-card {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.position-card:hover {
  border-color: #cbd5e1;
}

.position-header {
  padding: 1.5rem;
  background-color: #f8fafc;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.position-card.expanded .position-header {
  background-color: #f0f5ff;
}

.position-content {
  padding: 0 1.5rem;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.position-card.expanded .position-content {
  padding: 1.5rem;
  max-height: 500px;
}

.benefits-card {
  background: linear-gradient(135deg, #f8faff 0%, #eef2ff 100%);
  padding: 2rem;
  border-radius: 10px;
  height: 100%;
}

.benefits-list li {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: flex-start;
}

.benefits-list i {
  font-size: 1.5rem;
  color: #1e3c72;
  margin-top: 0.3rem;
}

.apply-btn {
  background: linear-gradient(90deg, #1e3c72, #2a5298);
  color: white;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s ease;
  margin-top: 2rem;
  font-weight: 500;
}

.apply-btn:hover {
  transform: translateX(5px);
  box-shadow: 0 5px 15px rgba(30, 60, 114, 0.3);
}

/* 页脚样式 */
.footer {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 5rem 0 0;
  margin-top: 5rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

.footer-logo {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.footer-logo::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 50px;
  height: 3px;
  background: #4facfe;
}

.footer-description {
  opacity: 0.8;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.footer-social {
  display: flex;
  gap: 0.8rem;
}

.footer-social a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.footer-social a:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.link-group h4 {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.link-group h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: #4facfe;
}

.link-group ul {
  list-style: none;
  padding: 0;
}

.link-group li {
  margin-bottom: 0.8rem;
}

.contact-list li {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.newsletter-form {
  display: flex;
  margin-top: 1rem;
}

.newsletter-form input {
  flex: 1;
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 25px 0 0 25px;
}

.newsletter-form button {
  width: 50px;
  border: none;
  border-radius: 0 25px 25px 0;
  background: #4facfe;
  color: white;
  cursor: pointer;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  margin-top: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.legal-links {
  margin-top: 1rem;
  display: flex;
  gap: 1.5rem;
}

/* 模态框样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter: blur(5px);
}

.apply-modal {
  background-color: white;
  border-radius: 15px;
  padding: 2.5rem;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  animation: modalFadeIn 0.3s ease;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: #f5f7fa;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-title {
  text-align: center;
  margin-bottom: 2rem;
  color: #1e3c72;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #1e3c72;
  box-shadow: 0 0 0 3px rgba(30, 60, 114, 0.1);
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background: linear-gradient(90deg, #1e3c72, #2a5298);
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(30, 60, 114, 0.3);
}

.submit-btn::after {
  content: '';
  position: absolute;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2));
  transition: left 0.5s ease;
}

.submit-btn:hover::after {
  left: 100%;
}

/* 返回顶部按钮 */
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  color: white;
  border: none;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
}

.back-to-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header {
    padding: 5rem 0 7rem;
  }

  .logo {
    font-size: 2.2rem;
  }

  .slogan {
    font-size: 1.2rem;
  }

  .nav li {
    padding: 1rem 1.2rem;
  }

  .section {
    padding: 2rem 1.5rem;
  }

  .join-container {
    grid-template-columns: 1fr;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }

  .team-slider {
    margin: 1rem 0;
  }

  .slider-arrow {
    width: 35px;
    height: 35px;
  }
}

@media (max-width: 480px) {
  .nav ul {
    flex-wrap: wrap;
  }

  .nav li {
    padding: 0.8rem 1rem;
  }

  .achievement-grid {
    grid-template-columns: 1fr 1fr;
  }

  .activity-tabs {
    flex-wrap: wrap;
  }

  .activity-tabs button {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
