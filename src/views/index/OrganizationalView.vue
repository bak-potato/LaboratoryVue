<!-- eslint-disable vue/block-lang -->
<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
// 跳转方法
const navigate = (url) => {
  if (url)
    window.open(router.resolve({
      path: url,
    }).href, '_self')
}

// 当前活跃部门
const activeDept = ref(null)

// 设置活跃部门
const setActiveDept = (dept) => {
  activeDept.value = dept
}

// 创建计算属性显示总成员数
const totalMembers = computed(() => {
  return orgStructure.value.reduce((sum, dept) => sum + dept.memberCount, 0)
})

onMounted(() => {
  // 滚动动画观察器
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__fadeInUp')
      }
    })
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  })

  // 观察所有带 animate-on-scroll 类的区块
  document.querySelectorAll('.animate-on-scroll').forEach(section => {
    observer.observe(section)
  })

  // 默认选中第一个部门
  if (orgStructure.value.length > 0) {
    setActiveDept(orgStructure.value[0])
  }
})

// 组织结构详细数据
const orgStructure = ref([
  {
    title: '创新创业部',
    description: '负责创新项目孵化、创业指导、竞赛组织及资源对接，是团队创新思维的发源地。',
    icon: 'BulbOutlined',
    color: '#ff7a45',
    memberCount: 1,
    url: '/introduction',
    achievements: ['孵化项目18个', '获国家级奖项4项', '举办创新工坊12期'],
    // leader: {
    //   name: '张文浩',
    //   title: '创新总监',
    //   avatar: '/api/placeholder/60/60'
    // }
  },
  {
    title: '软件部',
    description: '负责软件开发、技术研究、项目实践及技术培训，是团队核心技术力量的体现。',
    icon: 'CodeOutlined',
    color: '#1890ff',
    memberCount: 12,
    url: '/software',
    achievements: ['开发产品8款', '技术专利16项', '开源项目贡献300+'],
    children: [
      { title: '前端组', role: 'Web界面开发与优化', icon: 'LayoutOutlined', memberCount: 6, url: '/software/web' },
      { title: '后端组', role: '服务端架构设计与开发', icon: 'DatabaseOutlined', memberCount: 8, url: '/software/backend' },
      { title: '运维组', role: '系统部署维护与安全保障', icon: 'CloudServerOutlined', memberCount: 4, url: '/software/ops' },
      { title: '测试组', role: '质量保障与用户体验测试', icon: 'BugOutlined', memberCount: 3, url: '/software/test' },
      { title: 'AI组', role: '人工智能技术研究与应用', icon: 'RobotOutlined', memberCount: 4, url: '/software/ai' },
    ]
  },
  {
    title: '硬件部',
    description: '负责硬件设备设计、嵌入式系统开发、物联网项目实施及硬件创新研究。',
    icon: 'ToolOutlined',
    color: '#722ed1',
    memberCount: 2,
    url: '/hardware',
    achievements: ['硬件产品12款', '专利申请8项', '科研项目合作3项'],
    // leader: {
    //   name: '王建国',
    //   title: '硬件主管',
    //   avatar: '/api/placeholder/60/60'
    // },
    // children: [
    //   { title: '电路组', role: '电路设计与PCB布局', icon: 'apartment', memberCount: 7, url: '/hardware/circuit' },
    //   { title: '嵌入式组', role: '嵌入式系统开发', icon: 'control', memberCount: 6, url: '/hardware/embedded' },
    //   { title: '机械组', role: '机械结构设计与制造', icon: 'scissor', memberCount: 5, url: '/hardware/mechanical' },
    // ]
  },
  {
    title: '设计部',
    description: '负责产品视觉设计、用户体验设计、品牌形象设计及创意策划，注重美学与实用的结合。',
    icon: 'HighlightOutlined',
    color: '#eb2f96',
    memberCount: 2,
    url: '/design',
    achievements: ['设计作品300+', 'UI规范2套', '获设计奖项5项'],
    // leader: {
    //   name: '陈艺璇',
    //   title: '设计总监',
    //   avatar: '/api/placeholder/60/60'
    // },
    // children: [
    //   { title: 'UI设计组', role: '用户界面设计', icon: 'skin', memberCount: 6, url: '/design/ui' },
    //   { title: 'UX设计组', role: '用户体验研究', icon: 'experiment', memberCount: 4, url: '/design/ux' },
    //   { title: '视觉设计组', role: '平面与品牌视觉设计', icon: 'bg-colors', memberCount: 5, url: '/design/visual' },
    // ]
  },
  {
    title: '文案部',
    description: '负责项目文案撰写、宣传推广、内容创作及社区运营，是团队对外传播的声音。',
    icon: 'ReadOutlined',
    color: '#13c2c2',
    memberCount: 3,
    url: '/copywriting',
    achievements: ['原创文章150+', '运营活动36场', '用户增长300%'],
    // leader: {
    //   name: '林小月',
    //   title: '内容主管',
    //   avatar: '/api/placeholder/60/60'
    // },
    // children: [
    //   { title: '内容组', role: '文章撰写与内容策划', icon: 'file-text', memberCount: 4, url: '/copywriting/content' },
    //   { title: '运营组', role: '社区运营与用户增长', icon: 'team', memberCount: 6, url: '/copywriting/operation' },
    // ]
  }
])
</script>

