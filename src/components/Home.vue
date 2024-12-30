<template>
  <div class="home-container" :class="{ 'dark-mode': isDarkMode }">
    <!-- 顶部区域 -->
    <header class="header-section" :class="{ 'hidden': isSearchHidden }">
      <!-- 搜索栏 -->
      <div class="search-container">
        <div class="search-box" @click="showSearchModal">
          <SearchOutlined class="search-icon" />
          <span class="search-placeholder">搜索文章...</span>
          <span class="shortcut-hint">{{ isMac ? '⌘' : 'Shift' }} + K</span>
        </div>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="main-content">
      <!-- About Me 部分 -->
      <section class="about-section">
        <div class="profile-header">
          <img src="" alt="Cjh" class="avatar">
          <h2 class="name">Cjh</h2>
        </div>

        <div class="contact-info">
          <div class="info-item">
            <i class="location-icon">📍</i>
            <span>福建省厦门市</span>
          </div>
          <div class="info-item">
            <i class="email-icon">📧</i>
            <span>949661474@qq.com</span>
          </div>
          <div class="social-links">
            <a href="https://github.com" target="_blank" class="github-link">
              <i class="github-icon">
                <img src="" alt="GitHub" class="social-icon">
              </i>
            </a>
            <a href="#" target="_blank" class="bilibili-link">
              <img src="" alt="Bilibili" class="social-icon">
            </a>
          </div>
        </div>

        <div class="status-list">
          <div class="status-item">
            <span>💻 正在学习的独立开发者</span>
          </div>
          <div class="status-item">
            <span>💡 有创意点子就会尝试</span>
          </div>
          <div class="status-item">
            <span>🏠 分享日常博客</span>
          </div>
        </div>
      </section>

      <!-- What have I been doing 部分 -->
      <section class="experience-section">
        <h2 class="section-title">What have I been doing</h2>
        <div class="experience-cards">
          <div class="exp-card">
            <div class="card-icon">&lt;/&gt;</div>
            <div class="card-content">
              <h3>Web Developer</h3>
              <p>A Developer with a passion for creating innovative and user-friendly web...</p>
            </div>
          </div>
          <div class="exp-card">
            <div class="card-icon">⚛️</div>
            <div class="card-content">
              <h3>v1.0.1</h3>
              <p>The blog is being updated to a new version, with a more modern and responsive design.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects 部分 -->
      <section class="projects-section">
        <h2 class="section-title">Projects</h2>
        <div class="project-cards">
          <div class="project-card">
            <img src="" alt="极物圈社区商城" class="project-logo">
            <div class="project-info">
              <h3>极物圈社区商城</h3>
              <p>极物圈，是一个满足，O咖天、闲置、社区功能于一体的平台。</p>
            </div>
          </div>
          <div class="project-card">
            <img src="" alt="极物聊天" class="project-logo">
            <div class="project-info">
              <h3>极物聊天 | JiwuChat</h3>
              <p>Jiwu聊天应用，是一个AI聊天、社交功能于一体的Tauri完整应用，支持Android、iOS...</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- 搜索弹窗 -->
    <a-modal
      v-model:open="isModalVisible"
      :footer="null"
      width="640px"
      :closable="false"
      @cancel="handleModalClose"
      class="search-modal"
      :class="{ 'dark': isDarkMode }"
    >
      <div class="modal-search">
        <SearchOutlined class="modal-search-icon" />
        <a-input
          v-model:value="modalSearchQuery"
          placeholder="搜索文章..."
          :bordered="false"
          ref="modalSearchInput"
          @keydown.esc="handleModalClose"
          size="large"
        />
      </div>
      
      <div class="search-results" v-if="modalSearchQuery">
        <a-spin :spinning="isSearching">
          <template v-if="searchResults.length">
            <div 
              v-for="result in searchResults" 
              :key="result.id" 
              class="result-item"
              @click="handleResultClick(result)"
            >
              <h4>{{ result.title }}</h4>
              <p>{{ result.description }}</p>
              <div class="result-meta">
                <span>{{ result.date }}</span>
                <span class="result-tag">{{ result.tag }}</span>
              </div>
            </div>
          </template>
          <a-empty v-else description="暂无搜索结果" />
        </a-spin>
      </div>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted, nextTick } from 'vue'
import { SearchOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'

const isDarkMode = ref(localStorage.getItem('theme') === 'dark')
const isSearchHidden = ref(false)
const isModalVisible = ref(false)
const modalSearchQuery = ref('')
const isSearching = ref(false)
const searchResults = ref([])
const modalSearchInput = ref()
const isMac = ref(navigator.platform.toUpperCase().indexOf('MAC') >= 0)
let lastScrollTop = 0

// 优化滚动监听逻辑
const SCROLL_THRESHOLD = 100  // 滚动阈值
const SCROLL_DELAY = 200      // 滚动防抖延迟
let scrollTimer: number | null = null

// 显示搜索弹窗
const showSearchModal = () => {
  isModalVisible.value = true
  nextTick(() => {
    modalSearchInput.value?.focus()
  })
}

// 关闭搜索弹窗
const handleModalClose = () => {
  isModalVisible.value = false
  modalSearchQuery.value = ''
}

// 处理搜索结果点击
const handleResultClick = (result: any) => {
  message.success(`跳转到文章: ${result.title}`)
  handleModalClose()
}

// 监听快捷键
const handleKeydown = (e: KeyboardEvent) => {
  if ((e.key.toLowerCase() === 'k' && (isMac.value ? e.metaKey : e.shiftKey)) && !isModalVisible.value) {
    e.preventDefault()
    showSearchModal()
  }
}

// 监听滚动
const handleScroll = () => {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollDelta = currentScrollTop - lastScrollTop
  
  // 清除之前的定时器
  if (scrollTimer) {
    clearTimeout(scrollTimer)
  }

  // 使用防抖处理滚动事件
  scrollTimer = window.setTimeout(() => {
    // 向下滚动且超过阈值时隐藏
    if (scrollDelta > 0 && currentScrollTop > SCROLL_THRESHOLD) {
      isSearchHidden.value = true
    } 
    // 向上滚动或在顶部时显示
    else if (scrollDelta < -50 || currentScrollTop <= 0) {
      isSearchHidden.value = false
    }
  }, SCROLL_DELAY)

  lastScrollTop = currentScrollTop
}

// 监听搜索输入
watch(modalSearchQuery, async (newQuery) => {
  if (!newQuery) {
    searchResults.value = []
    return
  }
  isSearching.value = true
  // 模拟搜索延迟
  await new Promise(resolve => setTimeout(resolve, 500))
  searchResults.value = [
    {
      id: 1,
      title: '示例文章 1',
      description: '这是一个示例文章描述...',
      date: '2024-03-20',
      tag: 'Web Development'
    },
    // 添加更多示例结果...
  ]
  isSearching.value = false
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('keydown', handleKeydown)
  // 初始化时确保搜索栏可见
  isSearchHidden.value = false
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  if (scrollTimer) {
    clearTimeout(scrollTimer)
  }
})
</script>

<style scoped>
.home-container {
  width: 100%;
  background-color: var(--bg-primary);
  margin: 0;
  min-height: calc(100vh - 64px);
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  flex-direction: column;
}

.header-section {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--bg-primary);
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  visibility: visible;
  transform: translateY(0);
  opacity: 1;
  backdrop-filter: blur(8px);
  background-color: rgba(var(--bg-primary-rgb), 0.95);
  will-change: transform, opacity, visibility;
}

.header-section.hidden {
  transform: translateY(-100%) translateZ(0);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  position: fixed;
  width: 100%;
}

.main-content {
  flex: 1;
  padding: 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 1;
}

/* About Section 样式 */
.about-section {
  width: 100%;
  margin-bottom: 4rem;
  padding-top: 1rem;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

.name {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
}

.contact-info {
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: #666;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-icon {
  width: 24px;
  height: 24px;
}

.status-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.status-item {
  color: #666;
}

/* Experience Section 样式 */
.section-title {
  font-size: 1.75rem;
  color: #333;
  margin-bottom: 2rem;
}

.experience-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.exp-card {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px var(--card-shadow);
  transition: background-color 0.3s, box-shadow 0.3s;
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.card-content h3 {
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.card-content p {
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Projects Section 样式 */
.projects-section {
  margin-top: 4rem;
}

.project-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.project-card {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px var(--card-shadow);
  display: flex;
  gap: 1rem;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.project-logo {
  width: 48px;
  height: 48px;
  border-radius: 8px;
}

.project-info h3 {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.project-info p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header-section {
    height: 60px;
  }

  .header-section.hidden {
    transform: translateY(-100%);
  }

  .main-content {
    padding: 1rem;
  }

  .experience-cards,
  .project-cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 1024px) {
  .main-content {
    padding: 2rem;
  }
}

/* 添加过渡效果 */
.home-container {
  transition: background-color 0.3s, color 0.3s;
}

.exp-card,
.project-card {
  transition: background-color 0.3s, box-shadow 0.3s;
}

/* 搜索栏样式 */
.search-container {
  position: relative;
  z-index: 100;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
}

.search-box {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 46px;
  transform: translateY(0);
  will-change: transform, box-shadow;
}

.search-box:hover {
  background: var(--card-bg);
  border-color: #1890ff;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.search-icon {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-right: 0.5rem;
}

.search-placeholder {
  color: var(--text-secondary);
  flex: 1;
}

.shortcut-hint {
  padding: 0.2rem 0.5rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 0.8rem;
  color: var(--text-secondary);
}

/* 搜索弹窗样式 */
.search-modal {
  top: 70px;
}

.search-modal :deep(.ant-modal-content) {
  background: var(--bg-primary);
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
}

.modal-search {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.modal-search-icon {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-right: 0.75rem;
}

.search-results {
  max-height: 400px;
  overflow-y: auto;
  padding: 1rem;
}

.result-item {
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.result-item:hover {
  background-color: var(--bg-secondary);
}

.result-item h4 {
  margin: 0 0 0.5rem;
  color: var(--text-primary);
}

.result-item p {
  margin: 0 0 0.5rem;
  color: var(--text-secondary);
}

.result-meta {
  display: flex;
  justify-content: space-between;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.result-tag {
  padding: 0.2rem 0.6rem;
  background: var(--bg-secondary);
  border-radius: 4px;
}

/* 添加暗色模式支持 */
.dark-mode .header-section {
  background-color: rgba(var(--bg-primary-dark-rgb), 0.95);
}

.dark-mode .search-box:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* 在 :root 中添加 RGB 变量 */
:root {
  --bg-primary-rgb: 255, 255, 255;
  --bg-primary-dark-rgb: 18, 18, 18;
}
</style>
