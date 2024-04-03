const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

const v1 = require('./api/v1')
const middlewares = require('./middlewares')

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())

app.use('/v1', v1)
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

module.exports = app
