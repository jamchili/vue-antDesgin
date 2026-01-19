import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
createPinia()

const pinia = createPinia().use(persist)

export default pinia


export * from './sidebar'