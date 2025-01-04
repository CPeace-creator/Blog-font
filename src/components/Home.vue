<template>
  <a-layout-content class="home-container" :class="{ 'dark-mode': isDarkMode }" style="padding: 0 50px; overflow: auto;">
    <!-- 主要内容区域 -->
    <a-layout-content class="main-content" style="padding: 0 50px">
      <!-- About Me 部分 -->
      <a-flex class="about-section">
        <a-space class="profile-header">
          <img src="../assets/my.jpg" alt="" class="avatar">
          <h2 class="name">陈嘉鸿</h2>
        </a-space>

        <a-space class="contact-info" direction="vertical" size="large" style="margin-left: 30px">
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
              <img src="" alt="小红书" class="social-icon">
            </a>
            <a href="#" target="_blank" class="bilibili-link">
              <img src="" alt="公众号" class="social-icon">
            </a>
          </div>
        </a-space>

        <a-space class="status-list" direction="vertical" size="large">
          <div class="status-item">
            <span>💻 正在努力成为独立开发者</span>
          </div>
          <div class="status-item">
            <span>💡 有创意点子就会尝试</span>
          </div>
          <div class="status-item">
            <span>🏠 分享日常博客</span>
          </div>
        </a-space>
      </a-flex>
    </a-layout-content>
  </a-layout-content>

</template>

<script setup lang="ts">

</script>
<style scoped>
/*.home-container {*/
/*  width: 100%;*/
/*  background-color: var(--bg-primary);*/
/*  margin: 0;*/
/*  min-height: calc(100vh - 64px);*/
/*  transition: background-color 0.3s, color 0.3s;*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*}*/
/*.main-content {*/
/*  flex: 1;*/
/*  padding: 2rem 4rem;*/
/*  max-width: 1200px;*/
/*  margin: 0 auto;*/
/*  width: 100%;*/
/*  position: relative;*/
/*  z-index: 1;*/
/*}*/

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
