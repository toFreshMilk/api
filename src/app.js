const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');
const order = require('./order');
const callcenter = require('./callcenter');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.get('/price/estimate', (req, res) => {
  res.json({
    message: '예상 가격 조회 🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use('/order', order);
app.use('/callcenter', callcenter);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
