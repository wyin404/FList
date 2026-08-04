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
        /* 强制 html 和 body 全屏 */
        html, body {
          min-height: 100vh !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        /* 给 body 加背景图 */
        body {
          background-image: url('/background2.jpg') !important;
          background-size: cover !important;
          background-position: center !important;
          background-attachment: fixed !important;
          background-repeat: no-repeat !important;
        }

        /* 让内容区变透明，露出背景 */
        .page {
          background-color: rgba(255, 255, 255, 0.82) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
          min-height: 100vh !important;
          box-shadow: none !important;
        }

        /* 侧边栏也透明一下，更协调 */
        .sidebar {
          background-color: rgba(255, 255, 255, 0.6) !important;
          backdrop-filter: blur(8px) !important;
          -webkit-backdrop-filter: blur(8px) !important;
        }
      `
    ]
  ],
  shouldPrefetch: true,
  theme: FileList()
})
