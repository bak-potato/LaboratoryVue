<!-- eslint-disable vue/block-lang -->
<script setup>
import { ref } from 'vue'

// 图片导入
import tp1 from '@/assets/index/ljtc-banner.png'
import tp2 from '@/assets/index/zrty-banner.png'
import ljtc from '@/assets/index/ljtc.jpeg'
import fhxy from '@/assets/index/fhxy.png'
import dachuang1 from '@/assets/honors/dachuangguojia.png'
import dachuang2 from '@/assets/honors/dachuangshengji.png'
import jisuanjidasai1 from '@/assets/honors/jisuanjishejiguojia.jpg'
import rz1 from '@/assets/copyright/1.png'
import rz2 from '@/assets/copyright/2.png'
import rz3 from '@/assets/copyright/3.png'
import rz4 from '@/assets/copyright/4.png'
import rz5 from '@/assets/copyright/5.png'
import rz6 from '@/assets/copyright/6.png'
import rz7 from '@/assets/copyright/7.jpg'

const projectList = ref([
  { title: '临界拓池', image: ljtc, description: '专业线程池监控系统。实时监控、动态调参、及时预警，助力系统提升性能、优化资源、增强稳定性。' },
  { title: '智润田园', image: tp2, description: '探索人工智能技术的前沿应用' },
  { title: '风花雪月', image: fhxy, description: '集成智能监控、自动化运维、多系统管理于一体，助力企业提升运维效率与数字化转型效能。' },
])

const newsList = ref([
  { title: '实验室在CVPR 2023发表最新研究成果', date: '2023-08-20' },
  { title: '荣获全国大学生信息安全竞赛一等奖', date: '2023-07-15' },
  { title: '校企合作项目「智能医疗系统」正式上线', date: '2023-06-10' }
])

const honorList = ref([
  {
    image: dachuang1,
    title: '全国大学生创新创业大赛',
    award: '国家级立项',
    date: '2024'
  },
  {
    image: dachuang2,
    title: '全国大学生创新创业大赛',
    award: '省级立项',
    date: '2024'
  },
  {
    image: jisuanjidasai1,
    title: '中国大学生计算机设计大赛',
    award: '国赛三等奖',
    date: '2024-07'
  }
])

const honorTextList = ref([
  {
    title: '第十七届全国大学生软件创新大赛',
    award: '华东赛区三等奖',
    date: '2024-04'
  },
  {
    title: '第十四届蓝桥杯大赛专项赛暨首届“元境杯”元宇宙创想+数字内容创作大赛3D互动创作赛道',
    award: '全国三等奖',
    date: '2023-07'
  },
  {
    title: '中国高校计算机大赛-网络技术赛',
    award: '华东赛区二等奖',
    date: '2024-07'
  },
])

const softwareCopyright = ref([
  {
    name: '基于Netty框架的的网络连接设计系统',
    regNo: '2025SR0143561',
    image: rz1
  },
  {
    name: 'Web网络安全防火墙系统',
    regNo: '2025SR0088766',
    image: rz2
  },
  {
    name: '服务端异步执行系统',
    regNo: '2024SR2202398',
    image: rz3
  },
  {
    name: 'RPC远程调用系统',
    regNo: '2024SR2200568',
    image: rz4
  },
  {
    name: '低代码智能编程管理系统',
    regNo: '2024SR1693889',
    image: rz5
  },
  {
    name: '社交交易一站式服务平台',
    regNo: '2024SR0947626',
    image: rz6
  },
  {
    name: '星灿-动态线程池组件系统',
    regNo: '2025SR0783583',
    image: rz7
  }
])

// 图片国际化
import zhCN from 'ant-design-vue/es/locale/zh_CN'

