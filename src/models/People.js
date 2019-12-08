var mongoose = require('mongoose')
var Schema = mongoose.Schema

// People Schema
var PeopleSchema = new Schema({
  _id: { type: Number, required: false },
  birth_year: { type: String, required: false },
  created: { type: String, required: false },
  edited: { type: String, required: false },
  eye_color: { type: String, required: false },
  gender: { type: String, required: false },
  hair_color: { type: String, required: false },
  height: { type: String, required: false },
  mass: { type: String, required: false },
  name: { type: String, required: false },
  skin_color: { type: String, required: false },
  person: { type: Array, required: false }
}, { strict: false })

var aggregates = {
  personMostAppeared: [
    {
      $lookup:
           {
             from: 'films',
             localField: 'id',
             foreignField: 'characters',
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
        person: { $push: '$name' }
      }
    }, {
      $addFields: {
        appeared_count: '$_id'
      }
    },
    { $project: { _id: 0, person: 1, appeared_count: 1 } },
    {
      $sort: { _id: -1 }
    }, {
      $limit: 1
    }, {
      $unwind: '$person'
    }
  ]
}

module.exports = { PeopleSchema: PeopleSchema, PersonAggregates: aggregates }
// homeworld - number (references planets collection)
