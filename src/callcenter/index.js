const express = require('express');

const router = express.Router();

// /callcenter
router.get('/{logiCallcenterCode}', (req, res) => {
  res.json({
    message: '콜센터 조회 API - 👋🌎🌍🌏',
  });
});

router.get('/{logiCallcenterCode}/branchs', (req, res) => {
  res.json({
    message: '콜센터 지사 조회 API - 👋🌎🌍🌏',
  });
});

module.exports = router;
