---
title: 使用 VitePress 搭建个人博客
date: 2024-05-10
---

# 使用 VitePress 搭建个人博客

VitePress 是一个基于 Vite 的静态站点生成器，非常适合搭建技术文档和个人博客。

## 初始化项目

```bash
# 创建项目目录
mkdir my-blog && cd my-blog

# 初始化 package.json
npm init -y

# 安装 VitePress
npm install -D vitepress

# 创建文档目录
mkdir docs
```

## 基础配置

在 `docs/.vitepress/config.mts` 中进行配置：

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的博客',
  description: '个人技术博客',
  lang: 'zh-CN',
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
    ],

    sidebar: [
      {
        text: '文章分类',
        items: [
          { text: 'TypeScript', link: '/posts/typescript' },
          { text: 'Vue', link: '/posts/vue' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/username' },
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024',
    },
  },
})
```

## 编写文章

VitePress 使用 Markdown 编写内容，支持 Frontmatter：

```markdown
---
title: 文章标题
date: 2024-01-01
tags:
  - Vue
  - 前端
---

# 文章内容

这里是正文内容...
```

## 部署

### 部署到 GitHub Pages

在 `.github/workflows/deploy.yml` 中配置 CI/CD：

```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run docs:build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

## 常用命令

```bash
# 启动开发服务器
npm run docs:dev

# 构建静态文件
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 总结

VitePress 配置简单、构建速度快，非常适合搭建个人技术博客。配合 GitHub Pages 可以实现自动化部署，专注于内容创作。
