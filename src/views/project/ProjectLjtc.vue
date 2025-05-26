<!-- eslint-disable vue/block-lang -->
<script setup>
import { ref } from 'vue'

// 项目标题信息
const projectInfo = ref({
  title: '临界拓池',
  subtitle: '专业线程池监控系统',
  status: 'active',
  progress: 85,
  startDate: '2024-01-15',
  endDate: '2024-12-30',
  priority: 'high',
  version: 'v2.1.3'
})

// 当前激活的标签页
const activeTab = ref('details')

// 项目详情数据
const projectDetails = ref({
  description: '临界拓池是一个高性能的线程池监控和管理系统，旨在为企业级应用提供实时的线程池状态监控、性能分析和智能调优建议。',
  features: [
    { title: '实时监控', desc: '支持多种线程池的实时状态监控，包括活跃线程数、队列长度、执行任务数等关键指标' },
    { title: '性能分析', desc: '提供详细的性能分析报告，包括吞吐量、响应时间、资源利用率等维度' },
    { title: '智能告警', desc: '基于机器学习算法的智能告警系统，能够预测潜在的性能问题' },
    { title: '自动调优', desc: '根据历史数据和当前负载，自动调整线程池参数以获得最佳性能' }
  ],
  technologies: [
    'Java Spring Boot', 'Vue.js 3', 'TypeScript', 'Redis', 'MySQL', 'Elasticsearch', 'Docker', 'Kubernetes'
  ],
  metrics: {
    codeLines: '156,892',
    testCoverage: '94.2%',
    performance: '99.9%',
    security: '5'
  }
})

