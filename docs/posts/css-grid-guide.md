---
title: CSS Grid 布局完全指南
date: 2024-06-05
---

# CSS Grid 布局完全指南

CSS Grid 是一个强大的二维布局系统，能够同时处理行和列的布局。

## 基础概念

Grid 布局由网格容器（grid container）和网格项（grid items）组成：

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 16px;
}
```

## 定义网格

### grid-template-columns 和 grid-template-rows

使用这些属性定义网格的轨道：

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 2fr;
  grid-template-rows: 100px 200px;
  gap: 20px;
}
```

### 使用 fr 单位

`fr` 单位表示剩余空间的份数：

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  /* 三列，中间列宽度是两侧的两倍 */
}
```

### repeat 函数

使用 `repeat()` 简化重复轨道：

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* 等同于 1fr 1fr 1fr */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  /* 自适应列数，每列最小 250px */
}
```

## 网格项定位

### grid-column 和 grid-row

```css
.item {
  grid-column: 1 / 3; /* 从第1列线到第3列线 */
  grid-row: 1 / 2;    /* 从第1行线到第2行线 */
}

/* 也可以使用 span 关键字 */
.header {
  grid-column: 1 / -1; /* 跨越所有列 */
}

.sidebar {
  grid-column: 1 / 2;
  grid-row: 2 / 4;
}

.content {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
}
```

## 区域布局

使用 `grid-template-areas` 创建命名区域：

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 80px 1fr 60px;
  grid-template-areas:
    "header  header"
    "sidebar content"
    "footer  footer";
  gap: 8px;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer  { grid-area: footer; }
```

## 对齐方式

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);

  /* 网格项在单元格内的对齐 */
  justify-items: center;
  align-items: center;

  /* 整个网格在容器内的对齐 */
  justify-content: center;
  align-content: center;
}
```

## 实战：响应式图片墙

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  gap: 12px;
}

.gallery img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.gallery .featured {
  grid-column: span 2;
  grid-row: span 2;
}
```

## 总结

CSS Grid 是前端布局的利器，特别适合二维布局场景。结合 Flexbox 使用，可以应对几乎所有的布局需求。
