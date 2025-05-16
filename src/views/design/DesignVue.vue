<template>
  <div class="design-department">
    <header class="hero">
      <div class="hero-content">
        <h1 class="department-name">实验室设计部</h1>
        <p class="slogan">技术与美学的融合 · 创意驱动视觉影响力</p>
        <div class="divider"></div>
      </div>
    </header>
    <main class="content-container">
      <section class="about-section">
        <h2 class="section-title">关于我们</h2>
        <p class="section-description">
          设计部是一个充满创意和技术的团队，致力于为计算机竞赛提供专业的视觉设计支持。我们以"技术与美学的融合"为核心理念，服务于竞赛宣传、项目路演、学术活动等场景，助力团队在技术实力之外打造更具竞争力的视觉影响力。
        </p>
      </section>

      <section class="service-section">
        <h2 class="section-title">核心服务领域</h2>
        <div class="service-grid">
          <div
            class="service-card"
            v-for="(service, index) in services"
            :key="index"
            :style="{ '--card-color': service.color }"
          >
          <h3>{{ service.name }}</h3>


            <p>{{ service.description }}</p>
            <div class="service-meta">
              <span class="service-level">{{ service.level }}</span>
              <span class="service-projects">{{ service.projects }}+ 项目经验</span>
            </div>
          </div>
        </div>
      </section>

      <section class="philosophy-section">
        <h2 class="section-title">核心理念</h2>
        <div class="philosophy-card">
          <div class="philosophy-icon">✨</div>
          <p class="philosophy-text">
            我们坚信设计是技术的可视化语言，通过<br>
            <strong>专业技术</strong>与<strong>艺术审美</strong>的双重驱动，<br>
            让每一个视觉作品都成为传递价值的有力媒介。
          </p>
        </div>
      </section>
    </main>
    <section class="team-section">
      <div class="team-grid">
        <!-- 部长展示模块 -->
        <div class="team-card">
          <h3 class="team-title">部长</h3>
          <div class="member-card">
            <div class="avatar-container">
              <img
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                alt="部长头像"
                class="member-avatar"
              >
              <div class="avatar-border"></div>
            </div>
            <h4>董亚蒙</h4>
            <p class="member-title">设计部负责人</p>
            <p class="member-description">
              8年设计行业经验，曾主导20+大型竞赛视觉设计，擅长品牌全案策划与团队管理
            </p>
            <div class="member-skills">
              <span class="skill-tag">品牌设计</span>
              <span class="skill-tag">项目管理</span>
              <span class="skill-tag">创意指导</span>
            </div>
          </div>
        </div>

        <!-- 核心成员展示模块 -->
        <div class="team-card">
          <h3 class="team-title">核心成员</h3>
          <div class="member-grid">
            <div
              class="member-card"
              v-for="(member, index) in members"
              :key="member.name"
            >
              <div class="avatar-container">
                <img
                  src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg"
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
        <p>© {{ currentYear }} 实验室设计部</p>
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

// 团队成员数据
const members = [
  {
    name: "李四",
    position: "资深视觉设计师",
    intro: "专注海报设计与插画创作，曾获全国大学生设计竞赛一等奖",
    skills: ["海报设计", "插画", "PS精修"]
  },
  {
    name: "王五",
    position: "UI/UX设计师",
    intro: "擅长移动端交互设计，主导过5款竞赛类APP的界面设计",
    skills: ["UI设计", "交互原型", "Figma"]
  },
  {
    name: "赵六",
    position: "视频剪辑师",
    intro: "精通AE/PR，负责竞赛宣传片制作，累计剪辑时长超200小时",
    skills: ["视频剪辑", "特效制作", "动态视觉"]
  }
];

