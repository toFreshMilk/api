const { orderModifyCheck, orderStatusModifyCheck } = require('./api/v1/order/intervalService')
const app = require('./app')
require('dotenv').config()

const port = process.env.PORT || 8500
app.listen(port, () => {
  console.info(`Listening: http://localhost:${port}`)

  // 역방향 주문수정 프로시저를 1초마다 호출.
  setInterval(() => {
    // orderModifyCheck(ff)
    // orderStatusModifyCheck(ff)
  }, 3000)
})
