const express = require('express')
const router = express.Router()
const AnalyticsCtrl = require('../controllers/AnalyticsController')

// defining the endpoint for longestCrawl
router.get('/longestCrawl', function (req, res, next) {
  const anCtrl = new AnalyticsCtrl()
  anCtrl.findLongestCrawl().then((result) => {
    res.send(result)
  }).catch(next)
})

module.exports = router
