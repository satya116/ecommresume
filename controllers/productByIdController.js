const productModel = require("../model/productSchema");


const getProuctById = async (req, res)=>{

    try{
        const product =  await productModel.findOne({ id: req.params.id  })

    res.status(200).json({product})

    }catch(err){
        console.log('Error: ', err.message);
    }



}

module.exports = getProuctById;