const express = require('express')

const router = express.Router()
// const path = require('path')

// const axiosInstance = require(path.resolve(__dirname, 'common/axios'))

router.post('/', (req, res) => {
  res.json({
    message: `${req}주문등록 API - 👋🌎🌍🌏`,
  })
})

router.patch('/', (req, res) => {
  res.json({
    message: '주문수정 API - 👋🌎🌍🌏',
  })
})

router.delete('/', (req, res) => {
  res.json({
    message: '주문취소 API - 👋🌎🌍🌏',
  })
})

module.exports = router
