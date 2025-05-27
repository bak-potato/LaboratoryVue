<!-- eslint-disable vue/block-lang -->
<script setup>
import { ref } from 'vue'
import { TinyNavMenu } from '@opentiny/vue'

const menuData = ref([
  {
    title: '首页',
    url: '/',
    id: '1'
  },
  {
    title: '组织架构',
    url: '/organizational',
    id: '2',
    children: [
      {
        title: '创新创业部',
        url: '',
        id: '3-1',
        children: [
          {
            title: '创新创业部简介',
            url: '/introduction',
            id: '3-1-1'
          },
          {
            title: '创新创业部成员',
            url: '/introduction/members',
            id: '3-1-2'
          },
        ]
      },
      {
        title: '软件部',
        url: '',
        id: '3-2',
        children: [
          {
            title: '软件部简介',
            url: '/software',
            id: '3-2-1'
          },
          {
            title: '软件部成员',
            url: '/software/members',
            id: '3-2-2'
          },
          {
            title: '前端组',
            url: '/software/web',
            id: '3-2-3'
          },
          {
            title: '后端组',
            url: '/software/backend',
            id: '3-2-4'
          },
          {
            title: '运维组',
            url: '/software/ops',
            id: '3-2-5'
          },
          {
            title: '测试组',
            url: '/software/test',
            id: '3-2-6'
          },
          {
            title: 'AI组',
            url: '/software/ai',
            id: '3-2-7'
          }
        ]
      },
      {
        title: '硬件部',
        url: '',
        id: '3-3',
        children: [
          {
            title: '硬件部简介',
            url: '/hardware',
            id: '3-3-1'
          },
          {
            title: '硬件部成员',
            url: '/hardware/members',
            id: '3-3-2'
          }
        ]
      },
      {
        title: '文案部',
        url: '',
        id: '3-4',
        children: [
          {
            title: '文案部简介',
            url: '/copywriting',
            id: '3-4-1'
          },
          {
            title: '文案部成员',
            url: '/copywriting/members',
            id: '3-4-2'
          }
        ]
      },
      {
        title: '设计部',
        url: '',
        id: '3-5',
        children: [
          {
            title: '设计部简介',
            url: '/design',
            id: '3-5-1'
          },
          {
            title: '设计部成员',
            url: '/design/members',
            id: '3-5-2'
          }
        ]
      }
    ]
  },
  {
    title: '团队成员',
    url: '/member',
    id: '3',
  },
  {
    title: '项目',
    url: '/projects',
    id: '4',
    children: [
      {
        title: '重点项目',
        url: '',
        id: '4-1',
        children: [
          {
            title: '临界拓池',
            url: '/project/ljtc',
            id: '4-1-1'
          },
          {
            title: '智润田园',
            url: '/project/zrty',
            id: '4-1-2'
          }
        ]
      },
      {
        title: '科研类项目',
        url: '',
        id: '4-2',
        children: [
          {
            title: '临界拓池',
            url: '/project/ljtc',
            id: '4-2-1'
          },
          {
            title: '风花雪月',
            url: '/project/fhxy',
            id: '4-2-2'
          }
        ]
      },
      {
        title: '竞赛类项目',
        url: '',
        id: '4-3',
        children: [
          {
            title: '临界拓池',
            url: '/project/ljtc',
            id: '4-3-1'
          },
          {
            title: '风花雪月',
            url: '/project/fhxy',
            id: '4-3-2'
          },
          {
            title: '智润田园',
            url: '/project/zrty',
            id: '4-3-3'
          },
          {
            title: '星海韵梦',
            url: '/project/xhym',
            id: '4-3-4'
          },
          {
            title: '智能题站',
            url: '/project/zrty',
            id: '4-3-5'
          },
          {
            title: '推星予瞳',
            url: '/project/txyt',
            id: '4-3-6'
          },
          {
            title: '智图分析',
            url: '/project/ztfx',
            id: '4-3-7'
          },
          {
            title: '调星破影',
            url: '/project/dxpy',
            id: '4-3-8'
          },
          {
            title: '慧流立方体',
            url: '/project/hldft',
            id: '4-3-9'
          },
          {
            title: '数据银河',
            url: '/project/sjyh',
            id: '4-3-10'
          },
          {
            title: '低码未来',
            url: '/project/dmwl',
            id: '4-3-11'
          },
          {
            title: '代码神器',
            url: '/project/dmsq',
            id: '4-3-12'
          }
        ]
      }
    ]
  },
  {
    title: '关于实验室',
    url: '/about',
    id: '5',
  }
])
</script>

