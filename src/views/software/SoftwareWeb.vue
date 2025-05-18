<template>
  <a-layout class="lab-frontend-container">
    <!-- 内容区域 -->
    <a-layout-content class="content">
      <!-- 首页内容 -->
      <div v-if="currentView === 'home'" class="home-view">
        <a-row :gutter="[16, 16]">
          <a-col :span="24">
            <a-card
              class="welcome-card"
              :bordered="false"
              :headStyle="{borderBottom: 'none', padding: '24px 24px 0'}"
            >
              <template #title>
                <div class="welcome-title">
                  <h1>欢迎来到实验室前端组</h1>
                  <p class="subtitle">创新 · 协作 · 卓越</p>
                </div>
              </template>

              <div class="welcome-content">
                <p class="intro-text">我们是一支专注于前端技术研发的团队，致力于打造高效、美观、易用的Web应用。</p>
                <div class="stats-container">
                  <div class="stat-item">
                    <user-outlined class="stat-icon" />
                    <span class="stat-number">{{ teamMembers.length }}</span>
                    <span class="stat-label">团队成员</span>
                  </div>
                  <div class="stat-item">
                    <project-outlined class="stat-icon" />
                    <span class="stat-number">{{ activeProjectsCount }}</span>
                    <span class="stat-label">活跃项目</span>
                  </div>
                  <div class="stat-item">
                    <code-outlined class="stat-icon" />
                    <span class="stat-number">{{ technologies.length }}</span>
                    <span class="stat-label">核心技术</span>
                  </div>
                </div>

                <div class="action-buttons">
                  <a-button
                    type="primary"
                    @click="currentView = 'team'"
                    class="mr-4 action-btn"
                    size="large"
                  >
                    <template #icon><team-outlined /></template>
                    查看团队成员
                  </a-button>
                  <a-button
                    @click="currentView = 'projects'"
                    class="action-btn"
                    size="large"
                  >
                    <template #icon><project-outlined /></template>
                    查看项目成果
                  </a-button>
                </div>
              </div>
            </a-card>
          </a-col>
        </a-row>

        <a-row :gutter="[16, 16]" class="info-row">
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-card
  title="技术栈"
  class="tech-card"
  :headStyle="{ borderBottom: 'none', paddingBottom: '24px' }"
>
  <div class="tech-stack-grid" >
      <a-card
      v-for="item in technologies"
      :key="item.name"
      :hoverable="true"
      class="tech-item-card"

      :style="{ width: '25%', minWidth: '180px' }"
    >
      <div class="tech-icon-container">
        <code-outlined class="tech-icon" />
      </div>
      <div class="tech-content">
        <h4 class="tech-name">{{ item.name }}</h4>
        <p class="tech-version">v{{ item.version }}</p>
        <p class="tech-desc">{{ item.description }}</p>
      </div>
    </a-card>
  </div>
