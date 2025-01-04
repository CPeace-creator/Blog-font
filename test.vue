<!-- What have I been doing 部分 -->
<a-card class="experience-section" hoverable="true">
<h2 class="section-title">What have I been doing</h2>
<div class="experience-cards">
  <div class="exp-card">
    <div class="card-icon">&lt;/&gt;</div>
    <div class="card-content">
      <h3>Web Developer</h3>
      <p>A Developer with a passion for creating innovative and user-friendly web...</p>
    </div>
  </div>
  <div class="exp-card">
    <div class="card-icon">⚛️</div>
    <div class="card-content">
      <h3>v1.0.1</h3>
      <p>The blog is being updated to a new version, with a more modern and responsive design.</p>
    </div>
  </div>
</div>
</a-card>
<a-card class="experience-section" hoverable="true">
<h2 class="section-title">What have I been doing</h2>
<div class="experience-cards">
  <div class="exp-card">
    <div class="card-icon">&lt;/&gt;</div>
    <div class="card-content">
      <h3>Web Developer</h3>
      <p>A Developer with a passion for creating innovative and user-friendly web...</p>
    </div>
  </div>
  <div class="exp-card">
    <div class="card-icon">⚛️</div>
    <div class="card-content">
      <h3>v1.0.1</h3>
      <p>The blog is being updated to a new version, with a more modern and responsive design.</p>
    </div>
  </div>
</div>
</a-card>
<a-card class="projects-section">
<h2 class="section-title">Projects</h2>
<div class="project-cards">
  <div class="project-card">
    <img src="" alt="极物圈社区商城" class="project-logo">
    <div class="project-info">
      <h3>极物圈社区商城</h3>
      <p>极物圈，是一个满足，O咖天、闲置、社区功能于一体的平台。</p>
    </div>
  </div>
  <div class="project-card">
    <img src="" alt="极物聊天" class="project-logo">
    <div class="project-info">
      <h3>极物聊天 | JiwuChat</h3>
      <p>Jiwu聊天应用，是一个AI聊天、社交功能于一体的Tauri完整应用，支持Android、iOS...</p>
    </div>
  </div>
</div>
</a-card>

<!-- 搜索弹窗 -->
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
