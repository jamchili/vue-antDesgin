
import { useUserStore } from "@/stores";
import router from ".";
const WHITLE_LIST = ['/login', '/404']



router.beforeEach((to, from, next) => {

  const userStore = useUserStore()
  const token = userStore.getToken

  if (token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }

  } else {
    if (WHITLE_LIST.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})