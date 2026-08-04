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
    // 👇 加这段：按时间切换背景图的脚本
    [
      'script',
      {},
      `
        (function() {
          var hour = new Date().getHours();
          var bgUrl = '';
          if (hour >= 6 && hour < 12) {
            bgUrl = '/background2.jpg';
          } else if (hour >= 12 && hour < 17) {
            bgUrl = '/background2.jpg';
          } else if (hour >= 17 && hour < 19) {
            bgUrl = '/background2.jpg';
          } else if (hour >= 19 && hour < 21) {
            bgUrl = '/background.jpg';
          } else {
            bgUrl = '/background.jpg';
          }
          document.body.style.backgroundImage = 'url(' + bgUrl + ')';
          document.body.style.backgroundSize = 'cover';
          document.body.style.backgroundPosition = 'center';
          document.body.style.backgroundAttachment = 'fixed';
        })();
      `
    ],
      // 👇 加这个让内容区域透明
  [
    'style',
    {},
    `
      .page {
        background-color: rgba(255, 255, 255, 0.85) !important;
        backdrop-filter: blur(10px);
        min-height: 100vh;
      }
      body {
        margin: 0;
        min-height: 100vh;
      }
    `
  ]
  ],
  shouldPrefetch: true,
  theme: FileList()
})
