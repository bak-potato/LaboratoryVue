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
    title: '指南',
    url: '',
    id: '2',
    children: [
      {
        title: '表单组件',
        url: '',
        id: '3-1',
        children: [
          {
            title: 'Datepicker 日期',
            url: 'datepicker',
            id: '3-1-1'
          },
          {
            title: 'Cascader 级联选择器',
            url: 'cascader',
            id: '3-1-2'
          },
          {
            title: 'DropTimes 下拉时间',
            url: 'droptimes',
            id: '3-1-3'
          }
        ]
      },
      {
        title: '数据展示',
        url: '',
        id: '3-2',
        children: [
          {
            title: 'Card 卡片',
            url: 'card',
            id: '3-2-1'
          },
          {
            title: 'Collapse 折叠面板',
            url: 'collapse',
            id: '3-2-2'
          },
          {
            title: 'Guide 引导',
            url: 'guide',
            id: '3-2-3'
          }
        ]
      },
      {
        title: '导航组件',
        url: '',
        id: '3-3',
        children: [
          {
            title: 'ToggleMenu 收缩菜单',
            url: 'toggleMenu',
            id: '3-3-1'
          },
          {
            title: 'TreeMenu 树型菜单',
            url: 'treemenu',
            id: '3-3-2'
          },
          {
            title: 'Breadcrumb 面包屑',
            url: 'breadcrumb',
            id: '3-3-3'
          }
        ]
      },
      {
        title: '业务组件',
        url: '',
        id: '3-4',
        children: [
          {
            title: 'Amount 金额',
            url: 'amount',
            id: '3-4-1'
          },
          {
            title: 'Area 片区',
            url: 'area',
            id: '3-4-2'
          },
          {
            title: 'Company 公司',
            url: 'company',
            id: '3-4-3'
          }
        ]
      }
    ]
  },
  {
    title: '组件',
    url: '',
    id: '3',
    children: [
      {
        title: '表单组件',
        url: '',
        id: '3-1',
        children: [
          {
            title: 'Datepicker 日期',
            url: 'datepicker',
            id: '3-1-1'
          },
          {
            title: 'Cascader 级联选择器',
            url: 'cascader',
            id: '3-1-2'
          },
          {
            title: 'DropTimes 下拉时间',
            url: 'droptimes',
            id: '3-1-3'
          }
        ]
      },
      {
        title: '数据展示',
        url: '',
        id: '3-2',
        children: [
          {
            title: 'Card 卡片',
            url: 'card',
            id: '3-2-1'
          },
          {
            title: 'Collapse 折叠面板',
            url: 'collapse',
            id: '3-2-2'
          },
          {
            title: 'Guide 引导',
            url: 'guide',
            id: '3-2-3'
          }
        ]
      },
      {
        title: '导航组件',
        url: '',
        id: '3-3',
        children: [
          {
            title: 'ToggleMenu 收缩菜单',
            url: 'toggleMenu',
            id: '3-3-1'
          },
          {
            title: 'TreeMenu 树型菜单',
            url: 'treemenu',
            id: '3-3-2'
          },
          {
            title: 'Breadcrumb 面包屑',
            url: 'breadcrumb',
            id: '3-3-3'
          }
        ]
      },
      {
        title: '业务组件',
        url: '',
        id: '3-4',
        children: [
          {
            title: 'Amount 金额',
            url: 'amount',
            id: '3-4-1'
          },
          {
            title: 'Area 片区',
            url: 'area',
            id: '3-4-2'
          },
          {
            title: 'Company 公司',
            url: 'company',
            id: '3-4-3'
          }
        ]
      }
    ]
  },
  {
    title: '关于实验室',
    url: 'crop',
    id: '4'
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
