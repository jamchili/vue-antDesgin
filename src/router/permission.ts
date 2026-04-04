
import { useDynamicRouterStore, useUserStore } from "@/stores";
import router from ".";
import { asyncRoutes } from "./asyncRoutes";
const WHITLE_LIST = ['/login', '/404']
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 配置关闭右上角的螺旋加载圈
nprogress.configure({ showSpinner: false })

const setRouterPerms = (val) => {
  const permissionRes = {
    menus: new Set(),    // 使用 Set 自动去重
    smenus: new Set()    // 使用 Set 自动去重
  };
  val.forEach(e => {
    const parts = e.split(':');
    // 添加菜单部分（第一部分）
    if (parts[0]) {
      permissionRes.menus.add(parts[0]);
    }
    // 添加完整权限字符串
    if (parts.length >= 2) {
      permissionRes.smenus.add(parts[0] + ':' + parts[1]);
    }
  });

  // 将 Set 转换为数组
  const result = {
    menus: Array.from(permissionRes.menus),
    smenus: Array.from(permissionRes.smenus)
  };
  return result;
}


const combineRoutes = (val) => {
  if (val.menus.includes('*')) {
    // 管理员
    return asyncRoutes
  }
  return asyncRoutes.filter(i => {
    return val.menus.includes(i.permission)
  }).map(v => {
    return {
      ...v,
      children: v.children.filter(k => val.smenus.includes(k.permission))
    }
  })
}




router.beforeEach(async (to, from, next) => {
  nprogress.start() // 开始进度条
  const userStore = useUserStore()

  const dynamicRouterStore = useDynamicRouterStore()
  const token = userStore.getToken

  if (token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 获取用户信息
      if (!userStore?.userProfile?.id) {
        const permission = await userStore.getUserProfile()
        const res = setRouterPerms(permission.permissions)
        const finalRoutes = combineRoutes(res)
        finalRoutes.forEach(i => router.addRoute(i))
        console.log('finalRoutes', finalRoutes);

        dynamicRouterStore.addCurRouter(finalRoutes)
        next(to.path)
      } else {
        next()
      }
    }
  } else {
    if (WHITLE_LIST.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach(() => {
  nprogress.done() // 结束进度条
})