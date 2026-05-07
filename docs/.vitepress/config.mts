import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'DarkRain 的技术博客',
  description: '分享前端开发、TypeScript、Vue 等技术文章与经验总结',

  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    logo: '',

    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
    ],

    sidebar: [
      {
        text: '前端基础',
        items: [
          { text: 'TypeScript 入门指南', link: '/posts/typescript-guide' },
          { text: 'CSS Grid 布局完全指南', link: '/posts/css-grid-guide' },
        ],
      },
      {
        text: 'Vue 生态',
        items: [
          { text: 'Vue 3 组合式 API 详解', link: '/posts/vue3-composition-api' },
        ],
      },
      {
        text: '开发工具',
        items: [
          { text: '使用 VitePress 搭建个人博客', link: '/posts/vitepress-blog' },
          { text: 'Node.js 异步编程进阶', link: '/posts/nodejs-async' },
        ],
      },
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024-present DarkRain',
    },

    lastUpdatedText: '最后更新',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    outline: {
      label: '页面导航',
      level: 'deep',
    },
  },
})