// 团队成员数据
const teamMembers = ref([
  { name: '张建国', role: '项目经理', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { name: '李晓月', role: '后端架构师', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { name: '王大明', role: '前端开发', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { name: '陈小雨', role: 'DevOps工程师', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { name: '刘志强', role: '测试工程师', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' }
])

// 项目风采数据
const projectImages = ref([
  '/images/project/gallery1.jpg',
  '/images/project/gallery2.jpg',
  '/images/project/gallery3.jpg',
  '/images/project/gallery4.jpg',
  '/images/project/gallery5.jpg',
  '/images/project/gallery6.jpg'
])

// 技术架构数据
const techArchitecture = ref({
  frontend: ['Vue.js 3', 'TypeScript', 'Ant Design Vue', 'Echarts', 'Vite'],
  backend: ['Spring Boot', 'Spring Cloud', 'MyBatis Plus', 'Redis', 'RabbitMQ'],
  database: ['MySQL 8.0', 'Redis Cluster', 'Elasticsearch'],
  devops: ['Docker', 'Kubernetes', 'Jenkins', 'Prometheus', 'Grafana']
})
</script>

<template>
  <div class="project-detail-container">
    <!-- 项目标题区域 -->
    <div class="project-header">
      <div class="project-title-section">
        <div class="title-row">
          <h1 class="project-title">{{ projectInfo.title }}</h1>
          <a-tag :color="projectInfo.priority === 'high' ? 'red' : 'blue'" class="priority-tag">
            {{ projectInfo.priority === 'high' ? '重点项目' : '普通项目' }}
          </a-tag>
        </div>
        <p class="project-subtitle">{{ projectInfo.subtitle }}</p>
        <div class="project-meta">
          <span class="meta-item">
            <i class="icon">📅</i>
            开始时间: {{ projectInfo.startDate }}
          </span>
          <span class="meta-item">
            <i class="icon">🎯</i>
            预计完成: {{ projectInfo.endDate }}
          </span>
          <!-- <span class="meta-item">
            <i class="icon">🏷️</i>
            版本: {{ projectInfo.version }}
          </span> -->
        </div>
      </div>
      <div class="project-status-section">
        <a-tag :color="projectInfo.status === 'active' ? 'green' : 'blue'" class="status-tag">
          {{ projectInfo.status === 'active' ? '进行中' : '已完成' }}
        </a-tag>
        <a-progress :percent="projectInfo.progress" :status="projectInfo.progress === 100 ? 'success' : 'active'"
          :stroke-color="projectInfo.progress === 100 ? '#52c41a' : '#1890ff'" class="progress-bar" :stroke-width="8" />
        <span class="progress-text">总体进度 {{ projectInfo.progress }}%</span>
      </div>
    </div>

    <!-- 快速统计卡片 -->
    <div class="quick-stats">
      <div class="stat-card">
        <div class="stat-number">{{ projectDetails.metrics.codeLines }}</div>
        <div class="stat-label">代码行数</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">{{ projectDetails.metrics.testCoverage }}</div>
        <div class="stat-label">测试覆盖率</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">{{ projectDetails.metrics.performance }}</div>
        <div class="stat-label">性能得分</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">{{ projectDetails.metrics.security }}</div>
        <div class="stat-label">团队人员</div>
      </div>
    </div>

    <!-- 标签页内容 -->
    <div class="tabs-section">
      <a-tabs v-model:activeKey="activeTab" class="project-tabs">
        <!-- 项目详情 -->
        <a-tab-pane key="details" tab="项目详情">
          <div class="tab-content">
            <div class="content-section">
              <h3 class="section-title">项目简介</h3>
              <p class="project-description">{{ projectDetails.description }}</p>
            </div>

            <div class="content-section">
              <h3 class="section-title">核心功能</h3>
              <div class="features-grid">
                <div v-for="feature in projectDetails.features" :key="feature.title" class="feature-card">
                  <h4 class="feature-title">{{ feature.title }}</h4>
                  <p class="feature-desc">{{ feature.desc }}</p>
                </div>
              </div>
            </div>

            <div class="content-section">
              <h3 class="section-title">技术栈</h3>
              <div class="tech-tags">
                <a-tag v-for="tech in projectDetails.technologies" :key="tech" class="tech-tag">
                  {{ tech }}
                </a-tag>
              </div>
            </div>
          </div>
        </a-tab-pane>

        <!-- 团队介绍 -->
        <a-tab-pane key="team" tab="团队介绍">
          <div class="tab-content">
            <div class="content-section">
              <h3 class="section-title">核心团队成员</h3>
              <div class="team-grid">
                <div v-for="member in teamMembers" :key="member.name" class="member-card">
                  <div class="member-avatar">
                    <img :src="`/api/placeholder/80/80`" :alt="member.name" />
                  </div>
                  <div class="member-info">
                    <h4 class="member-name">{{ member.name }}</h4>
                    <p class="member-role">{{ member.role }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="content-section">
              <h3 class="section-title">团队组织架构</h3>
              <div class="org-chart">
                <div class="org-level">
                  <div class="org-node manager">负责人</div>
                </div>
                <div class="org-level">
                  <div class="org-node">后端架构师</div>
                  <div class="org-node">前端开发</div>
                  <div class="org-node">DevOps工程师</div>
                  <div class="org-node">测试工程师</div>
                </div>
              </div>
            </div>
          </div>
        </a-tab-pane>

        <!-- 项目风采 -->
        <a-tab-pane key="gallery" tab="项目风采">
          <div class="tab-content">
            <div class="content-section">
              <h3 class="section-title">项目风采</h3>
              <div class="gallery-images">
                <img v-for="image in projectImages" :key="image" :src="image" alt="Project Image" />
              </div>
            </div>
          </div>
        </a-tab-pane>

        <!-- 技术架构 -->
        <a-tab-pane key="tech" tab="技术架构">
          <div class="tab-content">
            <div class="content-section">
              <h3 class="section-title">系统架构图</h3>
              <div class="architecture-diagram">
                <div class="arch-layer">
                  <h4>前端层</h4>
                  <div class="arch-components">
                    <span v-for="tech in techArchitecture.frontend" :key="tech" class="arch-component frontend">
                      {{ tech }}
                    </span>
                  </div>
                </div>
                <div class="arch-layer">
                  <h4>后端层</h4>
                  <div class="arch-components">
                    <span v-for="tech in techArchitecture.backend" :key="tech" class="arch-component backend">
                      {{ tech }}
                    </span>
                  </div>
                </div>
                <div class="arch-layer">
                  <h4>数据层</h4>
                  <div class="arch-components">
                    <span v-for="tech in techArchitecture.database" :key="tech" class="arch-component database">
                      {{ tech }}
                    </span>
                  </div>
                </div>
                <div class="arch-layer">
                  <h4>运维层</h4>
                  <div class="arch-components">
                    <span v-for="tech in techArchitecture.devops" :key="tech" class="arch-component devops">
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="content-section">
              <h3 class="section-title">部署架构</h3>
              <div class="deployment-info">
                <div class="deploy-card">
                  <h4>开发环境</h4>
                  <p>本地Docker容器 + MySQL开发库</p>
                </div>
                <div class="deploy-card">
                  <h4>测试环境</h4>
                  <p>Kubernetes集群 + Redis集群 + 测试数据库</p>
                </div>
                <div class="deploy-card">
                  <h4>生产环境</h4>
                  <p>高可用Kubernetes + 主从Redis + MySQL集群</p>
                </div>
              </div>
            </div>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<style lang="less" scoped>
.project-detail-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  background: #f5f7fa;
  min-height: 100vh;
}

.project-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 32px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  color: white;

  .project-title-section {
    flex: 1;
    min-width: 300px;

    .title-row {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 8px;
    }

    .project-title {
      font-size: 32px;
      font-weight: 700;
      color: white;
      margin: 0;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .priority-tag {
      font-size: 12px;
      padding: 4px 8px;
      border-radius: 12px;
      font-weight: 600;
    }

    .project-subtitle {
      font-size: 18px;
      color: rgba(255, 255, 255, 0.9);
      margin: 0 0 16px 0;
    }

    .project-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;

      .meta-item {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.8);

        .icon {
          font-size: 16px;
        }
      }
    }
  }

  .project-status-section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
    min-width: 250px;

    .status-tag {
      font-size: 14px;
      padding: 6px 16px;
      border-radius: 20px;
      font-weight: 600;
    }

    .progress-bar {
      width: 250px;
    }

    .progress-text {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.9);
      font-weight: 500;
    }
  }
}

.quick-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 24px;

  .stat-card {
    background: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }

    .stat-number {
      font-size: 28px;
      font-weight: 700;
      color: #1890ff;
      margin-bottom: 8px;
    }

    .stat-label {
      font-size: 14px;
      color: #666;
      font-weight: 500;
    }
  }
}

