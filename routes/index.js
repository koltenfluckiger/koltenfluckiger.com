const express = require('express');
const app = express();

const email = require('./email');

app.use('/email', email);

module.exports = app;
