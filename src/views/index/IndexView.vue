<!-- eslint-disable vue/block-lang -->
<script setup>
// import { ref } from 'vue'

// 图片导入
import tp1 from '@/assets/pura-x-1.jpg'
import tp2 from '@/assets/pura-x-2.jpg'
</script>
<template>
  <a-carousel autoplay>
    <div>
      <img :src="tp1">
    </div>
    <div>
      <img :src="tp2">
    </div>
  </a-carousel>
</template>

<style scoped lang="less">
:deep(.slick-slide) {
  position: relative;

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

  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
