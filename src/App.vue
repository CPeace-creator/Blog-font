<template>
  <a-layout>
    <a-layout-sider 
      class="siderStyle" 
      :width="240"
      :style="{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0
      }"
    >
      <Slider />
    </a-layout-sider>
    <a-layout>
      <a-layout style="margin-left: 240px">
        <router-view />
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">

</script>

<style scoped>
.siderStyle {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #fff;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

:deep(.ant-layout-sider-children) {
  display: flex;
  flex-direction: column;
}
</style>
