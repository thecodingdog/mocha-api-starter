var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var mongoose = require('mongoose')
var tacosController = require('./controllers/tacos_controller')
var app = express()

mongoose.connect('mongodb://tacodb:taco123@ds115583.mlab.com:15583/placies', {
  useMongoClient: true
})

// app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.send('hello')
})

app.use('/tacos', tacosController)

// prevent the app from starting twice if tests are running.
app.listen(process.env.PORT || 3000)
console.log('Server UP at localhost:3000')

// we export the running server so we can use it in testing
module.exports = app
