const express = require('express')

const router = express.Router()
const callcenter = require('./callcenter')
const order = require('./order')
const axiosInstance = require('../../common/axios')

router.get('/price/estimate', async (req, res) => {
  const proc = await axiosInstance.sendRequest('Callcenter_Get_Dev', req.body)
  // console.info(proc)
  res.json({
    body: proc.params || 'err',
  })
})

router.use('/callcenter', callcenter)
router.use('/order', order)

module.exports = router
