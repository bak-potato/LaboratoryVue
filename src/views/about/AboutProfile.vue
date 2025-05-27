<!-- eslint-disable vue/block-lang -->
<script setup>
import { ref } from 'vue'
// 图片资源
import zdj1 from '@/assets/profile/zdj1.jpg'
import zdj2 from '@/assets/profile/zdj2.jpg'
import zdj3 from '@/assets/profile/zdj3.jpg'
import zdj4 from '@/assets/profile/zdj4.jpg'
import zdj5 from '@/assets/profile/zdj5.jpg'

import yd25 from '@/assets/profile/2025yd.jpg'
import tj225 from '@/assets/profile/2025tj2.jpg'

import tp1 from '@/assets/index/ljtc-banner.png'

// 导入图标
import { 
  TrophyOutlined, 
  CameraOutlined, 
  BankOutlined, 
  TeamOutlined 
} from '@ant-design/icons-vue'

// 定义图片数据（可根据实际需求扩展）
const photoGroups = ref([
  {
    title: '参加竞赛',
    icon: TrophyOutlined,
    list: [
      { src: zdj1, desc: '2025年中国大学生计算机设计大赛线上答辩' },
      { src: zdj2, desc: '2025年中国大学生计算机设计大赛线上答辩' },
      { src: zdj3, desc: '2025年中国大学生计算机设计大赛线上答辩' },
      { src: zdj5, desc: '2025年中国大学生计算机设计大赛线上答辩' },
      { src: zdj4, desc: '2025年中国机器人及人工智能大赛校赛模拟' },
    ]
  },
  {
    title: '活动掠影',
    icon: CameraOutlined,
    list: [
      { src: yd25, desc: '2025年元旦实验室团建活动' },
      { src: tj225, desc: '2025年实验室团建活动' }
    ]
  },
  {
    title: '参观企业',
    icon: BankOutlined,
    list: [
      { src: tp1, desc: '2023年度最佳团队奖' },
      { src: tp1, desc: '2022年度创新奖' }
    ]
  },
  {
    title: '日常场景',
    icon: TeamOutlined,
    list: [
      { src: tp1, desc: '团队项目讨论现场' }
    ]
  }
])
</script>

<template>
  <div class="about-container">
    <!-- 按分类展示图片 -->
    <div v-for="group in photoGroups" :key="group.title" class="section">
      <h2 class="section-title">
        <component :is="group.icon" class="section-icon" />
        {{ group.title }}
      </h2>
      <a-row :gutter="[24, 24]" justify="center">
        <a-col :xs="24" :sm="12" :md="8" v-for="(photo, index) in group.list" :key="index">
          <div class="photo-card">
            <img :src="photo.src" :alt="photo.desc" class="photo-img" loading="lazy">
            <div class="photo-desc">{{ photo.desc }}</div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<style lang="less" scoped>
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 40px;

  .section {
    margin: 50px 0;

    .section-title {
      color: #262626;
      font-size: 1.8rem;
      padding-left: 12px;
      border-left: 4px solid #1890ff;
      margin: 0 0 30px;
      display: flex;
      align-items: center;
      gap: 12px;

      .section-icon {
        font-size: 1.6rem;
        color: #1890ff;
      }
    }

    .photo-card {
      background: #fff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-6px);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
      }

      .photo-img {
        width: 100%;
        height: 220px;
        object-fit: cover;
        border-bottom: 2px solid #f0f0f0;
      }

      .photo-desc {
        padding: 14px 12px;
        text-align: center;
        color: #595959;
        font-size: 1rem;
        line-height: 1.4;
      }
    }
  }
}
</style>
