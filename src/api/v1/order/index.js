const express = require('express')
const axiosInstance = require('../../../common/axios')

const router = express.Router()

router.post('/', async (req, res) => {
  const { data } = await axiosInstance.sendRequest('Order_Set_Registration', req.body)
  res.json({
    body: data,
  })
})

router.patch('/', async (req, res) => {
  const { data } = await axiosInstance.sendRequest('Order_Set_Modification', req.body)
  res.json({
    body: data,
  })
})

router.delete('/', async (req, res) => {
  const { data } = await axiosInstance.sendRequest('Order_Set_Cancelation', req.body)
  res.json({
    body: data,
  })
})

module.exports = router
