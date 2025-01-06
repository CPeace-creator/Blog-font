<template>
  <a-layout-content class="home-container">
    <a-affix>
      <a-layout-header class="header">
        <a-row justify="center" align="middle">
          <a-col :span="24" :md="16" :lg="14" :xl="12">
            <a-space align="center" :size="16">
              <a-input
                placeholder="搜索文章..."
                class="search-input"
                readonly
                @click="showSearchModal"
              >
                <template #prefix>
                  <SearchOutlined />
                </template>
                <template #suffix>
                  <a-typography-text type="secondary" class="shortcut-hint">
                    {{ isMac ? '⌘' : 'Shift' }} + K
                  </a-typography-text>
                </template>
              </a-input>
            </a-space>
          </a-col>
        </a-row>
      </a-layout-header>
    </a-affix>

    <!-- 主要内容区域 -->
    <a-layout class="main-content">
      <a-row :gutter="[24, 24]">
        <!-- 左侧固定部分 -->
        <a-col :xs="24" :sm="24" :md="8" :lg="6">
          <a-affix :offset-top="88">
            <a-space direction="vertical" size="middle" style="width: 100%">
              <!-- 个人信息卡片 -->
              <a-card :bordered="false">
                <a-space direction="vertical" size="large">
                  <a-row align="middle" :gutter="[16, 16]">
                    <a-col flex="none">
                      <a-avatar :size="64" :src="avatarUrl" />
                    </a-col>
                    <a-col flex="auto">
                      <a-typography-title :level="4" :margin-bottom="0">
                        陈嘉鸿
                      </a-typography-title>
                      <a-typography-text type="secondary">
                        Web Developer & Designer
                      </a-typography-text>
                    </a-col>
                  </a-row>

                  <a-space direction="vertical">
                    <a-space>
                      <EnvironmentOutlined />
                      <span>福建省厦门市</span>
                    </a-space>
                    <a-space>
                      <MailOutlined />
                      <span>949661474@qq.com</span>
                    </a-space>
                  </a-space>

                  <a-space>
                    <a-button type="link" href="https://github.com" target="_blank">
                      <GithubOutlined />
                    </a-button>
                    <a-button type="link">
                      <WeiboOutlined />
                    </a-button>
                    <a-button type="link">
                      <WechatOutlined />
                    </a-button>
                  </a-space>

                  <a-divider style="margin: 8px 0" />

                  <a-space direction="vertical">
                    <a-typography-text>💻 正在努力成为独立开发者</a-typography-text>
                    <a-typography-text>💡 有创意点子就会尝试</a-typography-text>
                    <a-typography-text>🏠 分享日常博客</a-typography-text>
                  </a-space>
                </a-space>
              </a-card>

              <!-- 技能卡片 -->
              <a-card :bordered="false" title="技能 & 工具">
                <a-space direction="vertical" size="middle">
                  <div v-for="(category, index) in skillCategories" :key="index">
                    <a-typography-title :level="5">{{ category.title }}</a-typography-title>
                    <a-space wrap>
                      <a-tag v-for="skill in category.skills"
                        :key="skill"
                        :color="category.color"
                      >
                        {{ skill }}
                      </a-tag>
                    </a-space>
                  </div>
                </a-space>
              </a-card>
            </a-space>
          </a-affix>
        </a-col>

        <!-- 右侧内容区域 -->
        <a-col :xs="24" :sm="24" :md="16" :lg="18">
          <!-- Experience 部分 -->
          <a-card :bordered="false" title="What have I been doing" class="content-card">
            <a-row :gutter="[16, 16]">
              <a-col :xs="24" :sm="24" :md="12" :lg="8" v-for="(exp, index) in experiences" :key="index">
                <a-card hoverable>
                  <a-space direction="vertical" size="middle">
                    <a-avatar :size="48" style="background-color: #e6f7ff">
                      {{ exp.icon }}
                    </a-avatar>
                    <a-typography-title :level="5">{{ exp.title }}</a-typography-title>
                    <a-typography-paragraph>{{ exp.description }}</a-typography-paragraph>
                  </a-space>
                </a-card>
              </a-col>
            </a-row>
          </a-card>

          <!-- Projects 部分 -->
          <a-card :bordered="false" title="Projects" class="content-card" style="margin-top: 24px">
            <a-list
              :grid="{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }"
              :data-source="projects"
            >
              <template #renderItem="{ item }">
                <a-list-item>
                  <a-card hoverable>
                    <template #cover>
                      <img :src="item.logo || defaultProjectImage" :alt="item.title" />
                    </template>
                    <a-card-meta :title="item.title" :description="item.description" />
                  </a-card>
                </a-list-item>
              </template>
            </a-list>
          </a-card>
        </a-col>
      </a-row>
    </a-layout>
  </a-layout-content>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { GithubOutlined, WeiboOutlined, WechatOutlined, EnvironmentOutlined, MailOutlined, SearchOutlined } from '@ant-design/icons-vue'


