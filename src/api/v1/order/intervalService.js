const axiosInstance = require('../../../common/axios')

const orderModifyReverse = async (_params = {}) => {
  const url = '/api/v1/interface/logi/order'
  const result = await axiosInstance.sendRequestToLcs(url, _params)
  console.info(result)
  // if (result.data === 'ok') {
  //   console.log('끝')
  // } else {
  //   throw new Error('orderModifyReverse 실패값 반환')
  // }
}
const orderModifyCheck = async (_params = {}) => {
  const proc = await axiosInstance.sendRequest('Price_Estimate_Get', _params)
  if (proc.return_code === 1) {
    orderModifyReverse(proc)
  }
}
module.exports = { orderModifyCheck }
