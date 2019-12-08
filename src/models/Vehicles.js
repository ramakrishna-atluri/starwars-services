var mongoose = require('mongoose')
var Schema = mongoose.Schema

// Vehicles Schema
var VehiclesSchema = new Schema({
  id: { type: Number, required: true },
  home: { type: String, required: false },
  pilots: { type: Array, required: false }
}, { strict: false })

var aggregates = {
  findingPlanetWithMostPilots: [
    {
      $match: { 'pilots.0': { $exists: true } }
    }, {
      $lookup:
           {
             from: 'people',
             localField: 'pilots',
             foreignField: 'id',
             as: 'people_driving'
           }
    }, { $unwind: '$people_driving' },
    { $replaceRoot: { newRoot: '$people_driving' } },
    {
      $group: {
        _id: '$_id',
        pilot_person_id: { $max: '$id' }
      }
    }, {
      $lookup:
           {
             from: 'people',
             localField: 'pilot_person_id',
             foreignField: 'id',
             as: 'pilot'
           }
    }, { $unwind: '$pilot' },
    { $replaceRoot: { newRoot: '$pilot' } },
    {
      $lookup:
           {
             from: 'species',
             localField: 'id',
             foreignField: 'people',
             as: 'specie'
           }
    }, {
      $lookup:
           {
             from: 'planets',
             localField: 'homeworld',
             foreignField: 'id',
             as: 'home'
           }

    }, { $unwind: '$home' },
    {
      $group: {
        _id: '$home._id',
        home: { $max: '$home.name' },
        pilots: { $push: { _id: '$_id', name: '$name', species: '$specie.name', planet: '$home.name' } }
      }
    }
  ]
}

module.exports = { VehiclesSchema: VehiclesSchema, VehiclesAggregates: aggregates }
