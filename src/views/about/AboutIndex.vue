<!-- eslint-disable vue/block-lang -->
<script setup>
import { ref } from 'vue'

import tp1 from '@/assets/index/ljtc-banner.png'

import hz2025 from '@/assets/about/hz2025.jpg'
</script>

<template>
  <div class="about-container">
    <!-- 横幅图 -->
    <div class="banner">
      <img :src="tp1" alt="实验室环境">
    </div>

    <!-- 实验室简介 -->
    <a-typography class="section">
      <h2 class="section-title">实验室概况</h2>
      <a-typography-paragraph>
        济宁学院计算机创新实验室成立于2010年，是集科研创新、项目实践、学科竞赛为一体的综合性实验平台。实验室现有指导教师12人，研究生35人，本科生研发团队80余人，配备高性能计算集群、深度学习工作站等先进设备。
      </a-typography-paragraph>
    </a-typography>

    <!-- 特色优势 -->
    <div class="section features">
      <h2 class="section-title">特色优势</h2>
      <a-row :gutter="[24, 24]">
        <a-col :xs="24" :sm="12" :md="8">
          <div class="feature-item">
            <icon-rocket theme="filled" size="32" />
            <h3>创新培养模式</h3>
            <p>采用"项目驱动+竞赛实践"的双轨制人才培养体系，实现“以赛促学”的核心理念。</p>
          </div>
        </a-col>
        <a-col :xs="24" :sm="12" :md="8">
          <div class="feature-item">
            <icon-laptop theme="filled" size="32" />
            <h3>一对多的培养方式</h3>
            <p>我们将在前期采用一位学长/学姐来辅导学生，在后期采用"项目驱动+竞赛实践"的双轨制人才培养体系。</p>
          </div>
        </a-col>
        <a-col :xs="24" :sm="12" :md="8">
          <div class="feature-item">
            <icon-laptop theme="filled" size="32" />
            <h3>多轮考核筛选</h3>
            <p>通过多轮考核筛选，将较差的人员筛选出，保证了实验室的人员质量。</p>
          </div>
        </a-col>
        <!-- 其他特征项... -->
      </a-row>
    </div>

    <!-- 开发方向 -->
    <div class="section research">
      <h2 class="section-title">开发方向</h2>
      <a-timeline>
        <a-timeline-item color="blue">
          <h3>临界拓池</h3>
          <p>计算机线程池、分布式系统设计</p>
        </a-timeline-item>
        <a-timeline-item color="green">
          <h3>智润田园</h3>
          <p>配肥系统，智慧农业</p>
        </a-timeline-item>
        <a-timeline-item color="orange">
          <h3>风花雪月</h3>
          <p>维护人员的集中式管理服务器平台</p>
        </a-timeline-item>
        <a-timeline-item color="purple">
          <h3>星海韵梦</h3>
          <p>一站式编程社区</p>
        </a-timeline-item>
        <a-timeline-item color="green">
          <h3>智能题站</h3>
          <p>人工智能融合的智能出题系统</p>
        </a-timeline-item>
        <a-timeline-item color="orange">
          <h3>未完待续</h3>
          <p>接下来的开发方向，就让我们继续书写！</p>
        </a-timeline-item>
        <!-- 其他时间线项... -->
      </a-timeline>
    </div>

    <!-- 实验室合照 -->
    <div class="section group-photo">
      <h2 class="section-title">实验室合照</h2>
      <a-row :gutter="[24, 24]" justify="center">
        <a-col :xs="24" :sm="12" :md="8" v-for="(img, index) in 1" :key="index">
          <div class="photo-card">
            <img :src="hz2025" alt="实验室合影">
            <div class="photo-meta">202{{ index + 4 }}年度实验室全体成员</div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<style scoped lang="less">
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  .banner {
    img {
      width: 100%;
      border-radius: 8px;
      margin: 20px 0;
    }
  }

  .section {
    margin: 40px 0;

    &-title {
      color: #1890ff;
      border-left: 4px solid #1890ff;
      padding-left: 12px;
      margin-bottom: 24px;
    }
  }

  .feature-item {
    text-align: center;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;

    h3 {
      margin: 12px 0;
    }
  }
}

.group-photo {
  .photo-card {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-4px);
    }

    img {
      width: 100%;
      height: 260px;
      object-fit: cover;
      border-bottom: 1px solid #eee;
    }

    .photo-meta {
      padding: 12px;
      text-align: center;
      color: #666;
      font-size: 14px;
    }
  }
}
</style>