// 核心服务数据
const services = [
  {
    name: "PS图像处理",
    description: "高精度图片精修、素材合成、视觉效果优化、创意修图、产品图处理",
    icon: "fas fa-image",
    color: "#3498db",
    level: "核心服务",
    projects: 120,
    experience: "5年+专业经验"
  },
  {
    name: "海报设计",
    description: "竞赛宣传海报、活动主视觉、信息可视化设计、展览海报、社交媒体配图",
    icon: "fas fa-pen-fancy",
    color: "#e74c3c",
    level: "核心服务",
    projects: 85,
    experience: "专业设计师团队"
  },
  {
    name: "PPT制作",
    description: "项目路演PPT、学术汇报PPT、动态交互设计、数据可视化、演讲辅助设计",
    icon: "fas fa-file-powerpoint",
    color: "#f39c12",
    level: "核心服务",
    projects: 92,
    experience: "学术与商业双领域覆盖"
  },
  {
    name: "视频剪辑",
    description: "竞赛宣传片、成果展示视频、动画特效制作、短视频制作、动态演示视频",
    icon: "fas fa-film",
    color: "#2ecc71",
    level: "特色服务",
    projects: 45,
    experience: "AE/PR专业团队"
  },
  {
    name: "UI/UX设计",
    description: "用户界面设计、交互原型设计、视觉风格设计、移动应用设计、响应式设计",
    icon: "fas fa-palette",
    color: "#9b59b6",
    level: "特色服务",
    projects: 63,
    experience: "用户体验导向设计"
  },
  {
    name: "品牌视觉",
    description: "Logo设计、VI系统设计、品牌手册制作、配色方案、字体设计",
    icon: "fas fa-signature",
    color: "#34495e",
    level: "战略服务",
    projects: 38,
    experience: "系统性品牌建设"
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
.design-department {
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  line-height: 1.6;
  color: var(--dark-gray);
  background-color: var(--light-gray);
  min-height: 100vh;
}

/* 头部英雄区域 */
.hero {
  background: linear-gradient(135deg, rgba(44, 62, 80, 0.9), rgba(52, 152, 219, 0.8)),
              url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
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
  color: var(--white);
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

/* 内容容器 */
.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2.2rem;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  font-weight: 600;
}

.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, var(--secondary-color), var(--accent-color));
  margin: 15px auto 0;
  border-radius: 2px;
}

.section-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--dark-gray);
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
  text-indent: 2em;
}

/* 服务网格 */
.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.service-card {
  background: var(--white);
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: var(--shadow-md);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  border-top: 4px solid var(--card-color);
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
  z-index: 0;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.service-icon {
  width: 70px;
  height: 70px;

}

.service-card h3 {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 15px;
  position: relative;
}

.service-card p {
  color: var(--dark-gray);
  margin-bottom: 20px;
  min-height: 72px;
}

.service-meta {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 0.9rem;
}

.service-level {
  background-color: var(--card-color);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
}

.service-projects {
  color: var(--dark-gray);
}

/* 理念卡片 */
.philosophy-section {
  margin: 80px 0;
}

.philosophy-card {
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.05) 0%, rgba(231, 76, 60, 0.05) 100%);
  padding: 60px 40px;
  border-radius: 16px;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.8;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(52, 152, 219, 0.1);
}

.philosophy-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, rgba(52, 152, 219, 0.05) 0%, transparent 70%);
  z-index: 0;
}

.philosophy-icon {
  font-size: 3rem;
  color: var(--accent-color);
  margin-bottom: 20px;
  display: inline-block;
  animation: float 3s ease-in-out infinite;
}

.philosophy-text {
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin: 0 auto;
}

.philosophy-text strong {
  color: var(--primary-color);
  font-weight: 600;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
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
  left: 0;
  right: 0;
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
  background-color: var(--primary-color);
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
  color: rgba(255,255,255,0.8);
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

  .section-title {
    font-size: 1.8rem;
  }

  .service-grid {
    grid-template-columns: 1fr;
  }

  .member-grid {
    grid-template-columns: 1fr;
  }
}
</style>
