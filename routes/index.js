const router = require('express').Router()
const MovieController = require('../controllers/MoviesController')
const ProductionController = require('../controllers/ProductionControllers')
const CastController = require("../controllers/CastController")
const MoviecastController = require("../controllers/MoviecastController")


router.get('/', ProductionController.ProductionList)
router.get('/movies', MovieController.movieList)
router.post('/movies/add', MovieController.addMoviePost)
router.get('/movies/add', MovieController.addMovie)
router.get('/movies/edit/:id', MovieController.editMoviePost)
router.post('/movies/edit/:id', MovieController.editMovie)
router.get('/movies/delete/:id', MovieController.deleteMovie)
router.get('/cast', CastController.CastList)
router.get('/cast/add', CastController.addCast)
router.post('/cast/add', CastController.postCast)
router.get('/cast/edit/:id', CastController.editCast)
router.post('/cast/edit', CastController.posteditCast)
router.get('/cast/delete/:id', CastController.deleteCast)
router.get('/moviecast/:id', MoviecastController.getMovieCast)
router.post('/moviecast/add', MoviecastController.addMovieCast)
router.get('/cast/movies/:id', CastController.seeMovies)


module.exports = router
