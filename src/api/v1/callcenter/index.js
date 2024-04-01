const express = require('express')
const axiosInstance = require('../../../common/axios')

const router = express.Router()

// /callcenter
router.get('/:logiCallcenterCode', async (req, res) => {
  const proc = await axiosInstance.sendRequest('Callcenter_Get_Dev', req.body)
  // console.info(proc)
  res.json({
    body: proc.params || 'err',
  })
})

router.get('/:logiCallcenterCode/branches', async (req, res) => {
  console.log(req.params)
  console.log(req.query)
  const proc = await axiosInstance.sendRequest('Callcenter_Get_Dev', req.body)
  // console.info(proc)
  res.json({
    body: proc.params || 'err',
  })
})

router.post('/:logiCallcenterCode/branches', async (req, res) => {
  console.log(req.params)
  console.log(req.query)
  const proc = await axiosInstance.sendRequest('Callcenter_Get_Dev', req.body)
  // console.info(proc)
  res.json({
    body: proc.params || 'err',
  })
})

module.exports = router