</a-card>
          </a-col>

          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-card
              title="部门简介"
              class="intro-card"
              :headStyle="{borderBottom: 'none'}"
            >
              <div class="intro-content">
                <p class="intro-text">
                  我们实验室前端组成立于2023年，是一支专注于Web前端技术研究与实践的专业团队。
                  团队现有8名成员，涵盖从资深工程师到新锐开发者的完整梯队，具备丰富的大型项目开发经验。
                </p>
                <p class="intro-text">
                  秉持"技术驱动、用户体验至上"的理念，我们不断探索前沿技术，持续优化开发流程，
                  致力于为实验室打造兼具美观与实用性的高质量Web应用。
                </p>

                <div class="tech-stack-section">
                  <h3 class="section-title">核心技术栈</h3>
                  <div class="tech-grid">
                    <div class="tech-item-card" v-for="(tech, index) in coreTechnologies" :key="index">
                      <div class="tech-icon-wrapper">
                        <component :is="tech.icon" class="tech-svg-icon" />
                      </div>
                      <p class="tech-label">{{ tech.name }}</p>
                    </div>
                  </div>
                </div>

                <div class="milestone-section">
                  <h3 class="section-title">2025年上半年里程碑</h3>
                  <div class="timeline-container">
                    <div class="timeline-line"></div>

                    <div class="timeline-item" v-for="(item, index) in milestones" :key="index">
                      <div class="timeline-dot" :class="`dot-${item.color}`"></div>
                      <div class="timeline-content" :class="`content-${item.color}`">
                        <span class="timeline-date">{{ item.date }}</span>
                        <p class="timeline-text">{{ item.text }}</p>
                        <div v-if="item.subItems" class="timeline-subitems">
                          <p v-for="(subItem, subIndex) in item.subItems" :key="subIndex" class="timeline-subtext">
                            {{ subItem }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="culture-section">
                  <h3 class="section-title">团队文化</h3>
                  <div class="culture-tags">
                    <span v-for="(tag, index) in cultureTags" :key="index" class="culture-tag">
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </a-card>
          </a-col>
        </a-row>
      </div>

      <!-- 团队成员 -->
      <div v-if="currentView === 'team'" class="team-view">
        <a-page-header
          class="page-header"
          title="团队成员"
          sub-title="我们的技术专家"
          @back="() => currentView = 'home'"
        />
        <a-row :gutter="[16, 16]" class="team-grid">
          <a-col
            v-for="member in teamMembers"
            :key="member.id"
            :xs="24" :sm="12" :md="8" :lg="8" :xl="6"
          >
            <a-card hoverable class="member-card">
              <template #cover>
                <div class="member-cover">
                  <img alt="avatar" :src="member.avatar" />
                  <div class="member-role">{{ member.role }}</div>
                </div>
              </template>
              <a-card-meta :title="member.name" :description="member.bio">
                <template #avatar>
                  <a-avatar :src="member.avatar" size="large" />
                </template>
              </a-card-meta>
              <div class="member-skills">
                <a-tag
                  v-for="skill in member.skills"
                  :key="skill"
                  class="skill-tag"
                >
                  {{ skill }}
                </a-tag>
              </div>
              <div class="member-footer">
                <calendar-outlined />
                <span class="join-date">加入时间: {{ formatDate(member.joinDate) }}</span>
              </div>
            </a-card>
          </a-col>
        </a-row>
      </div>

      <!-- 项目展示 -->
      <div v-if="currentView === 'projects'" class="projects-view">
        <a-page-header
          class="page-header"
          title="项目展示"
          sub-title="我们的成果"
          @back="() => currentView = 'home'"
        />
        <a-table
          :columns="projectColumns"
          :data-source="projects"
          row-key="name"
          class="project-table"
          :pagination="{ pageSize: 5 }"
        >
          <template #status="{ text }">
            <a-tag :color="getStatusColor(text)" class="status-tag">
              {{ text }}
            </a-tag>
          </template>
          <template #techStack="{ text }">
            <a-space>
              <a-tag v-for="tech in text" :key="tech" class="tech-tag">
                {{ tech }}
              </a-tag>
            </a-space>
          </template>
          <template #action="{ record }">
            <a-button type="link" size="small" @click="viewProjectDetails(record)">
              查看详情
            </a-button>
          </template>
        </a-table>
      </div>
    </a-layout-content>

    <!-- 页脚 -->
    <a-layout-footer class="footer">
      <div class="footer-content">
        <div class="footer-links">
          <a href="#" class="footer-link">关于我们</a>
          <a href="#" class="footer-link">联系方式</a>
          <a href="#" class="footer-link">加入团队</a>
        </div>
        <div class="footer-copyright">
          实验室前端组 ©2023-{{ new Date().getFullYear() }} - 使用 Vue3 + Ant Design Vue 构建
        </div>
      </div>
    </a-layout-footer>
  </a-layout>
</template>
<!-- eslint-disable vue/block-lang -->

<script setup>
import { ref, computed } from 'vue'
import dayjs from 'dayjs'
import {
  CodeOutlined,
  CalendarOutlined,
  TeamOutlined,
  ProjectOutlined,
  UserOutlined,
  CodeSandboxOutlined,
  SafetyOutlined,
  ApiOutlined,
  GithubOutlined,
  RocketOutlined
} from '@ant-design/icons-vue'

// 当前视图状态
const currentView = ref('home')

// 团队成员数据
const teamMembers = ref([
  {
    id: 1,
    name: '宋洪乐',
    role: '前端负责人',
    bio: '10年前端开发经验，精通Vue和React生态',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    skills: ['Vue3', 'React', 'TypeScript', '架构设计'],
    joinDate: '2020-05-10'
  },
  {
    id: 2,
    name: '褚馨璐',
    role: 'UI开发专家',
    bio: '专注用户体验与界面设计，CSS魔法师',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    skills: ['CSS3', 'Less/Sass', 'UI设计', '动效开发'],
    joinDate: '2021-03-15'
  },
  {
    id: 3,
    name: '许致豪',
    role: '全栈开发',
    bio: '前后端通吃，DevOps实践者',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    skills: ['Vue3', 'Node.js', 'Docker', '微服务'],
    joinDate: '2019-11-20'
  },
  {
    id: 4,
    name: '孟皓雪',
    role: '前端开发',
    bio: '性能优化专家，前端工程化实践者',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    skills: ['JavaScript', 'Webpack', '性能优化', 'CI/CD'],
    joinDate: '2022-01-15'
  },
  {
    id: 5,
    name: '孙山清',
    role: '移动端开发',
    bio: '跨平台应用开发，React Native专家',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    skills: ['React Native', 'Flutter', 'Hybrid App', 'PWA'],
    joinDate: '2021-07-22'
  }
])

// 技术栈数据
const technologies = ref([
  { name: 'Vue 3', version: '3.3+', description: '渐进式前端框架' },
  { name: 'Pinia', version: '2.1+', description: 'Vue官方状态管理' },
  { name: 'Vite', version: '4.x', description: '下一代前端工具链' },
  { name: 'JavaScript', version: 'ES2022+', description: '核心语言' },
  { name: 'TypeScript', version: '5.x', description: 'JavaScript类型超集' },
  { name: 'React', version: '18.x', description: 'Facebook前端框架' },
  { name: 'Next.js', version: '13.x', description: 'React服务端渲染框架' },
  { name: 'Node.js', version: '18.x', description: 'JavaScript运行时' }
])

// 核心技术栈展示
const coreTechnologies = ref([
  { name: 'Vue3 + Vite', icon: CodeSandboxOutlined, color: 'green' },
  { name: 'React + TS', icon: SafetyOutlined, color: 'blue' },
  { name: '微前端', icon: ApiOutlined, color: 'purple' },
  { name: 'CI/CD', icon: GithubOutlined, color: 'gray' },
  { name: 'Node.js', icon: CodeOutlined, color: 'orange' },
  { name: '性能优化', icon: RocketOutlined, color: 'red' }
])

// 里程碑数据
const milestones = ref([
  {
    date: '2025年1月',
    text: '临界拓池项目前端开发',
    color: 'blue'
  },
  {
    date: '2025年3月',
    text: '风花雪月项目界面设计',
    color: 'orange'
  },
  {
    date: '2025年4月',
    text: '星海韵梦项目前端开发',
    color: 'purple',
    subItems: [
      '推星予瞳项目界面实现',
      '调星破影项目前端开发'
    ]
  },
  {
    date: '2025年5-6月',
    text: '慧流立方体前端实现',
    color: 'indigo',
    subItems: [
      '流影结合项目开发',
      '智图分析界面设计'
    ]
  }
])

// 团队文化标签
const cultureTags = ref([
  '技术分享会', '代码Review', 'Hackathon', '开源贡献',
  '敏捷开发', '持续学习', '创新思维', '团队协作'
])

// 项目数据
const projects = ref([
  {
    name: '实验室管理系统',
    status: '进行中',
    techStack: ['Vue3', 'Pinia', 'Ant Design'],
    description: '实验室综合管理平台，包含人员、设备、项目等模块',
    progress: 65,
    startDate: '2024-01-15',
    endDate: '2024-06-30'
  },
  {
    name: '数据分析平台',
    status: '已完成',
    techStack: ['Vue3', 'OpenTiny', 'ECharts'],
    description: '可视化数据分析工具，支持多种图表展示',
    progress: 100,
    startDate: '2023-09-01',
    endDate: '2023-12-15'
  },
  {
    name: '移动端H5应用',
    status: '规划中',
    techStack: ['Vue3', 'Vant'],
    description: '实验室移动端门户，适配各种移动设备',
    progress: 0,
    startDate: '2024-07-01',
    endDate: '2024-09-30'
  },
  {
    name: '智能监控系统',
    status: '进行中',
    techStack: ['React', 'TypeScript', 'Ant Design'],
    description: '实验室设备实时监控与预警系统',
    progress: 30,
    startDate: '2024-03-01',
    endDate: '2024-08-31'
  },
  {
    name: '知识库平台',
    status: '规划中',
    techStack: ['Next.js', 'Tailwind CSS'],
    description: '实验室知识管理与分享平台',
    progress: 0,
    startDate: '2024-10-01',
    endDate: '2025-01-31'
  }
])

// 项目表格列定义
const projectColumns = ref([
  {
    title: '项目名称',
    dataIndex: 'name',
    key: 'name',
    width: '20%'
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    width: '15%',
    slots: { customRender: 'status' },
  },
  {
    title: '技术栈',
    dataIndex: 'techStack',
    key: 'techStack',
    width: '35%',
    slots: { customRender: 'techStack' },
  },
  {
    title: '进度',
    dataIndex: 'progress',
    key: 'progress',
    width: '15%',
    slots: { customRender: 'progress' }
  },
  {
    title: '操作',
    key: 'action',
    width: '15%',
    slots: { customRender: 'action' },
  }
])

// 计算属性
const activeProjectsCount = computed(() => {
  return projects.value.filter(p => p.status !== '已完成').length
})

// 方法
const formatDate = (date) => {
  return dayjs(date).format('YYYY年MM月DD日')
}

const getStatusColor = (status) => {
  const map = {
    '已完成': 'green',
    '进行中': 'blue',
    '规划中': 'orange'
  }
  return map[status] || 'gray'
}

const viewProjectDetails = (project) => {
  // 这里可以添加查看项目详情的逻辑
  console.log('查看项目详情:', project)
}
</script>

<style scoped>

/* 基础布局样式 */
.lab-frontend-container {
  min-height: 100vh;
  background-color: #f5f7fa;
}

.content {
  padding: 20px;
  min-height: calc(100vh - 64px);
  max-width: 1200px;
  margin: 0 auto;
}

/* 欢迎卡片样式 */
.welcome-card {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.welcome-title h1 {
  font-size: 2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0;
}

.welcome-title .subtitle {
  color: #7f8c8d;
  font-size: 1rem;
  margin-top: 4px;
}

.welcome-content {
  padding: 0 24px 24px;
}

.intro-text {
  font-size: 1.1rem;
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 24px;
}

.stats-container {
  display: flex;
  justify-content: space-around;
  margin: 24px 0;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-icon {
  font-size: 28px;
  color: #3498db;
  margin-bottom: 8px;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  line-height: 1;
}

.stat-label {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-top: 4px;
}

.action-buttons {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

.action-btn {
  min-width: 180px;
  height: 48px;
  font-size: 1.1rem;
  border-radius: 8px;
}

/* 技术卡片样式 */
.tech-card {
  border-radius: 12px;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.tech-item {
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
}

.tech-item:last-child {
  border-bottom: none;
}

.tech-tag {
  display: flex;
  align-items: center;
}

.tech-name {
  font-weight: 500;
  color: #2c3e50;
}

.tech-version {
  margin-left: 8px;
  font-size: 0.8rem;
  color: #7f8c8d;
}

.tech-icon {
  width: 40px;
  height: 40px;
  display: flex;
  margin: 0px auto;
  align-items: center;
  justify-content: center;
  background-color: #e3f2fd;
  border-radius: 8px;
  color: #1976d2;
  font-size: 18px;
}

/* 部门简介卡片样式 */
.intro-card {
  border-radius: 12px;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.intro-content {
  padding: 8px;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 24px 0 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
}

.tech-stack-section {
  margin-top: 32px;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.tech-item-card {
  background-color: #f8fafc;
  border-radius: 8px;
  margin: 14px;
  padding: 16px;
  text-align: center;
  transition: all 0.3s ease;
}

.tech-item-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.tech-icon-wrapper {
  width: 48px;
  height: 48px;
  margin: 0 auto 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e3f2fd;
  border-radius: 50%;
}

.tech-svg-icon {
  font-size: 24px;
  color: #1976d2;
}

.tech-label {
  font-size: 0.9rem;
  color: #34495e;
  margin-top: 4px;
}

/* 里程碑时间线样式 */
.milestone-section {
  margin-top: 32px;
}

.timeline-container {
  position: relative;
  padding-left: 40px;
}

.timeline-line {
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #90caf9, #ce93d8);
}

.timeline-item {
  position: relative;
  margin-bottom: 24px;
}

.timeline-dot {
  position: absolute;
  left: -40px;
  top: 4px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 0 0 2px #90caf9;
}

.dot-blue {
  background-color: #90caf9;
  box-shadow: 0 0 0 2px #90caf9;
}

.dot-orange {
  background-color: #ffb74d;
  box-shadow: 0 0 0 2px #ffb74d;
}

.dot-purple {
  background-color: #ce93d8;
  box-shadow: 0 0 0 2px #ce93d8;
}

.dot-indigo {
  background-color: #9fa8da;
  box-shadow: 0 0 0 2px #9fa8da;
}

.timeline-content {
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.content-blue {
  background-color: #e3f2fd;
  border-left: 4px solid #90caf9;
}

.content-orange {
  background-color: #fff3e0;
  border-left: 4px solid #ffb74d;
}

.content-purple {
  background-color: #f3e5f5;
  border-left: 4px solid #ce93d8;
}

.content-indigo {
  background-color: #e8eaf6;
  border-left: 4px solid #9fa8da;
}

.timeline-date {
  font-size: 0.9rem;
  font-weight: 600;
  color: #546e7a;
}

.timeline-text {
  margin: 8px 0 0;
  color: #37474f;
  font-weight: 500;
}

.timeline-subitems {
  margin-top: 8px;
  padding-left: 16px;
}

.timeline-subtext {
  margin: 4px 0;
  color: #546e7a;
  font-size: 0.9rem;
  position: relative;
}

.timeline-subtext:before {
  content: "•";
  position: absolute;
  left: -12px;
  color: #90caf9;
}

/* 团队文化样式 */
.culture-section {
  margin-top: 32px;
}

.culture-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.culture-tag {
  background-color: #e3f2fd;
  color: #1976d2;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.85rem;
  transition: all 0.2s ease;
}

.culture-tag:hover {
  background-color: #bbdefb;
  transform: translateY(-1px);
}

/* 团队成员页面样式 */
.team-view {
  padding: 0 16px;
}

.page-header {
  background-color: #fff;
  padding: 16px 24px;
  margin: -20px -20px 20px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.team-grid {
  margin-top: 16px;
}

.member-card {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  margin-bottom: 16px;
}

.member-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.member-cover {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.member-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.member-card:hover .member-cover img {
  transform: scale(1.05);
}

.member-role {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 8px;
  font-size: 0.9rem;
  text-align: center;
}

.member-skills {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill-tag {
  font-size: 0.8rem;
  border-radius: 4px;
  background-color: #e3f2fd;
  color: #1976d2;
  border: none;
}

.member-footer {
  margin-top: 12px;
  font-size: 0.85rem;
  color: #7f8c8d;
  display: flex;
  align-items: center;
}

.join-date {
  margin-left: 6px;
}

/* 项目展示页面样式 */
.projects-view {
  padding: 0 16px;
}

.project-table {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.status-tag {
  font-weight: 500;
  border-radius: 4px;
  padding: 0 8px;
}

.tech-tag {
  font-size: 0.85rem;
  border-radius: 4px;
  background-color: #e8f5e9;
  color: #388e3c;
  border: none;
}

/* 页脚样式 */
.footer {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 24px 0;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-links {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  gap: 24px;
}

.footer-link {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #ecf0f1;
}

.footer-copyright {
  font-size: 0.9rem;
  color: #95a5a6;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .content {
    padding: 12px;
  }

  .stats-container {
    flex-direction: column;
    gap: 16px;
  }

  .action-buttons {
    flex-direction: column;
    gap: 12px;
  }

  .action-btn {
    width: 100%;
  }

  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .team-grid {
    margin-top: 0;
  }
}

@media (max-width: 576px) {
  .welcome-title h1 {
    font-size: 1.5rem;
  }

  .tech-grid {
    grid-template-columns: 1fr;
  }
}
.tech-stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); /* 自适应列 */
  gap: 24px;
  padding: 0 24px;
}
.tech-item-card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }
}
.tech-icon {
  font-size: 36px;
  color: #1890ff; /* Ant Design 主色 */
  margin-bottom: 16px;
}

</style>
