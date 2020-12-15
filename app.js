const express = require('express')
const app = express()
const router = require('./routes')
//const ProductionController = require('./controllers/ProductionControllers')
const PORT = 3001

//app.get('/production', ProductionController.ProductionList)
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:false }))

app.use(router)

app.listen(PORT, () => {
    console.log(`ada di port ${PORT}`)
})