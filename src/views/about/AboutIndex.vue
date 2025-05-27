<!-- eslint-disable vue/block-lang -->
<script setup>
import { ref, onMounted } from 'vue'
// import {
//   StarOutlined,
//   TeamOutlined,
//   TrophyOutlined,
//   RocketOutlined,
//   BookOutlined,
//   GlobalOutlined,
//   ToolOutlined,
//   BulbOutlined,
//   ClusterOutlined,
//   PlantOutlined,
//   ServerOutlined,
//   CodeOutlined,
//   RobotOutlined,
//   MoreOutlined,
//   CalendarOutlined
// } from '@ant-design/icons-vue'

import tp1 from '@/assets/index/ljtc-banner.png'
import hz2025 from '@/assets/about/hz2025.jpg'

// 动画状态
const isVisible = ref(false)

onMounted(() => {
  isVisible.value = true
})

// 实验室数据
const labData = {
  founded: 2010,
  teachers: 12,
  graduates: 35,
  undergraduates: 80,
  equipment: ['高性能计算集群', '深度学习工作站', 'GPU服务器', '智能终端设备', '云计算平台', '物联网实验平台']
}

// 实验室照片数据
const photoGalleryData = ref([
  {
    id: 1,
    image: hz2025,
    title: '2025年度实验室全体成员',
    description: '记录美好时刻，见证成长历程',
    stats: {
      people: labData.teachers + labData.graduates + labData.undergraduates,
      year: '2025年'
    }
  },
  {
    id: 2,
    image: tp1,
    title: '实验室日常工作场景',
    description: '专注科研，追求卓越',
    stats: {
      people: 25,
      year: '2024年'
    }
  },
  {
    id: 3,
    image: hz2025, // 这里可以替换为其他照片
    title: '实验室获奖合影',
    description: '以梦为马，不负韶华',
    stats: {
      people: 30,
      year: '2024年'
    }
  }
])

// 当前显示的照片索引
const currentPhotoIndex = ref(0)

// 切换照片
const switchPhoto = () => {
  currentPhotoIndex.value = (currentPhotoIndex.value + 1) % photoGalleryData.value.length
}

// 特色优势数据
const features = [
  {
    icon: 'RocketOutlined',
    title: '创新培养模式',
    description: '采用"项目驱动+竞赛实践"的双轨制人才培养体系，实现"以赛促学"的核心理念，培养具有创新精神的复合型人才。',
    color: '#1890ff',
    highlight: '双轨制培养'
  },
  {
    icon: 'LaptopOutlined',
    title: '一对多的培养方式',
    description: '实施导师制培养模式，前期采用学长学姐一对一辅导，后期融入项目团队，形成多层次、全方位的人才培养体系。',
    color: '#52c41a',
    highlight: '导师制培养'
  },
  {
    icon: 'FilterOutlined',
    title: '多轮考核筛选',
    description: '建立科学完善的人才选拔机制，通过技能测试、项目实践、团队协作等多维度考核，确保实验室人才质量。',
    color: '#faad14',
    highlight: '科学选拔'
  },
  {
    icon: 'TrophyOutlined',
    title: '竞赛成果丰硕',
    description: '在全国大学生计算机设计大赛、互联网+创新创业大赛、ACM程序设计竞赛等各类学科竞赛中屡获佳绩。',
    color: '#722ed1',
    highlight: '竞赛优势'
  },
  {
    icon: 'TeamOutlined',
    title: '团队协作精神',
    description: '注重培养学生的团队协作能力和沟通技巧，通过跨学科项目实践锻炼学生的综合素质和领导能力。',
    color: '#eb2f96',
    highlight: '协作能力'
  },
  {
    icon: 'ExperimentOutlined',
    title: '科研创新能力',
    description: '鼓励学生参与前沿科研项目，培养批判性思维和问题解决能力，提升学生的科研素养和创新意识。',
    color: '#13c2c2',
    highlight: '科研导向'
  }
]

