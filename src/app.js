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

app.get('/price/estimate', async (req, res) => {
  // const ip = req.header
  const proc = await axiosInstance.sendRequest('Callcenter_Get_Dev', req.body)
  res.json(proc)
})

app.use('/order', order)
app.use('/callcenter', callcenter)

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

module.exports = app
