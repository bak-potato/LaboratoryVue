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
        <h2>{{ group.name }}</h2>
        <p>{{ group.description }}</p>
        <ul>
          <li v-for="(item, index) in group.responsibilities" :key="index">
            {{ item }}
          </li>
        </ul>
      </section>
    </main>


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
.software-department {
  font-family: 'Arial', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  color: #333;
}

.header {
  text-align: center;
  margin-bottom: 40px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.groups-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* 使所有卡片居中 */
  gap: 30px;
  margin-bottom: 40px;
}

.group-card {
  background-color: white;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 300px; /* 固定宽度 */
  box-sizing: border-box;
}

.group-card:hover {
  transform: translateY(-5px);
}
.software-department {
  font-family: 'Arial', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  color: #333;
}

.header {
  text-align: center;
  margin-bottom: 40px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.header p {
  font-size: 1.2rem;
  color: #7f8c8d;
}

.groups-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;
  justify-content: center;
}

.group-card {
  background-color: white;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  max-width: 300px;
  margin: 0 auto;
}

.group-card:hover {
  transform: translateY(-5px);
}

.group-card h2 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
  text-align: center;
}

.group-card p {
  color: #7f8c8d;
  margin-bottom: 15px;
  line-height: 1.6;
}

.group-card ul {
  padding-left: 20px;
  color: #34495e;
}

.group-card li {
  margin-bottom: 8px;
}

.placeholder {
  height: 200px;
  visibility: hidden;
}

.footer {
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  color: #7f8c8d;
}
</style>