// 实验室文化
const labCulture = [
  {
    title: '学术氛围浓厚',
    description: '定期举办学术讲座、技术分享会，营造浓厚的学术研究氛围',
    icon: 'BookOutlined'
  },
  {
    title: '开放包容',
    description: '欢迎不同背景的同学加入，提供多元化的学习和发展机会',
    icon: 'GlobalOutlined'
  },
  {
    title: '实践导向',
    description: '理论与实践并重，通过真实项目锻炼学生的实际操作能力',
    icon: 'ToolOutlined'
  },
  {
    title: '创新进取',
    description: '鼓励创新思维，支持学生探索前沿技术和解决方案',
    icon: 'BulbOutlined'
  }
]

// 开发方向数据（扩充）
const researchDirections = [
  {
    title: '临界拓池',
    description: '专注于计算机线程池优化、分布式系统架构设计，为高并发应用提供性能解决方案',
    color: 'blue',
    icon: 'ClusterOutlined',
    tags: ['分布式系统', '高并发', '性能优化'],
    status: '进行中'
  },
  {
    title: '智润田园',
    description: '基于物联网和AI技术的智慧农业系统，包括精准配肥、环境监测、作物预测等功能',
    color: 'green',
    icon: 'UngroupOutlined',
    tags: ['智慧农业', '物联网', '人工智能'],
    status: '已完成'
  },
  {
    title: '风花雪月',
    description: '构建运维人员的集中式管理服务器平台，提供自动化部署、监控告警等企业级功能',
    color: 'orange',
    icon: 'CloudServerOutlined',
    tags: ['运维管理', '自动化', '企业服务'],
    status: '测试中'
  },
  {
    title: '星海韵梦',
    description: '打造集编程学习、代码分享、技术交流于一体的一站式编程社区平台',
    color: 'purple',
    icon: 'CodeOutlined',
    tags: ['编程社区', '在线学习', '技术分享'],
    status: '进行中'
  },
  {
    title: '智能题站',
    description: '融合自然语言处理和机器学习的智能出题系统，支持多学科自动组卷和智能评测',
    color: 'cyan',
    icon: 'RobotOutlined',
    tags: ['人工智能', 'NLP', '智能评测'],
    status: '规划中'
  },
  {
    title: '未完待续',
    description: '更多创新项目正在孕育中，期待与你一起探索技术的无限可能！',
    color: 'gold',
    icon: 'MoreOutlined',
    tags: ['创新项目', '技术探索', '未来发展'],
    status: '持续更新'
  }
]

// 实验室成就数据（扩充）
const achievements = [
  {
    title: '国家级奖项',
    count: 15,
    icon: 'TrophyOutlined',
    description: '包括国家级竞赛一等奖3项',
    color: '#ff4d4f'
  },
  {
    title: '省级奖项',
    count: 32,
    icon: 'BulbOutlined',
    description: '省级以上竞赛获奖',
    color: '#1890ff'
  },
  {
    title: '发表论文',
    count: 28,
    icon: 'FileDoneOutlined',
    description: '核心期刊及会议论文',
    color: '#52c41a'
  },
  {
    title: '专利授权',
    count: 12,
    icon: 'CopyrightOutlined',
    description: '发明专利和实用新型专利',
    color: '#722ed1'
  }
]
</script>

