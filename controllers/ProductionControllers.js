const { ProductionHouse, Movies } = require('../models')

class ProductionController{
    static ProductionList(req, res){
        //res.send('halaman production')

        ProductionHouse.findAll({
            includes:[Movies]
        })
        .then(data => {
            res.render('production', {data})
        })
        .catch(err => {
            res.send(error)
        })
    }
}

module.exports = ProductionController