<!-- eslint-disable vue/block-lang -->
<script setup>
import { ref } from 'vue'
// 国际化
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import tp1 from '@/assets/pura-x-1.jpg'
import tdcybanner from '@/assets/members/tdry-banner.png'
// 指导老师头像
import dys from '@/assets/members/杜永生.png'
import wd from '@/assets/members/王都.png'
import shw from '@/assets/members/孙红伟.png'

// 成员头像
import zy from '@/assets/members/张洋.png'
import xzh from '@/assets/members/许致豪.png'
import mhx from '@/assets/members/孟皓雪.jpg'
import xwh from '@/assets/members/咸雯慧.jpg'
import dym from '@/assets/members/董亚蒙.jpg'
import rxy from '@/assets/members/任星宇.png'
import shl from '@/assets/members/宋洪乐.jpg'
import fqh from '@/assets/members/付庆浩.jpg'
import yyy from '@/assets/members/杨远毅.png'
import djk from '@/assets/members/丁俊凯.png'
// 成员数据
const members = ref([
  {
    avatar: rxy,
    name: '任星宇',
    position: '创新创业部/硬件部负责人',
    description: '精于硬件技术，兼具创新思维，带领团队攻克技术难题，推动项目落地，助力成员提升，为硬件创新注入活力。'
  },
  {
    avatar: shl,
    name: '宋洪乐',
    position: '软件部负责人',
    description: '熟稔前沿技术，善统筹管理与创新突破，带领团队高效开发优质软件，与其它部门合作，为项目带来创新效果。'
  },
  {
    avatar: xwh,
    name: '咸雯慧',
    position: '文案部负责人',
    description: '擅文字创作与创意策划，统筹内容输出与品牌传播，带领团队高效完成文案项目，助力提升各个项目的专业性。'
  },
  {
    avatar: dym,
    name: '董亚蒙',
    position: '设计部负责人',
    description: '精于创意设计与视觉传达，统筹设计项目全流程，带领团队高效输出优质作品，助力美化各个项目的视觉效果。'
  },
  {
    avatar: mhx,
    name: '孟皓雪',
    position: '前端组组员兼特别学习顾问',
    description: '精于学习策略规划与个性化指导，统筹资源开发及团队管理，定制高效方案，助力学员提升学习效果，赋能成长。'
  },
  {
    avatar: yyy,
    name: '杨远毅',
    position: '后端组组长',
    description: '把控技术方案设计与实施，提升系统性能与稳定性，带领团队攻克技术难题，助力项目高效发展。曾同时负责多项项目后端开发。'
  },
  {
    avatar: fqh,
    name: '付庆浩',
    position: '23级前文案部负责人',
    description: '满怀热忱与创意，统筹文案策划与内容输出，带领团队以青年视角打造优质文案，助力团队持续向前，输出更优秀的文案。'
  },
  {
    avatar: djk,
    name: '丁俊凯',
    position: '23级测试组组长',
    description: '负责制定测试计划，组织测试工作，把控测试质量与进度，优化测试流程，提升团队效率，为软件质量保驾护航。'
  },
])

// 教师数据
const teachers = ref([
  {
    avatar: dys,
    name: '杜永生',
    position: '副院长',
    description: '计算机科学与工程学院副院长，发表核心论文3篇、学科竞赛获奖20余项，主编教材 6 部，指导学生获国创 1 项等，科研成果丰硕。'
  },
  {
    avatar: shw,
    name: '孙红伟',
    position: '博士',
    description: '山东科技大学博士，计算机科学与技术专业，研究物联网等方向，主持/参与多项国家及省自然科学基金，发表多篇高影响因子 SCI 论文。'
  },
  {
    avatar: wd,
    name: '王都',
    position: '学院团委书记',
    description: '计算机科学与工程学院团委书记，负责实验室与学院的沟通协调，为实验室提供多方面支持，确保资源调配顺畅，推动项目报名开展。'
  },

])

// 领导人数据
const leaders = ref([
  {
    avatar: zy,
    name: '张洋',
    position: '实验室负责人',
    description: '统筹整体运营与资源合理分配，主导技术架构设计，以专业能力推动实验室高效运作与技术创新。'
  },
  {
    avatar: xzh,
    name: '许致豪',
    position: '实验室执行负责人',
    description: '主抓日常管理，高效协调各部门工作，保障实验室有序运转，以严谨态度提升整体运作效能。'
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
              <a-image :src="teacher.avatar" height="400px" :preview="false" />
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
    height: 400px !important;
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
