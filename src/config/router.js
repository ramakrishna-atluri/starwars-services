const express = require('express')
const router = express.Router()
const analyticsController = require('../controllers/AnalyticsController')

// defining the endpoint for longestCrawl
router.get('/longestCrawl', function (req, res, next) {
  analyticsController.findLongestCrawl().then((result) => {
    res.send(result)
  }).catch(next)
})

// defining the endpoint for personMostAppeared
router.get('/personMostAppeared', function (req, res, next) {
  analyticsController.getPersonMostAppeared().then((result) => {
    res.send(result)
  }).catch(next)
})

// defining the endpoint for speciesMostAppeared
router.get('/speciesMostAppeared', function (req, res, next) {
  analyticsController.getSpeciesMostAppeared().then((result) => {
    res.send(result)
  }).catch(next)
})

// defining the endpoint for planetsWithMostPilots
router.get('/planetsWithMostPilots', function (req, res, next) {
  analyticsController.getPlanetsWithMostPilots().then((result) => {
    res.send(result)
  }).catch(next)
})

module.exports = router
