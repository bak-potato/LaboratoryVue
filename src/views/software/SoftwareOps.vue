<template>
  <a-layout class="department-page">
    <a-layout-content class="content">
      <!-- 轮播图 - 增加圆角和阴影 -->
      <a-carousel arrows autoplay class="carousel">
        <div v-for="image in carouselImages" :key="image">
          <img :src="image" class="carousel-image" />
        </div>
      </a-carousel>

      <!-- 部门简介 - 增加渐变背景和图标 -->
      <a-card class="section-card intro-card" title="部门简介">
        <template #extra>
          <a-tag color="blue">关于我们</a-tag>
        </template>
        <div class="intro-content">
          <p>
            <a-icon type="info-circle" theme="filled" class="intro-icon" />
            实验室运维中心是负责全校实验室设备维护、技术支持和管理服务的专业部门。我们致力于为教学科研提供安全、高效、稳定的实验环境和技术保障。
          </p>
          <p>
            <a-icon type="team" class="intro-icon" />
            中心现有专业技术人员30余人，下设设备维护组、技术支持组、安全管理组和信息化组四个专业团队，服务覆盖全校200余个实验室。
          </p>
        </div>
      </a-card>

      <!-- 服务内容 - 卡片美化 -->
      <a-card class="section-card service-card" title="服务内容">
        <template #extra>
          <a-button type="link" size="small">查看全部服务</a-button>
        </template>
        <a-row :gutter="[24, 24]">
          <a-col :xs="24" :sm="12" :md="6" v-for="service in services" :key="service.title">
            <a-card hoverable class="service-item" :body-style="{padding: '20px'}">
              <div class="service-icon-wrapper">
                <component :is="service.icon" class="service-icon" />
              </div>
              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-desc">{{ service.description }}</p>
              <a-button type="link" size="small" class="service-link">了解更多</a-button>
            </a-card>
          </a-col>
        </a-row>
      </a-card>

      <!-- 团队成员 - 增加悬停效果 -->
      <div class="section team-section">
        <div class="section-header">
          <h2>团队成员</h2>
          <a-divider type="horizontal" class="divider" />
          <p class="section-subtitle">专业的技术团队为您提供优质服务</p>
        </div>
        <a-row :gutter="[24, 24]" justify="center">
          <a-col :xs="24" :sm="12" :md="8" :lg="6" v-for="member in teamMembers" :key="member.name">
            <a-card hoverable class="team-card" :body-style="{padding: '20px', textAlign: 'center'}">
              <div class="avatar-wrapper">
                <img alt="avatar" :src="member.avatar" class="member-avatar" />
              </div>
              <h3 class="member-name">{{ member.name }}</h3>
              <p class="member-role">{{ member.role }}</p>
              <div class="social-links">
                <a-icon type="mail" class="social-icon" />
                <a-icon type="phone" class="social-icon" />
                <a-icon type="message" class="social-icon" />
              </div>
            </a-card>
          </a-col>
        </a-row>
      </div>

      <!-- 联系我们 - 增加表单 -->
      <a-card class="section-card contact-card" title="联系我们">
        <a-row :gutter="24">
          <a-col :span="12">
            <div class="contact-info">
              <h3><a-icon type="environment" /> 地址</h3>
              <p>XX大学XX校区实验楼A座101室</p>

              <h3><a-icon type="phone" /> 电话</h3>
              <p>010-12345678</p>

              <h3><a-icon type="mail" /> 邮箱</h3>
              <p>lab-support@university.edu</p>

              <h3><a-icon type="clock-circle" /> 工作时间</h3>
              <p>周一至周五: 8:30 - 17:30</p>
            </div>
          </a-col>
          <a-col :span="12">
            <a-form class="contact-form">
              <a-form-item label="姓名">
                <a-input placeholder="请输入您的姓名" />
              </a-form-item>
              <a-form-item label="邮箱">
                <a-input placeholder="请输入您的邮箱" />
              </a-form-item>
              <a-form-item label="电话">
                <a-input placeholder="请输入您的电话" />
              </a-form-item>
              <a-form-item label="留言内容">
                <a-textarea :rows="4" placeholder="请输入您的留言内容" />
              </a-form-item>
              <a-button type="primary" block>提交留言</a-button>
            </a-form>
          </a-col>
        </a-row>
      </a-card>
    </a-layout-content>


  </a-layout>
</template>
<!-- eslint-disable vue/block-lang -->
<script setup>
import yyt from '@/assets/members/尹衍涛.jpg'
import hsz from '@/assets/members/霍盛展.jpg'
import {
  ToolOutlined,
  SafetyOutlined,
  ApiOutlined,
  TeamOutlined,
} from '@ant-design/icons-vue'

