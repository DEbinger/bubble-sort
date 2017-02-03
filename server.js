/*jshint esversion:6
*/
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');
const bubble = require('../index.js');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const hbs = handlebars.create({
  extname: '.hbs',
  defaultLayout: 'app'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', products);
});

app.listen(PORT, () => {
  console.log('currently listening on port', PORT);
});

module.exports = app;