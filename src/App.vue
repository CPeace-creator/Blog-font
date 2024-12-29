<template>
  <div class="app" :class="{ 'dark-mode': isDarkMode }">
    <nav class="nav">
      <div class="nav-left">
        <h1>Blog | 博客</h1>
      </div>
      <div class="theme-toggle">
        <button @click="toggleTheme" class="theme-btn">
          <span v-if="isDarkMode">🌞</span>
          <span v-else>🌙</span>
        </button>
      </div>
      <div class="nav-right">
        <router-link to="/" class="nav-item">
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
    <router-view></router-view>
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
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  transition: background-color 0.3s, color 0.3s;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  left: 0;
  right: 0;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.theme-toggle {
  margin-right: 2rem;
}

.theme-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: transform 0.3s;
}

.theme-btn:hover {
  transform: scale(1.1);
}

/* 深色模式样式 */
.dark-mode {
  background-color: #1a1a1a;
  color: #ffffff;
}

.dark-mode .nav {
  background-color: #2d2d2d;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.dark-mode .nav-item {
  color: #e0e0e0;
}

.dark-mode .nav-item:hover {
  color: #64b5f6;
}

.dark-mode .nav-left h1 {
  color: #ffffff;
}

.nav-left h1 {
  font-size: 1.5rem;
  color: #333;
  white-space: nowrap;
}

.nav-right {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.nav-right::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #666;
  font-size: 0.9rem;
  transition: color 0.3s;
  white-space: nowrap;
}

.nav-item:hover {
  color: #1890ff;
}

.icon {
  font-size: 1.2rem;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .nav {
    padding: 1rem 2rem;
  }
}

@media (max-width: 768px) {
  .nav {
    padding: 1rem;
  }

  .nav-right {
    gap: 1rem;
  }

  .nav-left h1 {
    font-size: 1.2rem;
  }
}
</style>
