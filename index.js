const express = require('express');
const config = require('./data/config');
const home = require('./components/home');

const app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.locals.env = app.settings.env;

app.use('/', express.static('public'));

app.get('/', (req, res) => res.render('index', { markup: home(config[0]) } ) );
app.get('/2', (req, res) => res.render('index', { markup: home(config[1]) } ) );

app.listen(3000, () => console.log('Example app listening on port 3000!') );