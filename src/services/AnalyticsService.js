const mongoose = require('mongoose')
const { FilmSchema, FilmAggregates } = require('../models/Films')

function getMovieWithLongestCrawl () {
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

module.exports = { getMovieWithLongestCrawl: getMovieWithLongestCrawl }
