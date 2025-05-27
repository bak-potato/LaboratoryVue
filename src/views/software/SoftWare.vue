<template>
  <div class="software-department">
    <header class="header">
      <h1>实验室软件部</h1>
      <p>技术创新 · 团队协作 · 追求卓越</p>
    </header>

    <main class="groups-container">
      <section
        v-for="group in groups"
        :key="group.name"
        class="group-card"
      >
        <div class="group-header">
          <i :class="group.icon" :style="{ color: group.color }"></i>
          <h2>{{ group.name }}</h2>
        </div>
        <p>{{ group.description }}</p>
        <ul>
          <li v-for="(item, index) in group.responsibilities" :key="index">
            {{ item }}
          </li>
        </ul>
      </section>
    </main>

    <footer class="footer">
      <p>© 2025 实验室软件部 · 版权所有</p>
    </footer>
  </div>
</template>
<!-- eslint-disable vue/block-lang -->
<script setup>
const groups = [
  {
    name: "后端组",
    description: "负责服务器端逻辑开发，数据库设计和API接口实现",
    responsibilities: [
      "服务器架构设计与实现",
      "数据库设计与优化",
      "RESTful API开发",
      "性能优化与安全加固",
      "微服务架构搭建"
    ],
    icon: "fas fa-server",
    color: "#3498db"
  },
  {
    name: "前端组",
    description: "负责用户界面开发，实现交互逻辑和用户体验优化",
    responsibilities: [
      "Web前端开发与优化",
      "移动端适配与响应式设计",
      "用户交互体验优化",
      "前端性能监控与调优",
      "前端框架研究与创新"
    ],
    icon: "fas fa-laptop-code",
    color: "#e74c3c"
  },
  {
    name: "运维组",
    description: "保障系统稳定运行，实现自动化部署与监控",
    responsibilities: [
      "服务器部署与维护",
      "CI/CD流水线搭建",
      "系统监控与告警",
      "容器化与云平台管理",
      "灾备与安全防护"
    ],
    icon: "fas fa-network-wired",
    color: "#2ecc71"
  },
  {
    name: "测试组",
    description: "确保软件质量，提升产品稳定性和用户体验",
    responsibilities: [
      "测试用例设计与执行",
      "自动化测试框架开发",
      "性能测试与压力测试",
      "缺陷管理与跟踪",
      "质量评估与报告"
    ],
    icon: "fas fa-vial",
    color: "#f39c12"
  },
  {
    name: "AI组",
    description: "研究人工智能技术，开发智能算法和应用",
    responsibilities: [
      "机器学习算法研究",
      "深度学习模型开发",
      "自然语言处理",
      "计算机视觉应用",
      "大数据分析与挖掘"
    ],
    icon: "fas fa-brain",
    color: "#9b59b6"
  }
]
</script>

<style scoped>
/* 基础样式 */
.software-department {
  font-family: 'Arial', sans-serif;
  padding: 16px;
  color: #333;
}

.header {
  text-align: center;
  margin-bottom: 24px;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.header h1 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 8px;
}

.header p {
  font-size: 1rem;
  color: #7f8c8d;
}

/* 卡片容器 - 响应式布局 */
.groups-container {
  display: grid;
  grid-template-columns: 1fr; /* 移动端单列布局 */
  gap: 16px;
  margin-bottom: 24px;
}

/* 组卡片样式 */
.group-card {
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.group-card:hover {
  transform: translateY(-3px);
}

.group-header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.group-header i {
  font-size: 1.5rem;
  margin-right: 10px;
}

.group-card h2 {
  font-size: 1.3rem;
  color: #2c3e50;
  margin: 0;
}

.group-card p {
  color: #7f8c8d;
  margin-bottom: 12px;
  line-height: 1.5;
  font-size: 0.95rem;
}

.group-card ul {
  padding-left: 20px;
  color: #34495e;
  font-size: 0.9rem;
}

.group-card li {
  margin-bottom: 6px;
}

/* 页脚样式 */
.footer {
  text-align: center;
  padding: 12px;
  background-color: #f5f5f5;
  border-radius: 8px;
  color: #7f8c8d;
  font-size: 0.9rem;
}

/* 平板及以上设备样式 */
@media (min-width: 768px) {
  .software-department {
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
  }

  .groups-container {
    grid-template-columns: repeat(2, 1fr); /* 平板双列布局 */
    gap: 24px;
  }

  .header h1 {
    font-size: 2.2rem;
  }

  .header p {
    font-size: 1.1rem;
  }

  .group-card {
    padding: 20px;
  }
}

/* 桌面设备样式 */
@media (min-width: 1024px) {
  .groups-container {
    grid-template-columns: repeat(3, 1fr); /* 桌面三列布局 */
  }
}
</style>
