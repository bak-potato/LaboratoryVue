<template>
  <a-layout class="team-container">
    <a-layout-header class="header">
      <h1>计算机实验室创新创业部</h1>
      <p>汇聚创新思维，探索科技未来</p>
    </a-layout-header>

    <a-layout-content class="content">
      <a-tabs v-model:activeKey="activeTab" centered>
        <a-tab-pane key="all" tab="全体成员"></a-tab-pane>
        <a-tab-pane key="teachers" tab="指导老师"></a-tab-pane>
        <a-tab-pane key="leaders" tab="部门负责人"></a-tab-pane>
        <a-tab-pane key="members" tab="部门成员"></a-tab-pane>
      </a-tabs>

      <div class="member-list">
        <a-row :gutter="[16, 24]">
          <template v-for="member in filteredMembers" :key="member.id">
            <a-col :xs="24" :sm="12" :md="8" :lg="6">
              <a-card hoverable class="member-card">
                <template #cover>
                  <img :src="member.avatar || defaultAvatar" :alt="member.name" />
                </template>
                <a-card-meta :title="member.name" :description="member.position">
                  <template #avatar>
                    <a-avatar :src="member.avatar || defaultAvatar" />
                  </template>
                </a-card-meta>

                <div class="member-info">
                  <p><user-outlined /> {{ member.grade }}</p>
                  <p><mail-outlined /> {{ member.email }}</p>
                  <p><phone-outlined /> {{ member.phone }}</p>
                  <p><highlight-outlined /> {{ member.specialty }}</p>
                </div>

                <template #actions>
                  <a-tooltip title="GitHub">
                    <github-outlined @click="openLink(member.github)" />
                  </a-tooltip>
                  <a-tooltip title="个人博客">
                    <global-outlined @click="openLink(member.blog)" />
                  </a-tooltip>
                  <a-tooltip title="发送邮件">
                    <mail-outlined @click="sendEmail(member.email)" />
                  </a-tooltip>
                </template>
              </a-card>
            </a-col>
          </template>
        </a-row>
      </div>
    </a-layout-content>

    <a-layout-footer class="footer">
      <p>© 2023 计算机实验室创新创业部 版权所有</p>
    </a-layout-footer>
  </a-layout>
</template>
<!-- eslint-disable vue/block-lang -->

<script setup>
import { ref, computed } from 'vue';
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  HighlightOutlined,
  GithubOutlined,
  GlobalOutlined
} from '@ant-design/icons-vue';

const defaultAvatar = 'https://joeschmoe.io/api/v1/random';

const activeTab = ref('all');

const members = ref([
  {
    id: 1,
    name: '张教授',
    position: '指导老师',
    grade: '教授',
    email: 'zhang@university.edu',
    phone: '13800138000',
    specialty: '人工智能、机器学习',
    avatar: '',
    type: 'teacher',
    github: 'https://github.com/zhang',
    blog: 'https://zhang.blog.com'
  },
  {
    id: 2,
    name: '李副教授',
    position: '指导老师',
    grade: '副教授',
    email: 'li@university.edu',
    phone: '13900139000',
    specialty: '大数据分析',
    avatar: '',
    type: 'teacher',
    github: 'https://github.com/li',
    blog: 'https://li.blog.com'
  },
  {
    id: 3,
    name: '王明',
    position: '部门主任',
    grade: '研究生二年级',
    email: 'wang@university.edu',
    phone: '13500135000',
    specialty: 'Web开发、项目管理',
    avatar: '',
    type: 'leader',
    github: 'https://github.com/wang',
    blog: 'https://wang.blog.com'
  },
  {
    id: 4,
    name: '李华',
    position: '技术总监',
    grade: '研究生一年级',
    email: 'lihua@university.edu',
    phone: '13600136000',
    specialty: '算法设计、机器学习',
    avatar: '',
    type: 'leader',
    github: 'https://github.com/lihua',
    blog: 'https://lihua.blog.com'
  },
  {
    id: 5,
    name: '张伟',
    position: '核心成员',
    grade: '本科四年级',
    email: 'zhangwei@university.edu',
    phone: '13700137000',
    specialty: '前端开发、UI设计',
    avatar: '',
    type: 'member',
    github: 'https://github.com/zhangwei',
    blog: 'https://zhangwei.blog.com'
  },
  {
    id: 6,
    name: '刘芳',
    position: '核心成员',
    grade: '本科三年级',
    email: 'liufang@university.edu',
    phone: '13800138111',
    specialty: '后端开发、数据库',
    avatar: '',
    type: 'member',
    github: 'https://github.com/liufang',
    blog: 'https://liufang.blog.com'
  },
  {
    id: 7,
    name: '陈晨',
    position: '成员',
    grade: '本科二年级',
    email: 'chenchen@university.edu',
    phone: '13900139111',
    specialty: '移动应用开发',
    avatar: '',
    type: 'member',
    github: 'https://github.com/chenchen',
    blog: 'https://chenchen.blog.com'
  },
  {
    id: 8,
    name: '杨阳',
    position: '成员',
    grade: '本科一年级',
    email: 'yangyang@university.edu',
    phone: '13500135111',
    specialty: 'Python编程',
    avatar: '',
    type: 'member',
    github: 'https://github.com/yangyang',
    blog: 'https://yangyang.blog.com'
  }
]);

const filteredMembers = computed(() => {
  switch (activeTab.value) {
    case 'teachers':
      return members.value.filter(m => m.type === 'teacher');
    case 'leaders':
      return members.value.filter(m => m.type === 'leader');
    case 'members':
      return members.value.filter(m => m.type === 'member');
    default:
      return members.value;
  }
});

const openLink = (url) => {
  if (url) window.open(url, '_blank');
};

const sendEmail = (email) => {
  if (email) window.location.href = `mailto:${email}`;
};
</script>

<style scoped>
.team-container {
  min-height: 100vh;
}

.header {
  background-color: #1890ff;
  color: white;
  height: 200px;
  text-align: center;
  padding: 20px 0;
}

.header h1 {
  margin: 0;
  font-size: 28px;
}

.header p {
  margin: 5px 0 0;
  font-size: 16px;
}

.content {
  padding: 20px 50px;
}

.member-card {
  margin-bottom: 20px;
  height: 100%;
}

.member-card img {
  height: 200px;
  object-fit: cover;
}

.member-info {
  margin-top: 15px;
}

.member-info p {
  margin: 5px 0;
  font-size: 13px;
  color: #666;
}

.footer {
  text-align: center;
  background-color: #f0f2f5;
  padding: 16px 0;
}

@media (max-width: 768px) {
  .content {
    padding: 20px;
  }
}
</style>
