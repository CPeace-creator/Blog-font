<!-- 顶部区域 -->
    <a-flex class="header-section" :class="{ 'hidden': isSearchHidden }">
      <!-- 搜索栏 -->

    </a-flex>



.header-section {
position: sticky;
top: 0;
z-index: 100;
background-color: var(--bg-primary);
height: 70px;
display: flex;
align-items: center;
border-bottom: 1px solid var(--border-color);
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
visibility: visible;
transform: translateY(0);
opacity: 1;
backdrop-filter: blur(8px);
background-color: rgba(var(--bg-primary-rgb), 0.95);
will-change: transform, opacity, visibility;
}

.header-section.hidden {
transform: translateY(-100%) translateZ(0);
opacity: 0;
visibility: hidden;
pointer-events: none;
position: fixed;
width: 100%;
}



/* About Section 样式 */
.about-section {
width: 100%;
margin-bottom: 4rem;
padding-top: 1rem;
}

.profile-header {
display: flex;
align-items: center;
gap: 1rem;
margin-bottom: 2rem;
}

.avatar {
width: 80px;
height: 80px;
border-radius: 50%;
object-fit: cover;
}

.name {
font-size: 2rem;
font-weight: 600;
color: #333;
}

.contact-info {
margin-bottom: 2rem;
}

.info-item {
display: flex;
align-items: center;
gap: 0.5rem;
margin-bottom: 0.5rem;
color: #666;
}

.social-links {
display: flex;
gap: 1rem;
margin-top: 1rem;
}

.social-icon {
width: 24px;
height: 24px;
}

.status-list {
display: flex;
flex-direction: column;
gap: 0.5rem;
}

.status-item {
color: #666;
}

/* Experience Section 样式 */
.section-title {
font-size: 1.75rem;
color: #333;
margin-bottom: 2rem;
}

.experience-cards {
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 2rem;
}

.exp-card {
background: var(--card-bg);
padding: 2rem;
border-radius: 12px;
box-shadow: 0 4px 12px var(--card-shadow);
transition: background-color 0.3s, box-shadow 0.3s;
}

.card-icon {
font-size: 2rem;
margin-bottom: 1rem;
}

.card-content h3 {
font-size: 1.25rem;
color: var(--text-primary);
margin-bottom: 0.5rem;
}

.card-content p {
color: var(--text-secondary);
line-height: 1.5;
}

/* Projects Section 样式 */
.projects-section {
margin-top: 4rem;
}

.project-cards {
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 2rem;
}

.project-card {
background: var(--card-bg);
padding: 1.5rem;
border-radius: 12px;
box-shadow: 0 4px 12px var(--card-shadow);
display: flex;
gap: 1rem;
transition: background-color 0.3s, box-shadow 0.3s;
}

.project-logo {
width: 48px;
height: 48px;
border-radius: 8px;
}

.project-info h3 {
font-size: 1.1rem;
color: var(--text-primary);
margin-bottom: 0.5rem;
}

.project-info p {
color: var(--text-secondary);
font-size: 0.9rem;
line-height: 1.5;
}

/* 响应式设计 */
@media (max-width: 768px) {
.header-section {
height: 60px;
}

.header-section.hidden {
transform: translateY(-100%);
}

.main-content {
padding: 1rem;
}

.experience-cards,
.project-cards {
grid-template-columns: 1fr;
}
}

@media (max-width: 1024px) {
.main-content {
padding: 2rem;
}
}

/* 添加过渡效果 */
.home-container {
transition: background-color 0.3s, color 0.3s;
}

.exp-card,
.project-card {
transition: background-color 0.3s, box-shadow 0.3s;
}

/* 搜索栏样式 */
.search-container {
position: relative;
z-index: 100;
width: 100%;
max-width: 600px;
margin: 0 auto;
padding: 0 1rem;
}

.search-box {
display: flex;
align-items: center;
padding: 0.75rem 1rem;
background: var(--bg-secondary);
border: 1px solid var(--border-color);
border-radius: 8px;
cursor: pointer;
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
height: 46px;
transform: translateY(0);
will-change: transform, box-shadow;
}

.search-box:hover {
background: var(--card-bg);
border-color: #1890ff;
transform: translateY(-1px);
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.search-icon {
font-size: 1.2rem;
color: var(--text-secondary);
margin-right: 0.5rem;
}

.search-placeholder {
color: var(--text-secondary);
flex: 1;
}

.shortcut-hint {
padding: 0.2rem 0.5rem;
background: var(--bg-primary);
border: 1px solid var(--border-color);
border-radius: 4px;
font-size: 0.8rem;
color: var(--text-secondary);
}

/* 搜索弹窗样式 */
.search-modal {
top: 70px;
}

.search-modal :deep(.ant-modal-content) {
background: var(--bg-primary);
padding: 0;
border-radius: 12px;
overflow: hidden;
}

.modal-search {
display: flex;
align-items: center;
padding: 1rem;
border-bottom: 1px solid var(--border-color);
}

.modal-search-icon {
font-size: 1.2rem;
color: var(--text-secondary);
margin-right: 0.75rem;
}

.search-results {
max-height: 400px;
overflow-y: auto;
padding: 1rem;
}

.result-item {
padding: 1rem;
border-radius: 8px;
cursor: pointer;
transition: background-color 0.2s ease;
}

.result-item:hover {
background-color: var(--bg-secondary);
}

.result-item h4 {
margin: 0 0 0.5rem;
color: var(--text-primary);
}

.result-item p {
margin: 0 0 0.5rem;
color: var(--text-secondary);
}

.result-meta {
display: flex;
justify-content: space-between;
color: var(--text-secondary);
font-size: 0.9rem;
}

.result-tag {
padding: 0.2rem 0.6rem;
background: var(--bg-secondary);
border-radius: 4px;
}

/* 添加暗色模式支持 */
.dark-mode .header-section {
background-color: rgba(var(--bg-primary-dark-rgb), 0.95);
}

.dark-mode .search-box:hover {
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* 在 :root 中添加 RGB 变量 */
:root {
--bg-primary-rgb: 255, 255, 255;
--bg-primary-dark-rgb: 18, 18, 18;
}


