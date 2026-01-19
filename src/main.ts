import { createApp } from 'vue'


import App from './App.vue'
import router from './router'
import '@/assets/css/tailwind.css'
import elementIcons from './plugins/element-icons'
import 'virtual:svg-icons-register'
import pinia from './stores'

const app = createApp(App)




app.use(pinia).use(router).use(elementIcons).mount('#app')






