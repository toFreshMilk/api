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
  const proc = await axiosInstance.sendRequest('Order_Get_Modification', _params)
  if (proc.return_code === 1) {
    orderModifyReverse(proc)
  }
}
const orderStatusModifyReverse = async (_params = {}) => {
  const url = '/api/v1/interface/logi/order/state'
  const result = await axiosInstance.sendRequestToLcs(url, _params)
  console.info(result)
  // if (result.data === 'ok') {
  //   console.log('끝')
  // } else {
  //   throw new Error('orderModifyReverse 실패값 반환')
  // }
}
const orderStatusModifyCheck = async (_params = {}) => {
  const proc = await axiosInstance.sendRequest('OrderStatus_Get_Modification', _params)
  if (proc.return_code === 1) {
    orderStatusModifyReverse(proc)
  }
}
module.exports = { orderModifyCheck, orderStatusModifyCheck }
