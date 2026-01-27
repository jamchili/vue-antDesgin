import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
createPinia()

const pinia = createPinia().use(persist)

console.log('pinia', pinia);

export default pinia


export * from './sidebar'

export * from './user'

export * from './dynamicRouter'
