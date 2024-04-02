const express = require('express')

const router = express.Router()
const callcenter = require('./callcenter')
const order = require('./order')
const axiosInstance = require('../../common/axios')

router.get('/price/estimate', async (req, res) => {
  const { data } = await axiosInstance.sendRequest('Price_Estimate_Get', req.body)
  res.json({
    body: data,
  })
})

router.use('/callcenter', callcenter)
router.use('/order', order)

module.exports = router
