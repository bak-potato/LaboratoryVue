<template>
  <a-layout class="ai-lab-container">
    <a-layout-content class="content">
      <!-- 关于我们 -->
      <a-card title="关于我们" class="section-card">
        <p>
          计算机实验室 AI 研究组成立于 2023 年，专注于人工智能前沿技术的研究与应用。我们致力于机器学习、深度学习、计算机视觉、自然语言处理等领域的研究，并与工业界保持紧密合作，推动 AI 技术的实际应用。
        </p>

      </a-card>

      <!-- 研究方向 -->
      <a-card title="研究方向" class="section-card">
        <a-row :gutter="16">
          <a-col :span="8" v-for="(field, index) in researchFields" :key="index">
            <a-card hoverable>
              <a-card-meta :title="field.title">
                <template #description>
                  {{ field.description }}
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>
      </a-card>

      <!-- 最新成果 -->
      <a-card title="最新成果" class="section-card">
        <a-timeline mode="alternate">
          <a-timeline-item
            v-for="(achievement, index) in achievements"
            :key="index"
            :color="achievement.color"
          >
            {{ achievement.year }} {{ achievement.content }}
          </a-timeline-item>
        </a-timeline>
      </a-card>

      <!-- 团队成员 - 只保留教授 -->
      <a-card title="团队成员" class="section-card">
        <a-list :grid="{ gutter: 24, column: 4 }" :data-source="professors">
          <template #renderItem="{ item }">
            <a-list-item>
              <a-card hoverable class="professor-card">
                <template #cover>
                  <img :src="item.avatar" alt="avatar" class="professor-avatar" />
                </template>
                <a-card-meta
                  :title="item.name"
                  :description="item.title"
                  class="professor-info"
                />
              </a-card>
            </a-list-item>
          </template>
        </a-list>
      </a-card>
    </a-layout-content>


  </a-layout>
</template>
<!-- eslint-disable vue/block-lang -->

<script setup>
import zhangfuchen from '@/assets/members/张阜辰.jpg';
import { ref } from 'vue';


// 研究方向
const researchFields = ref([
  {
    title: '机器学习',
    description: '研究深度学习、强化学习、迁移学习等前沿机器学习算法',
    image: 'https://example.com/ml.jpg',
  },
  {
    title: '计算机视觉',
    description: '图像识别、目标检测、图像生成等计算机视觉技术研究',
    image: 'https://example.com/cv.jpg',
  },
  {
    title: '自然语言处理',
    description: '文本理解、机器翻译、对话系统等 NLP 技术研究',
    image: 'https://example.com/nlp.jpg',
  },
]);

// 最新成果
const achievements = ref([
  {
    year: '2023',
    content: '在 发表论文《基于多模态学习的图像生成方法》',
    color: 'green',
    link: 'https://example.com/paper1',
  },
  {
    year: '2024',
    content: '获得 ACM 最佳论文奖',
    color: 'blue',
    link: 'https://example.com/award1',
  },
  {
    year: '2024',
    content: '与某公司合作开发智能客服系统并成功上线',
    color: 'red',
    link: 'https://example.com/project1',
  },
  {
    year: '2025',
    content: '获得国家自然科学基金重点项目资助',
    color: 'purple',
  },
]);

// 教授团队
const professors = ref([
  {
    name: '张阜辰',
    title: 'AI组组长',
    avatar: zhangfuchen
  },
  // 可以添加更多教授
  // {
  //   name: '李教授',
  //   title: '实验室主任',
  //   avatar: 'path-to-avatar'
  // },
]);
</script>

<style scoped>
.ai-lab-container {
  min-height: 100vh;
}

.content {
  padding: 24px;
  background: #f0f2f5;
}

.section-card {
  margin-bottom: 24px;
}

/* 教授卡片样式 */
.professor-card {
  width: 240px;
  text-align: center;
  transition: all 0.3s;
}

.professor-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.professor-avatar {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  margin: 20px auto;
  border: 3px solid #f0f2f5;
}

.professor-info {
  padding: 0 10px 20px;
}

.footer {
  text-align: center;
  background-color: #001529;
  color: rgba(255, 255, 255, 0.85);
  padding: 24px 50px;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  margin-bottom: 24px;
  text-align: left;
}

.footer-content h3 {
  color: white;
  margin-bottom: 16px;
}

.footer-content a {
  color: rgba(255, 255, 255, 0.65);
  display: block;
  margin-bottom: 8px;
}

.footer-content a:hover {
  color: #1890ff;
}

.copyright {
  margin-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 16px;
}
</style>
