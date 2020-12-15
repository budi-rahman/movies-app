const { Movie, ProductionHouse } = require('../models')

class MovieController{
    static movieList(req, res){
        Movie.findAll({order : [
            ['released_year', 'DESC']], 
        include: [ProductionHouse]
        })
        .then(data =>{
            console.log(data[0].ProductionHouse.pr)
            res.render('movies', {data})
        })
        .catch(error =>{
            res.send(err)
        })
    }

    static addMovie(req, res){
        res.render('add')
    }

    static addMoviePost(req, res){
        Movie.create({
            name: req.body.name,
            genre: req.body.genre,
            released_year: req.body.released_year,
            ProductionHouseId: req.body.ProductionHouseid
        })
        .then(() => {
            let message = 'success added to list'
            res.redirect('/movies')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editMoviePost(req, res){
        const id = req.params.id
        let ProductionData = null
        ProductionHouse.findAll({
            order: [
                ["name_prodHouse", "ASC"]
            ]
        })
        .then(data => {
            ProductionData = data;
            return Movie.findAll({
                include: ProductionHouse,
                where: {id:id},
                order: [
                    ["released_year", "DESC"]
                ]
            })
        })
        .then(data => {
            res.render('edit', {data:data[0]})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editMovie (req, res){
        const id = +req.body.id
        const movie = {
            name: req.body.name,
            released_year: req.body.released_year,
            genre: req.body.genre,
            createdAt: new Date(),
            updateAt: new Date()
        }
        Movie.update(movie, {where: {id: id}})
        .then(res.redirect('/movies'))
        .catch(err => res.send(err))
    }

    static deleteMovie (req, res){
        const id = +req.params.id
        Movie.destroy({where: {id: id}})
        .then(res.redirect('/movies'))
        .catch(err => res.send(err))
    }
}

module.exports = MovieController