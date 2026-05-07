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
      }, '新ICP备2026003366号-1')
    ])
  }),
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    // app.component('MyComponent', MyComponent)
  }
}
