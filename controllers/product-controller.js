const productModel = require("../model/productSchema");

const getProducts = async (req, res) => {
  try {
    const productrespo = await productModel.find({});

    res.status(200).json(productrespo);
  } catch (error) {
    console.log("errror while calling get products");
  }
};

module.exports = getProducts;
