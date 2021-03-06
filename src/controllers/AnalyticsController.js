const analyticsService = require('../services/AnalyticsService')

class AnalyticsController {
  findLongestCrawl () {
    return analyticsService.getMovieWithLongestCrawl()
  }

  getPersonMostAppeared () {
    return analyticsService.getPersonMostAppeared()
  }

  getSpeciesMostAppeared () {
    return analyticsService.getSpeciesMostAppeared()
  }

  getPlanetsWithMostPilots () {
    return analyticsService.getPlanetsWithMostPilots()
  }
}

const analyticsController = new AnalyticsController()
module.exports = analyticsController
