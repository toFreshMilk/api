const { orderModifyCheck } = require('./api/v1/order/intervalService')
const app = require('./app')

const port = process.env.PORT || 8500
app.listen(port, () => {
  console.info(`Listening: http://localhost:${port}`)

  // 역방향 주문수정 프로시저를 1초마다 호출.
  // setInterval(() => {
  //
  // }, 1000)
  orderModifyCheck()
})
