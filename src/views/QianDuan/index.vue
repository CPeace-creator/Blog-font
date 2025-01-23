<template>
 <a-layout class="doc-layout">
    <a-layout-header class="doc-header">
      <div class="header-content">
        <Search />
        <div class="header-right">
          <a-button class="home-button" @click="goHome">
            <template #icon>
              <home-outlined />
            </template>
            返回首页
          </a-button>
        </div>
      </div>
    </a-layout-header>

    <!-- 左侧文档导航 -->
    <a-layout-sider 
      width="280" 
      class="doc-sider"
      :style="{ background: '#fff' }"
    >
      <div class="doc-logo">
        <h2>前端文档</h2>
      </div>
      <a-menu
        mode="inline"
        v-model:selectedKeys="selectedKeys"
        v-model:openKeys="openKeys"
        class="doc-menu"
      >
        <a-sub-menu key="css">
          <template #title>
            <span>
              <code-outlined />
              <span>Css</span>
            </span>
          </template>
          <a-menu-item key="1">
            <span class="menu-item-link">1.签名动画svg</span>
          </a-menu-item>
          <a-menu-item key="2">
            <span class="menu-item-link">2.页面元素逐个渐入</span>
          </a-menu-item>
          <a-menu-item key="3">
            <span class="menu-item-link">3.勋章无限轮播图</span>
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="js">
          <template #title>
            <span>
              <code-sandbox-outlined />
              <span>Js</span>
            </span>
          </template>
        </a-sub-menu>

        <a-sub-menu key="experience">
          <template #title>
            <span>
              <experiment-outlined />
              <span>实习经历</span>
            </span>
          </template>
          <a-menu-item key="wow">
            <span class="menu-item-link">Wow实习经历</span>
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="library">
          <template #title>
            <span>
              <database-outlined />
              <span>库</span>
            </span>
          </template>
        </a-sub-menu>

        <a-sub-menu key="framework">
          <template #title>
            <span>
              <cluster-outlined />
              <span>框架</span>
            </span>
          </template>
        </a-sub-menu>

        <a-sub-menu key="interview">
          <template #title>
            <span>
              <solution-outlined />
              <span>面试题</span>
            </span>
          </template>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>

    <!-- 右侧内容区 -->
    <a-layout class="doc-content-layout">
      <a-layout-content 
        class="doc-content"
      >
        <div class="content-wrapper">
          <h1>签名SVG路径动画</h1>
          
          <!-- 右侧文章导航 -->
          <div class="article-nav">
            <h3>文章导航</h3>
            <a-anchor>
              <a-anchor-link href="#effect" title="效果 🎉" />
              <a-anchor-link href="#steps" title="步骤 📍" />
              <a-anchor-link href="#demo" title="示例代码 🎨" />
            </a-anchor>
          </div>

          <!-- 文章内容 -->
          <div class="article-content">
            <section id="effect">
              <h2>效果 🎉</h2>
              <div class="demo-container">
                <!-- SVG 动画展示区域 -->
              </div>
            </section>

            <section id="steps">
              <h2>步骤 📍</h2>
              <h3>1. 准备签名文件</h3>
              <p>
                若有钢笔工具画的的
                <a-typography-link>一笔画名字</a-typography-link>
                ，则可直接跳过
                <a-typography-link>第一步</a-typography-link>
              </p>
              <p>
                若没有签名的svg，则可按下面的方式生成
              </p>
              <ul>
                <li>
                  生成签名图片：
                  <a-typography-link href="https://fontmeme.com/zh/signature-fonts/" target="_blank">
                    https://fontmeme.com/zh/signature-fonts/
                  </a-typography-link>
                  也可以选择其他（png图片即可）
                </li>
              </ul>
            </section>

            <section id="demo">
              <h2>示例代码 🎨</h2>
              <!-- 代码示例区域 -->
            </section>
          </div>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  CodeOutlined,
  CodeSandboxOutlined,
  ExperimentOutlined,
  DatabaseOutlined,
  ClusterOutlined,
  SolutionOutlined,
  HomeOutlined
} from '@ant-design/icons-vue'

const selectedKeys = ref<string[]>(['1'])
const openKeys = ref<string[]>(['css'])

const router = useRouter()
const goHome = () => {
  router.push('/')
}
</script>

<style scoped>
.doc-layout {
  min-height: 100vh;
  background: #f5f7f9;
}

