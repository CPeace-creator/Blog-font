<template>
  <a-layout>
    <a-layout-sider class="siderStyle">
      <Slider />
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
      </a-layout-header>
      <router-view />
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">

</script>

<style scoped>
.siderStyle {
  display: flex;
  flex-direction: column;
  width: 200px;
  min-height: 100vh;
  color: #fff;
  background-color: white;
}


</style>
