'use strict';
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const { errorHandler } = require('./util/error_handling');
const { cors_Settings } = require('./util/cors_settings');
const { morgan_settings } = require('./util/logging-winston_morgan');

const app = require('express')();

app.use(morgan(morgan_settings));
app.use(cors(cors_Settings));
app.use(helmet());


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use('*', (req, res, next) => {
  res.status(404).json({message: 'Resource not Found'});
});

app.use(errorHandler);

module.exports = app;