<template>
  <div class="about-container" :class="{ 'fade-in': isVisible }">
    <!-- 横幅图 -->
    <div class="banner">
      <img :src="tp1" alt="实验室环境">
      <div class="banner-overlay">
        <div class="banner-content">
          <h1 class="banner-title">济宁学院计算机创新实验室</h1>
          <p class="banner-subtitle">Innovation · Practice · Growth</p>
          <div class="banner-tags">
            <span class="tag">创新</span>
            <span class="tag">实践</span>
            <span class="tag">成长</span>
          </div>
        </div>
        <div class="scroll-indicator">
          <div class="scroll-arrow"></div>
        </div>
      </div>
    </div>

    <!-- 实验室简介 -->
    <div class="section intro">
      <h2 class="section-title">
        <span class="title-text">实验室概况</span>
        <span class="title-decoration"></span>
      </h2>
      <div class="intro-content">
        <div class="intro-text">
          <div class="intro-paragraph">
            <a-typography-paragraph class="main-description">
              济宁学院计算机创新实验室成立于{{ labData.founded }}年，是集科研创新、项目实践、学科竞赛为一体的综合性实验平台。
              经过{{ new Date().getFullYear() - labData.founded }}年的发展，实验室已成为培养高素质计算机人才的重要基地。
            </a-typography-paragraph>
            <a-typography-paragraph class="detail-description">
              实验室现有指导教师{{ labData.teachers }}人，其中教授3人，副教授5人，讲师4人；研究生{{ labData.graduates }}人，
              本科生研发团队{{ labData.undergraduates }}余人。团队成员专业背景涵盖计算机科学、软件工程、人工智能等多个领域。
            </a-typography-paragraph>
          </div>

          <div class="equipment-section">
            <h3 class="equipment-title">
              <!-- <icon-component type="setting" /> -->
              <SettingOutlined />
              实验室设备
            </h3>
            <div class="equipment-grid">
              <a-tag v-for="item in labData.equipment" :key="item" class="equipment-tag" color="blue">
                {{ item }}
              </a-tag>
            </div>
          </div>
        </div>

        <div class="achievement-section">
          <h3 class="achievement-title">荣誉成就</h3>
          <div class="achievement-grid">
            <div class="achievement-card" v-for="item in achievements" :key="item.title">
              <div class="achievement-icon" :style="{ color: item.color }">
                <!-- <icon-component :type="item.icon" /> -->
                <component :is="item?.icon" />
              </div>
              <div class="achievement-info">
                <h3 class="achievement-number">{{ item.count }}+</h3>
                <p class="achievement-title-text">{{ item.title }}</p>
                <p class="achievement-desc">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 特色优势 -->
    <div class="section features">
      <h2 class="section-title">
        <span class="title-text">特色优势</span>
        <span class="title-decoration"></span>
      </h2>
      <div class="features-grid">
        <div class="feature-item" v-for="(feature, index) in features" :key="feature.title">
          <div class="feature-header">
            <div class="feature-icon" :style="{ color: feature.color }">
              <!-- <icon-component :type="feature.icon" /> -->
              <component :is="feature?.icon" />
            </div>
            <div class="feature-highlight">{{ feature.highlight }}</div>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
          <div class="feature-number">{{ String(index + 1).padStart(2, '0') }}</div>
        </div>
      </div>
    </div>

    <!-- 实验室文化 -->
    <div class="section culture">
      <h2 class="section-title">
        <span class="title-text">实验室文化</span>
        <span class="title-decoration"></span>
      </h2>
      <div class="culture-grid">
        <div class="culture-item" v-for="item in labCulture" :key="item.title">
          <div class="culture-icon">
            <component :is="item.icon" />
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>

    <!-- 开发方向 -->
    <div class="section research">
      <h2 class="section-title">
        <span class="title-text">开发项目</span>
        <span class="title-decoration"></span>
      </h2>
      <div class="research-timeline">
        <div class="timeline-line"></div>
        <div class="research-item" v-for="(item, index) in researchDirections" :key="item.title">
          <div class="research-node" :style="{ borderColor: item.color }">
            <component :is="item.icon" :style="{ color: item.color }" />
          </div>
          <div class="research-content" :class="{ 'right': index % 2 === 1 }">
            <div class="research-card">
              <div class="research-header">
                <h3 class="research-title">{{ item.title }}</h3>
                <span class="research-status" :class="item.status">{{ item.status }}</span>
              </div>
              <p class="research-description">{{ item.description }}</p>
              <div class="research-tags">
                <a-tag v-for="tag in item.tags" :key="tag" :color="item.color">
                  {{ tag }}
                </a-tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 实验室合照 -->
    <div class="section group-photo">
      <h2 class="section-title">
        <span class="title-text">实验室风采</span>
        <span class="title-decoration"></span>
      </h2>
      <div class="photo-gallery">
        <div class="main-photo" @click="switchPhoto">
          <transition name="fade" mode="out-in">
            <img :key="currentPhotoIndex" :src="photoGalleryData[currentPhotoIndex].image" alt="实验室合影">
          </transition>
          <div class="photo-overlay">
            <transition name="fade" mode="out-in">
              <div :key="currentPhotoIndex" class="photo-info">
                <h3>{{ photoGalleryData[currentPhotoIndex].title }}</h3>
                <p>{{ photoGalleryData[currentPhotoIndex].description }}</p>
                <div class="photo-stats">
                  <span>
                    <TeamOutlined /> {{ photoGalleryData[currentPhotoIndex].stats.people }}人
                  </span>
                  <span>
                    <CalendarOutlined /> {{ photoGalleryData[currentPhotoIndex].stats.year }}
                  </span>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>

    <!-- 加入我们 -->
    <div class="section join-us">
      <div class="join-content">
        <h2>加入我们</h2>
        <p>如果你对计算机技术充满热情，渴望在创新的道路上不断探索，欢迎加入我们的大家庭！</p>
        <div class="join-benefits">
          <div class="benefit-item">
            <StarOutlined />
            <span>前沿技术学习</span>
          </div>
          <div class="benefit-item">
            <TeamOutlined />
            <span>团队协作成长</span>
          </div>
          <div class="benefit-item">
            <TrophyOutlined />
            <span>竞赛实践机会</span>
          </div>
          <div class="benefit-item">
            <RocketOutlined />
            <span>创新项目参与</span>
          </div>
        </div>
        <div class="contact-info">
          <p>详细内容请在主页查看</p>
        </div>
      </div>
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
@border-radius-base: 12px;
@border-radius-large: 16px;
@transition-duration: 0.3s;
@box-shadow-light: 0 2px 8px rgba(0, 0, 0, 0.06);
@box-shadow-medium: 0 4px 12px rgba(0, 0, 0, 0.08);
@box-shadow-heavy: 0 8px 24px rgba(0, 0, 0, 0.12);

