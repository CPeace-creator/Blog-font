<template>
  <div class="home-container" :class="{ 'dark-mode': isDarkMode }">
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const isDarkMode = ref(localStorage.getItem('theme') === 'dark')

// 监听本地存储的变化
watch(() => localStorage.getItem('theme'), (newTheme) => {
  isDarkMode.value = newTheme === 'dark'
})
</script>

<style scoped>
.home-container {
  width: 100%;
  padding: 2rem 4rem;
  background-color: var(--bg-primary);
  margin: 0;
  min-height: calc(100vh - 64px); /* 减去导航栏的高度 */
  transition: background-color 0.3s, color 0.3s;
}

/* About Section 样式 */
.about-section {
  width: 100%;
  margin-bottom: 4rem;
  padding: 0;
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
  .home-container {
    padding: 1rem 2rem;
    margin: 0;
  }

  .experience-cards,
  .project-cards {
    grid-template-columns: 1fr;
  }

  .project-card {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 1024px) {
  .home-container {
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
</style>