<template>
  <a-layout class="layout">
    <a-layout-header class="header">
      <tiny-nav-menu :data="menuData" allow-full-url overflow="auto" class="main-nav"></tiny-nav-menu>
    </a-layout-header>
    <a-layout-content style="margin: 0">
      <router-view />
    </a-layout-content>
    <a-layout-footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>关于实验室</h4>
            <p>计算机创新实验室致力于培养具有创新精神和实践能力的高素质人才，为学生提供良好的学习环境和实践机会。</p>
          </div>
          <div class="footer-section">
            <h4>快速链接</h4>
            <ul>
              <li><a href="#">首页</a></li>
              <li><a href="/organizational">组织架构</a></li>
              <li><a href="/member">团队成员</a></li>
              <li><a href="/projects">项目</a></li>
              <li><a href="/about">关于实验室</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>友情链接</h4>
            <ul>
              <li><a href="https://www.jnxy.edu.cn/" target="_blank">济宁学院</a></li>
              <li><a href="https://csae.jnxy.edu.cn/" target="_blank">济宁学院计算机科学与工程学院</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>联系方式</h4>
            <div class="footer-contact">
              <p>📧 laboratory10454@163.com</p>
              <p>📍 济宁学院8号楼A214</p>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <span>&copy; 2025 计算机创新实验室. All rights reserved.</span>
            <div class="beian-links">
              <a target="_blank" href="https://beian.miit.gov.cn/">鲁ICP备2024114192号-1</a>
              <a href="https://beian.mps.gov.cn/#/query/webSearch?code=37040302006058" rel="noreferrer"
                target="_blank">鲁公网安备37040302006058</a>
            </div>
          </div>
        </div>
      </div>
    </a-layout-footer>
  </a-layout>
  <a-back-top />
</template>

<style scoped lang="less">
.layout {
  min-height: 100vh;
  overflow: hidden;

  :deep(.slick-track) {
    height: auto;

    >::before {
      content: '';
      position: absolute;
      display: block;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 200px;
      background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%);
    }
  }

  .header {
    background: #fff;
    padding: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

    .main-nav {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      width: 100%;
      margin: 0;
      background: transparent;
      --tv-NavMenu-item-font-size: 16px;
    }

    // 移动端导航适配
    @media (max-width: 768px) {
      padding: 0 10px;
      height: auto;
      min-height: 64px;

      .main-nav {
        justify-content: flex-start;
        flex-wrap: wrap;
        --tv-NavMenu-item-font-size: 14px;

        :deep(.tiny-nav-menu) {
          .tiny-nav-menu__item {
            padding: 8px 12px;
            margin: 2px;
            font-size: 14px;
            white-space: nowrap;
          }

          .tiny-nav-menu__more {
            padding: 8px 12px;
          }
        }
      }
    }

    @media (max-width: 480px) {
      padding: 0 8px;

      .main-nav {
        --tv-NavMenu-item-font-size: 13px;

        :deep(.tiny-nav-menu) {
          .tiny-nav-menu__item {
            padding: 6px 8px;
            font-size: 13px;
          }
        }
      }
    }
  }

  // 页脚样式
  .footer {
    background: #001529;
    color: white;
    padding: 60px 0 20px;

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 40px;
      margin-bottom: 40px;

      .footer-section {
        h4 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
          color: white;
        }

        p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          font-size: 14px;
          margin-bottom: 0;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;

          li {
            margin-bottom: 12px;

            a {
              color: rgba(255, 255, 255, 0.7);
              text-decoration: none;
              font-size: 14px;
              transition: all 0.3s ease;

              &:hover {
                color: #1890ff;
              }
            }
          }
        }

        .footer-contact {
          p {
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
          }
        }
      }
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 20px;

      .footer-bottom-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 12px;

        span {
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
          margin: 0;
        }

        .beian-links {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;

          a {
            color: rgba(255, 255, 255, 0.5);
            text-decoration: none;
            font-size: 14px;
            transition: all 0.3s ease;

            &:hover {
              color: #1890ff;
            }
          }
        }
      }
    }

    // 移动端页脚适配
    @media (max-width: 768px) {
      padding: 40px 0 20px;

      .container {
        padding: 0 16px;
      }

      .footer-content {
        grid-template-columns: 1fr;
        gap: 30px;
        margin-bottom: 30px;

        .footer-section {
          h4 {
            font-size: 16px;
            margin-bottom: 16px;
          }

          p {
            font-size: 13px;
          }

          ul li a {
            font-size: 13px;
          }

          .footer-contact p {
            font-size: 13px;
            margin-bottom: 10px;
          }
        }
      }

      .footer-bottom {
        .footer-bottom-content {
          flex-direction: column;
          align-items: flex-start;
          text-align: left;

          span {
            font-size: 13px;
            order: 2;
          }

          .beian-links {
            order: 1;
            flex-direction: column;
            gap: 8px;

            a {
              font-size: 13px;
            }
          }
        }
      }
    }

    @media (max-width: 480px) {
      padding: 30px 0 16px;

      .container {
        padding: 0 12px;
      }

      .footer-content {
        gap: 24px;
        margin-bottom: 24px;

        .footer-section {
          h4 {
            font-size: 15px;
            margin-bottom: 14px;
          }

          p {
            font-size: 12px;
            line-height: 1.5;
          }

          ul li {
            margin-bottom: 10px;

            a {
              font-size: 12px;
            }
          }

          .footer-contact p {
            font-size: 12px;
            margin-bottom: 8px;
          }
        }
      }

      .footer-bottom {
        .footer-bottom-content {
          span {
            font-size: 12px;
          }

          .beian-links a {
            font-size: 12px;
            word-break: break-all;
          }
        }
      }
    }
  }

  // 回到顶部按钮移动端适配
  :deep(.ant-back-top) {
    @media (max-width: 768px) {
      right: 16px;
      bottom: 80px;

      .ant-back-top-content {
        width: 36px;
        height: 36px;
        line-height: 36px;
        font-size: 16px;
      }
    }
  }
}

// 全局移动端优化
@media (max-width: 768px) {
  * {
    -webkit-tap-highlight-color: transparent;
  }

  body {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
}
</style>
