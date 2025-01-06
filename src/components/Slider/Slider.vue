<template>
  <a-card>Blog | 博客</a-card>
  <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="vertical"
      class="menu"
  >
    <a-menu-item key="1" class="nav-text">
      <router-link to="/">
        <span><CrownTwoTone /> 开始</span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="2" class="nav-text">
      <span>前端</span>
    </a-menu-item>
    <a-menu-item key="3" class="nav-text">
      <span >后端</span>
    </a-menu-item>
    <a-menu-item key="4" class="nav-text">
      <router-link to="/home">
        <span>工具</span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="5" class="nav-text">
      <span>日志</span>
    </a-menu-item>
    <a-menu-item key="6" class="nav-text">
      <span>留言板</span>
    </a-menu-item>
    <a-menu-item key="7" class="nav-text">
      <span>其他</span>
    </a-menu-item>
  </a-menu>
</template>

<script setup lang="ts">
import {
  CrownTwoTone
} from '@ant-design/icons-vue';
import { ref } from 'vue';
const selectedKeys = ref<string[]>(['1']);
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 0;
  margin: 0;
  list-style: none;
}

.nav-text {
  font-size: 16px;
  text-align: center;
  padding: 20px 15px;
  display: inline-block;
  transition: transform 0.3s ease; /* 平滑过渡效果 */
}

</style>
