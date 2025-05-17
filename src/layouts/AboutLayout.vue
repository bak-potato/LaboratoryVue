<!-- eslint-disable vue/block-lang -->
<script setup>
import { ref } from 'vue'
import { TinyNavMenu } from '@opentiny/vue'

const menuData = ref([
  {
    title: '实验室介绍',
    url: '/about',
    id: '1'
  },
  {
    title: '实验室风采',
    url: '/about/intro',
    id: '2'
  },
  {
    title: '联系我们',
    url: '/about/contact',
    id: '3'
  }
])
</script>

<template>
  <a-layout class="layout">
    <a-layout-head class="header">
      <tiny-nav-menu :data="menuData"></tiny-nav-menu>
    </a-layout-head>

    <a-layout-content class="content">
      <router-view></router-view>
    </a-layout-content>
  </a-layout>
</template>

<style lang="less" scoped>
.layout {
  min-height: 100vh;
}

.header {
  .tiny-nav-menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;

    --tv-NavMenu-item-font-size: 16px;
  }
}
</style>
