const mongoose = require('mongoose')
const { FilmSchema, FilmAggregates } = require('../models/Films')
const { PeopleSchema, PersonAggregates } = require('../models/People')

class AnalyticsService {
  getMovieWithLongestCrawl () {
    return new Promise((resolve, reject) => {
      var FilmModel = mongoose.model('Film', FilmSchema)
      FilmModel.aggregate(FilmAggregates.findinglongestCrawl, function (err, result) {
        if (err) {
          reject(new Error(err))
        } else {
          if (result.length <= 0) {
            resolve('No Results Found')
          } else {
            resolve(result[0].title)
          }
        }
      })
    })
  }

  getPersonMostAppeared () {
    return new Promise((resolve, reject) => {
      var PeopleModel = mongoose.model('people', PeopleSchema)
      PeopleModel.aggregate(PersonAggregates.personMostAppeared, function (err, result) {
        if (err) {
          reject(new Error(err))
        } else {
          console.log(result)
          if (result.length <= 0) {
            resolve('No Results Found')
          } else {
            resolve(result)
          }
        }
      })
    })
  }
}
const analyticsService = new AnalyticsService()
module.exports = analyticsService
