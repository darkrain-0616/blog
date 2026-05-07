# Vue.js 基础

Vue.js 是一个用于构建用户界面的渐进式 JavaScript 框架。

## 入门指南

```bash
npm install vue
```

## 组件

Vue 组件是具有名称的可复用实例。

```vue
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Vue!'
    }
  }
}
</script>
```

## 指令

- `v-if` - 条件渲染
- `v-for` - 列表渲染
- `v-bind` - 属性绑定
- `v-on` - 事件处理

## 总结

Vue.js 通过其组件化架构提供了一种优雅的方式来构建响应式应用。
