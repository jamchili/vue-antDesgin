import type { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


export default {
  install(app: App) {
    for (const [k, v] of Object.entries(ElementPlusIconsVue)) {
      app.component(k, v)
    }
  }
}