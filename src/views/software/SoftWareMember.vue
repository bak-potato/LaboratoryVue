<template>
  <div class="software-department">
    <header class="header">
      <h1>实验室软件部核心成员</h1>
      <p>技术创新 · 团队协作 · 追求卓越</p>
    </header>

    <div class="filters">
      <div class="team-filter">
        <button v-for="group in groups" :key="group.name" @click="filterTeam(group.name)"
          :class="{ active: activeTeam === group.name }">
          {{ group.name }}
        </button>
        <button @click="filterTeam('all')" :class="{ active: activeTeam === 'all' }">
          全部成员
        </button>
      </div>

      <div class="grade-filter">
        <button v-for="grade in grades" :key="grade" @click="filterGrade(grade)"
          :class="{ active: activeGrade === grade }">
          {{ grade }}
        </button>
        <button @click="filterGrade('all')" :class="{ active: activeGrade === 'all' }">
          全部年级
        </button>
      </div>
    </div>

    <main class="members-container">
      <section v-for="member in filteredMembers" :key="member.id" class="member-card"
        :style="{ borderTop: `4px solid ${getGroupColor(member.team)}` }">
        <div class="member-avatar">
          <img :src="member.avatar" :alt="member.name">
        </div>
        <div class="member-info">
          <h2>{{ member.name }}</h2>
          <div class="tags">
            <span class="team-tag" :style="{ backgroundColor: getGroupColor(member.team) }">
              {{ member.team }}
            </span>
            <span class="grade-tag">
              {{ member.grade }}
            </span>
          </div>
          <p class="position">{{ member.position }}</p>
          <p class="bio">{{ member.bio }}</p>
          <div class="skills">
            <span v-for="(skill, index) in member.skills" :key="index" class="skill">
              {{ skill }}
            </span>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<!-- eslint-disable vue/block-lang -->

<script setup>
import { ref, computed } from 'vue'
import zhangyang from "@/assets/members/张洋.png"
import xuzhihao from "@/assets/members/许致豪.png"
import songhongle from "@/assets/members/宋洪乐.jpg"
import menghaoxue from "@/assets/members/孟皓雪.jpg"
import sunshanqing from "@/assets/members/山鸡.jpg"
import yangyuanyi from "@/assets/members/杨远毅.png"
import yinyantao from "@/assets/members/尹衍涛.jpg"
import dingjunkai from "@/assets/members/丁俊凯.png"
import smh from "@/assets/members/申明辉.jpg"

import zhangfuchen from "@/assets/members/张阜辰.jpg"

// import shenminghui from "@/assets/members/申明辉.png"
const groups = [
  { name: "后端组", color: "#3498db" },
  { name: "前端组", color: "#e74c3c" },
  { name: "运维组", color: "#2ecc71" },
  { name: "测试组", color: "#f39c12" },
  { name: "AI组", color: "#9b59b6" }
]

const grades = ["2022级", "2023级", "2024级"]

