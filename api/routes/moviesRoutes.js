/**
 * Created by efraindx on 29/12/2018.
 */

'use strict';
module.exports = function(app) {
	var moviesController = require('../controllers/moviesController');

	app.route('/movies')
	   .get(moviesController.movie_list)
	   .post(moviesController.movie_create);

	app.route('/movies/:movieId')
	   .get(moviesController.movie_detail)
	   .put(moviesController.movie_update)
	   .delete(moviesController.movie_delete);
};