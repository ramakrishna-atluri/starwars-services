var mongoose = require('mongoose')
var Schema = mongoose.Schema

// Species Schema
var SpeciesSchema = new Schema({
  id: { type: Number, required: true },
  average_height: { type: String, required: true },
  average_lifespan: { type: String, required: true },
  classification: { type: String, required: true },
  created: { type: String, required: true },
  designation: { type: String, required: true },
  edited: { type: String, required: true },
  eye_colors: { type: String, required: true },
  hair_colors: { type: String, required: true },
  language: { type: String, required: true },
  name: { type: String, required: true },
  people: { type: String, required: true },
  skin_colors: { type: String, required: true },
  homeworld: { type: Number, required: true }
})

var aggregates = {
  findingSpeciesMostAppeared: [
    {
      $lookup:
              {
                from: 'films',
                localField: 'id',
                foreignField: 'species',
                as: 'films_appeared'
              }
    }, {
      $addFields: {
        films_appeared_count: { $size: '$films_appeared' }
      }
    },
    {
      $group: {
        _id: '$films_appeared_count',
        species: { $push: { _id: '$_id', name: '$name', people: '$people' } }
      }
    },
    {
      $sort: { _id: -1 }
    },
    {
      $limit: 1
    }, { $unwind: '$species' },
    { $replaceRoot: { newRoot: '$species' } }
  ]
}

module.exports = { SpeciesSchema: SpeciesSchema, SpeciesAggregates: aggregates }
