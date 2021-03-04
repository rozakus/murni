const router = require('express').Router()
const ProductController = require('../controller/productController')

router.get('/products', ProductController.getAllProduct)

module.exports = router