// 示例数据
const experiences = [
  {
    icon: '</>',
    title: 'Web Developer',
    description: 'A Developer with a passion for creating innovative and user-friendly web...'
  },
  {
    icon: '</>',
    title: 'Web Developer',
    description: 'A Developer with a passion for creating innovative and user-friendly web...'
  },
  {
    icon: '</>',
    title: 'Web Developer',
    description: 'A Developer with a passion for creating innovative and user-friendly web...'
  },
  {
    icon: '</>',
    title: 'Web Developer',
    description: 'A Developer with a passion for creating innovative and user-friendly web...'
  },
  // ... 其他经验数据
]

const projects = [
  {
    logo: '',
    title: '极物圈社区商城',
    description: '极物圈,是一个满足,O咖天、闲置、社区功能于一体的平台。'
  },
  {
    logo: '',
    title: '极物圈社区商城',
    description: '极物圈,是一个满足,O咖天、闲置、社区功能于一体的平台。'
  },
  {
    logo: '',
    title: '极物圈社区商城',
    description: '极物圈,是一个满足,O咖天、闲置、社区功能于一体的平台。'
  },
  {
    logo: '',
    title: '极物圈社区商城',
    description: '极物圈,是一个满足,O咖天、闲置、社区功能于一体的平台。'
  },
  {
    logo: '',
    title: '极物圈社区商城',
    description: '极物圈,是一个满足,O咖天、闲置、社区功能于一体的平台。'
  },
  {
    logo: '',
    title: '极物圈社区商城',
    description: '极物圈,是一个满足,O咖天、闲置、社区功能于一体的平台。'
  },
  {
    logo: '',
    title: '极物圈社区商城',
    description: '极物圈,是一个满足,O咖天、闲置、社区功能于一体的平台。'
  },
  {
    logo: '',
    title: '极物圈社区商城',
    description: '极物圈,是一个满足,O咖天、闲置、社区功能于一体的平台。'
  },
  // ... 其他项目数据
]
const skillCategories = [
  {
    title:"前端",
    skills:["Vue","JavaScript","Flutter","NodeJs"]
  },
  {
    title:"后端",
    skills:["Java","SpringCloud","MySQL"]
  },
  {
    title:"语言",
    skills:["Java","Python","GoLang","Dart"]
  },
]
const avatarUrl = ref('src/assets/my.jpg')
</script>

<style scoped>
.home-container {
  background: linear-gradient(145deg, #f8fafd 0%, #f3f6f9 100%);
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}


.shortcut-hint {
  padding: 2px 6px;
  background: #f5f5f5;
  border-radius: 4px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
}


.skill-category h4 {
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.65);
  margin: 0;
}


:deep(.ant-tag) {
  margin: 0;
  padding: 4px 8px;
  border-radius: 4px;
}

/* 自定义滚动条样式 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.02);
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.25);
}

.main-content {
  flex: 1;
  overflow-y: auto;
  height: calc(100vh - 70px);
  padding: 24px;
}
</style>
