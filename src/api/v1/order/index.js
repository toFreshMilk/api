const express = require('express')
const axiosInstance = require('../../../common/axios')

const router = express.Router()

router.post('/', async (req, res) => {
  const proc = await axiosInstance.sendRequest('Order_Set_Registration', req.body)
  res.json({
    body: proc,
  })
})

router.patch('/', async (req, res) => {
  const proc = await axiosInstance.sendRequest('Order_Set_Modification', req.body)
  res.json({
    body: proc,
  })
})

router.delete('/', async (req, res) => {
  const proc = await axiosInstance.sendRequest('Order_Set_Cancelation', req.body)
  res.json({
    body: proc,
  })
})

module.exports = router
