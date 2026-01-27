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

/**
 * 获取角色列表
 * @returns
 */
export function getRoleListAPI() {
  return request(
    '/park/sys/role'
  )
}



/**
 * 获取tree权限列表
 * @returns
 */
export function getTreeListAPI() {
  return request(
    '/park/sys/permision/all/tree'
  )
}


/**
 * 获取当前角色权限点列表
 * @returns
 */
export function getRoleDetailAPI(roleId: string) {
  return request(
    `/park/sys/role/${roleId}`
  )
}


/**
 * 获取角色成员列表
 * @returns
 */
export function getRoleUserAPI(roleId: string) {
  return request(
    `/park/sys/roleUser/${roleId}`
  )
}



/**
 * 创建角色
 * @returns
 */
export function createRoleUserAPI(data) {
  return request(
    `/park/sys/role`,
    'POST',
    data
  )
}


/**
 * 查询当前角色详情-权限和分配人数
 * @returns
 */
export function getRoleAPI(roleId: string) {
  return request(
    `/park/sys/role/${roleId}`
  )
}


/**
 * 更改角色
 * @returns
 */
export const updateRoleAPI = (data) => {
  return request(
    `/park/sys/role`,
    'PUT',
    data
  )
}