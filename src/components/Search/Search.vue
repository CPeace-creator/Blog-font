<template>
  <a-affix>
    <a-layout-header class="header">
      <div class="search-container">
        <div class="search-box" @click="showSearchModal">
          <SearchOutlined class="search-icon" />
          <span class="search-placeholder">搜索</span>
          <div class="search-shortcuts">
            <span class="shortcut-key">{{ isMac ? '⌘' : 'Ctrl' }}</span>
            <span class="shortcut-key">K</span>
          </div>
        </div>
      </div>
    </a-layout-header>
  </a-affix>

  <a-modal
      v-model:open="isModalVisible"
      :footer="null"
      width="560px"
      :closable="false"
      @cancel="handleModalClose"
      class="search-modal"
      :mask-style="{ background: 'rgba(0, 0, 0, 0.2)' }"
      :style="{ top: '20%' }"
  >
    <div class="modal-header">
      <a-input
          v-model:value="modalSearchQuery"
          placeholder="搜索文章..."
          :bordered="false"
          ref="modalSearchInput"
          @keydown.esc="handleModalClose"
          class="modal-search-input"
      >
        <template #prefix>
          <SearchOutlined class="modal-search-icon" />
        </template>
      </a-input>
      <div class="modal-shortcuts">
        <kbd>↑</kbd>
        <kbd>↓</kbd>
        <span>选择</span>
        <kbd>enter</kbd>
        <span>打开</span>
        <kbd>esc</kbd>
        <span>关闭</span>
      </div>
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
            <div class="result-content">
              <h4>{{ result.title }}</h4>
              <p>{{ result.description }}</p>
              <div class="result-meta">
                <span class="result-date">{{ result.date }}</span>
                <span class="result-tag">{{ result.tag }}</span>
              </div>
            </div>
          </div>
        </template>
        <div class="no-results" v-else>
          <a-empty description="暂无搜索结果" />
        </div>
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
const isMac = ref(navigator.platform.toUpperCase().indexOf('MAC') >= 0)
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
  if ((e.key.toLowerCase() === 'k' && (isMac.value ? e.metaKey : e.ctrlKey)) && !isModalVisible.value) {
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
.header {
  background: transparent;
  padding: 16px;
  height: auto;
  line-height: normal;
}

.search-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.search-box {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.search-box:hover {
  border-color: #d1d5db;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.search-icon {
  color: #9ca3af;
  font-size: 16px;
  margin-right: 12px;
}

.search-placeholder {
  flex: 1;
  color: #9ca3af;
  font-size: 14px;
}

.search-shortcuts {
  display: flex;
  align-items: center;
  gap: 2px;
}

.shortcut-key {
  padding: 2px 6px;
  background: #f3f4f6;
  border-radius: 4px;
  font-size: 12px;
  color: #6b7280;
  font-family: ui-monospace, monospace;
}

/* 响应式调整 */
@media (max-width: 640px) {
  .search-shortcuts {
    display: none;
  }
  
  .search-container {
    padding: 0 16px;
  }
  
  .header {
    padding: 12px;
  }
}

/* 模态框样式 */
:deep(.ant-modal-content) {
  padding: 0;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.modal-header {
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
}

.modal-search-input {
  font-size: 14px;
}

:deep(.ant-input-affix-wrapper) {
  border: none;
  box-shadow: none !important;
}

.modal-search-icon {
  color: #9ca3af;
  font-size: 16px;
}

.modal-shortcuts {
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #9ca3af;
  font-size: 12px;
}

.modal-shortcuts kbd {
  padding: 2px 6px;
  background: #f3f4f6;
  border-radius: 4px;
  font-family: ui-monospace, monospace;
  font-size: 12px;
  color: #6b7280;
  min-width: 16px;
  text-align: center;
}

.search-results {
  max-height: 400px;
  overflow-y: auto;
  padding: 8px 0;
}

.result-item {
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.2s;
}

.result-item:hover {
  background-color: #f9fafb;
}

.result-content h4 {
  margin: 0 0 4px;
  font-size: 14px;
  color: #111827;
}

.result-content p {
  margin: 0 0 8px;
  font-size: 13px;
  color: #6b7280;
}

.result-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
}

.result-date {
  color: #9ca3af;
}

.result-tag {
  padding: 2px 8px;
  background: #f3f4f6;
  border-radius: 4px;
  color: #6b7280;
}

.no-results {
  padding: 32px 16px;
  text-align: center;
  color: #9ca3af;
}

/* 滚动条美化 */
.search-results::-webkit-scrollbar {
  width: 4px;
}

.search-results::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}

.search-results::-webkit-scrollbar-track {
  background: transparent;
}
</style>
