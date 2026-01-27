import type { loginReq, loginRes } from '@/types/user'
import request from '@/utils/request'


export function loginApi(data: loginReq) {
  return request<loginRes>('park/login', 'POST', data)
}


export const parkUserRouterApi = () => {
  return request('/park/user/router')
}


export const parkUserProfileApi = () => {
  return request('/park/user/profile')
}