.tabs-section {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  padding: 0;
  overflow: hidden;

  .project-tabs {
    :deep(.ant-tabs-nav) {
      margin: 0;
      padding: 0 24px;
      background: #fafbfc;

      &::before {
        border-bottom: none;
      }
    }

    :deep(.ant-tabs-tab) {
      padding: 16px 24px;
      font-size: 15px;
      font-weight: 500;
      transition: all 0.3s ease;
      margin: 0 4px;
      border-radius: 8px 8px 0 0;

      &:hover {
        color: #1890ff;
        background: rgba(24, 144, 255, 0.1);
      }

      &.ant-tabs-tab-active {
        background: white;

        .ant-tabs-tab-btn {
          color: #1890ff;
          font-weight: 600;
        }
      }
    }

    :deep(.ant-tabs-ink-bar) {
      display: none;
    }

    :deep(.ant-tabs-content-holder) {
      padding: 32px;
    }
  }

  .tab-content {
    min-height: 500px;
  }
}

.content-section {
  margin-bottom: 32px;

  .section-title {
    font-size: 20px;
    font-weight: 600;
    color: #1d2129;
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 2px solid #e8f4ff;
  }
}

.project-description {
  font-size: 16px;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 16px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;

  .feature-card {
    background: #f8fafc;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #1890ff;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateX(4px);
    }

    .feature-title {
      font-size: 16px;
      font-weight: 600;
      color: #1d2129;
      margin-bottom: 8px;
    }

    .feature-desc {
      font-size: 14px;
      color: #666;
      line-height: 1.5;
      margin: 0;
    }
  }
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  .tech-tag {
    padding: 6px 12px;
    font-size: 13px;
    border-radius: 16px;
    background: #e8f4ff;
    color: #1890ff;
    border: 1px solid #bae7ff;
  }
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  .member-card {
    background: #f8fafc;
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-4px);
    }

    .member-avatar {
      margin-bottom: 16px;

      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid #1890ff;
      }
    }

    .member-name {
      font-size: 16px;
      font-weight: 600;
      color: #1d2129;
      margin-bottom: 4px;
    }

    .member-role {
      font-size: 14px;
      color: #1890ff;
      margin-bottom: 8px;
    }
  }
}

