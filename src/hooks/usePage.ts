import { ref } from "vue"


const usePage = (listReq: any) => {
  if (!listReq) {
    return new Error('请传入接口调用方法!')
  }

  const list = ref()

  const pageInfo = ref({
    page: 1,
    pageSize: 10,
    total: 0
  })



  console.log('listReq', listReq);

  const getList = () => {
    listReq(pageInfo.value).then(res => {
      console.log('我被调用了', res);
      list.value = res.data.rows
      pageInfo.value = res.data.total

      return list.value
    })
  }

  // 新增加载下一页的函数
  const loadmore = () => {
    // 下一页，那咱们把当前页自增一下就行了
    pageInfo.value.pageNum += 1

  }



  return {
    list,
    getList
  }
}

export default usePage