</script>
<template>
  <a-config-provider :locale="zhCN">
    <a-carousel autoplay>
      <div>
        <img :src="tp1">
      </div>
      <div>
        <img :src="tp2">
      </div>
    </a-carousel>
    <!-- 实验室简介 -->
    <div class="section intro-section">
      <h2 class="section-title">实验室简介</h2>
      <a-typography>
        <a-typography-paragraph>
          计算机创新实验室成立于2010年，是集科研创新、项目实践、学科竞赛为一体的综合性实验平台。实验室现有指导教师12人，研究生35人，本科生研发团队80余人，配备高性能计算集群、深度学习工作站等先进设备。
        </a-typography-paragraph>
      </a-typography>
    </div>

    <!-- 核心项目 -->
    <div class="section features">
      <h2 class="section-title">核心项目</h2>
      <a-row :gutter="[24, 24]">
        <a-col :xs="24" :sm="12" :md="8" v-for="item in projectList" :key="item.title">
          <a-card hoverable class="project-card">
            <template #cover>
              <img alt="项目封面" :src="item.image" class="project-image" />
            </template>
            <a-card-meta :title="item.title">
              <template #description>
                <div class="project-content">
                  <a-typography-paragraph class="project-desc">
                    {{ item.description }}
                  </a-typography-paragraph>
                  <a-button type="primary" class="project-button" @click="handleProjectClick(item)">
                    探索详情
                    <!-- <icon-right style="margin-left: 8px" /> -->
                  </a-button>
                </div>
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </div>

    <!-- 新闻动态
  <div class="section news">
    <h2 class="section-title">最新动态</h2>
    <a-list item-layout="horizontal" :data-source="newsList">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta :description="item.date" :title="item.title" />
        </a-list-item>
      </template>
    </a-list>
  </div> -->

    <!-- 获得荣誉 -->
    <div class="section honors">
      <h2 class="section-title">实验室荣誉</h2>
      <a-row :gutter="[24, 24]">
        <a-col :xs="24" :sm="12" :md="8" v-for="item in honorList" :key="item.title">
          <a-card hoverable>
            <template #cover>
              <img :src="item.image" alt="荣誉证书" style="height: 300px; object-fit: cover" />
            </template>
            <a-card-meta :title="item.title" :description="`${item.award} · ${item.date}`" />
          </a-card>
        </a-col>
      </a-row>

      <!-- 文字列表 -->
      <a-col :span="24">
        <a-list :data-source="honorTextList" bordered class="honor-text-list">
          <template #renderItem="{ item }">
            <a-list-item class="honor-list-item">
              <div class="list-content">
                <span class="award-title">{{ item.title }}</span>
                <div class="award-info">
                  <a-tag color="blue">{{ item.award }}</a-tag>
                  <span class="award-date">{{ item.date }}</span>
                </div>
              </div>
            </a-list-item>
          </template>
        </a-list>
      </a-col>
    </div>

    <!-- 软著模块 -->
    <div class="section software-section">
      <h2 class="section-title">实验室软著</h2>
      <a-row :gutter="[24, 24]">
        <a-col :xs="24" :sm="12" :md="8" v-for="item in softwareCopyright" :key="item.regNo">
          <a-card hoverable>
            <template #cover>
              <a-image :src="item.image" alt="软件著作权证书" style="height: 280px; width: 100%; object-fit: cover;" />
            </template>
            <a-card-meta :title="item.name" :description="`登记号：${item.regNo}`">
              <template #description>
                <div class="software-meta">
                  <div>登记号：{{ item.regNo }}</div>
                </div>
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </div>

    <!-- 加入我们 -->
    <div class="section join-us">
      <h2 class="section-title">加入我们</h2>
      <a-row :gutter="48">
        <a-col :xs="24" :md="12">
          <a-typography>
            <a-typography-paragraph strong>软件部招新要求：</a-typography-paragraph>
            <a-typography-paragraph>1. 计算机相关专业</a-typography-paragraph>
            <a-typography-paragraph>2. 热爱编程，喜欢折腾</a-typography-paragraph>
          </a-typography>
          <a-typography>
            <a-typography-paragraph strong>硬件部招新要求：</a-typography-paragraph>
            <a-typography-paragraph>1. 电子信息/计算机相关专业</a-typography-paragraph>
            <a-typography-paragraph>2. 接收无相关知识基础</a-typography-paragraph>
            <a-typography-paragraph>3. 认真学习，积极参与</a-typography-paragraph>
          </a-typography>
          <a-typography>
            <a-typography-paragraph strong>设计部招新要求：</a-typography-paragraph>
            <a-typography-paragraph>1. 积极学习相关内容</a-typography-paragraph>
          </a-typography>
          <a-typography>
            <a-typography-paragraph strong>创新创业部招新要求：</a-typography-paragraph>
            <a-typography-paragraph>1. 具有创新意识</a-typography-paragraph>
          </a-typography>
          <a-typography>
            <a-typography-paragraph strong>文案部招新要求：</a-typography-paragraph>
            <a-typography-paragraph>1. 具有较强的文字表述能力和逻辑思维能力</a-typography-paragraph>
            <a-typography-paragraph>2. 有一定的文字功底和排版能力</a-typography-paragraph>
          </a-typography>

        </a-col>
        <a-col :xs="24" :md="12">
          <a-steps direction="vertical" :current="0">
            <a-step title="准备相关信息" description="现在-9月10日" />
            <a-step title="报名申请" description="9月10日-10月10日" />
            <a-step title="技术笔试/面试考核" description="10月12/16日" />
            <a-step title="录取通知" description="10月18日" />
          </a-steps>
          <a-button type="primary" size="large" style="margin-top: 24px" href="/recruit">
            立即报名
          </a-button>
        </a-col>
      </a-row>
    </div>
  </a-config-provider>



