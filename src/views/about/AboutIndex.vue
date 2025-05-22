<!-- eslint-disable vue/block-lang -->
<script setup>
import { ref } from 'vue'

import tp1 from '@/assets/index/ljtc-banner.png'

import hz2025 from '@/assets/about/hz2025.jpg'

// 实验室数据
const labData = {
  founded: 2010,
  teachers: 12,
  graduates: 35,
  undergraduates: 80,
  equipment: ['高性能计算集群', '深度学习工作站', 'GPU服务器', '智能终端设备']
}

// 特色优势数据
const features = [
  {
    icon: 'rocket',
    title: '创新培养模式',
    description: '采用"项目驱动+竞赛实践"的双轨制人才培养体系，实现"以赛促学"的核心理念。',
    color: '#1890ff'
  },
  {
    icon: 'laptop',
    title: '一对多的培养方式',
    description: '我们将在前期采用一位学长/学姐来辅导学生，在后期采用"项目驱动+竞赛实践"的双轨制人才培养体系。',
    color: '#52c41a'
  },
  {
    icon: 'filter',
    title: '多轮考核筛选',
    description: '通过多轮考核筛选，将较差的人员筛选出，保证了实验室的人员质量。',
    color: '#faad14'
  },
  {
    icon: 'trophy',
    title: '竞赛成果丰硕',
    description: '在各类学科竞赛中屡获佳绩，包括全国大学生计算机设计大赛、互联网+创新创业大赛等。',
    color: '#722ed1'
  },
  {
    icon: 'team',
    title: '团队协作精神',
    description: '注重培养学生的团队协作能力，通过项目实践锻炼沟通与协作能力。',
    color: '#eb2f96'
  },
  {
    icon: 'experiment',
    title: '科研创新能力',
    description: '鼓励学生参与科研项目，培养创新思维和解决问题的能力。',
    color: '#13c2c2'
  }
]

// 开发方向数据
const researchDirections = [
  {
    title: '临界拓池',
    description: '计算机线程池、分布式系统设计',
    color: 'blue',
    icon: 'cluster'
  },
  {
    title: '智润田园',
    description: '配肥系统，智慧农业',
    color: 'green',
    icon: 'plant'
  },
  {
    title: '风花雪月',
    description: '维护人员的集中式管理服务器平台',
    color: 'orange',
    icon: 'server'
  },
  {
    title: '星海韵梦',
    description: '一站式编程社区',
    color: 'purple',
    icon: 'code'
  },
  {
    title: '智能题站',
    description: '人工智能融合的智能出题系统',
    color: 'cyan',
    icon: 'robot'
  },
  {
    title: '未完待续',
    description: '接下来的开发方向，就让我们继续书写！',
    color: 'gold',
    icon: 'more'
  }
]

// 实验室成就数据
const achievements = [
  {
    title: '国家级奖项',
    count: 15,
    icon: 'trophy'
  },
  {
    title: '省级奖项',
    count: 32,
    icon: 'medal'
  },
  {
    title: '发表论文',
    count: 28,
    icon: 'file-text'
  },
  {
    title: '专利授权',
    count: 12,
    icon: 'copyright'
  }
]
</script>

<template>
  <div class="about-container">
    <!-- 横幅图 -->
    <div class="banner">
      <img :src="tp1" alt="实验室环境">
      <div class="banner-overlay">
        <h1>济宁学院计算机创新实验室</h1>
        <p>创新 · 实践 · 成长</p>
      </div>
    </div>

    <!-- 实验室简介 -->
    <div class="section intro">
      <h2 class="section-title">实验室概况</h2>
      <div class="intro-content">
        <div class="intro-text">
          <a-typography-paragraph>
            济宁学院计算机创新实验室成立于{{ labData.founded }}年，是集科研创新、项目实践、学科竞赛为一体的综合性实验平台。实验室现有指导教师{{ labData.teachers }}人，研究生{{
              labData.graduates }}人，本科生研发团队{{ labData.undergraduates }}余人。
          </a-typography-paragraph>
          <div class="equipment-list">
            <h3>实验室设备</h3>
            <a-tag v-for="item in labData.equipment" :key="item" color="blue">
              {{ item }}
            </a-tag>
          </div>
        </div>
        <div class="achievement-cards">
          <a-row :gutter="[16, 16]">
            <a-col :span="12" v-for="item in achievements" :key="item.title">
              <div class="achievement-card">
                <icon-component :type="item.icon" />
                <div class="achievement-info">
                  <h3>{{ item.count }}+</h3>
                  <p>{{ item.title }}</p>
                </div>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>

    <!-- 特色优势 -->
    <div class="section features">
      <h2 class="section-title">特色优势</h2>
      <a-row :gutter="[24, 24]">
        <a-col :xs="24" :sm="12" :md="8" v-for="feature in features" :key="feature.title">
          <div class="feature-item">
            <icon-component :type="feature.icon" :style="{ color: feature.color }" />
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </a-col>
      </a-row>
    </div>

    <!-- 开发方向 -->
    <div class="section research">
      <h2 class="section-title">开发方向</h2>
      <a-timeline mode="alternate">
        <a-timeline-item v-for="item in researchDirections" :key="item.title" :color="item.color">
          <template #dot>
            <icon-component :type="item.icon" />
          </template>
          <div class="timeline-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </a-timeline-item>
      </a-timeline>
    </div>

    <!-- 实验室合照 -->
    <div class="section group-photo">
      <h2 class="section-title">实验室合照</h2>
      <a-row :gutter="[24, 24]" justify="center">
        <a-col :xs="24" :sm="12" :md="8" v-for="(img, index) in 1" :key="index">
          <div class="photo-card">
            <img :src="hz2025" alt="实验室合影">
            <div class="photo-meta">
              <h3>202{{ index + 4 }}年度实验室全体成员</h3>
              <p>记录美好时刻，见证成长历程</p>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<style scoped lang="less">
