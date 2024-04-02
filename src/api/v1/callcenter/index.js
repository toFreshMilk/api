const express = require('express')
const axiosInstance = require('../../../common/axios')

const router = express.Router()

router.get('/:logiCallcenterCode', async (req, res) => {
  let proc
  try {
    proc = await axiosInstance.sendRequest('Callcenter_Get', req.body)
  } catch (err) {
    proc = String(err)
  } finally {
    res.json({
      body: proc,
    })
  }
})

router.get('/:logiCallcenterCode/branches', async (req, res) => {
  let proc
  try {
    proc = await axiosInstance.sendRequest('CallcenterBranchs_Get', req.body)
  } catch (err) {
    proc = String(err)
  } finally {
    res.json({
      body: proc,
    })
  }
})

router.post('/:logiCallcenterCode/branches', async (req, res) => {
  let proc
  try {
    proc = await axiosInstance.sendRequest('CallcenterBranchs_Post', req.body)
  } catch (err) {
    proc = String(err)
  } finally {
    res.json({
      body: proc,
    })
  }
})

module.exports = router
