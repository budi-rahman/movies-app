const { Movie, Cast, MovieCast } = require('../models')
const getAgeRelease = require("../helper/utils")

class CastController{
    static CastList(req, res){

        Cast.findAll()
        .then(data => {
            res.render('cast', {data})
        })
        .catch(err => {
            res.send(error)
        })
    }

    static addCast (req, res){
        res.render("add_cast")
    }

    static postCast (req,res){

        console.log(req.body)

        Cast.create({
            first_name: req.body.first,
            last_name: req.body.last,
            phone_number: req.body.phone,
            birth_year: req.body.birth,
            gender:req.body.gender
        })
        .then(() => {
            let message = 'success added to list'
            res.redirect('/cast')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editCast(req, res){
        const id = req.params.id
        Cast.findAll({
            where: {id:id}
        })
        .then(data => {
            console.log(data)
            res.render('cast_edit', {data:data[0]})
        })
        .catch(err => {
            res.send(err)
        })
    }
    

    static posteditCast(req, res){
        const id = +req.body.id

        console.log(id)
        const cast = {
            first_name: req.body.first,
            last_name: req.body.last,
            phone_number: req.body.phone,
            birth_year: req.body.birth,
            gender: req.body.gender
        }
        Cast.update(cast, {where: {id: id}})
        .then(res.redirect('/cast'))
        .catch(err => res.send(err))
    }

    static deleteCast (req, res){
        const id = +req.params.id
        console.log(id)
        Cast.destroy({where: {id: id}})
        .then(res.redirect('/cast'))
        .catch(err => res.send(err))
    }

    static seeMovies(req,res){
        Cast.findByPk(req.params.id, {include: [{model: Movie}]})
        .then(data=>{
            console.log(data)
          res.render('cast_movies', {data, getAgeRelease})
        })
        .catch(error=>{
          res.send(error)
        })
      }
    
}

module.exports = CastController