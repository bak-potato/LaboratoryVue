<!-- eslint-disable vue/block-lang -->
<script setup>
import { ref } from 'vue'
import { TinyNavMenu } from '@opentiny/vue'

const menuData = ref([
  {
    title: '首页',
    url: 'about',
    id: '1'
  },
  {
    title: '其他',
    url: 'crop',
    id: '4'
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

<style scoped></style>
