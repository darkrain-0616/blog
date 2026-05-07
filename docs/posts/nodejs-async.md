---
title: Node.js 异步编程进阶
date: 2024-07-18
---

# Node.js 异步编程进阶

Node.js 基于事件循环实现了高性能的异步 I/O。本文将深入探讨 Node.js 的异步编程模式。

## 事件循环

Node.js 的事件循环是理解异步编程的关键。它分为六个阶段：

```
   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │           poll            │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
```

1. **timers**：执行 `setTimeout` 和 `setInterval` 的回调
2. **pending callbacks**：执行延迟到下一个循环的 I/O 回调
3. **idle, prepare**：内部使用
4. **poll**：获取新的 I/O 事件，执行 I/O 回调
5. **check**：执行 `setImmediate` 的回调
6. **close callbacks**：执行 close 事件回调

## Promise 与微任务

Promise 的回调属于微任务（microtask），在当前阶段结束后立即执行：

```javascript
console.log('1')

setTimeout(() => {
  console.log('2')
}, 0)

Promise.resolve().then(() => {
  console.log('3')
})

console.log('4')

// 输出：1, 4, 3, 2
```

## async/await

`async/await` 是异步编程的语法糖，让异步代码看起来像同步代码：

```javascript
const fs = require('fs/promises')

async function readConfig() {
  try {
    const data = await fs.readFile('./config.json', 'utf-8')
    const config = JSON.parse(data)
    return config
  } catch (err) {
    console.error('读取配置文件失败：', err)
    return null
  }
}
```

### 并行执行

使用 `Promise.all` 并行执行多个异步操作：

```javascript
async function fetchUserData(userId) {
  const [user, posts, comments] = await Promise.all([
    fetch(`/api/users/${userId}`),
    fetch(`/api/users/${userId}/posts`),
    fetch(`/api/users/${userId}/comments`),
  ])

  return {
    user: await user.json(),
    posts: await posts.json(),
    comments: await comments.json(),
  }
}
```

## 异步迭代

处理流式数据时，可以使用异步迭代器：

```javascript
const { createReadStream } = require('fs')
const { createInterface } = require('readline')

async function processLargeFile(filePath) {
  const rl = createInterface({
    input: createReadStream(filePath),
    crlfDelay: Infinity,
  })

  for await (const line of rl) {
    console.log('处理行：', line)
    // 逐行处理大文件，内存友好
  }
}
```

## 错误处理

异步编程中错误处理尤为重要：

```javascript
async function safeOperation() {
  try {
    const result = await riskyOperation()
    return result
  } catch (err) {
    // 区分不同类型的错误
    if (err instanceof NetworkError) {
      console.error('网络错误，稍后重试')
      await retry(riskyOperation)
    } else if (err instanceof ValidationError) {
      console.error('数据验证失败：', err.message)
      throw err // 重新抛出上层处理
    } else {
      console.error('未知错误：', err)
      throw err
    }
  }
}
```

## 总结

理解事件循环和异步编程模型是掌握 Node.js 的关键。合理使用 Promise 和 async/await 能够编写出高效、可维护的异步代码。