// 轮播图图片
const carouselImages = [
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1581094794320-8f38e0f8aefe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1581094794321-84195e9f0a1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
]

// 服务内容
const services = [
  {
    title: '设备维护',
    description: '实验室仪器设备的日常维护、定期检修和故障排除',
    icon: ToolOutlined
  },
  {
    title: '安全管理',
    description: '实验室安全巡查、危险品管理和应急预案制定',
    icon: SafetyOutlined
  },
  {
    title: '技术支持',
    description: '实验教学和科研项目的技术支持与设备操作培训',
    icon: ApiOutlined
  },
  {
    title: '团队建设',
    description: '实验室技术人员培训和实验室文化建设',
    icon: TeamOutlined
  }
]

// 团队成员
const teamMembers = [
  {
    name: '尹衍涛',
    role: '运维组组长/高级工程师',
    avatar: yyt
  },
  {
    name: '霍盛展',
    role: '中心副主任/高级工程师',
    avatar: hsz
  }
]
</script>

<style scoped>
.department-page {
  min-height: 100vh;
  background-color: #f5f7fa;
}

.content {
  padding: 20px 50px;
  max-width: 1400px;
  margin: 0 auto;
}

/* 轮播图样式 */
.carousel {
  margin-bottom: 40px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.carousel-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

/* 卡片通用样式 */
.section-card {
  margin-bottom: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  border: none;
}

/* 部门简介卡片 */
.intro-card {
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
}

.intro-content {
  font-size: 16px;
  line-height: 1.8;
  color: #555;
}

.intro-icon {
  margin-right: 8px;
  color: #1890ff;
}

/* 服务内容卡片 */
.service-card .ant-card-head {
  border-bottom: none;
}

.service-item {
  transition: all 0.3s ease;
  border-radius: 8px;
  text-align: center;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.service-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.service-icon-wrapper {
  margin-bottom: 16px;
}

.service-icon {
  font-size: 48px;
  color: #1890ff;
  background: linear-gradient(135deg, #e6f7ff 0%, #bae7ff 100%);
  padding: 20px;
  border-radius: 50%;
  display: inline-block;
}

.service-title {
  font-size: 18px;
  margin-bottom: 12px;
  color: #333;
}

.service-desc {
  color: #666;
  font-size: 14px;
  margin-bottom: 16px;
}

.service-link {
  color: #1890ff;
  padding: 0;
}

/* 团队成员部分 */
.team-section {
  margin: 60px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-header h2 {
  font-size: 28px;
  color: #333;
  margin-bottom: 8px;
}

.section-subtitle {
  color: #666;
  font-size: 16px;
}

.divider {
  width: 80px;
  margin: 16px auto;
  border-top: 2px solid #1890ff;
}

.team-card {
  transition: all 0.3s ease;
  border-radius: 8px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.avatar-wrapper {
  margin: -20px -20px 20px -20px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
}

.member-avatar {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.team-card:hover .member-avatar {
  transform: scale(1.05);
}

.member-name {
  font-size: 18px;
  margin-bottom: 4px;
  color: #333;
}

.member-role {
  color: #666;
  font-size: 14px;
  margin-bottom: 16px;
}

.social-links {
  margin-top: 16px;
}

.social-icon {
  font-size: 18px;
  color: #666;
  margin: 0 8px;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #1890ff;
  cursor: pointer;
}

/* 联系我们部分 */
.contact-card .ant-card-head {
  border-bottom: none;
}

.contact-info h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}

.contact-info h3 .anticon {
  margin-right: 8px;
  color: #1890ff;
}

.contact-info p {
  color: #666;
  margin-bottom: 20px;
  padding-left: 26px;
}

.contact-form .ant-input,
.contact-form .ant-input-textarea {
  border-radius: 4px;
}

/* 页脚样式 */
.footer {
  background-color: #001529;
  color: rgba(255, 255, 255, 0.65);
  padding: 40px 0;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-links {
  margin-bottom: 20px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.65);
  margin: 0 15px;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #fff;
}

.copyright {
  font-size: 14px;
}

/* 响应式设计 */
@media (max-width: 992px) {
  .content {
    padding: 20px 30px;
  }

  .carousel-image {
    height: 400px;
  }
}

@media (max-width: 768px) {
  .content {
    padding: 20px 15px;
  }

  .carousel-image {
    height: 300px;
  }

  .contact-card .ant-col {
    width: 100%;
    max-width: 100%;
    flex: 0 0 100%;
  }

  .contact-info {
    margin-bottom: 30px;
  }
}
</style>
