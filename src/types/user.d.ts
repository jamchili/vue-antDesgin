export type ApiRes<T> = {
  code: number,
  message: string,
  msg?: string,
  data: T
}

export type ApiPage = {
  page?: number,
  pageSize?: number
}



export type loginRes = {
  token: string
}


export type loginReq = {
  username: string,
  password: string
}

export type getCardListReq = {
  carNumber: string,
  personName: string,
  cardStatus: 0 | 1 | string
} & ApiPage



export interface getCardListRes {
  total: number;
  rows: getCardListResRow[];
}

export interface getCardListResRow {
  id: number;
  personName: string;
  phoneNumber: string;
  carNumber: string;
  carBrand: string;
  totalEffectiveDate: number;
  cardStatus: 0 | 1;
}


export interface createCardReq {
  carInfoId?: string,
  payTime?: string[]
  personName: string,
  phoneNumber: string,
  carNumber: string,
  carBrand: string,
  cardStartDate: string,
  cardEndDate: string,
  paymentAmount: string,
  paymentMethod: string,
  rechargeId?: string
}