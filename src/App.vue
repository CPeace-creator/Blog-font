<template>
  <div class="app" :class="{ 'dark-mode': isDarkMode }">
    <div class="container">
      <nav class="nav">
        <div class="nav-right">
          <div class="nav-header">
            <h1>Blog | 博客</h1>
            <div class="theme-switch-wrapper">
              <button @click="toggleTheme" class="theme-switch" :class="{ 'dark': isDarkMode }">
                <div class="switch-inner">
                  <div class="sun-moon">
                    <div class="sun">
                      <div class="sun-beams"></div>
                    </div>
                    <div class="moon">
                      <div class="star"></div>
                      <div class="star small"></div>
                      <div class="star tiny"></div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <router-link to="/" class="nav-item" exact-active-class="active">
            <span class="icon">🎨</span>
            开始
          </router-link>
          <router-link to="/frontend" class="nav-item">
            <span class="icon">✏️</span>
            前端
          </router-link>
          <router-link to="/backend" class="nav-item">
            <span class="icon">🔧</span>
            后端
          </router-link>
          <router-link to="/embedded" class="nav-item">
            <span class="icon">🔌</span>
            嵌入式
          </router-link>
          <router-link to="/architecture" class="nav-item">
            <span class="icon">🏗️</span>
            架构
          </router-link>
          <router-link to="/tools" class="nav-item">
            <span class="icon">🛠️</span>
            工具
          </router-link>
          <router-link to="/projects" class="nav-item">
            <span class="icon">🚀</span>
            项目
          </router-link>
          <router-link to="/others" class="nav-item">
            <span class="icon">📚</span>
            其他
          </router-link>
        </div>
      </nav>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const isDarkMode = ref(localStorage.getItem('theme') === 'dark')

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
}

// 监听主题变化并应用相应的样式
watch(isDarkMode, (newValue) => {
  document.documentElement.classList.toggle('dark-theme', newValue)
}, { immediate: true })
</script>

<style scoped>
.app {
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  transition: background-color 0.3s, color 0.3s;
}

.container {
  display: flex;
  min-height: 100vh;
  gap: 2rem;
}

.nav {
  width: 240px;
  padding: 2rem;
  background-color: var(--bg-primary);
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  transition: background-color 0.3s;
}

.nav-right {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  width: 100%;
}

.nav-header h1 {
  font-size: 1.5rem;
  color: var(--text-primary);
  white-space: nowrap;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 0.9rem;
  transition: color 0.3s, background-color 0.3s;
  white-space: nowrap;
  padding: 0.5rem 1rem;
  border-radius: 6px;
}

.nav-item:hover {
  color: #1890ff;
  background-color: rgba(24, 144, 255, 0.08);
}

.icon {
  font-size: 1.2rem;
}

.nav-item.active {
  color: #1890ff;
  background-color: rgba(24, 144, 255, 0.08);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .nav {
    width: 200px;
  }
  
  .main-content {
    margin-left: 200px;
    width: calc(100% - 200px);
  }
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 0;
  }

  .nav {
    position: relative;
    width: 100%;
    padding: 1rem;
  }
  
  .main-content {
    margin-left: 0;
    width: 100%;
    padding: 0 1rem;
  }
}

/* 深色模式样式 */
.dark-mode {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

.dark-mode .nav {
  background-color: var(--bg-primary);
}

.dark-mode .nav-item {
  color: var(--text-secondary);
}

.dark-mode .nav-item:hover {
  color: #64b5f6;
  background-color: rgba(100, 181, 246, 0.05);
}

.dark-mode .nav-header h1 {
  color: var(--text-primary);
}

.main-content {
  margin-left: 240px; /* 与导航栏宽度相同 */
  width: calc(100% - 240px);
  min-width: 0;
  padding: 0 2rem;
  max-width: 1400px;
  margin: 0 auto 0 240px;
}
</style>
