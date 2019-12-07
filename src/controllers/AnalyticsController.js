
class AnalyticsController {
  findLongestCrawl () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject(new Error('myMovie - RK'))
      }, 300)
    })
  }
}

module.exports = AnalyticsController
