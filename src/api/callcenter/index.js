const express = require('express')

const router = express.Router()

// /callcenter
router.get('/:logiCallcenterCode', (req, res) => {
  res.json({
    message: `${req.params.logiCallcenterCode} 콜센터 조회 API - 👋🌎🌍🌏`,
  })
})

router.get('/:logiCallcenterCode/branches', (req, res) => {
  console.log(req.params)
  console.log(req.query)
  res.json({
    message: `${req.params.logiCallcenterCode} 콜센터 지사 조회 API - 👋🌎🌍🌏`,
  })
})

module.exports = router
