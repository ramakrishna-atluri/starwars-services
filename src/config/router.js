const express = require('express')
const router = express.Router()
const { findLongestCrawl } = require('../controllers/AnalyticsController')

// defining the endpoint for longestCrawl
router.get('/longestCrawl', function (req, res, next) {
  findLongestCrawl().then((result) => {
    res.send(result)
  }).catch(next)
})

module.exports = router
