 const {products} = require('./constants/data')

 const productModel = require('./model/productSchema')



const defaultData= async ()=>{

    try{
        await productModel.deleteMany({})

        await productModel.insertMany(products)

        console.log("Product insert Succesfully");


    }catch(err){
        console.log("Errror: ", err.message);

    }

    

}



module.exports = defaultData