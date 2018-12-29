var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
Movie = require('./api/models/movieModel');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/moviesservicedb');

app.use(express.static("app"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var moviesRoutes = require('./api/routes/moviesRoutes');
moviesRoutes(app);

app.listen(port);

console.log('Movies API server started on: ' + port);