<template>
<a-row>
  <div class="search-container">
    <div class="search-box" @click="showSearchModal">
      <SearchOutlined class="search-icon" />
      <span class="search-placeholder">搜索文章...</span>
      <span class="shortcut-hint">{{ isMac ? '⌘' : 'Shift' }} + K</span>
    </div>
  </div>
</a-row>
</template>
<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted, nextTick } from 'vue'
import { SearchOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'

const isDarkMode = ref(localStorage.getItem('theme') === 'dark')
const isSearchHidden = ref(false)
const isModalVisible = ref(false)
const modalSearchQuery = ref('')
const isSearching = ref(false)
const searchResults = ref([])
const modalSearchInput = ref()
const isMac = ref(navigator.platform.toUpperCase().indexOf('MAC') >= 0)
let lastScrollTop = 0

// 优化滚动监听逻辑
const SCROLL_THRESHOLD = 100  // 滚动阈值
const SCROLL_DELAY = 200      // 滚动防抖延迟
let scrollTimer: number | null = null

// 显示搜索弹窗
const showSearchModal = () => {
  isModalVisible.value = true
  nextTick(() => {
    modalSearchInput.value?.focus()
  })
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

// 监听快捷键
const handleKeydown = (e: KeyboardEvent) => {
  if ((e.key.toLowerCase() === 'k' && (isMac.value ? e.metaKey : e.shiftKey)) && !isModalVisible.value) {
    e.preventDefault()
    showSearchModal()
  }
}

// 监听滚动
const handleScroll = () => {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollDelta = currentScrollTop - lastScrollTop

  // 清除之前的定时器
  if (scrollTimer) {
    clearTimeout(scrollTimer)
  }

  // 使用防抖处理滚动事件
  scrollTimer = window.setTimeout(() => {
    // 向下滚动且超过阈值时隐藏
    if (scrollDelta > 0 && currentScrollTop > SCROLL_THRESHOLD) {
      isSearchHidden.value = true
    }
    // 向上滚动或在顶部时显示
    else if (scrollDelta < -50 || currentScrollTop <= 0) {
      isSearchHidden.value = false
    }
  }, SCROLL_DELAY)

  lastScrollTop = currentScrollTop
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
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('keydown', handleKeydown)
  // 初始化时确保搜索栏可见
  isSearchHidden.value = false
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  if (scrollTimer) {
    clearTimeout(scrollTimer)
  }
})
</script>
<style scoped>

</style>