</template>

<style scoped lang="less">
:deep(.slick-slide) {
  position: relative;

  img {
    height: 60vh;
    min-height: 400px;
    object-fit: cover;
    display: block;
    width: 100%;
  }

  &::before {
    content: '';
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    z-index: 1;
  }
}

.section {
  padding: 64px 24px;
  max-width: 1200px;
  margin: 0 auto;

  &-title {
    text-align: center;
    margin-bottom: 32px;
    font-size: 28px;
    color: #1d2129;
    font-size: 32px;
    margin-bottom: 48px;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: #1890ff;
      margin: 16px auto 0;
    }
  }

  .project-card {
    :deep(.ant-card) {
      &-meta {
        padding: 16px 20px;

        &-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 12px;
        }
      }

      &:hover {
        box-shadow: 0 6px 16px -4px rgba(0, 0, 0, 0.12);
        transform: translateY(-4px);
      }
    }

    .project-image {
      height: 200px;
      object-fit: cover;
      border-radius: 4px 4px 0 0;
    }

    .project-content {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .project-desc {
      color: #666;
      font-size: 14px;
      line-height: 1.6;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: 8px;
    }

    .project-button {
      align-self: flex-start;
      padding: 8px 20px;
      height: auto;
      font-weight: 500;
      transition: all 0.3s;

      &:hover {
        box-shadow: 0 4px 10px rgba(24, 144, 255, 0.3);
      }
    }
  }
}

.features {
  :deep(.ant-card) {
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px);
    }

    &-cover img {
      height: 200px;
      object-fit: cover;
    }
  }
}

.news {
  padding-bottom: 72px;

  :deep(.ant-list-item) {
    padding: 16px 24px;
    transition: background 0.3s;

    &:hover {
      background: #f8f9fa;
    }
  }
}

.honors {
  :deep(.ant-card) {
    &-meta {
      padding: 20px;

      &-title {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 8px;
      }

      &-description {
        color: #666;
      }
    }
  }

  // :deep(.honor-list-item) {
  //   padding: 16px 24px;
  //   font-size: 15px;
  //   border-color: #eee;
  //   transition: background 0.3s;

  //   &:hover {
  //     background: #fafafa;
  //     transform: translateX(4px);
  //   }
  // }

  :deep(.honor-text-list) {
    margin-top: 32px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);

    .honor-list-item {
      padding: 18px 32px;
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

      &:hover {
        transform: translateX(8px);
      }

      .list-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        .award-title {
          font-size: 15px;
          color: #1d2129;
          font-weight: 500;
          max-width: 60%;
        }

        .award-info {
          display: flex;
          align-items: center;
          gap: 16px;

          .ant-tag {
            margin: 0;
            font-size: 13px;
            padding: 2px 8px;
          }

          .award-date {
            color: #8590a6;
            font-size: 13px;
            min-width: 80px;
            text-align: right;
          }
        }
      }
    }
  }
}

.join-us {
  background: #f9f9f9;
  padding-bottom: 72px;
  margin-bottom: 48px;
  margin-top: 48px;

  :deep(.ant-steps) {
    margin-top: 24px;

    &-item-process .ant-steps-item-icon {
      background: #1890ff;
    }
  }

  :deep(.ant-typography) {
    font-size: 16px;
    line-height: 1.8;
  }
}

.software-section {
  padding-bottom: 48px;

  :deep(.ant-card) {
    &-meta {
      padding: 16px;

      &-title {
        font-size: 16px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .software-meta {
    color: #666;
    font-size: 13px;
  }
}
</style>
