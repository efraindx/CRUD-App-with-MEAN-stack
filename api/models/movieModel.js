/**
 * Created by efraindx on 29/12/2018.
 */

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	releaseYear: {
		type: Number,
		required: true
	},
	director: {
		type: String,
		required: true
	},
	genre: {
		type: String
	}
});

module.exports = mongoose.model('Movies', MovieSchema);