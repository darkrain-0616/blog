# Vue.js Basics

Vue.js is a progressive JavaScript framework for building user interfaces.

## Getting Started

```bash
npm install vue
```

## Components

Vue components are reusable instances with a name.

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

## Directives

- `v-if` - Conditional rendering
- `v-for` - List rendering
- `v-bind` - Attribute binding
- `v-on` - Event handling

## Conclusion

Vue.js provides an elegant way to build reactive applications with its component-based architecture.
