const express = require('express')
const os = require('os')

const router = express.Router()
const callcenter = require('./callcenter')
const order = require('./order')
const axiosInstance = require('../../common/axios')

router.get('/check', async (req, res) => {
  const networkInterfaces = os.networkInterfaces()
  const netwrokName = process.env.NODE_ENV_NETWORK_NAME
  const { address } = networkInterfaces[netwrokName][0]
  res.json({
    body: address,
  })
})
router.get('/price/estimate', async (req, res) => {
  const proc = await axiosInstance.sendRequest('Price_Estimate_Get', req.body)
  res.json({
    body: proc,
  })
})
router.use('/callcenter', callcenter)
router.use('/order', order)

module.exports = router