// 动画定义
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.about-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;

  &.fade-in {
    opacity: 1;
    transform: translateY(0);
  }

  // 横幅样式
  .banner {
    position: relative;
    height: 60vh;
    min-height: 500px;
    border-radius: @border-radius-large;
    overflow: hidden;
    box-shadow: @box-shadow-heavy;
    margin-bottom: 4rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 10s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }

    .banner-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg,
          rgba(24, 144, 255, 0.8) 0%,
          rgba(114, 46, 209, 0.8) 50%,
          rgba(0, 0, 0, 0.7) 100%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      text-align: center;
      position: relative;

      .banner-content {
        z-index: 2;
        animation: fadeInUp 1.2s ease 0.3s both;
      }

      .banner-title {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        letter-spacing: 2px;
        background: linear-gradient(45deg, #fff, #e6f7ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .banner-subtitle {
        font-size: 1.4rem;
        margin-bottom: 2rem;
        opacity: 0.95;
        font-weight: 300;
        letter-spacing: 4px;
      }

      .banner-tags {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;

        .tag {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          font-weight: 500;
          transition: all 0.3s ease;

          &:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
          }
        }
      }

      .scroll-indicator {
        position: absolute;
        bottom: 2rem;
        animation: float 2s ease-in-out infinite;

        .scroll-arrow {
          width: 2px;
          height: 30px;
          background: white;
          position: relative;

          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: -4px;
            width: 10px;
            height: 10px;
            border-right: 2px solid white;
            border-bottom: 2px solid white;
            transform: rotate(45deg);
          }
        }
      }
    }
  }

  // 通用section样式
  .section {
    margin: 5rem auto;
    padding: 0 2rem;
    max-width: 1200px;

    &-title {
      position: relative;
      text-align: center;
      margin-bottom: 3rem;

      .title-text {
        display: inline-block;
        color: @heading-color;
        font-size: 2.5rem;
        font-weight: 700;
        position: relative;
        z-index: 1;
      }

      .title-decoration {
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background: linear-gradient(90deg, @primary-color, #722ed1);
        border-radius: 2px;

        &::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 4px;
          background: linear-gradient(90deg, #722ed1, @primary-color);
          border-radius: 2px;
        }
      }
    }
  }

  // 简介样式
  .intro-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;

    .intro-text {
      .intro-paragraph {
        margin-bottom: 2rem;

        .main-description {
          font-size: 1.2rem;
          line-height: 1.8;
          color: @text-color;
          margin-bottom: 1rem;
        }

        .detail-description {
          font-size: 1rem;
          line-height: 1.6;
          color: @text-color-secondary;
        }
      }

      .equipment-section {
        background: #fafafa;
        padding: 2rem;
        border-radius: @border-radius-base;
        border-left: 4px solid @primary-color;

        .equipment-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          color: @heading-color;
          font-size: 1.2rem;

          .anticon {
            color: @primary-color;
          }
        }

        .equipment-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;

          .equipment-tag {
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-weight: 500;
            border: none;
            box-shadow: @box-shadow-light;
            transition: all @transition-duration ease;

            &:hover {
              transform: translateY(-2px);
              box-shadow: @box-shadow-medium;
            }
          }
        }
      }
    }

    .achievement-section {
      .achievement-title {
        color: @heading-color;
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
        text-align: center;
      }

      .achievement-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;

        .achievement-card {
          background: white;
          padding: 1.5rem;
          border-radius: @border-radius-base;
          box-shadow: @box-shadow-light;
          transition: all @transition-duration ease;
          text-align: center;
          position: relative;
          overflow: hidden;

          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg,
                var(--achievement-color, @primary-color),
                transparent);
          }

          &:hover {
            transform: translateY(-3px);
            box-shadow: @box-shadow-medium;
          }

          .achievement-icon {
            font-size: 2rem;
            margin-bottom: 1rem;
          }

          .achievement-info {
            .achievement-number {
              font-size: 2rem;
              font-weight: 700;
              color: @heading-color;
              margin: 0.5rem 0;
            }

            .achievement-title-text {
              color: @text-color;
              margin: 0.3rem 0;
              font-weight: 500;
            }

            .achievement-desc {
              color: @text-color-secondary;
              font-size: 0.9rem;
              margin: 0;
            }
          }
        }
      }
    }
  }

  // 特色优势样式
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;

    .feature-item {
      background: white;
      padding: 2.5rem;
      border-radius: @border-radius-large;
      box-shadow: @box-shadow-light;
      transition: all @transition-duration ease;
      position: relative;
      overflow: hidden;
      border: 1px solid #f0f0f0;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: linear-gradient(90deg,
            var(--feature-color, @primary-color),
            rgba(var(--feature-color, 24, 144, 255), 0.3));
      }

      &:hover {
        transform: translateY(-8px);
        box-shadow: @box-shadow-heavy;
        border-color: var(--feature-color, @primary-color);

        .feature-icon {
          transform: scale(1.1);
        }
      }

      .feature-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;

        .feature-icon {
          font-size: 2.5rem;
          transition: all @transition-duration ease;
          padding: 0.8rem;
          background: rgba(var(--feature-color, 24, 144, 255), 0.1);
          border-radius: 12px;
        }

        .feature-highlight {
          background: linear-gradient(45deg,
              var(--feature-color, @primary-color),
              rgba(var(--feature-color, 24, 144, 255), 0.8));
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }
      }

      .feature-title {
        color: @heading-color;
        margin: 1rem 0;
        font-size: 1.3rem;
        font-weight: 600;
      }

      .feature-description {
        color: @text-color;
        line-height: 1.6;
        margin-bottom: 1.5rem;
      }

      .feature-number {
        position: absolute;
        bottom: 1rem;
        right: 1.5rem;
        font-size: 3rem;
        font-weight: 100;
        color: rgba(0, 0, 0, 0.05);
      }
    }
  }

  // 实验室文化样式
  .culture {
    background: linear-gradient(135deg, #f6ffed 0%, #f0f9ff 100%);
    border-radius: @border-radius-large;
    padding: 3rem;

    .culture-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;

      .culture-item {
        background: white;
        padding: 2rem;
        border-radius: @border-radius-base;
        text-align: center;
        box-shadow: @box-shadow-light;
        transition: all @transition-duration ease;

        &:hover {
          transform: translateY(-5px);
          box-shadow: @box-shadow-medium;
        }

        .culture-icon {
          font-size: 2.5rem;
          color: @success-color;
          margin-bottom: 1rem;

          .anticon {
            padding: 1rem;
            background: rgba(82, 196, 26, 0.1);
            border-radius: 50%;
          }
        }

        h3 {
          color: @heading-color;
          margin: 1rem 0;
          font-size: 1.2rem;
        }

        p {
          color: @text-color;
          line-height: 1.6;
          margin: 0;
        }
      }
    }
  }

  // 研究方向时间线样式
  .research-timeline {
    position: relative;
    padding: 2rem 0;

    .timeline-line {
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(to bottom, @primary-color, #722ed1);
      transform: translateX(-50%);
    }

    .research-item {
      position: relative;
      margin: 3rem 0;

      .research-node {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 60px;
        height: 60px;
        background: white;
        border: 3px solid @primary-color;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        z-index: 2;
        box-shadow: @box-shadow-medium;
      }

      .research-content {
        width: 45%;
        animation: slideIn 0.8s ease;

        &.right {
          margin-left: 55%;
        }

        .research-card {
          background: white;
          padding: 2rem;
          border-radius: @border-radius-base;
          box-shadow: @box-shadow-light;
          transition: all @transition-duration ease;
          position: relative;

          &::before {
            content: '';
            position: absolute;
            top: 50%;
            width: 0;
            height: 0;
            border: 10px solid transparent;
          }

          .research-content:not(.right) &::before {
            right: -20px;
            border-left-color: white;
            transform: translateY(-50%);
          }

          .research-content.right &::before {
            left: -20px;
            border-right-color: white;
            transform: translateY(-50%);
          }

          &:hover {
            transform: translateY(-5px);
            box-shadow: @box-shadow-medium;
          }

          .research-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;

            .research-title {
              color: @heading-color;
              margin: 0;
              font-size: 1.3rem;
              font-weight: 600;
            }

            .research-status {
              padding: 0.2rem 0.8rem;
              border-radius: 12px;
              font-size: 0.8rem;
              font-weight: 500;

              &.进行中 {
                background: #e6f7ff;
                color: @primary-color;
              }

              &.已完成 {
                background: #f6ffed;
                color: @success-color;
              }

              &.测试中 {
                background: #fff7e6;
                color: @warning-color;
              }

              &.规划中 {
                background: #f9f0ff;
                color: #722ed1;
              }

              &.持续更新 {
                background: #fff0f6;
                color: #eb2f96;
              }
            }
          }

          .research-description {
            color: @text-color;
            line-height: 1.6;
            margin-bottom: 1.5rem;
          }

          .research-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;

            .ant-tag {
              border-radius: 12px;
              border: none;
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }

  // 实验室风采样式
  .photo-gallery {
    display: grid;
    // grid-template-columns: 2fr 1fr;
    gap: 2rem;

    .main-photo {
      position: relative;
      border-radius: @border-radius-large;
      overflow: hidden;
      box-shadow: @box-shadow-medium;
      cursor: pointer;

      img {
        width: 100%;
        height: 550px;
        object-fit: cover;
        transition: transform @transition-duration ease;
      }

      &:hover {
        img {
          transform: scale(1.05);
        }

        .photo-overlay {
          background: rgba(0, 0, 0, 0.7);
        }

        &::after {
          content: '点击切换照片';
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255, 255, 255, 0.9);
          color: @text-color;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          z-index: 3;
          box-shadow: @box-shadow-light;
        }
      }

      .photo-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background @transition-duration ease;

        .photo-info {
          color: white;
          text-align: center;
          padding: 2rem;

          h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          }

          p {
            margin-bottom: 1.5rem;
            opacity: 0.9;
          }

          .photo-stats {
            display: flex;
            justify-content: center;
            gap: 2rem;

            span {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              font-size: 0.9rem;

              .anticon {
                opacity: 0.8;
              }
            }
          }
        }
      }
    }
  }

  // 加入我们样式
  .join-us {
    background: linear-gradient(135deg, @primary-color, #722ed1);
    color: white;
    border-radius: @border-radius-large;
    padding: 4rem;
    text-align: center;
    margin: 4rem auto;

    .join-content {
      h2 {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        color: white;
      }

      >p {
        font-size: 1.2rem;
        margin-bottom: 3rem;
        opacity: 0.9;
        line-height: 1.6;
      }

      .join-benefits {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;

        .benefit-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: @border-radius-base;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all @transition-duration ease;

          &:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-3px);
          }

          .anticon {
            font-size: 2rem;
            color: rgba(255, 255, 255, 0.9);
          }

          span {
            font-weight: 500;
          }
        }
      }

      .contact-info {
        p {
          opacity: 0.8;
          font-size: 1rem;
          margin: 0;
        }
      }
    }
  }
}

