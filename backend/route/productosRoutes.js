const express = require('express')
const router = express.Router()
const {getProducto, crearProducto, updateProducto, deleteProducto, buscarPorSku} = require('../controllers/productosController')

router.route('/').get(getProducto).post(crearProducto)

router.route('/:sku').put(updateProducto).delete(deleteProducto).get(buscarPorSku)




module.exports = router