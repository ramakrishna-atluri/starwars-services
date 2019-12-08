const mongoose = require('mongoose')
const { FilmSchema, FilmAggregates } = require('../models/Films')
const { PeopleSchema, PersonAggregates } = require('../models/People')
const { SpeciesSchema, SpeciesAggregates } = require('../models/Species')
const { VehiclesSchema, VehiclesAggregates } = require('../models/Vehicles')

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
      var PeopleModel = mongoose.model('People', PeopleSchema, 'people')
      PeopleModel.aggregate(PersonAggregates.personMostAppeared, function (err, result) {
        if (err) {
          reject(new Error(err))
        } else {
          if (result.length <= 0) {
            resolve('No Results Found')
          } else {
            resolve(result)
          }
        }
      })
    })
  }

  getSpeciesMostAppeared () {
    return new Promise((resolve, reject) => {
      var SpeciesModel = mongoose.model('species', SpeciesSchema)
      SpeciesModel.aggregate(VehiclesAggregates.findingPlanetWithMostPilots, function (err, result) {
        if (err) {
          reject(new Error(err))
        } else {
          if (result.length <= 0) {
            resolve('No Results Found')
          } else {
            resolve(result)
          }
        }
      })
    })
  }

  getPlanetsWithMostPilots () {
    return new Promise((resolve, reject) => {
      var VehiclesModel = mongoose.model('vehicles', VehiclesSchema)
      VehiclesModel.aggregate(SpeciesAggregates.findingSpeciesMostAppeared, function (err, result) {
        if (err) {
          reject(new Error(err))
        } else {
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
