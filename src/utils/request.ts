import { useUserStore } from '@/stores'
import type { ApiRes } from '@/types/user'
import { ElMessage } from 'element-plus'
import axios, { AxiosError, type Method } from 'axios'

const instance = axios.create({
  baseURL: ' https://api-hmzs.itheima.net/v1',
})

instance.interceptors.request.use(
  (config) => {
    // TODO 2. 携带token
    const userStore = useUserStore()
    if (userStore.getToken) {
      config.headers.Authorization = userStore.getToken
    }
    return config
  },
  (err) => Promise.reject(err)
)

instance.interceptors.response.use(
  (res) => {
    // TODO 3. 处理业务失败
    console.log('aa', res);

    // TODO 4. 摘取核心响应数据
    return res.data
  },
  (err: AxiosError) => {
    ElMessage.error(err.response?.data?.msg)
    return Promise.reject(err)
  }
)

function request<T>(url: string, method: Method, data?: object) {
  return instance<any, ApiRes<T>>({
    url: url,
    method: method,
    [method.toLocaleLowerCase() === 'get' ? 'params' : 'data']: data
  })
}
export default request



