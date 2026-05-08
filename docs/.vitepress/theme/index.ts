import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import type { EnhanceAppContext } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout: () => h(Layout, null, {
    'layout-bottom': () => h('div', { class: 'icp-bar' }, [
      h('a', {
        href: 'https://beian.miit.gov.cn/',
        target: '_blank',
        rel: 'noopener noreferrer'
      }, '新ICP备2026003366号-1'),
      h('span', ' | '),
      h('a', {
        href: 'https://beian.mps.gov.cn/#/query/webSearch?code=65010502001078',
        target: '_blank',
        rel: 'noopener noreferrer'
      }, '新公网安备65010502001078号')
    ])
  }),
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    // app.component('MyComponent', MyComponent)
  }
}
