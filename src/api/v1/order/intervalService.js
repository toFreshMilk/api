const axiosInstance = require('../../../common/axios')

const orderModifyReverse = (_params = {}) => {
  const url = '/api/v1/interface/logi/order'
  const result = axiosInstance.sendRequestToLcs(url, _params)
  if (result.data === 'ok') {
    console.log('끝')
  } else {
    throw new Error('orderModifyReverse 실패값 반환')
  }
}
const orderModifyCheck = async (_params = {}) => {
  const { data } = await axiosInstance.sendRequest('Order_Get_Modification', _params)
  // if (data.length === 0) {
  //   console.log('처리할게 없음')
  // } else {
  //   console.log('lcs쪽으로 전송')
  //   orderModifyReverse(result.body)
  // }
  console.info(data)
}
module.exports = { orderModifyCheck }
