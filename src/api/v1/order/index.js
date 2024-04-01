const express = require('express')
const axiosInstance = require('../../../common/axios')

const router = express.Router()

router.post('/', async (req, res) => {
  const proc = await axiosInstance.sendRequest('Callcenter_Get_Dev', req.body)
  // console.info(proc)
  res.json({
    body: proc.params || 'err',
  })
})

router.patch('/', async (req, res) => {
  const proc = await axiosInstance.sendRequest('Callcenter_Get_Dev', req.body)
  // console.info(proc)
  res.json({
    body: proc.params || 'err',
  })
})

router.delete('/', async (req, res) => {
  const proc = await axiosInstance.sendRequest('Callcenter_Get_Dev', req.body)
  // console.info(proc)
  res.json({
    body: proc.params || 'err',
  })
})

module.exports = router
