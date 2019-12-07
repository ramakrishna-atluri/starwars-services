const analyticsService = require('../services/AnalyticsService')

class AnalyticsController {
  findLongestCrawl () {
    return analyticsService.getMovieWithLongestCrawl()
  }
}

const analyticsController = new AnalyticsController()
module.exports = analyticsController
