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
            bgUrl = '/bg-morning.jpg';
          } else if (hour >= 12 && hour < 17) {
            bgUrl = '/bg-afternoon.jpg';
          } else if (hour >= 17 && hour < 19) {
            bgUrl = '/bg-sunset.jpg';
          } else if (hour >= 19 && hour < 21) {
            bgUrl = '/bg-evening.jpg';
          } else {
            bgUrl = '/bg-night.jpg';
          }
          document.body.style.backgroundImage = 'url(' + bgUrl + ')';
          document.body.style.backgroundSize = 'cover';
          document.body.style.backgroundPosition = 'center';
          document.body.style.backgroundAttachment = 'fixed';
        })();
      `
    ]
  ],
  shouldPrefetch: true,
  theme: FileList()
})
