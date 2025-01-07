<template>
  <div class="slider-container">
    <div class="header">
      <a-typography-title :level="4" style="margin: 16px 0">
        Blog | 博客
      </a-typography-title>
    </div>

    <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="vertical"
      class="menu"
    >
      <a-menu-item key="1" class="nav-text logo-item">
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

    <div class="footer">
      <a-divider style="margin: 8px 0" />

      <div class="stats">
        <a-row :gutter="[8, 8]">
          <a-col :span="8">
            <a-statistic title="访问" :value="1128" :value-style="{ fontSize: '14px' }" />
          </a-col>
          <a-col :span="8">
            <a-statistic title="文章" :value="36" :value-style="{ fontSize: '14px' }" />
          </a-col>
          <a-col :span="8">
            <a-statistic title="评论" :value="258" :value-style="{ fontSize: '14px' }" />
          </a-col>
        </a-row>
      </div>

      <div class="social-links">
        <a-space>
          <a-tooltip title="GitHub">
            <a href="https://github.com/CPeace-creator" target="_blank">
              <GithubOutlined />
            </a>
          </a-tooltip>
          <a-tooltip title="掘金">
            <a href="https://juejin.cn/user/2722834407521038" target="_blank">
              <svg-icon icon-name="icon-juejin" style="font-size: 0.5em" />
            </a>
          </a-tooltip>
        </a-space>
      </div>

      <div class="copyright">
        <a-typography-text type="secondary" style="font-size: 12px">
          © 2024 湘江中路的博客
        </a-typography-text>
        <br />
        <a-typography-text type="secondary" style="font-size: 12px">
          <ClockCircleOutlined /> 已运行 {{ runningDays }} 天
        </a-typography-text>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {
  GithubOutlined,
  ClockCircleOutlined
} from '@ant-design/icons-vue';
import SvgIcon from "../SvgIcon/SvgIcon.vue";

const selectedKeys = ref<string[]>(['1']);

const runningDays = ref(0);
onMounted(() => {
  const startDate = new Date('2024-01-01');
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - startDate.getTime());
  runningDays.value = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
});
</script>

<style scoped>
.slider-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fff;
}

.header {
  padding: 16px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.menu {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style: none;
  overflow-y: auto;
}

.logo-item {
  height: auto !important;
  padding: 24px 0 !important;
  margin: 0 !important;
}

.icon {
  font-size: 2.5em;
  width: 1em;
  height: 1em;
  display: block;
  margin: 0 auto;
}

.nav-text {
  font-size: 16px;
  text-align: center;
  padding: 16px;
  display: inline-block;
  transition: transform 0.3s ease;
  width: 100%;
  box-sizing: border-box;
}

.footer {
  padding: 16px;
  background: #fff;
}

.stats {
  margin-bottom: 16px;
}

.social-links {
  text-align: center;
  margin-bottom: 16px;
}

.social-links a {
  color: rgba(0, 0, 0, 0.45);
  font-size: 20px;
  padding: 8px;
  transition: all 0.3s;
}

.social-links a:hover {
  color: #1890ff;
  transform: translateY(-2px);
}

.copyright {
  text-align: center;
  padding: 8px 0;
}

/* 响应式调整 */
@media screen and (max-height: 700px) {
  .logo-item {
    padding: 16px 0 !important;
  }

  .icon {
    font-size: 2em;
  }

  .nav-text {
    padding: 12px;
  }

  .footer {
    padding: 12px;
  }

  .stats {
    margin-bottom: 12px;
  }

  .social-links {
    margin-bottom: 12px;
  }

  .social-links a {
    font-size: 18px;
    padding: 6px;
  }
}

@media screen and (max-height: 600px) {
  .header {
    padding: 8px;
  }

  .logo-item {
    padding: 12px 0 !important;
  }

  .nav-text {
    padding: 8px;
    font-size: 14px;
  }

  .footer {
    padding: 8px;
  }

  .stats {
    margin-bottom: 8px;
  }

  .social-links {
    margin-bottom: 8px;
  }

  .social-links a {
    font-size: 16px;
    padding: 4px;
  }
}

/* 美化滚动条 */
.menu::-webkit-scrollbar {
  width: 4px;
}

.menu::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}

.menu::-webkit-scrollbar-track {
  background: transparent;
}
</style>
