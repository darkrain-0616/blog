<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <div class="icp-bar">
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          新ICP备2026003366号-1
        </a>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.icp-bar {
  text-align: center;
  padding: 12px 24px 24px;
  font-size: 13px;
  background-color: var(--vp-c-bg);
  border-top: 1px solid var(--vp-c-gutter);
}

.icp-bar a {
  color: var(--vp-c-text-3);
  text-decoration: none;
  transition: color 0.25s;
}

.icp-bar a:hover {
  color: var(--vp-c-text-1);
}
</style>