<template>
  <div class="org-container">
    <!-- 顶部概览 -->
    <div class="section header-section animate-on-scroll">
      <a-card class="overview-card">
        <div class="header-content">
          <div class="org-stats">
            <h1 class="org-title">组织架构</h1>
            <div class="stats-grid">
              <div class="stat-item">
                <a-statistic title="部门数量" :value="orgStructure.length" />
              </div>
              <div class="stat-item">
                <a-statistic title="组织历史" value="2年" />
              </div>
            </div>
          </div>
          <div class="org-description">
            <h3>组织概述</h3>
            <p>
              我们是一个跨学科、多领域的创新团队，拥有从创意构思到产品落地的全流程能力。
              各部门协同合作，共同打造具有影响力的创新项目，推动技术与创意的边界。
            </p>
          </div>
        </div>
      </a-card>
    </div>

    <!-- 部门概览 -->
    <div class="section dept-overview animate-on-scroll">
      <h2 class="section-title">部门概览</h2>
      <p class="section-subtitle">了解我们的核心部门及其职责</p>

      <a-row :gutter="[24, 24]">
        <a-col :xs="24" :sm="12" :md="8" v-for="(dept, index) in orgStructure" :key="index">
          <a-card hoverable class="dept-card" :bordered="false">
            <template #cover>
              <div class="card-cover" :style="{ background: dept.color + '18' }">
                <!-- <a-icon :type="dept.icon" :style="{ color: dept.color, fontSize: '42px' }" /> -->
                <component :is="dept.icon" :style="{ color: dept.color, fontSize: '42px' }" />
              </div>
            </template>
            <template #title>
              <div class="dept-title" @click="navigate(dept.url)">
                {{ dept.title }}
                <!-- <a-icon type="right" class="arrow-icon" /> -->
                <RightOutlined class="arrow-icon" />
              </div>
            </template>
            <template #extra>
              <a-tag :color="dept.color">{{ dept.memberCount }}人</a-tag>
            </template>

            <div class="dept-content">
              <p class="dept-desc">{{ dept.description }}</p>

              <a-divider orientation="left" v-if="dept.children && dept.children.length">子部门</a-divider>
              <div class="sub-groups" v-if="dept.children && dept.children.length">
                <div v-for="(group, gIndex) in dept.children" :key="gIndex" class="group-item"
                  @click="navigate(group.url)">
                  <!-- <a-icon :type="group.icon" class="group-icon" /> -->
                  <component :is="group.icon" class="group-icon" />
                  <div class="group-info">
                    <div class="group-title">{{ group.title }}</div>
                    <div class="group-role">{{ group.role }}</div>
                  </div>
                </div>
              </div>

              <a-divider orientation="left" v-if="dept.achievements">成果展示</a-divider>
              <div class="dept-achievements" v-if="dept.achievements">
                <a-tag v-for="(item, idx) in dept.achievements" :key="idx" :color="dept.color + '20'"
                  class="achievement-tag">
                  <!-- <a-icon type="trophy" /> -->
                  <TrophyOutlined />
                  <span>{{ item }}</span>
                </a-tag>
              </div>

              <div class="dept-leader" v-if="dept.leader">
                <a-avatar :src="dept.leader.avatar" />
                <div class="leader-info">
                  <div class="leader-name">{{ dept.leader.name }}</div>
                  <div class="leader-title">{{ dept.leader.title }}</div>
                </div>
              </div>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>



    <!-- 组织结构图 -->
    <div class="section org-chart animate-on-scroll">
      <h2 class="section-title">组织结构图</h2>
      <p class="section-subtitle">完整组织架构体系可视化</p>

      <a-card :bordered="false" class="chart-card">
        <div class="chart-container">
          <div class="org-root">
            <div class="root-node">
              <div class="node-title">组织领导层</div>
              <div class="node-desc">统筹规划与战略决策</div>
            </div>
          </div>

          <div class="org-branches">
            <div v-for="(dept, index) in orgStructure" :key="index" class="org-branch">
              <div class="branch-node" :style="{ background: dept.color }">
                <!-- <a-icon :type="dept.icon" class="branch-icon" /> -->
                <component :is="dept.icon" class="branch-icon" />
                <div class="branch-title">{{ dept.title }}</div>
              </div>

              <div class="branch-children" v-if="dept.children && dept.children.length">
                <div v-for="(child, childIdx) in dept.children" :key="childIdx" class="child-node"
                  :style="{ background: dept.color + '15', borderColor: dept.color + '50' }">
                  <!-- <a-icon :type="child.icon" :style="{ color: dept.color }" /> -->
                  <component :is="child.icon" :style="{ color: dept.color }" />
                  <span>{{ child.title }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a-card>
    </div>


  </div>
</template>

<style scoped lang="less">
.org-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 24px;

  // 全局样式
  .section {
    margin-bottom: 60px;

    &.header-section {
      margin-bottom: 40px;
    }
  }

  .section-title {
    color: #1e1e1e;
    position: relative;
    border-left: 4px solid #1890ff;
    padding-left: 16px;
    margin-bottom: 12px;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.2;
  }

  .section-subtitle {
    color: #555;
    margin-bottom: 32px;
    font-size: 16px;
    max-width: 600px;
  }

  // 顶部概览卡片
  .overview-card {
    border-radius: 12px;
    overflow: hidden;

    .header-content {
      display: flex;
      flex-direction: column;

      @media (min-width: 768px) {
        flex-direction: row;
      }

      .org-stats {
        flex: 1;
        padding-right: 24px;

        .org-title {
          font-size: 32px;
          font-weight: 600;
          margin-bottom: 24px;
          color: #1e1e1e;

          &::after {
            content: '';
            display: block;
            width: 60px;
            height: 4px;
            background: linear-gradient(90deg, #1890ff 0%, #40a9ff 100%);
            margin-top: 12px;
          }
        }

        .stats-grid {
          display: flex;
          flex-wrap: wrap;
          margin-top: 24px;

          .stat-item {
            margin-right: 40px;
            margin-bottom: 16px;
          }
        }
      }

      .org-description {
        flex: 1;
        background: #f5f7fa;
        padding: 24px;
        border-radius: 8px;

        h3 {
          margin-bottom: 16px;
          font-size: 18px;
          font-weight: 500;
        }

        p {
          line-height: 1.8;
          color: #222;
        }
      }
    }
  }

  // 部门卡片
  .dept-card {
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s, box-shadow 0.3s;
    height: 100%;
    overflow: hidden;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }

    .card-cover {
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .dept-title {
      font-size: 20px;
      font-weight: 600;
      cursor: pointer;
      transition: color 0.3s;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .arrow-icon {
        font-size: 15px;
        opacity: 0;
        transform: translateX(-5px);
        transition: all 0.3s;
      }

      &:hover {
        color: #1890ff;

        .arrow-icon {
          opacity: 1;
          transform: translateX(0);
        }
      }
    }

    .dept-content {
      padding: 8px 0;

      .dept-desc {
        color: #444;
        line-height: 1.7;
        margin-bottom: 16px;
      }

      .sub-groups {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 16px;

        .group-item {
          padding: 12px;
          background: #f5f7fa;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;

          &:hover {
            background: #e6f4ff;
            transform: translateX(5px);
          }

          .group-icon {
            margin-right: 12px;
            font-size: 16px;
            color: #1890ff;
          }

          .group-info {
            flex: 1;

            .group-title {
              font-weight: 500;
              margin-bottom: 4px;
              color: #1890ff;
            }

            .group-role {
              color: #333;
              font-size: 12px;
            }
          }
        }
      }

      .dept-achievements {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 16px;

        .achievement-tag {
          padding: 4px 10px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
      }

      .dept-leader {
        display: flex;
        align-items: center;
        padding: 12px;
        background: #f9f9f9;
        border-radius: 8px;
        margin-top: 16px;

        .leader-info {
          margin-left: 12px;

          .leader-name {
            font-weight: 500;
            font-size: 14px;
          }

          .leader-title {
            color: #666;
            font-size: 12px;
          }
        }
      }
    }
  }

  // 部门详情
  .dept-detail {
    margin-top: 60px;

    .dept-nav-card {
      height: 100%;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    .dept-info-card {
      height: 100%;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

      .active-dept-content {
        .dept-header {
          padding: 16px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;

          .dept-header-icon {
            font-size: 24px;
            margin-right: 12px;
          }

          .dept-header-title {
            flex: 1;
            margin: 0;
            font-size: 20px;
            font-weight: 600;
          }
        }

        .dept-info-content {
          padding: 0 8px;

          .info-section {
            margin-bottom: 32px;

            h4 {
              font-size: 18px;
              font-weight: 500;
              margin-bottom: 16px;
              color: #333;
              position: relative;

              &::after {
                content: '';
                display: block;
                width: 40px;
                height: 3px;
                background: #1890ff;
                margin-top: 8px;
              }
            }

            p {
              line-height: 1.8;
              color: #444;
            }

            .subteam-card {
              display: flex;
              align-items: center;
              gap: 12px;

              .subteam-title {
                font-weight: 500;
                margin-bottom: 4px;
              }

              .subteam-desc {
                font-size: 12px;
                color: #222;
              }
            }

            .achievement-list {
              display: flex;
              flex-wrap: wrap;
              gap: 12px;

              .achievement-tag-large {
                padding: 8px 16px;
                font-size: 14px;
                display: flex;
                align-items: center;
                gap: 8px;
              }
            }

            .leader-card {
              display: flex;
              align-items: center;
              gap: 24px;
              background: #f9f9f9;

              .leader-detail {
                flex: 1;

                h3 {
                  margin-bottom: 4px;
                  font-size: 18px;
                }

                p {
                  margin-bottom: 12px;
                  color: #666;
                }
              }
            }
          }
        }
      }
    }
  }

  // 组织结构图
  .org-chart {
    margin-top: 60px;

    .chart-card {
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

      .chart-container {
        padding: 24px;

        .org-root {
          display: flex;
          justify-content: center;
          margin-bottom: 40px;

          .root-node {
            background: #1e1e1e;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            text-align: center;
            min-width: 200px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

            .node-title {
              font-size: 18px;
              font-weight: 600;
              margin-bottom: 4px;
            }

            .node-desc {
              font-size: 12px;
              opacity: 0.8;
            }
          }
        }

        .org-branches {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 40px;

          .org-branch {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;

            &::before {
              content: '';
              position: absolute;
              top: -30px;
              height: 30px;
              width: 2px;
              background: #ddd;
            }

            .branch-node {
              padding: 16px 24px;
              border-radius: 8px;
              color: white;
              text-align: center;
              min-width: 180px;
              box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 8px;

              .branch-icon {
                font-size: 24px;
                margin-bottom: 4px;
              }

              .branch-title {
                font-weight: 600;
                font-size: 16px;
              }
            }

            .branch-children {
              display: flex;
              flex-direction: column;
              gap: 12px;
              margin-top: 24px;
              position: relative;

              &::before {
                content: '';
                position: absolute;
                top: -24px;
                height: 24px;
                width: 2px;
                background: #ddd;
                left: 50%;
                transform: translateX(-50%);
              }

              .child-node {
                padding: 8px 16px;
                border-radius: 6px;
                font-size: 14px;
                min-width: 160px;
                text-align: center;
                transition: all 0.3s;
                border: 1px solid;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;

                &:hover {
                  transform: translateX(5px);
                  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                }
              }
            }
          }
        }
      }
    }
  }

  // 联系部分
  .contact-section {
    margin-top: 60px;

    .contact-card {
      height: 100%;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s;

      &:hover {
        transform: translateY(-5px);
      }

      h3 {
        margin-bottom: 16px;
        font-size: 20px;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      p {
        margin-bottom: 24px;
        line-height: 1.7;
        color: #444;
      }

      .contact-actions {
        display: flex;
        gap: 12px;
      }
    }
  }

  // 动画相关
  .animate-on-scroll {
    opacity: 0;
    transition: opacity 0.3s;
  }

  .animate-on-scroll.animate__animated {
    opacity: 1;
  }

  .animate__animated {
    --animate-duration: 0.8s;
  }

  // 响应式优化
  @media (max-width: 768px) {
    padding: 16px 12px;

    .section-title {
      font-size: 24px;
    }

    .section-subtitle {
      font-size: 14px;

      margin-bottom: 24px;

      .chart-container {
        overflow-x: auto;

        .org-branches {
          min-width: 700px;
          padding-bottom: 20px; // 添加底部padding防止滚动条挡住内容
        }
      }
    }

    .dept-detail {
      .dept-nav-card {
        margin-bottom: 24px;
      }
    }
  }

  @media (max-width: 576px) {
    .dept-card {
      .card-cover {
        height: 80px;
      }
    }

    .overview-card {
      .header-content {
        .org-stats {
          .org-title {
            font-size: 24px;
          }
        }
      }
    }
  }
}
</style>
