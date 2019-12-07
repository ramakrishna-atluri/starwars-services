const logger = require('./config/winston')
const express = require('express')
const app = express()
const router = require('./config/router')

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

app.listen(8080, () => {
  console.log('StarWars Services has started and is listening on port 8080')
})
