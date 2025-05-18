<!-- eslint-disable vue/block-lang -->
<script setup>
import { ref } from 'vue'
// import { Message } from '@arco-design/web-vue'

const formData = ref({
  name: '',
  email: '',
  content: ''
})

const handleSubmit = () => {
  Message.success('留言已提交，我们将尽快与您联系')
  formData.value = { name: '', email: '', content: '' }
}
</script>

<template>
  <div class="contact-container">
    <!-- 联系信息区块 -->
    <a-typography class="section">
      <h2 class="section-title">联系我们</h2>
      <a-row :gutter="24" class="contact-info">
        <a-col :xs="24" :md="12">
          <div class="info-item">
            <icon-map theme="filled" />
            <div>
              <h3>实验室地址</h3>
              <p>山东省济宁市曲阜市杏坛路1号济宁学院<br>计算机科学与工程学院8号楼A214室</p>
            </div>
          </div>
          <div class="info-item">
            <icon-phone theme="filled" />
            <div>
              <h3>联系方式</h3>
              <!-- <p>0537-12345678<br>王老师 17812345678 (竞赛咨询)</p> -->
              <!-- <p>别看了，暂时没搞。<br>欢迎大家来玩。</p> -->
              <p>如果你想咨询的话<br>那你直接过来吧！</p>
            </div>
          </div>
        </a-col>

        <!-- 地图占位 -->
        <a-col :xs="24" :md="12">
          <div class="map-placeholder">
            <!-- <icon-picture /> -->
            <span>占位div</span>
          </div>
        </a-col>
      </a-row>
    </a-typography>
  </div>
</template>

<style scoped lang="less">
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  .section {
    margin: 40px 0;

    &-title {
      color: #1890ff;
      border-left: 4px solid #1890ff;
      padding-left: 12px;
      margin-bottom: 24px;
    }
  }

  .contact-info {
    .info-item {
      display: flex;
      gap: 16px;
      margin-bottom: 24px;
      padding: 20px;
      background: #f8f9fa;
      border-radius: 8px;

      h3 {
        margin: 0 0 8px;
        color: #333;
      }

      p {
        margin: 0;
        color: #666;
        line-height: 1.6;
      }
    }

    .map-placeholder {
      height: 300px;
      background: #f0f2f5;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: #999;
    }
  }

}
</style>
