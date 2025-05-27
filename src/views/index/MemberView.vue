<!-- eslint-disable vue/block-lang -->
<script setup>
import { ref, onMounted } from 'vue'

// 添加滚动动画逻辑
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target
        const delay = el.dataset.delay || '0ms'
        el.style.animationDelay = delay
        el.classList.add('animate__animated')
        if (el.dataset.type === 'teacher') {
          el.classList.add('animate__fadeInLeft')
        } else {
          el.classList.add('animate__fadeInUp')
        }
        observer.unobserve(el)
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px 50px 0px' }) // 减少边距提高性能

  document.querySelectorAll('.animate-on-scroll').forEach((el, idx) => {
    el.dataset.delay = `${idx * 50}ms` // 减少动画延迟
    observer.observe(el)
  })
})

// 国际化
import zhCN from 'ant-design-vue/es/locale/zh_CN'
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
    <div class="banner-container animate__animated animate__fadeIn">
      <a-carousel autoplay>
        <div>
          <img :src="tdcybanner" class="banner-image" alt="团队banner" />
        </div>
      </a-carousel>
    </div>

    <div class="member-container">
      <!-- 指导老师 -->
      <div class="teacher-section">
        <a-typography-title :level="2" class="section-title theme-teacher">
          <solution-outlined class="title-icon" />指导老师
        </a-typography-title>
        <a-row :gutter="[16, 24]" justify="center">
          <a-col :xs="24" :sm="24" :md="12" :lg="8" v-for="teacher in teachers" :key="teacher.name">
            <div class="animate-on-scroll" data-type="teacher">
              <a-card hoverable class="member-card teacher-card">
                <template #cover>
                  <div class="image-container">
                    <a-image :src="teacher.avatar" class="member-image" :preview="false" />
                  </div>
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
            </div>
          </a-col>
        </a-row>
      </div>

      <!-- 领导人 -->
      <a-typography-title :level="2" class="section-title theme-leader">
        <user-outlined class="title-icon" />领导人
      </a-typography-title>
      <div class="animate-on-scroll">
        <a-row :gutter="[16, 24]" justify="center">
          <a-col :xs="24" :sm="12" :md="12" :lg="8" v-for="leader in leaders" :key="leader.name">
            <a-card hoverable class="member-card leader-card">
              <template #cover>
                <div class="image-container">
                  <a-image :src="leader.avatar" class="member-image" :preview="false" />
                </div>
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
      </div>

      <!-- 核心成员 -->
      <a-typography-title :level="2" class="section-title theme-core">
        <team-outlined class="title-icon" />核心成员
      </a-typography-title>
      <a-row :gutter="[16, 20]">
        <a-col :xs="24" :sm="12" :md="8" :lg="6" v-for="member in members" :key="member.name">
          <div class="animate-on-scroll">
            <a-card hoverable class="member-card core-card">
              <template #cover>
                <div class="image-container">
                  <a-image :src="member.avatar" alt="成员头像" class="member-image" :preview="false" />
                </div>
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
          </div>
        </a-col>
      </a-row>
    </div>
  </a-config-provider>
</template>

<style scoped lang="less">
// 添加更细致的断点控制和变量定义
@xs-breakpoint: 480px;
@sm-breakpoint: 576px;
@md-breakpoint: 768px;
@lg-breakpoint: 992px;
@xl-breakpoint: 1200px;

// 主题色变量
@theme-teacher: #faad14;
@theme-leader: #52c41a;
@theme-core: #1890ff;

// 动画基础样式优化
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, transform;
  backface-visibility: hidden;

  &.animate__animated {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate__animated {
  --animate-duration: 0.8s;
}

// Banner 样式优化
.banner-container {
  width: 100%;
  // position: relative;
  overflow: hidden;
  margin-bottom: 40px;
  // box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  // &::after {
  //   content: '';
  //   position: absolute;
  //   bottom: 0;
  //   left: 0;
  //   right: 0;
  //   height: 60px;
  //   background: linear-gradient(to top, rgba(255, 255, 255, 0.9), transparent);
  // }

  :deep(.slick-slide) {
    .banner-image {
      width: 100%;
      height: 60vh;
      min-height: 300px;
      max-height: 500px;
      object-fit: cover;
      display: block;
      transition: transform 0.5s ease;

      // &:hover {
      //   transform: scale(1.02);
      // }
    }
  }

  @media (max-width: @md-breakpoint) {
    margin-bottom: 30px;

    :deep(.slick-slide) {
      .banner-image {
        height: 40vh;
        min-height: 250px;
      }
    }
  }
}

// 主容器优化
.member-container {
  width: 92%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;
  // background: linear-gradient(to bottom, #fff, #f8f9fa);
  border-radius: 20px;
  // box-shadow: 0 0 40px rgba(0, 0, 0, 0.03);

  @media (max-width: @md-breakpoint) {
    width: 96%;
    padding: 16px;
    border-radius: 16px;
  }

  @media (max-width: @sm-breakpoint) {
    width: 98%;
    padding: 12px;
    border-radius: 12px;
  }

  >div {
    margin-bottom: 60px;

    &:last-child {
      margin-bottom: 20px;
    }
  }
}

// 标题样式优化
.section-title {
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 48px;
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.5px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 4px;
    width: 60px;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  &:hover::after {
    width: 100px;
  }

  &.theme-core::after {
    background: @theme-core;
    box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3);
  }

  &.theme-teacher::after {
    background: @theme-teacher;
    box-shadow: 0 2px 8px rgba(250, 173, 20, 0.3);
  }

  &.theme-leader::after {
    background: @theme-leader;
    box-shadow: 0 2px 8px rgba(82, 196, 26, 0.3);
  }

  .title-icon {
    margin-right: 12px;
    font-size: 0.9em;
    vertical-align: middle;
  }

  @media (max-width: @xs-breakpoint) {
    font-size: 24px;
    margin-bottom: 32px;
    padding-bottom: 16px;

    &::after {
      width: 40px;
      height: 3px;
    }
  }
}

