const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({

    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    descr: String,
    discount: String,
    tagline: String

})


const productModel = mongoose.model('product', productSchema )


module.exports = productModel