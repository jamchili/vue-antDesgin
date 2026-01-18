import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/assets/css/tailwind.css'
import elementIcons from './plugins/element-icons'

const app = createApp(App)




app.use(createPinia()).use(router).use(elementIcons).mount('#app')






