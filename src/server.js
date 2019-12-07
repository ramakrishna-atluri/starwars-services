/**
 *  This is the Starting point of Starwars services Application
 *
 *  Boostrap process is divided into below sections:
 *  1. Settig up of Routes & Middleware
 *  2. Setting up of Mongoose Connection
 *    a. connect to mongo db
 *    b. in case of Successfull Connection, Starts the Services application API.
 *
 * @Author: Ramakrishna Atluri
 */

const logger = require('./config/winston')
const express = require('express')
const router = require('./config/router')
const helmet = require('helmet')
const mongoose = require('mongoose')

// local initialization
const app = express()
const connection = connect()

// SECTION 1. Settig up of Routes & Middleware
app.get('/', (req, res) => {
  res.send('Welcome to Services portal for StarWars!')
})

// Registering Router with App
app.use('/api', router)

// Universal Error Handling for API responses
app.use(function (err, req, res, next) {
  logger.error(err.stack)
  res.status(500).send('"The greatest teacher, failure is." - Yoda. <br/> We are working to solve the issue.')
})

// Adding helmet
app.use(helmet())

// SECTION 2. Settig up of Mongoose and starting server on success
connection
  .on('error', (error) => logger.error(error))
  .once('open', listen)

function listen () {
  console.log('Received request to start app in env: ' + process.env.NODE_ENV)
  const env = process.env.NODE_ENV
  if (env === 'test') return
  app.listen(8080, () => {
    console.log('StarWars Services has started and is listening on port 8080')
  })
}

// Function responsible for Creating the Moongose Connection
function connect () {
  var options = { keepAlive: 1, useNewUrlParser: true, useUnifiedTopology: true }
  mongoose.connect('mongodb://candidate:PrototypeRocks123654@ds345028.mlab.com:45028/star-wars', options)
  return mongoose.connection
}

module.exports = app
