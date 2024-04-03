const os = require('os')
const { orderModifyCheck, orderStatusModifyCheck } = require('./api/v1/order/intervalService')
const app = require('./app')
require('dotenv').config()

const networkInterfaces = os.networkInterfaces()

const port = process.env.PORT || 8500
app.listen(port, () => {
  console.info(`Listening: http://localhost:${port}`)
  const netwrokName = process.env.NODE_ENV_NETWORK_NAME
  const { address } = networkInterfaces[netwrokName][0]
  console.log('address')
  console.log(address)

  const ff = {
    body: {
      platform: 'lcs',
      key: 'DwN1hMmef9sdf23kdssUPj1BwAdjlloQe',
      logiCallCenterCode: 11159,
      logiCallCenterBranchCode: 20,
      logiCallCenterPrice: 'A',
      registInfo: {
        isRservation: false,
        reservationDate: '2020-05-05 12:05:05',
        departureInfo: {
          addressMain: '서울시 도봉구 방학1동',
          addressSub: '652-9 403호',
          addressX: '37.48613885',
          addressY: '126.7918064',
        },
        viaInfo: [],
        destinationInfo: {
          addressMain: '서울시 도봉구 방학1동',
          addressSub: '652-9 403호',
          addressX: '37.48613885',
          addressY: '126.7918064',
        },
      },
    },
  }
  // 역방향 주문수정 프로시저를 1초마다 호출.
  setInterval(() => {
    // orderModifyCheck(ff)
    // orderStatusModifyCheck(ff)
  }, 3000)
})
