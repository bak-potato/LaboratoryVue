<!-- eslint-disable vue/block-lang -->
<script setup>
import { ref } from 'vue'
// 国际化
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import tp1 from '@/assets/pura-x-1.jpg'
import tdcybanner from '@/assets/members/tdry-banner.png'
// 成员头像
import zy from '@/assets/members/张洋.png'
import xzh from '@/assets/members/许致豪.png'
import mhx from '@/assets/members/孟皓雪.jpg'
// import xwh from '@/assets/members/咸文慧.jpg'
// import dym from '@/assets/members/董亚蒙.jpg'
import shl from '@/assets/members/宋洪乐.jpg'
// 成员数据
const members = ref([
  {
    avatar: tp1,
    name: '任星宇',
    position: '创新创业部/硬件部负责人',
    description: '为本项目团队提供技术指导和支持，拥有丰富的科研经验和学术背景'
  },
  {
    avatar: shl,
    name: '宋洪乐',
    position: '软件部负责人',
    description: '为本项目团队提供学术指导和支持，拥有丰富的科研经验和学术背景'
  },
  {
    avatar: tp1,
    name: '咸文慧',
    position: '文案部负责人',
    description: '负责实验室日常管理与科研项目的组织协调，曾获得国家级教学成果奖'
  },
  {
    avatar: tp1,
    name: '董亚蒙',
    position: '设计部负责人',
    description: '负责实验室日常管理与科研项目的组织协调，曾获得国家级教学成果奖'
  },
  {
    avatar: mhx,
    name: '孟皓雪',
    position: '特别学习顾问',
    description: '负责实验室日常管理与科研项目的组织协调，曾获得国家级教学成果奖'
  }
])

// 教师数据
const teachers = ref([
  {
    avatar: tp1,
    name: '杜永生',
    position: '院长',
    description: '为本项目团队提供技术指导和支持，拥有丰富的科研经验和学术背景'
  },
  {
    avatar: tp1,
    name: '孙红伟',
    position: '博士',
    description: '为本项目团队提供学术指导和支持，拥有丰富的科研经验和学术背景'
  },
  {
    avatar: tp1,
    name: '王都',
    position: '学院团委书记',
    description: '负责实验室日常管理与科研项目的组织协调，曾获得国家级教学成果奖'
  },

])

// 领导人数据
const leaders = ref([
  {
    avatar: zy,
    name: '张洋',
    position: '实验室负责人',
    description: '统筹实验室日常运营，组织协调各项目组研发工作，连续两年获得校级优秀学生干部'
  },
  {
    avatar: xzh,
    name: '许致豪',
    position: '技术部负责人',
    description: '负责技术路线规划，主导完成实验室三大核心系统的架构设计与开发'
  }
])
</script>

