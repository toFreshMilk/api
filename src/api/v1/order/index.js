const express = require('express')
const axiosInstance = require('../../../common/axios')

const router = express.Router()

router.post('/', async (req, res) => {
  const proc = await axiosInstance.sendRequest('Lcs_Order_Set_Registration', req.body)
  // console.info(proc)
  res.json({
    body: proc.params || 'err',
  })
})

router.patch('/', async (req, res) => {
  const proc = await axiosInstance.sendRequest('Lcs_Order_Set_Modification', req.body)
  // console.info(proc)
  res.json({
    body: proc.params || 'err',
  })
})

router.delete('/', async (req, res) => {
  const proc = await axiosInstance.sendRequest('Lcs_Order_Set_Cancelation', req.body)
  // console.info(proc)
  res.json({
    body: proc.params || 'err',
  })
})

module.exports = router
