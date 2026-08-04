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
    ['link', { rel: 'icon', href: '/logo.png' }],
    [
    'style',
    {},
    `
      /* 用更精确的选择器 + !important 三重保险 */
      html[data-theme="light"] body,
      html[data-theme="dark"] body,
      body {
        background-image: url('/bg-morning.jpg') !important;
        background-size: cover !important;
        background-position: center !important;
        background-attachment: fixed !important;
        background-repeat: no-repeat !important;
        background-color: transparent !important;
        min-height: 100vh !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      /* 用 ID 选择器 + 类选择器双重锁定内容区 */
      #app .page,
      #app .theme-container .page {
        background-color: rgba(255, 255, 255, 0.82) !important;
        backdrop-filter: blur(12px) !important;
        -webkit-backdrop-filter: blur(12px) !important;
        min-height: 100vh !important;
        box-shadow: none !important;
      }

      /* 侧边栏透明 */
      #app .sidebar {
        background-color: rgba(255, 255, 255, 0.5) !important;
        backdrop-filter: blur(8px) !important;
        -webkit-backdrop-filter: blur(8px) !important;
      }

      /* 导航栏透明 */
      #app .navbar {
        background-color: rgba(255, 255, 255, 0.7) !important;
        backdrop-filter: blur(8px) !important;
        -webkit-backdrop-filter: blur(8px) !important;
      }
    `
  ]
  ],
  shouldPrefetch: true,
  theme: FileList()
})
