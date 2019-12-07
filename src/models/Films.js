var mongoose = require('mongoose')
var Schema = mongoose.Schema

// Film Schema
var FilmSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  opening_crawl: { type: String, required: true },
  created: { type: String, required: true },
  director: { type: String, required: true },
  edited: { type: String, required: true },
  episode_id: { type: Number, required: true },
  producer: { type: String, required: true },
  release_date: { type: String, required: true }
})

var aggregates = {
  findinglongestCrawl: [
    {
      $addFields: {
        crawl_length: { $strLenCP: '$opening_crawl' }
      }
    },
    {
      $sort: { crawl_length: -1 }
    },
    {
      $limit: 10
    }
  ]
}

module.exports = { FilmSchema: FilmSchema, FilmAggregates: aggregates }

/*
characters - an array of numbers (references people collection)
planets - an array of numbers (references planets collection)
species - an array of numbers (references species collection)
starships - an array of numbers (references starships collection)
vehicles - an array of numbers (references vehicles collection)
 */
