import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { FileList } from './src/node/index.js'

export default defineUserConfig({
  bundler: viteBundler(),
  pagePatterns: [],
  lang: 'zh-CN',
  public: `./public`,
  title: 'dl.wyin5100.top',
  description: '附属于wyin5100.top',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  shouldPrefetch: true,
  theme: FileList()
})
