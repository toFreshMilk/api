const express = require('express')

const router = express.Router()
const callcenter = require('./callcenter')
const order = require('./order')
const axiosInstance = require('../../common/axios')

router.get('/price/estimate', async (req, res) => {
  let proc
  try {
    proc = await axiosInstance.sendRequest('Price_Estimate_Get', req.body)
    // console.info(proc)
  } catch (err) {
    proc = String(err)
  } finally {
    res.json({
      body: proc,
    })
  }
})

router.use('/callcenter', callcenter)
router.use('/order', order)

module.exports = router
