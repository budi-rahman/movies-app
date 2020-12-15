const router = require('express').Router()
const MovieController = require('../controllers/MoviesController')
const ProductionController = require('../controllers/ProductionControllers')


router.get('/', ProductionController.ProductionList)
router.get('/movies', MovieController.movieList)
router.post('/movies/add', MovieController.addMoviePost)
router.get('/movies/add', MovieController.addMovie)
router.get('/movies/edit/:id', MovieController.editMoviePost)
router.post('/movies/edit/:id', MovieController.editMovie)
router.get('/movies/delete/:id', MovieController.deleteMovie)


module.exports = router
