const express = require('express')

const router = express.Router()
const callcenter = require('./callcenter')
const order = require('./order')
const axiosInstance = require('../../common/axios')

// /callcenter
router.get('/price/estimate', async (req, res) => {
  const proc = await axiosInstance.sendRequest('Callcenter_Get_Dev', req.body)
  res.json(proc)
})

router.use('/callcenter', callcenter)
router.use('/order', order)

module.exports = router
