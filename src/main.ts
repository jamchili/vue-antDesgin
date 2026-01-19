import { createApp } from 'vue'


import App from './App.vue'
import pinia from './stores'
import router from './router'
import 'element-plus/dist/index.css'
import '@/assets/css/tailwind.css'
import elementIcons from './plugins/element-icons'
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(pinia).use(router).use(elementIcons)




import '@/router/permission'




app.mount('#app')



