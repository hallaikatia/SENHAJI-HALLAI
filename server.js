"use strict"

/* Serveur pour le site de recettes */
var express = require('express');
var mustache = require('mustache-express');

var model = require('./model');
var app = express();

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', './views');

/* Retourne une page principale */
app.get('/', (req, res) => {
  res.render('index');
});

/* Retourne les résultats de la recherche à partir de la requête "query" */
app.get('/page1', (req, res) => {
  res.render('page1');
});

app.get('/page2', (req, res) => {
  res.render('page2');
});


app.listen(3000, () => console.log('listening on http://localhost:3000'));
