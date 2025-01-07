<template>
  <a-affix>
    <a-layout-header class="header">
      <a-row>
        <a-col flex="1 1 200px"></a-col>
        <a-col flex="0 1 300px"></a-col>
        <a-col flex="flex">
          <a-space align="start" :size="16">
            <a-input
                placeholder="搜索文章..."
                class="search-input"
                @click="showSearchModal"
            >
              <template #prefix>
                <SearchOutlined />
              </template>
              <template #suffix>
                <a-typography-text type="secondary" class="shortcut-hint">
                  {{ isMac ? '⌘' : 'Shift' }} + K
                </a-typography-text>
              </template>
            </a-input>
          </a-space>
        </a-col>
      </a-row>
    </a-layout-header>
  </a-affix>

  <a-modal
      v-model:open="isModalVisible"
      :footer="null"
      width="640px"
      :closable="false"
      @cancel="handleModalClose"
      class="search-modal"
      :class="{ 'dark': isDarkMode }"
  >
    <div class="modal-search">
      <SearchOutlined class="modal-search-icon" />
      <a-input
          v-model:value="modalSearchQuery"
          placeholder="搜索文章..."
          :bordered="false"
          ref="modalSearchInput"
          @keydown.esc="handleModalClose"
          size="large"
      />
    </div>

    <div class="search-results" v-if="modalSearchQuery">
      <a-spin :spinning="isSearching">
        <template v-if="searchResults.length">
          <div
              v-for="result in searchResults"
              :key="result.id"
              class="result-item"
              @click="handleResultClick(result)"
          >
            <h4>{{ result.title }}</h4>
            <p>{{ result.description }}</p>
            <div class="result-meta">
              <span>{{ result.date }}</span>
              <span class="result-tag">{{ result.tag }}</span>
            </div>
          </div>
        </template>
        <a-empty v-else description="暂无搜索结果" />
      </a-spin>
    </div>
  </a-modal>
</template>
<script setup lang="ts">
import {computed, ref, onMounted, watch, onUnmounted, nextTick} from 'vue'
import {message} from "ant-design-vue";
const isModalVisible = ref(false)
const modalSearchQuery = ref('')
const modalSearchInput = ref()
const searchResults = ref([])
const isMac = ref()
const isSearching = ref(false)
// 显示搜索弹窗
const showSearchModal = () => {
  isModalVisible.value = true
  nextTick(() => {
    modalSearchInput.value?.focus()
  })
}

// 监听快捷键
const handleKeydown = (e: KeyboardEvent) => {
  if ((e.key.toLowerCase() === 'k' && (isMac.value ? e.metaKey : e.shiftKey)) && !isModalVisible.value) {
    e.preventDefault()
    showSearchModal()
  }
}
// 关闭搜索弹窗
const handleModalClose = () => {
  isModalVisible.value = false
  modalSearchQuery.value = ''
}

// 处理搜索结果点击
const handleResultClick = (result: any) => {
  message.success(`跳转到文章: ${result.title}`)
  handleModalClose()
}
// 监听搜索输入
watch(modalSearchQuery, async (newQuery) => {
  if (!newQuery) {
    searchResults.value = []
    return
  }
  isSearching.value = true
  // 模拟搜索延迟
  await new Promise(resolve => setTimeout(resolve, 500))
  searchResults.value = [
    {
      id: 1,
      title: '示例文章 1',
      description: '这是一个示例文章描述...',
      date: '2024-03-20',
      tag: 'Web Development'
    },
    // 添加更多示例结果...
  ]
  isSearching.value = false
})
onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>
<style scoped>

.header{
  background-color: rgba(0, 0, 0, 0.02);
}
.shortcut-hint {
  padding: 2px 6px;
  background: #f5f5f5;
  border-radius: 4px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
}
</style>
