<template>
  <a-layout class="department-layout">
    <!-- 顶部导航 -->


    <!-- 移动端侧边栏菜单 -->
    <a-drawer
      :visible="mobileMenuVisible"
      placement="right"
      @close="mobileMenuVisible = false"
      class="mobile-menu"
    >
      <a-menu
        :mode="'inline'"
        :selectedKeys="selectedKeys"
        @click="mobileMenuVisible = false"
        theme="dark"
      >
        <a-menu-item key="home">首页</a-menu-item>
        <a-menu-item key="about">部门简介</a-menu-item>
        <a-menu-item key="team">团队成员</a-menu-item>
        <a-menu-item key="services">测试服务</a-menu-item>
        <a-menu-item key="projects">项目案例</a-menu-item>
        <a-menu-item key="contact">联系方式</a-menu-item>
      </a-menu>
    </a-drawer>

    <!-- 主体内容 -->
    <a-layout-content class="content">
      <!-- 页面横幅 -->
      <div class="banner">
        <div class="banner-content">
          <h1 class="banner-title">计算机实验室 - 测试部门</h1>
          <p class="banner-subtitle">专业、高效、创新的软件测试服务</p>
          <a-button type="primary" size="large">了解更多</a-button>
        </div>
      </div>

      <!-- 部门简介 -->
      <section class="section about-section">
  <div class="container">
    <a-row :gutter="32">
        <h2 class="section-title">部门简介</h2>
        <p class="section-description">
          计算机实验室测试部门成立于2010年，是国内专注于精品软件测试的专业团队。我们以“小而精”的服务模式，为客户提供高性价比的定制化测试解决方案。
        </p>
        <p class="section-description">
          团队由2名资深测试工程师组成，擅长从需求分析到缺陷闭环的全流程质量管控，尤其在垂直领域软件测试中积累了丰富经验。
        </p>

    </a-row>
  </div>
</section>

      <!-- 服务优势 -->
      <section class="section services-section">
        <div class="container">
          <h2 class="section-title text-center">服务优势</h2>
          <p class="section-description text-center">我们提供全方位的测试服务，满足不同客户的需求</p>

          <a-row :gutter="24" class="services-grid">
            <a-col :xs="24" :sm="12" :md="8">
              <a-card class="service-card">
                <a-icon type="desktop" class="service-icon" />
                <h3 class="service-title">功能测试</h3>
                <p class="service-description">验证软件功能是否符合需求规格说明书，确保用户需求得到满足。</p>
              </a-card>
            </a-col>

            <a-col :xs="24" :sm="12" :md="8">
              <a-card class="service-card">
                <a-icon type="mobile" class="service-icon" />
                <h3 class="service-title">移动测试</h3>
                <p class="service-description">针对移动应用进行全面测试，包括兼容性、性能、安全等方面。</p>
              </a-card>
            </a-col>

            <a-col :xs="24" :sm="12" :md="8">
              <a-card class="service-card">
                <a-icon type="safety" class="service-icon" />
                <h3 class="service-title">安全测试</h3>
                <p class="service-description">识别软件系统中的安全漏洞和弱点，提供安全加固建议。</p>
              </a-card>
            </a-col>

            <a-col :xs="24" :sm="12" :md="8">
              <a-card class="service-card">
                <a-icon type="rocket" class="service-icon" />
                <h3 class="service-title">性能测试</h3>
                <p class="service-description">评估软件系统的性能指标，确保系统在高负载下稳定运行。</p>
              </a-card>
            </a-col>

            <a-col :xs="24" :sm="12" :md="8">
              <a-card class="service-card">
                <a-icon type="api" class="service-icon" />
                <h3 class="service-title">接口测试</h3>
                <p class="service-description">验证系统组件间接口的正确性和稳定性，确保数据传输准确无误。</p>
              </a-card>
            </a-col>

            <a-col :xs="24" :sm="12" :md="8">
              <a-card class="service-card">
                <a-icon type="tool" class="service-icon" />
                <h3 class="service-title">自动化测试</h3>
                <p class="service-description">建立自动化测试框架，提高测试效率，缩短测试周期。</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </section>

      <!-- 团队成员 -->
      <section class="section team-section">
        <div class="container">
          <h2 class="section-title text-center">核心团队</h2>
          <p class="section-description text-center">我们拥有一支经验丰富、技术精湛的专业测试团队</p>

          <a-row :gutter="24" class="team-grid">
            <a-col :xs="24" :sm="12" :md="6">
              <a-card class="team-card">
                <a-image src="https://picsum.photos/seed/manager/200/200" alt="团队成员" class="team-image" />
                <h3 class="team-name">张明</h3>
                <p class="team-position">测试部门经理</p>
                <p class="team-description">10年软件测试经验，曾任职于知名科技公司</p>
              </a-card>
            </a-col>

            <a-col :xs="24" :sm="12" :md="6">
              <a-card class="team-card">
                <a-image src="https://picsum.photos/seed/automation/200/200" alt="团队成员" class="team-image" />
                <h3 class="team-name">李华</h3>
                <p class="team-position">自动化测试专家</p>
                <p class="team-description">8年自动化测试经验，精通各类自动化测试框架</p>
              </a-card>
            </a-col>

            <a-col :xs="24" :sm="12" :md="6">
              <a-card class="team-card">
                <a-image src="https://picsum.photos/seed/performance/200/200" alt="团队成员" class="team-image" />
                <h3 class="team-name">王芳</h3>
                <p class="team-position">性能测试专家</p>
                <p class="team-description">7年性能测试经验，擅长高并发系统性能优化</p>
              </a-card>
            </a-col>

            <a-col :xs="24" :sm="12" :md="6">
              <a-card class="team-card">
                <a-image src="https://picsum.photos/seed/security/200/200" alt="团队成员" class="team-image" />
                <h3 class="team-name">赵强</h3>
                <p class="team-position">安全测试专家</p>
                <p class="team-description">9年安全测试经验，曾参与多个国家级安全项目</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </section>

      <!-- 项目案例 -->

      <!-- 联系我们 -->

    </a-layout-content>

    <!-- 页脚 -->

  </a-layout>
