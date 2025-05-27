<!-- eslint-disable vue/block-lang -->
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="not-found-container">
    <div class="content animate__animated animate__fadeIn">
      <div class="error-code">404</div>
      <h1 class="error-title">页面未找到</h1>
      <p class="error-description">您访问的页面可能已移动或不存在</p>
      <div class="error-illustration">
        <svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg">
          <!-- 简化的SVG路径（实际开发中建议使用完整图标） -->
          <path fill="var(--primary-color)"
            d="M420 280H60c-11 0-20-9-20-20V60c0-11 9-20 20-20h360c11 0 20 9 20 20v200c0 11-9 20-20 20z" />
          <circle fill="#fff" cx="240" cy="170" r="80" />
        </svg>
      </div>
      <RouterLink to="/">
        <a-button type="primary" size="large" class="animate__animated animate__bounceIn">
          返回首页
        </a-button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="less">
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');

.not-found-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--bg-light);

  .content {
    text-align: center;
    padding: 40px;
    max-width: 600px;

    .error-code {
      font-size: 120px;
      color: var(--primary-color);
      line-height: 1;
      margin-bottom: 24px;
    }

    .error-title {
      font-size: 32px;
      color: var(--text-primary);
      margin-bottom: 16px;
    }

    .error-description {
      color: var(--text-secondary);
      margin-bottom: 32px;
    }

    .error-illustration {
      margin: 32px 0;

      svg {
        width: 200px;
        height: auto;
        opacity: 0.8;
      }
    }
  }
}
</style>