.doc-sider {
  height: 100vh;
  position: fixed;
  left: 0;
  overflow: auto;
  border-right: 1px solid #f0f0f0;
}

.doc-logo {
  height: 64px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #f0f0f0;
}

.doc-logo h2 {
  margin: 0;
  color: #1890ff;
  font-size: 20px;
}

.doc-menu {
  padding: 16px 0;
}

.doc-content-layout {
  margin-left: 280px;
  padding: 24px;
  padding-top: 88px;
}

.doc-content {
  background: #fff;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.content-wrapper {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding-right: 200px;
}

h1 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1.5rem 0 1rem;
}

h3 {
  font-size: 1.25rem;
  font-weight: 500;
  margin: 1rem 0;
}

.article-nav {
  position: fixed;
  right: 24px;
  top: 112px;
  width: 200px;
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.article-nav h3 {
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f0f0f0;
}

.article-content {
  font-size: 16px;
  line-height: 1.8;
  color: #2c3e50;
}

.article-content h2 {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 2rem 0 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eaecef;
}

.article-content p {
  margin: 1rem 0;
}

.demo-container {
  margin: 1.5rem 0;
  padding: 2rem;
  background: #fafafa;
  border: 1px solid #eaeaea;
  border-radius: 8px;
}

.menu-item-link {
  color: rgba(0, 0, 0, 0.85);
}

/* 优化菜单样式 */
:deep(.ant-menu-inline .ant-menu-item) {
  font-size: 14px;
  padding-left: 24px !important;
}

:deep(.ant-menu-sub.ant-menu-inline > .ant-menu-item) {
  padding-left: 48px !important;
}

:deep(.ant-menu-submenu-title) {
  font-size: 15px;
  color: #1f1f1f;
}

:deep(.ant-menu-item-selected) {
  background-color: #e6f7ff !important;
  border-right: 3px solid #1890ff;
}

/* 滚动条美化 */
.doc-sider::-webkit-scrollbar {
  width: 6px;
}

.doc-sider::-webkit-scrollbar-thumb {
  background: #e8e8e8;
  border-radius: 3px;
}

.doc-sider::-webkit-scrollbar-track {
  background: transparent;
}

/* 响应式布局优化 */
@media (max-width: 1200px) {
  .content-wrapper {
    padding-right: 0;
  }
  
  .article-nav {
    display: none;
  }
}

@media (max-width: 768px) {
  .doc-header {
    left: 0;
  }

  .header-content {
    padding: 0 16px;
    gap: 8px;
  }

  .doc-content-layout {
    margin-left: 0;
    padding: 16px;
    padding-top: 80px;
  }
  
  .doc-content {
    padding: 24px;
  }
  
  .doc-sider {
    display: none;
  }

  .home-button {
    padding: 0 12px;
  }
  
  .home-button span:last-child {
    display: none;
  }
}

.doc-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 280px;
  z-index: 100;
  height: 80px;
  padding: 0;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  gap: 16px;
  position: relative;
}

:deep(.search-container) {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 900px;
  top: 50%;
  transform: translate(-50%, -50%);
}

:deep(.search-box) {
  height: 56px;
  background: #f5f7f9;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  width: 100%;
  border-radius: 12px;
  padding: 0 24px;
  display: flex;
  align-items: center;
}

:deep(.search-box:hover) {
  background: #fff;
  border-color: #e5e7eb;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

:deep(.search-icon) {
  color: #999;
  font-size: 20px;
}

:deep(.search-placeholder) {
  color: #999;
  font-size: 16px;
}

:deep(.shortcut-key) {
  background: #fff;
  border: 1px solid #e5e7eb;
  color: #666;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  font-family: ui-monospace, monospace;
  margin-left: 8px;
}

.home-button {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 40px;
  padding: 0 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  color: #666;
  background: transparent;
  transition: all 0.3s ease;
  z-index: 1;
  position: relative;
  top: 0;
}

.home-button:hover {
  color: #1890ff;
  border-color: #1890ff;
  background: rgba(24, 144, 255, 0.04);
}

.home-button .anticon {
  font-size: 16px;
}

/* 响应式布局优化 */
@media (max-width: 1200px) {
  :deep(.search-container) {
    width: 70%;
  }
}

@media (max-width: 768px) {
  :deep(.search-container) {
    width: 60%;
  }
  
  :deep(.search-box) {
    height: 48px;
    padding: 0 16px;
  }
  
  :deep(.shortcut-key) {
    display: none;
  }
}
</style>
