<template>
  <div class="copywriting-department">
    <header class="hero">
      <div class="hero-content">
        <h1 class="department-name">实验室文案部核心成员结构</h1>
        <p class="slogan">文字与策略的融合 · 创意驱动传播影响力</p>
        <div class="divider"></div>
      </div>
    </header>

    <section class="team-section">
      <div class="team-grid">
        <!-- 部长展示模块 -->
        <div class="team-card">
          <h3 class="team-title">部长</h3>
          <div class="member-card">
            <div class="avatar-container">
              <img
                src="../../assets/members/咸雯慧.jpg"
                alt="部长头像"
                class="member-avatar"
              >
              <div class="avatar-border"></div>
            </div>
            <h4>咸雯慧</h4>
            <p class="member-title">文案部负责人</p>
            <p class="member-description">
              2年文案策划经验，曾主导20+大型竞赛文案创作，擅长品牌故事构建与传播策略制定
            </p>
            <div class="member-skills">
              <span class="skill-tag">文案策划</span>
              <span class="skill-tag">品牌故事</span>
              <span class="skill-tag">创意写作</span>
            </div>
          </div>
        </div>

        <!-- 核心成员展示模块 -->
        <div class="team-card">
          <h3 class="team-title">核心成员</h3>
          <div class="member-grid">
            <div
              class="member-card"
              v-for="(member) in members"
              :key="member.name"
            >
              <div class="avatar-container">
                <img
                  :src="member.avatar"
                  :alt="member.name + '的头像'"
                  class="member-avatar"
                >
                <div class="avatar-border"></div>
              </div>
              <h4>{{ member.name }}</h4>
              <p class="member-title">{{ member.position }}</p>
              <p class="member-description">{{ member.intro }}</p>
              <div class="member-skills">
                <span
                  class="skill-tag"
                  v-for="(skill, sIndex) in member.skills"
                  :key="sIndex"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="contact-info">
        <p>© {{ currentYear }} 实验室文案部</p>
        <p>合作咨询：2954653529@qq.com</p>
      </div>
      <div class="social-links">
        <a href="#" class="social-link"><i class="fab fa-weixin"></i></a>
        <a href="#" class="social-link"><i class="fab fa-qq"></i></a>
        <a href="#" class="social-link"><i class="fab fa-weibo"></i></a>
      </div>
    </footer>
  </div>
</template>
<!-- eslint-disable vue/block-lang -->

<script setup>
import { ref } from 'vue';
import dxf from '@/assets/members/杜小凡.jpg'
// 团队成员数据
const members = [
  {
    name: "杜小凡",
    position: "资深文案策划",
    intro: "专注竞赛文案与品牌故事创作，曾获全国大学生创意写作大赛一等奖",
    skills: ["文案创作", "品牌故事", "创意写作"],
    avatar:dxf
  }
];

// 当前年份
const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
/* 全局变量 */
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  --light-gray: #f8f9fa;
  --dark-gray: #495057;
  --white: #ffffff;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
  --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* 基础样式 */
.copywriting-department {
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  line-height: 1.6;
  color: var(--dark-gray);
  background-color: var(--light-gray);
  min-height: 100vh;
}

/* 头部英雄区域 */
.hero {
  background: linear-gradient(135deg, rgba(44, 62, 80, 0.9), rgba(52, 152, 219, 0.8)),
              url('https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  color: var(--white);
  padding: 120px 20px;
  margin-bottom: 60px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%);
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.department-name {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #97a3ae;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  letter-spacing: 2px;
}

.slogan {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 30px;
  color: rgba(255,255,255,0.9);
  letter-spacing: 1px;
}

.divider {
  width: 80px;
  height: 3px;
  background-color: var(--accent-color);
  margin: 30px auto;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

/* 团队模块 */
.team-section {
  background-color: var(--white);
  padding: 60px 20px;
  margin: 80px 0;
  position: relative;
}

.team-section::before {
  content: '';
  position: absolute;
  top: 0;
  height: 10px;
  background: linear-gradient(90deg, var(--secondary-color), var(--accent-color));
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.team-title {
  font-size: 1.8rem;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 30px;
  position: relative;
  padding-bottom: 15px;
}

.team-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: var(--secondary-color);
}

.member-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.member-card {
  background: var(--white);
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: var(--shadow-md);
  transition: var(--transition);
  border: 1px solid rgba(0,0,0,0.05);
}

.member-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.avatar-container {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 20px;
}

.member-avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 1;
}

.avatar-border {
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  z-index: 0;
  animation: rotate 6s linear infinite;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.member-card h4 {
  font-size: 1.3rem;
  color: var(--primary-color);
  margin-bottom: 5px;
}

.member-title {
  color: var(--secondary-color);
  font-size: 1rem;
  margin-bottom: 15px;
  font-weight: 500;
}

.member-description {
  color: var(--dark-gray);
  font-size: 0.95rem;
  margin-bottom: 20px;
  min-height: 60px;
}

.member-skills {
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
}

.skill-tag {
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  color: rgb(0, 0, 0);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  box-shadow: var(--shadow-sm);
}

/* 页脚 */
.footer {
  color: var(--white);
  padding: 60px 20px 30px;
  text-align: center;
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, var(--secondary-color), var(--accent-color));
}

.contact-info {
  margin-bottom: 20px;
}

.contact-info p {
  margin: 10px 0;
  color: rgba(0, 0, 0, 0.8);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.social-link {
  color: var(--white);
  font-size: 1.5rem;
  transition: var(--transition);
  opacity: 0.8;
}

.social-link:hover {
  opacity: 1;
  transform: translateY(-3px);
}

/* 响应式调整 */
@media (max-width: 992px) {
  .team-grid {
    grid-template-columns: 1fr;
  }

  .department-name {
    font-size: 2.5rem;
  }

  .slogan {
    font-size: 1.2rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 80px 20px;
  }

  .member-grid {
    grid-template-columns: 1fr;
  }
}
</style>
