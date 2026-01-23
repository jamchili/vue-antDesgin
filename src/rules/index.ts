const normalRule = [{
  required: true,
  message: '请输入',
  trigger: 'blur'
}]


export const normalRuleFn = (val: object) => {
  let result: any = {}
  for (let v in val) {
    result[v] = normalRule
  }
  return result

}