</template>

<!-- eslint-disable vue/block-lang -->

<script setup>
import { ref, onMounted, } from 'vue';
import { useRoute,  } from 'vue-router';

// 响应式数据
const route = useRoute();
const menuMode = ref('horizontal');
const selectedKeys = ref([route.path === '/' ? 'home' : route.path.slice(1)]);
const mobileMenuVisible = ref(false);


// 监听窗口大小变化，适配导航菜单
const handleResize = () => {
  menuMode.value = window.innerWidth < 768 ? 'inline' : 'horizontal';
};

// 菜单点击事件


// 切换移动菜单


// 表单提交处理


// 页面加载时初始化
onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});


</script>

<style scoped>
.department-layout {
  min-height: 100vh;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  background: #1890ff;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  height: 64px;
  display: flex;
  align-items: center;
}

.header-menu {
  line-height: 64px;
  background: transparent;
  border: none;
}

.header-menu .ant-menu-item {
  color: white;
}

.header-menu .ant-menu-item-selected {
  background-color: rgba(255, 255, 255, 0.1);
}

.mobile-menu-button {
  display: none;
  background: transparent;
  border: none;
  color: white;
}

@media (max-width: 768px) {
  .header {
    padding: 0 20px;
  }

  .header-menu {
    display: none;
  }

  .mobile-menu-button {
    display: block;
  }
}

.banner {
  height: 400px;
  background-image: url('https://picsum.photos/seed/testbanner/1920/800');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.banner-content {
  text-align: center;
  color: white;
  z-index: 1;
  padding: 0 20px;
}

.banner-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
}

.banner-subtitle {
  font-size: 24px;
  margin-bottom: 40px;
}

.section {
  padding: 80px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

.section-description {
  font-size: 18px;
  color: #666;
  margin-bottom: 60px;
}

.text-center {
  text-align: center;
}

.about-section {
  background-color: #f5f5f5;
}

.stats-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.services-section {
  background-color: white;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.service-card {
  text-align: center;
  padding: 30px;
  width:370px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.service-icon {
  font-size: 36px;
  color: #1890ff;
  margin-bottom: 20px;
}

.service-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}

.service-description {
  color: #666;
}

.team-section {
  background-color: #f5f5f5;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}

.team-card {
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.team-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.team-name {
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
}

.team-position {
  color: #1890ff;
  margin-bottom: 10px;
}

.team-description {
  padding: 0 20px 20px;
  color: #666;
}

.projects-section {
  background-color: white;
}

.project-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-title {
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
}

.project-description {
  margin: 0 20px 20px;
  color: #666;
}

.projects-tabs .ant-tabs-nav {
  margin-bottom: 30px;
}

.contact-section {
  background-color: #f5f5f5;
}

.contact-info {
  margin-top: 40px;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.contact-icon {
  font-size: 24px;
  color: #1890ff;
  margin-right: 15px;
}

.social-media {
  margin-top: 40px;
}

.social-link {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #1890ff;
  color: white;
  text-align: center;
  line-height: 40px;
  margin-right: 15px;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: #096dd9;
  transform: scale(1.1);
}

.social-icon {
  font-size: 18px;
}

.contact-card {
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-card-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
}

.submit-button {
  width: 100%;
}

.footer {
  background-color: #1f1f1f;
  color: white;
  padding: 80px 0;
}

.footer-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer-text {
  color: #ccc;
  margin-bottom: 20px;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-list li {
  margin-bottom: 10px;
  color: #ccc;
}

.footer-bottom {
  margin-top: 40px;
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #333;
}
</style>
