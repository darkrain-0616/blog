---
title: TypeScript 入门指南
date: 2024-03-15
---

# TypeScript 入门指南

TypeScript 是 JavaScript 的超集，它为 JavaScript 添加了可选的静态类型系统。本文将带你快速入门 TypeScript。

## 为什么要使用 TypeScript？

TypeScript 能够在开发阶段发现潜在的错误，提供更好的 IDE 支持，让代码更加健壮和可维护。

```typescript
// 一个简单的类型标注示例
function greet(name: string): string {
  return `Hello, ${name}!`
}

greet('World') // ✅ 正确
greet(42)      // ❌ 类型错误：number 不能赋值给 string
```

## 基础类型

TypeScript 提供了丰富的基础类型：

```typescript
// 布尔值
let isDone: boolean = false

// 数字
let count: number = 42

// 字符串
let message: string = 'Hello TypeScript'

// 数组
let list: number[] = [1, 2, 3]
let anotherList: Array<string> = ['a', 'b', 'c']

// 元组
let tuple: [string, number] = ['age', 25]

// 枚举
enum Color {
  Red,
  Green,
  Blue,
}
let color: Color = Color.Green
```

## 接口

接口是 TypeScript 的核心概念之一，用于定义对象的形状：

```typescript
interface User {
  id: number
  name: string
  email: string
  avatar?: string // 可选属性
  readonly createdAt: Date // 只读属性
}

function createUser(user: User): void {
  console.log(`创建用户：${user.name}`)
}
```

## 泛型

泛型允许我们创建可复用的组件，支持多种类型：

```typescript
function identity<T>(arg: T): T {
  return arg
}

// 使用泛型
let output = identity<string>('hello')
let output2 = identity(42) // 类型推断

// 泛型约束
interface HasLength {
  length: number
}

function logLength<T extends HasLength>(arg: T): T {
  console.log(arg.length)
  return arg
}
```

## 总结

TypeScript 的学习曲线相对平缓，对于 JavaScript 开发者来说，可以逐步引入类型系统。建议从基础类型和接口开始，逐步掌握泛型、装饰器等高级特性。
