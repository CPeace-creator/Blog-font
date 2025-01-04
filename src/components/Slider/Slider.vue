<template>
  <a-card>Blog | 博客</a-card>
  <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="vertical"
      class="menu"
  >
    <a-menu-item key="1">
      <router-link to="/">
        <span class="nav-text"><CrownTwoTone /> 开始</span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="2">
      <span class="nav-text iconfont icon-qita">前端</span>
    </a-menu-item>
    <a-menu-item key="3">
      <span class="nav-text">后端</span>
    </a-menu-item>
    <a-menu-item key="4">
      <span class="nav-text">工具</span>
    </a-menu-item>
    <a-menu-item key="5">
      <span class="nav-text">日志</span>
    </a-menu-item>
    <a-menu-item key="6">
      <span class="nav-text">留言板</span>
    </a-menu-item>
    <a-menu-item key="7">
      <span class="nav-text">其他</span>
    </a-menu-item>
  </a-menu>
</template>

<script setup lang="ts">
import {
  CrownTwoTone ,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';
import { ref } from 'vue';
const selectedKeys = ref<string[]>(['4']);
</script>

<style scoped>


.menu {
  flex-grow: 1; /* 使菜单填满侧边栏 */
  display: flex;
  flex-direction: column;
  justify-content: space-around; /* 垂直居中 */
  height: 50vh;
}

.nav-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 1.0rem;
  transition: color 0.3s, background-color 0.3s;
  white-space: nowrap;
  padding: 0.5rem 1rem;
  border-radius: 6px;
}

.nav-text:hover {
  color: #1890ff;
  background-color: rgba(24, 144, 255, 0.08);
}

</style>
