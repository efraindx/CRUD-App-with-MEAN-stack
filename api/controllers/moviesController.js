/**
 * Created by efraindx on 29/12/2018.
 */


'use strict';

var mongoose = require('mongoose');
Movie = mongoose.model('Movies');

exports.movie_list = function(req, res) {
	Movie.find({}, function(err, movies){
		if (err)
			res.send(err);
		res.json(movies);
	});
};

exports.movie_create = function(req, res) {
	var newMovie = new Movie(req.body);
	newMovie.save(function(err, movie){
		if (err)
			res.send(err);
		res.json(movie);
	});
};

exports.movie_detail = function(req, res) {
	Movie.findById(req.params.movieId, function(err, movie){
		if (err)
			res.send(err);
		res.json(movie);
	});
};

exports.movie_update = function(req, res) {
	Movie.findOneAndUpdate({_id: req.params.movieId}, req.body, {new: true}, function(err, movie) {
		if (err)
			res.send(err);
		res.json(movie);
	});
};

exports.movie_delete = function(req, res) {
	Movie.remove({_id: req.params.movieId}, function(err, movie) {
		if (err)
			res.send(err);
		res.json({message: 'Movie deleted'});
	});
};