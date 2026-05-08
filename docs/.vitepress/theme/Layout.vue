<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <div class="icp-bar">
        <img src="//img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" style="width: 13px; display: inline-block; height: 13px; margin-right: 4px; vertical-align: middle;">
        <a href="https://beian.mps.gov.cn/#/query/webSearch?code=65010502001078" rel="noreferrer" target="_blank">新公网安备65010502001078号</a>
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
          style="padding-left: 15px"
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