.org-chart {
  text-align: center;

  .org-level {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    flex-wrap: wrap;

    .org-node {
      background: #1890ff;
      color: white;
      padding: 12px 20px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 500;

      &.manager {
        background: #722ed1;
      }
    }
  }
}

.timeline {
  position: relative;
  padding-left: 24px;

  &::before {
    content: '';
    position: absolute;
    left: 8px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e8e8e8;
  }

  .timeline-item {
    position: relative;
    margin-bottom: 24px;

    .timeline-marker {
      position: absolute;
      left: -20px;
      top: 4px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #d9d9d9;
      border: 2px solid white;
    }

    &.completed .timeline-marker {
      background: #52c41a;
    }

    &.active .timeline-marker {
      background: #1890ff;
    }

    .timeline-content {
      background: #f8fafc;
      padding: 16px;
      border-radius: 8px;
      margin-left: 8px;

      .milestone-phase {
        font-size: 16px;
        font-weight: 600;
        color: #1d2129;
        margin-bottom: 4px;
      }

      .milestone-date {
        font-size: 14px;
        color: #666;
        margin-bottom: 8px;
      }
    }
  }
}

.progress-updates {
  .update-item {
    background: #f8fafc;
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 12px;
    border-left: 4px solid #1890ff;

    .update-date {
      font-size: 12px;
      color: #1890ff;
      font-weight: 600;
      margin-bottom: 4px;
    }

    .update-content {
      font-size: 14px;
      color: #4a5568;
      line-height: 1.5;
    }
  }
}

.architecture-diagram {
  .arch-layer {
    margin-bottom: 24px;
    padding: 20px;
    background: #f8fafc;
    border-radius: 8px;

    h4 {
      font-size: 16px;
      font-weight: 600;
      color: #1d2129;
      margin-bottom: 12px;
      text-align: center;
    }

    .arch-components {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px;

      .arch-component {
        padding: 6px 12px;
        border-radius: 16px;
        font-size: 12px;
        font-weight: 500;

        &.frontend {
          background: #e6f7ff;
          color: #1890ff;
        }

        &.backend {
          background: #f6ffed;
          color: #52c41a;
        }

        &.database {
          background: #fff2e8;
          color: #fa8c16;
        }

        &.devops {
          background: #f9f0ff;
          color: #722ed1;
        }
      }
    }
  }
}

.deployment-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;

  .deploy-card {
    background: #f8fafc;
    padding: 20px;
    border-radius: 8px;
    text-align: center;

    h4 {
      font-size: 16px;
      font-weight: 600;
      color: #1d2129;
      margin-bottom: 8px;
    }

    p {
      font-size: 14px;
      color: #666;
      line-height: 1.5;
      margin: 0;
    }
  }
}

.gallery-images {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px 0;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  }
}

// 响应式调整
@media (max-width: 768px) {
  .project-detail-container {
    padding: 16px;
  }

  .project-header {
    padding: 24px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    .project-title-section {
      .title-row {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
      }

      .project-title {
        font-size: 24px;
      }

      .project-subtitle {
        font-size: 16px;
      }

      .project-meta {
        flex-direction: column;
        gap: 8px;
      }
    }

    .project-status-section {
      width: 100%;
      align-items: flex-start;

      .progress-bar {
        width: 100%;
      }
    }
  }

  .quick-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .tabs-section {
    .project-tabs {
      :deep(.ant-tabs-content-holder) {
        padding: 20px;
      }

      :deep(.ant-tabs-tab) {
        padding: 10px 16px;
        font-size: 14px;
      }
    }
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }

  .deployment-info {
    grid-template-columns: 1fr;
  }

  .gallery-images {
    grid-template-columns: 1fr;

    img {
      height: 180px;
    }
  }
}
</style>
