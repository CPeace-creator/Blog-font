<template>
  <a-card>Blog | 博客</a-card>
  <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="vertical"
      class="menu"
  >
    <a-menu-item key="1" class="nav-text" style="display: block;height: 10em;margin-top: -90px">
      <router-link to="/">
        <svg-icon icon-name="icon-boke1" class="icon"/>
      </router-link>
    </a-menu-item>
    <a-menu-item key="2" class="nav-text">
      <router-link to="/qianDuan">
        <svg-icon icon-name="icon-_qianduankaifa"/>前端
      </router-link>
    </a-menu-item>
    <a-menu-item key="3" class="nav-text">
      <router-link to="/houDuan">
        <svg-icon icon-name="icon-_houduankaifa"/>后端
      </router-link>
    </a-menu-item>
    <a-menu-item key="4" class="nav-text">
      <router-link to="/tools">
        <svg-icon icon-name="icon-gongju"/>工具
      </router-link>
    </a-menu-item>
    <a-menu-item key="5" class="nav-text">
      <router-link to="/blog">
        <svg-icon icon-name="icon-rizhi"/>日志
      </router-link>
    </a-menu-item>
    <a-menu-item key="6" class="nav-text">
      <router-link to="/board">
        <svg-icon icon-name="icon-liuyanban"/>留言板
      </router-link>
    </a-menu-item>
    <a-menu-item key="7" class="nav-text">
      <router-link to="/other">
        <svg-icon icon-name="icon-qita"/>其他
      </router-link>
    </a-menu-item>
  </a-menu>
</template>

<script setup lang="ts">
import {
  CrownTwoTone
} from '@ant-design/icons-vue';
import { ref } from 'vue';
import SvgIcon from "../SvgIcon/SvgIcon.vue";
const selectedKeys = ref<string[]>(['1']);
</script>

<style scoped>
.icon{
  font-size: 3em;
  height: 80px;
  margin-left: 1.5em;
}
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
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