// 图片容器优化
.image-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f5f5f5;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.1));
    z-index: 1;
    transition: opacity 0.3s;
  }

  .member-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    filter: brightness(0.95);

    &:hover {
      transform: scale(1.05);
      filter: brightness(1);
    }
  }

  @media (max-width: @xs-breakpoint) {
    .member-image {
      height: 250px;
    }
  }
}

// 成员卡片样式优化
.member-card {
  height: 100%;
  margin-bottom: 30px;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: #fff;
  border: none;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }

  :deep(.ant-card-body) {
    padding: 20px;
  }

  :deep(.ant-card-meta-title) {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 12px;
    line-height: 1.4;
    transition: color 0.3s;
  }

  .position-tag {
    margin: 0 auto 12px;
    display: block;
    width: fit-content;
    font-size: 13px;
    padding: 4px 12px;
    border-radius: 20px;
    transition: all 0.3s;
  }

  .member-desc {
    font-size: 15px;
    line-height: 1.8;
    color: rgba(0, 0, 0, 0.75);
    margin: 12px 0;
    text-align: justify;
  }

  @media (max-width: @xs-breakpoint) {
    margin-bottom: 20px;
    border-radius: 12px;

    :deep(.ant-card-body) {
      padding: 16px;
    }

    :deep(.ant-card-meta-title) {
      font-size: 16px;
    }

    .position-tag {
      font-size: 12px;
      padding: 3px 10px;
    }

    .member-desc {
      font-size: 13px;
      line-height: 1.6;
    }
  }
}

// 教师卡片特殊样式
.teacher-card {
  background: linear-gradient(135deg, #fff9f0, #fff);
  border: 2px solid rgba(250, 173, 20, 0.1);

  .image-container .member-image {
    height: 340px;
  }

  :deep(.ant-card-meta-title) {
    color: @theme-teacher;
    font-size: 20px;
  }

  .position-tag {
    background: #fff7e6;
    color: @theme-teacher;
    border: 1px solid rgba(250, 173, 20, 0.2);
  }

  &:hover {
    border-color: rgba(250, 173, 20, 0.3);
    box-shadow: 0 20px 40px rgba(250, 173, 20, 0.15);
  }
}

// 领导卡片特殊样式
.leader-card {
  background: linear-gradient(135deg, #f6ffed, #fff);
  border: 2px solid rgba(82, 196, 26, 0.1);

  .image-container .member-image {
    height: 320px;
  }

  :deep(.ant-card-meta-title) {
    color: @theme-leader;
    font-size: 19px;
  }

  .position-tag {
    background: #f6ffed;
    color: @theme-leader;
    border: 1px solid rgba(82, 196, 26, 0.2);
  }

  &:hover {
    border-color: rgba(82, 196, 26, 0.3);
    box-shadow: 0 20px 40px rgba(82, 196, 26, 0.15);
  }
}

// 核心成员卡片特殊样式
.core-card {
  background: linear-gradient(135deg, #f0f7ff, #fff);
  border: 2px solid rgba(24, 144, 255, 0.1);

  .image-container .member-image {
    height: 280px;
  }

  :deep(.ant-card-meta-title) {
    color: @theme-core;
  }

  .position-tag {
    background: #f0f7ff;
    color: @theme-core;
    border: 1px solid rgba(24, 144, 255, 0.2);
  }

  &:hover {
    border-color: rgba(24, 144, 255, 0.3);
    box-shadow: 0 20px 40px rgba(24, 144, 255, 0.15);
  }
}

// 性能优化
* {
  -webkit-overflow-scrolling: touch;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// 移动端优化
@media (max-width: @xs-breakpoint) {
  .member-container {
    padding: 10px;
  }

  .member-card {
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }

  .image-container .member-image {
    height: 220px !important;
  }
}

// 加载优化
.member-card {
  &.loading {
    .image-container {
      background: linear-gradient(90deg, #f0f0f0 25%, #f8f8f8 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: shimmer 2s infinite linear;
    }
  }
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }

  100% {
    background-position: -200% 0;
  }
}
</style>