// 响应式设计
@media (max-width: 1200px) {
  .about-container {
    .intro-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .photo-gallery {
      grid-template-columns: 1fr;
    }
  }
}

@media (max-width: 768px) {
  .about-container {
    padding: 0 1rem;

    .banner {
      height: 50vh;
      min-height: 400px;

      .banner-overlay {
        .banner-title {
          font-size: 2.5rem;
        }

        .banner-subtitle {
          font-size: 1.2rem;
        }

        .banner-tags {
          flex-direction: column;
          gap: 0.5rem;
        }
      }
    }

    .section {
      margin: 3rem auto;
      padding: 0 1rem;

      &-title .title-text {
        font-size: 2rem;
      }
    }

    .stats-section {
      padding: 2rem;

      .stats-grid {
        grid-template-columns: 1fr;
        gap: 1rem;

        .stat-item {
          padding: 1.5rem;
        }
      }
    }

    .features-grid {
      grid-template-columns: 1fr;
    }

    .culture {
      padding: 2rem;

      .culture-grid {
        grid-template-columns: 1fr;
      }
    }

    .research-timeline {
      .timeline-line {
        left: 2rem;
      }

      .research-item {
        .research-node {
          left: 2rem;
          width: 40px;
          height: 40px;
          font-size: 1.2rem;
        }

        .research-content {
          width: calc(100% - 5rem);
          margin-left: 5rem !important;

          .research-card::before {
            left: -20px !important;
            border-right-color: white !important;
            border-left-color: transparent !important;
          }
        }
      }
    }

    .partners-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .join-us {
      padding: 2rem;

      .join-content {
        h2 {
          font-size: 2rem;
        }

        .join-benefits {
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .about-container {
    .banner {
      .banner-overlay {
        .banner-title {
          font-size: 2rem;
        }

        .banner-subtitle {
          font-size: 1rem;
        }
      }
    }

    .partners-grid {
      grid-template-columns: 1fr;
    }

    .join-us {
      .join-content {
        .join-benefits {
          grid-template-columns: 1fr;
        }
      }
    }
  }
}

// 添加过渡动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
