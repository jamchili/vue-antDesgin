import type { loginReq, loginRes } from '@/types/user'
import request from '@/utils/request'


export function loginApi(data: loginReq) {
  return request<loginRes>('park/login', 'POST', data)
}
