const routes = require('./api/routes');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({
    message: 'Hello!'
  })
})

process.env.JWT_KEY = "thisIsMyJwtKeyUsedToEncodeTheTokens";

app.use(routes);

module.exports = app;