const asyncHandler = require('express-async-handler')
const Producto = require('../models/productosModel')

const getProducto = asyncHandler(async (req, res) => {
    const productos = await Producto.find();
    res.status(200).json(productos);
});

const crearProducto = asyncHandler(async (req, res) => {
    if (!req.body.nombre_producto || !req.body.sku || !req.body.plataforma || !req.body.precio || !req.body.fecha_lanzamiento) {
        res.status(400);
        throw new Error('Faltan datos por ingresar');
    }

    // Verificar si ya existe un producto con el mismo SKU
    const existeProducto = await Producto.findOne({ sku: req.body.sku });
    if (existeProducto) {
        res.status(400);
        throw new Error('Ya existe un producto con este SKU');
    }

    // Si no existe, crear el producto
    const producto = await Producto.create({
        nombre_producto: req.body.nombre_producto,
        sku: req.body.sku,
        plataforma: req.body.plataforma,
        precio: req.body.precio,
        fecha_lanzamiento: req.body.fecha_lanzamiento
    });

    res.status(201).json(producto);
});

const updateProducto = asyncHandler(async (req, res) => {
    const productoUpdate = await Producto.findOneAndUpdate({ sku: req.params.sku }, req.body, { new: true } );

    if (!productoUpdate) {
        res.status(404);
        throw new Error('El producto no existe');
    }

    res.status(200).json({ message: `Producto actualizado: ${productoUpdate}` });
});

const deleteProducto = asyncHandler(async (req, res) => {
    const producto = await Producto.findOne({ sku: req.params.sku });

    if (!producto) {
        res.status(404);
        throw new Error('El SKU ingresado es incorrecto');
    }

    await Producto.deleteOne(producto);

    res.status(200).json({ mensaje: 'Producto eliminado correctamente', sku: req.params.sku });
});
const buscarPorSku = asyncHandler(async (req, res) => {
    const sku = req.params.sku;

    const producto = await Producto.findOne({ sku });

    if (!producto) {
        res.status(404);
        throw new Error('Producto no encontrado');
    }
    res.status(200).json(producto);
});

module.exports = {
    getProducto,
    crearProducto,
    updateProducto,
    deleteProducto,
    buscarPorSku
}