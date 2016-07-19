const express = require('express');
const config = require('./data/config');
const home = require('./components/home');

const app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.locals.env = app.settings.env;

app.get('/', (req, res) => res.render('index', { markup: home() } ) );

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});