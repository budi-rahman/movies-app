const { Cast, Movie, MovieCast } = require('../models')

class MoviecastController{

    static getMovieCast(req,res){
        var id = req.params.id
        var casts
        var mv_cast  
        Cast.findAll()
        .then(data=>{
          casts = data
          return Movie.findByPk(req.params.id, {include: {model: Cast}})
        })
        .then(dataMovie=>{
          mv_cast = dataMovie
          return MovieCast.findAll({where: {MovieId : req.params.id}})
        })
        .then(role=>{
          res.render('moviecast', {mv_cast, casts, id, role})
        })
        .catch(error=>{
          res.render('error', {error})
        })
      }

    static addMovieCast(req,res){

        MovieCast.create({
            role: req.body.role,
            MovieId: req.body.mvid,
            CastId: req.body.cast,
        })
        .then(() => {
            let message = 'success added to list'
            res.redirect('/movies')
        })
        .catch(err => {
            res.send(err)
        })
    }
}


module.exports = MoviecastController