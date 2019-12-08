const { describe, it } = require('mocha')
const analyticsService = require('../src/services/AnalyticsService')
const analyticsController = require('../src/controllers/AnalyticsController')

describe('Testing Analystics Controller', function () {
  describe('Testing Logest Crawl', function () {
    it('should throw an exception', function (done) {
      this.sandbox.stub(analyticsService, 'getMovieWithLongestCrawl').callsFake(function () {
        return new Promise((resolve, reject) => { reject(new Error()) })
      })

      const promise = analyticsController.findLongestCrawl()
      promise.then(() => { done('Failed, error is not thrown') }, () => { done() })
    })

    it('should not throw an exception', function (done) {
      this.sandbox.stub(analyticsService, 'getMovieWithLongestCrawl').callsFake(function () {
        return new Promise((resolve, reject) => { resolve('success') })
      })

      const promise = analyticsController.findLongestCrawl()
      promise.then(success => { done() }, error => { done(error) })
    })
  })

  describe('Testing Most Appeared Person', function () {
    it('should throw an exception', function (done) {
      this.sandbox.stub(analyticsService, 'getPersonMostAppeared').callsFake(function () {
        return new Promise((resolve, reject) => { reject(new Error()) })
      })

      const promise = analyticsController.getPersonMostAppeared()
      promise.then(() => { done('Failed, error is not thrown') }, () => { done() })
    })

    it('should not throw an exception', function (done) {
      this.sandbox.stub(analyticsService, 'getPersonMostAppeared').callsFake(function () {
        return new Promise((resolve, reject) => { resolve('success') })
      })

      const promise = analyticsController.getPersonMostAppeared()
      promise.then(success => { done() }, error => { done(error) })
    })
  })
})
