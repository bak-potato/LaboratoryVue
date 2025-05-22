<template>
  <a-layout class="department-page">
    <a-layout-header class="header">
      <div class="header-content">
        <h1>实验室后端技术部</h1>
        <p>构建稳定、高效、安全的系统基石</p>
      </div>
    </a-layout-header>

    <a-layout-content class="content">
      <div class="container">
        <a-row :gutter="[24, 24]">
          <a-col :xs="24" :md="12" :lg="8">
            <a-card hoverable class="department-card">
              <a-card-meta title="系统架构">
                <template #description>
                  负责实验室各类系统的架构设计与优化，确保系统的高可用性和可扩展性
                </template>
              </a-card-meta>
            </a-card>
          </a-col>

          <a-col :xs="24" :md="12" :lg="8">
            <a-card hoverable class="department-card">

              <a-card-meta title="核心开发">
                <template #description>
                  实现业务逻辑与数据处理的核心模块开发，保障系统稳定高效运行
                </template>
              </a-card-meta>
            </a-card>
          </a-col>

          <a-col :xs="24" :md="12" :lg="8">
            <a-card hoverable class="department-card">
              <a-card-meta title="数据管理">
                <template #description>
                  设计并维护数据库结构，优化查询性能，确保数据安全与一致性
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>

        <div class="section">
          <h2>我们的职责</h2>
          <a-list item-layout="horizontal" :data-source="responsibilities">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta :description="item.description">
                  <template #title>
                    <a-tag color="blue">{{ item.title }}</a-tag>
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </div>
        <div class="section">
          <h2>技术栈</h2>
          <a-tabs v-model:activeKey="activeTechTab">
            <a-tab-pane key="1" tab="后端技术">
              <a-space wrap>
                <a-tag color="magenta">Java/Spring Boot</a-tag>
                <a-tag color="red">Python/Django</a-tag>
                <a-tag color="volcano">Node.js</a-tag>
                <a-tag color="orange">Go</a-tag>
                <a-tag color="orange">Mybatis</a-tag>
                <a-tag color="orange">WebSocket</a-tag>
                <a-tag color="orange">Activiti7</a-tag>
              </a-space>
            </a-tab-pane>
            <a-tab-pane key="2" tab="数据库">
              <a-space wrap>
                <a-tag color="green">MySQL</a-tag>
                <a-tag color="cyan">MongoDB</a-tag>
                <a-tag color="blue">Redis</a-tag>
                <a-tag color="purple">Elasticsearch</a-tag>
              </a-space>
            </a-tab-pane>
            <a-tab-pane key="3" tab="DevOps">
              <a-space wrap>
                <a-tag color="gold">Docker</a-tag>
                <a-tag color="lime">Kubernetes</a-tag>
                <a-tag color="green">Jenkins</a-tag>
                <a-tag color="cyan">Prometheus</a-tag>
              </a-space>
            </a-tab-pane>
          </a-tabs>
        </div>

        <div class="section">
          <h2>团队成员</h2>
          <a-row :gutter="[16, 16]">
            <a-col :span="6" v-for="member in teamMembers" :key="member.name">
              <a-card hoverable>
                <template #cover>
                  <img alt="avatar" :src="member.avatar" />
                </template>
                <a-card-meta :title="member.name" :description="member.role">

                </a-card-meta>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<!-- eslint-disable vue/block-lang -->
<script setup>
import { ref } from 'vue';
import yyy from '@/assets/members/杨远毅.png';
const activeTechTab = ref('1');

const responsibilities = ref([
  {
    title: '系统架构',
    description: '设计并实现高可用、可扩展的系统架构方案',
    icon: 'https://example.com/architecture-icon.png'
  },
  {
    title: 'API开发',
    description: '为前端和移动端提供稳定高效的API接口',
    icon: 'https://example.com/api-icon.png'
  },
  {
    title: '性能优化',
    description: '持续监控和优化系统性能，提升用户体验',
    icon: 'https://example.com/performance-icon.png'
  },
  {
    title: '安全保障',
    description: '实施安全策略，防止数据泄露和系统攻击',
    icon: 'https://example.com/security-icon.png'
  }
]);

const teamMembers = ref([
  {
    name: '杨远毅',
    role: '后端组组长',
    avatar: yyy
  }
]);
</script>

<style scoped>
.department-page {
  min-height: 100vh;
}

.header {
  background-color: #1890ff;
  color: white;
  padding: 0;
  height: auto;
}

.header-content {
  padding: 2rem;
  text-align: center;
}

.header h1 {
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
}

.content {
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section {
  margin: 3rem 0;
}

.section h2 {
  margin-bottom: 1.5rem;
  color: #1890ff;
}

.department-card {
  margin-bottom: 1rem;
  height: 100%;
}

.footer {
  text-align: center;
  background-color: #f0f2f5;
  padding: 1rem 0;
}
</style>
