---
title: Vue 3 组合式 API 详解
date: 2024-04-20
---

# Vue 3 组合式 API 详解

Vue 3 引入了组合式 API（Composition API），为组件逻辑复用提供了更优雅的解决方案。

## 为什么需要组合式 API？

在 Vue 2 的选项式 API 中，组件的逻辑按照选项（data、methods、computed）划分，导致相关逻辑分散在各处。组合式 API 允许我们按照功能组织代码。

## setup 函数

`setup` 是组合式 API 的入口：

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = computed(() => count.value * 2)

function increment() {
  count.value++
}
</script>
```

## 核心 API

### ref 和 reactive

`ref` 和 `reactive` 是 Vue 3 中两个主要的响应式 API：

```typescript
import { ref, reactive } from 'vue'

// ref 用于基本类型
const name = ref('Vue 3')
console.log(name.value) // 'Vue 3'

// reactive 用于对象
const state = reactive({
  count: 0,
  list: [] as string[],
})

console.log(state.count) // 0
```

### computed

计算属性，依赖于其他响应式数据：

```typescript
import { ref, computed } from 'vue'

const price = ref(100)
const quantity = ref(2)
const total = computed(() => price.value * quantity.value)
```

### watch

监听响应式数据的变化：

```typescript
import { ref, watch } from 'vue'

const keyword = ref('')

watch(keyword, (newVal, oldVal) => {
  console.log(`搜索关键词从 "${oldVal}" 变为 "${newVal}"`)
})

// 立即执行一次
watch(keyword, (val) => {
  console.log('当前关键词：', val)
}, { immediate: true })
```

## 自定义 Hook

组合式 API 最大的优势是可以提取可复用的逻辑：

```typescript
// useCounter.ts
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  return {
    count,
    doubleCount,
    increment,
    decrement,
  }
}
```

在组件中使用：

```vue
<script setup lang="ts">
import { useCounter } from './composables/useCounter'

const { count, doubleCount, increment, decrement } = useCounter(10)
</script>
```

## 总结

组合式 API 让 Vue 组件的逻辑组织更加灵活和清晰，特别适合复杂组件的开发。配合 `<script setup>` 语法，代码更加简洁直观。
