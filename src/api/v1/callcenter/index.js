const express = require('express')
const axiosInstance = require('../../../common/axios')

const router = express.Router()

router.get('/:logiCallcenterCode', async (req, res) => {
  const { data } = await axiosInstance.sendRequest('Callcenter_Get', req.body)
  res.json({
    body: data,
  })
})

router.get('/:logiCallcenterCode/branches', async (req, res) => {
  const { data } = await axiosInstance.sendRequest('CallcenterBranchs_Get', req.body)
  res.json({
    body: data,
  })
})

router.post('/:logiCallcenterCode/branches', async (req, res) => {
  const { data } = await axiosInstance.sendRequest('CallcenterBranchs_Post', req.body)
  res.json({
    body: data,
  })
})

module.exports = router
