const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const axiosInstance = require('./common/axios')

require('dotenv').config()

const middlewares = require('./middlewares')
const order = require('./api/order')
const callcenter = require('./api/callcenter')

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  })
})

app.get('/price/estimate', (req, res) => {
  axiosInstance
    .post('', {
      sqlcmd: 'select_AvailableSP4WEB',
      params: [],
    })
    .then((response) => {
      // console.log(response.data)
      res.json({
        message: response.data,
      })
    })
    .catch((err) => {
      // console.log(err)
      res.json({
        message: err,
      })
    })
})

app.use('/order', order)
app.use('/callcenter', callcenter)

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

module.exports = app
