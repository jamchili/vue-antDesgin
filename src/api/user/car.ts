import type { createCardReq, getCardListReq, getCardListRes } from "@/types/user";
import request from "@/utils/request";

/**
 * 获取楼宇列表
 * @param { page, pageSize} params
 * @returns
 */
export function getCardListAPI(params: Partial<getCardListReq>) {
  return request<getCardListRes>(
    '/parking/card/list', "GET", params
  )
}

export function createCardAPI(data: createCardReq) {
  return request('/parking/card', 'POST', data
  )
}


export function getCardDetailAPI(id: string) {
  return request(`/parking/card/detail/${id}`
  )
}

export const parkUserRouterApi = (data: createCardReq) => {
  return request('/parking/card/edit', 'PUT', data)
}



export function delCardAPI(id: string) {
  return request(
    `/parking/card/${id}`,
    'DELETE'
  )
}

