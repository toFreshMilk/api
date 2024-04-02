const axiosInstance = require('../../../common/axios')

const orderModifyReverse = (_params = {}) => {
  const url = '/api/v1/interface/logi/order'
  try {
    const result = axiosInstance.sendRequestToLcs(url, _params)
    if (result.data === 'ok') {
      console.log('끝')
    } else {
      throw new Error('orderModifyReverse 실패값 반환')
    }
  } catch (err) {
    console.dir(_params)
    console.log(err, new Date())
  }
}
const orderModifyCheck = async (_params = {}) => {
  const sqlcmd = 'Lcs_Order_Get_Modification'
  try {
    const result = axiosInstance.sendRequest(sqlcmd, _params)
    if (result.data === 'ok') {
      console.log('처리할게 없음')
    } else {
      console.log('lcs쪽으로 전송')
      orderModifyReverse({})
    }
  } catch (err) {
    console.dir(_params)
    console.log('orderModifyCheck', err, new Date())
  }
}
module.exports = { orderModifyCheck }
