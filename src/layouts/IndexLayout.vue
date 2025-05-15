<!-- eslint-disable vue/block-lang -->
<script setup>
import { ref } from 'vue'

// 图片导入
import tp1 from '@/assets/pura-x-1.jpg'
import tp2 from '@/assets/pura-x-2.jpg'


import { TinyNavMenu } from '@opentiny/vue'

const menuData = ref([
  {
    title: '首页',
    url: '',
    id: '1'
  },
  {
    title: '组织架构',
    url: '',
    id: '2',
    children: [
      {
        title: '创新创业部',
        url: '',
        id: '3-1',
        children: [
          {
            title: '创新创业部简介',
            url: 'introduction',
            id: '3-1-1'
          },
          {
            title: '创新创业部成员',
            url: 'introduction/members',
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
            url: 'software',
            id: '3-2-1'
          },
          {
            title: '软件部成员',
            url: 'software/members',
            id: '3-2-2'
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
            url: 'hardware',
            id: '3-3-1'
          },
          {
            title: '硬件部成员',
            url: 'hardware/members',
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
            url: 'copywriting',
            id: '3-4-1'
          },
          {
            title: '文案部成员',
            url: 'copywriting/members',
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
            url: 'design',
            id: '3-5-1'
          },
          {
            title: '设计部成员',
            url: 'design/members',
            id: '3-5-2'
          }
        ]
      }
    ]
  },
  {
    title: '相关成员',
    url: '',
    id: '3',
  },
  {
    title: '项目',
    url: '',
    id: '4',
    children: [
      {
        title: '重点项目',
        url: '',
        id: '4-1',
        children: [
          {
            title: '临界拓池',
            url: 'ljtc',
            id: '4-1-1'
          },
          {
            title: '智润田园',
            url: 'zrty',
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
            url: 'ljtc',
            id: '4-2-1'
          },
          {
            title: '风花雪月',
            url: 'fhxy',
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
            url: 'ljtc',
            id: '4-3-1'
          },
          {
            title: '风花雪月',
            url: 'fhxy',
            id: '4-3-2'
          },
          {
            title: '智润田园',
            url: 'zrty',
            id: '4-3-3'
          },
          {
            title: '星海韵梦',
            url: 'xhym',
            id: '4-3-4'
          },
          {
            title: '智能题站',
            url: 'zrty',
            id: '4-3-5'
          },
          {
            title: '推星予瞳',
            url: 'txyt',
            id: '4-3-6'
          },
        ]
      }
    ]
  },
  {
    title: '关于实验室',
    url: '',
    id: '5',
  }
])
</script>

<template>
  <a-layout class="layout">
    <a-layout-header class="header">
      <!-- <div class="logo" /> -->
      <tiny-nav-menu :data="menuData" style="height: 100%; width: 100%; margin: 0; background: #fff;"></tiny-nav-menu>
    </a-layout-header>
    <a-layout-content style="margin: 0">
      <!-- <a-carousel autoplay>
        <div>
          <img :src="tp1">
        </div>
        <div>
          <img :src="tp2">
        </div>
      </a-carousel> -->
      <router-view />
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<style scoped lang="less">
.layout {
  min-height: 100vh;

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

    .tiny-nav-menu {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;

      --tv-NavMenu-item-font-size: 16px;
    }
  }
}
</style>
