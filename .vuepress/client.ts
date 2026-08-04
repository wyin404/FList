// .vuepress/client.ts
import { defineClientConfig } from '@vuepress/client'
import { onMounted } from 'vue'

export default defineClientConfig({
  setup() {
    onMounted(() => {
      const hour = new Date().getHours()
      let bgUrl = ''

      // 根据时间段选择不同背景图
      if (hour >= 6 && hour < 18) {
        bgUrl = '/background2.jpg'
      } else if (hour >= 18 && hour < 24) {
        bgUrl = '/background.jpg'
      } else {
        bgUrl = '/background.jpg'        // 夜晚 21:00-5:59
      }

      // 注入背景图
      document.body.style.backgroundImage = `url('${bgUrl}')`
      document.body.style.backgroundSize = 'cover'
      document.body.style.backgroundPosition = 'center'
      document.body.style.backgroundAttachment = 'fixed'
    })
  }
})
