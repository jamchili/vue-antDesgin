export type ApiRes<T> = {
  code: number,
  message: string,
  data: T
}



export type loginRes = {
  token: string
}


export type loginReq = {
  username: string,
  password: string
}