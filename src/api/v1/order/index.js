const express = require('express')
const axiosInstance = require('../../../common/axios')

const router = express.Router()

router.post('/', async (req, res) => {
  const proc = await axiosInstance.sendRequest(`Lcs_Order_Set_Registration_Dev${process.env.NODE_ENV_PROC}`, req.body)
  // console.info(proc)
  res.json({
    body: proc.params || 'err',
  })
})

router.patch('/', async (req, res) => {
  const proc = await axiosInstance.sendRequest(`Lcs_Order_Set_Modification_Dev${process.env.NODE_ENV_PROC}`, req.body)
  // console.info(proc)
  res.json({
    body: proc.params || 'err',
  })
})

router.delete('/', async (req, res) => {
  const proc = await axiosInstance.sendRequest(`Lcs_Order_Set_Modification_Dev${process.env.NODE_ENV_PROC}`, req.body)
  // console.info(proc)
  res.json({
    body: proc.params || 'err',
  })
})

module.exports = router