const members = [
  {
    id: 0,
    name: "张洋",
    team: "后端组",
    position: "实验室执行负责人",
    grade: "2023级",
    bio: "全面负责实验室的运营和管理，协调各小组工作",
    skills: ["项目管理", "团队协作", "技术决策", "Java", "Spring Boot", "微服务", "MySQL", "Redis"],
    avatar: zhangyang
  },
  {
    id: 1,
    name: "许致豪",
    team: "前端组",
    position: "实验室执行负责人",
    grade: "2024级",
    bio: "全面负责实验室的运营和管理，协调各小组工作",
    skills: ["项目管理", "团队协作", "技术决策", "Vue", "React", "TypeScript", "javascript", "css3"],
    avatar: xuzhihao
  },
  {
    id: 2,
    name: "宋洪乐",
    team: "前端组",
    position: "前端组组长兼技术组组长",
    grade: "2024级",
    bio: "负责软件组技术方向把控和项目协调，React专家",
    skills: ["React", "TypeScript", "前端架构", "性能优化", "团队管理"],
    avatar: songhongle
  },
  {
    id: 3,
    name: "杨远毅",
    team: "后端组",
    position: "后端组组长",
    grade: "2024级",
    bio: "负责后端技术栈选型和系统架构设计",
    skills: ["Java", "Spring Boot", "微服务", "MySQL", "Redis"],
    avatar: yangyuanyi
  },
  {
    id: 4,
    name: "尹衍涛",
    team: "运维组",
    position: "运维组组长",
    grade: "2024级",
    bio: "负责实验室基础设施建设和维护",
    skills: ["Linux", "Docker", "Kubernetes", "CI/CD", "监控系统"],
    avatar: yinyantao
  },
  {
    id: 5,
    name: "丁俊凯",
    team: "测试组",
    position: "测试组组长",
    grade: "2023级",
    bio: "负责软件质量保障体系和自动化测试",
    skills: ["自动化测试", "性能测试", "Selenium", "JUnit", "质量保障"],
    avatar: dingjunkai
  },
  {
    id: 6,
    name: "张阜辰",
    team: "AI组",
    position: "AI组组长",
    grade: "2024级",
    bio: "负责人工智能方向的技术研究和应用开发",
    skills: ["Python", "机器学习", "深度学习", "NLP", "数据分析"],
    avatar: zhangfuchen
  },
  {
    id: 7,
    name: "孟皓雪",
    team: "前端组",
    position: "前端组成员",
    grade: "2024级",
    bio: "负责前端页面开发和用户体验优化",
    skills: ["Vue", "JavaScript", "CSS3", "UI设计", "响应式布局"],
    avatar: menghaoxue
  },
  {
    id: 8,
    name: "孙山清",
    team: "前端组",
    position: "前端组成员",
    grade: "2024级",
    bio: "负责前端组件开发和性能优化",
    skills: ["React", "TypeScript", "Webpack", "前端工程化", "单元测试"],
    avatar: sunshanqing
  },
  {
    id: 9,
    name: "申明辉",
    team: "后端组",
    position: "后端组成员",
    grade: "2024级",
    bio: "负责后端业务逻辑开发和API设计",
    skills: ["Java", "Spring Cloud", "RESTful API", "数据库设计", "缓存优化"],
    avatar: smh
  }
]

const activeTeam = ref('all')
const activeGrade = ref('all')

const filterTeam = (team) => {
  activeTeam.value = team
}

const filterGrade = (grade) => {
  activeGrade.value = grade
}

const filteredMembers = computed(() => {
  let result = members

  if (activeTeam.value !== 'all') {
    result = result.filter(member => member.team === activeTeam.value)
  }

  if (activeGrade.value !== 'all') {
    result = result.filter(member => member.grade === activeGrade.value)
  }

  return result
})

const getGroupColor = (teamName) => {
  const group = groups.find(g => g.name === teamName)
  return group ? group.color : '#ccc'
}
</script>

<style scoped>
/* 之前的样式保持不变，添加以下新样式 */

.filters {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
}

.grade-filter {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.grade-filter button {
  padding: 6px 12px;
  border: 1px solid #ddd;
  border-radius: 15px;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s;
}

.grade-filter button:hover {
  background-color: #f5f5f5;
}

.grade-filter button.active {
  background-color: #2c3e50;
  color: white;
  border-color: #2c3e50;
}

.tags {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 10px;
}

.grade-tag {
  display: inline-block;
  padding: 3px 10px;
  height: 28px;
  border-radius: 20px;
  background-color: #f0f0f0;
  color: #555;
  font-size: 0.8rem;
}

/* 其他原有样式保持不变 */
</style>
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

.header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.header p {
  font-size: 1.2rem;
  color: #7f8c8d;
}

.team-filter {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
}

.team-filter button {
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  background-color: #eee;
  cursor: pointer;
  transition: all 0.3s;
}

.team-filter button:hover {
  background-color: #ddd;
}

.team-filter button.active {
  background-color: #2c3e50;
  color: white;
}

.members-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.member-card {
  background-color: white;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.member-card:hover {
  transform: translateY(-5px);
}

.member-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 20px;
}

.member-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-info {
  text-align: center;
}

.member-info h2 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 5px;
}

.team-tag {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 20px;
  color: white;
  font-size: 0.8rem;
  margin-bottom: 10px;
}

.position {
  color: #7f8c8d;
  font-weight: bold;
  margin-bottom: 15px;
}

.bio {
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 15px;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.skill {
  background-color: #f0f0f0;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  color: #555;
}
</style>