<template>
  <a-config-provider :locale="zhCN">
    <!-- banner图 -->
    <div>
      <a-carousel autoplay>
        <div>
          <img :src="tdcybanner" style="object-fit: cover;" />
        </div>
      </a-carousel>
    </div>

    <div class="member-container">
      <!-- 指导老师 -->
      <a-typography-title :level="2" class="section-title theme-teacher">
        <solution-outlined class="title-icon" />指导老师
      </a-typography-title>
      <a-row :gutter="[24, 32]" justify="center">
        <a-col :xs="24" :sm="12" :md="10" :lg="8" v-for="teacher in teachers" :key="teacher.name">
          <a-card hoverable class="member-card teacher-card">
            <template #cover>
              <a-image :src="teacher.avatar" height="320px" :preview="false" />
            </template>
            <a-card-meta :title="teacher.name">
              <template #description>
                <div class="member-info">
                  <a-tag color="blue" class="position-tag">{{ teacher.position }}</a-tag>
                  <a-typography-paragraph class="member-desc">
                    {{ teacher.description }}
                  </a-typography-paragraph>
                </div>
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>

      <!-- 领导人 -->
      <a-typography-title :level="2" class="section-title theme-leader">
        <user-outlined class="title-icon" />领导人
      </a-typography-title>
      <a-row :gutter="[24, 32]" justify="center">
        <a-col :xs="24" :sm="12" :md="8" :lg="6" v-for="leader in leaders" :key="leader.name">
          <a-card hoverable class="member-card leader-card">
            <template #cover>
              <a-image :src="leader.avatar" height="300px" :preview="false" />
            </template>
            <a-card-meta :title="leader.name">
              <template #description>
                <div class="member-info">
                  <a-tag color="cyan" class="position-tag">{{ leader.position }}</a-tag>
                  <a-typography-paragraph class="member-desc">
                    {{ leader.description }}
                  </a-typography-paragraph>
                </div>
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>

      <!-- 核心成员 -->
      <a-typography-title :level="2" class="section-title theme-core">
        <team-outlined class="title-icon" />核心成员
      </a-typography-title>
      <a-row :gutter="[24, 32]">
        <a-col :xs="24" :sm="12" :md="8" :lg="6" v-for="member in members" :key="member.name">
          <a-card hoverable class="member-card core-card">
            <template #cover>
              <a-image :src="member.avatar" alt="成员头像" height="300px" :preview="false" />
            </template>
            <a-card-meta :title="member.name">
              <template #description>
                <div class="member-info">
                  <a-tag color="blue" class="position-tag">{{ member.position }}</a-tag>
                  <a-typography-paragraph class="member-desc">
                    {{ member.description }}
                  </a-typography-paragraph>
                </div>
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>


    </div>
  </a-config-provider>
</template>

<style scoped lang="less">
// banner
:deep(.slick-slide) {
  img {
    height: 60vh;
    min-height: 400px;
    object-fit: cover;
    display: block;
    width: 100%;
  }
}

// 题目样式
.section-title {

  &.theme-core::after {
    background: #1890ff;
  }

  // 蓝色
  &.theme-teacher::after {
    background: #faad14;
  }

  // 金色
  &.theme-leader::after {
    background: #52c41a;
  }

  // 绿色

  .title-icon {
    margin-right: 12px;
    font-size: 0.9em;
    color: inherit;
  }
}

.member-container {
  padding: 40px 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  margin-bottom: 48px;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: #1890ff;
    margin: 16px auto 0;
  }
}

// 成员卡片样式及基本布局
.member-card {
  margin-bottom: 30px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 6px 16px -4px rgba(0, 0, 0, 0.12);
  }

  :deep(.ant-card-meta-title) {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 12px;
  }

  .position-tag {
    margin: 0 auto 12px;
    display: block;
    width: fit-content;
  }

  .member-desc {
    color: #666;
    font-size: 14px;
    line-height: 1.8;
    text-align: justify;
  }
}

.compact-card {
  :deep(.ant-card-meta-title) {
    font-size: 16px !important;
  }

  .member-desc {
    font-size: 13px;
    line-height: 1.6;
  }
}

// 教师卡片特殊样式
:where(.ant-col-md-10) .member-card {
  :deep(.ant-card-meta) {
    padding: 20px;

    &-title {
      font-size: 20px;
    }
  }

  .position-tag {
    font-size: 15px;
    padding: 4px 12px;
  }
}

.leader-row {
  margin-top: 32px;
}

// 指导老师卡片样式
.teacher-card {
  border: 2px solid #fffbe6;
  background: linear-gradient(45deg, #fffdf8, #fff);

  :deep(.ant-image) {
    height: 320px !important;
  }

  :deep(.ant-card-meta) {
    padding: 24px;

    &-title {
      font-size: 22px !important;
      color: #faad14;
    }
  }

  .position-tag {
    background: #fff7e6;
    border-color: #ffe58f;
  }
}

// 学生领导卡片样式
.leader-card {
  border-radius: 12px;
  background: #f6ffed;

  :deep(.ant-image) {
    height: 300px !important;
  }

  :deep(.ant-card-meta-title) {
    color: #52c41a;
  }

  .member-desc {
    font-size: 13px;
    padding: 0 8px;
  }

  &:hover {
    transform: scale(1.02) translateY(-5px);
    box-shadow: 0 8px 20px rgba(82, 196, 26, 0.15);
  }
}
</style>
