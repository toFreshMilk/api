const express = require('express')
const axiosInstance = require('../../../common/axios')

const router = express.Router()

router.post('/', async (req, res) => {
  let proc
  try {
    proc = await axiosInstance.sendRequest('Order_Set_Registration', req.body)
  } catch (err) {
    proc = String(err)
  } finally {
    res.json({
      body: proc,
    })
  }
})

router.patch('/', async (req, res) => {
  let proc
  try {
    proc = await axiosInstance.sendRequest('Order_Set_Modification', req.body)
  } catch (err) {
    proc = String(err)
  } finally {
    res.json({
      body: proc,
    })
  }
})

router.delete('/', async (req, res) => {
  let proc
  try {
    proc = await axiosInstance.sendRequest('Order_Set_Cancelation', req.body)
  } catch (err) {
    proc = String(err)
  } finally {
    res.json({
      body: proc,
    })
  }
})

module.exports = router
