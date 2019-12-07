const { getMovieWithLongestCrawl } = require('../services/AnalyticsService')

function findLongestCrawl () {
  return getMovieWithLongestCrawl()
}

module.exports = { findLongestCrawl: findLongestCrawl }