// 变量定义
@primary-color: #1890ff;
@success-color: #52c41a;
@warning-color: #faad14;
@error-color: #f5222d;
@heading-color: #262626;
@text-color: #595959;
@text-color-secondary: #8c8c8c;
@border-radius-base: 8px;
@transition-duration: 0.3s;

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  .banner {
    position: relative;
    margin: 20px 0;
    border-radius: @border-radius-base;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }

    .banner-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6));
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      text-align: center;

      h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      }

      p {
        font-size: 1.2rem;
        opacity: 0.9;
      }
    }
  }

  .section {
    margin: 60px 0;
    padding: 0 20px;

    &-title {
      position: relative;
      color: @heading-color;
      font-size: 2rem;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      text-align: center;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: @primary-color;
        border-radius: 2px;
      }
    }
  }

  .intro-content {
    display: flex;
    gap: 40px;
    margin-top: 2rem;

    .intro-text {
      flex: 1;

      .equipment-list {
        margin-top: 2rem;

        h3 {
          margin-bottom: 1rem;
          color: @heading-color;
        }

        .ant-tag {
          margin: 0.5rem;
          padding: 4px 12px;
          border-radius: 16px;
        }
      }
    }

    .achievement-cards {
      flex: 1;

      .achievement-card {
        background: white;
        padding: 1.5rem;
        border-radius: @border-radius-base;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        display: flex;
        align-items: center;
        gap: 1rem;
        transition: all @transition-duration ease;

        &:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
        }

        .anticon {
          font-size: 2rem;
          color: @primary-color;
        }

        .achievement-info {
          h3 {
            font-size: 1.5rem;
            color: @heading-color;
            margin: 0;
          }

          p {
            color: @text-color-secondary;
            margin: 0;
          }
        }
      }
    }
  }

  .feature-item {
    background: white;
    padding: 2rem;
    border-radius: @border-radius-base;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    text-align: center;
    transition: all @transition-duration ease;
    border-top: 4px solid transparent;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    }

    .anticon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    h3 {
      color: @heading-color;
      margin: 1rem 0;
      font-size: 1.2rem;
    }

    p {
      color: @text-color;
      margin: 0;
      line-height: 1.6;
    }
  }

  .timeline-content {
    background: white;
    padding: 1rem;
    border-radius: @border-radius-base;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

    h3 {
      color: @heading-color;
      margin: 0 0 0.5rem;
    }

    p {
      color: @text-color;
      margin: 0;
    }
  }

  .group-photo {
    .photo-card {
      background: white;
      border-radius: @border-radius-base;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: all @transition-duration ease;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
      }

      .photo-meta {
        padding: 1.5rem;
        text-align: center;

        h3 {
          color: @heading-color;
          margin: 0 0 0.5rem;
        }

        p {
          color: @text-color-secondary;
          margin: 0;
        }
      }
    }
  }
}

// 响应式调整
@media (max-width: 768px) {
  .about-container {
    .banner {
      .banner-overlay {
        h1 {
          font-size: 2rem;
        }
      }
    }

    .intro-content {
      flex-direction: column;
    }

    .section {
      margin: 40px 0;
      padding: 0 10px;
    }
  }
}
</style>
