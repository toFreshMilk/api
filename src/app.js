const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const os = require('os')

const v1 = require('./api/v1')
const middlewares = require('./middlewares')

const app = express()
const networkInterfaces = os.networkInterfaces()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  const { address } = networkInterfaces['이더넷'][1]
  res.json({
    message: `🦄🌈✨👋🌎🌍🌏✨🌈🦄${address}`,
  })
})

app.use('/v1', v1)
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

module.exports = app
