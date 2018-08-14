
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const api = require('./api')
app.use('/', api)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
