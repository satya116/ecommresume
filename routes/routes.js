const router = require('express').Router()


const { Login, Signup } = require('../controllers/user-controller')

const getProducts = require('../controllers/product-controller')

const getProuctById = require('../controllers/productByIdController')





router.post('/signup', Signup )

router.post('/login', Login )

router.get('/getproducts', getProducts)

router.get('/getproduct/:id', getProuctById)


module.exports = router;