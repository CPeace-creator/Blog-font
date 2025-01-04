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

.fixed-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.search-section {
  z-index: 100;
  background-color: var(--bg-primary);
  padding: 16px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
}

.search-section.hidden {
  transform: translateY(-100%);
  opacity: 0;
}

.search-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.search-box {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.search-box:hover {
  border-color: #1890ff;
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.08);
  background: rgba(255, 255, 255, 0.95);
}

.search-icon {
  color: rgba(0, 0, 0, 0.45);
  margin-right: 12px;
}

.search-placeholder {
  flex: 1;
  color: rgba(0, 0, 0, 0.45);
}

.shortcut-hint {
  padding: 2px 6px;
  background: #f5f5f5;
  border-radius: 4px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 0 0 48px;
  width: 100%;
  display: flex;
  gap: 20px;
}

.fixed-sidebar {
  width: 280px;
  flex-shrink: 0;
  position: sticky;
  top: 24px;
  height: fit-content;
}

.skills-section {
  margin-top: 16px;
  background: white;
  border-radius: 8px;
  transition: all 0.3s;
}

.section-subtitle {
  font-size: 1.1rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 16px;
}

.skills-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.skill-category {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skill-category h4 {
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.65);
  margin: 0;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

:deep(.ant-tag) {
  margin: 0;
  padding: 4px 8px;
  border-radius: 4px;
}

.scrollable-content {
  flex: 1;
  min-width: 0;
  padding-right: 48px;
}

.about-section {
  margin-bottom: 24px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 12px;
  transition: all 0.3s;
  position: relative;
  z-index: 2;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(8px);
}

.content-section {
  margin-bottom: 24px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 12px;
  transition: all 0.3s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(8px);
}

.exp-card, .project-card {
  height: 100%;
  transition: all 0.3s;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
}

.exp-card:hover, .project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  background: rgba(255, 255, 255, 0.95);
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: rgba(0, 0, 0, 0.85);
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

@media (max-width: 1024px) {
  .content-wrapper {
    gap: 16px;
  }

  .fixed-sidebar {
    width: 280px;
  }
}

@media (max-width: 768px) {
  .main-content {
    height: auto;
    overflow: visible;
  }

  .content-wrapper {
    flex-direction: column;
  }

  .fixed-sidebar {
    width: 100%;
    position: relative;
    top: 0;
  }

  .about-section, .content-section {
    margin-bottom: 16px;
  }
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.name {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  color: rgba(0, 0, 0, 0.85);
}

.bio {
  margin: 0;
  color: rgba(0, 0, 0, 0.45);
  font-size: 0.9rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(0, 0, 0, 0.65);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.social-link {
  color: rgba(0, 0, 0, 0.45);
  font-size: 1.25rem;
  transition: all 0.3s;
}

.social-link:hover {
  color: #1890ff;
  transform: translateY(-2px);
}

.status-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.status-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(0, 0, 0, 0.65);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .contact-info {
    align-items: center;
  }

  .social-links {
    justify-content: center;
  }

  .status-list {
    align-items: center;
  }
}

.main-content {
  flex: 1;
  overflow-y: auto;
  height: calc(100vh - 70px);
  padding: 24px;
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .content-wrapper {
    margin-left: 24px;
  }

  .scrollable-content {
    padding-right: 24px;
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    margin-left: 16px;
    margin-right: 16px;
  }

  .fixed-sidebar {
    width: 100%;
  }

  .scrollable-content {
    padding-right: 0;
  }

  .skills-section {
    margin-top: 12px;
  }

  .skill-tags {
    justify-content: center;
  }
}

.header-controls {
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
