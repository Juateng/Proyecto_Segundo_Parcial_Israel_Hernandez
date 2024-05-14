
import asyncHandler from "express-async-handler"
import productosmodel, * as Producto from '../models/productosModel.js';
import fs from "fs"

//mostrar productos
const getProducto = asyncHandler(async (req, res) => {
    try{
        const productos = await productosmodel.find({});
        res.json({success:true, data: productos})
    }catch(error){
        console.log(error);
        res.json({success: false, message:"Error"})
    }
});

//añadir producto
const crearProducto = asyncHandler(async (req, res) => {
    if (!req.body.nombre_producto || !req.body.sku || !req.body.plataforma || !req.body.precio || !req.body.fecha_lanzamiento) {
        res.status(400);
        throw new Error('Faltan datos por ingresar');
    }

    // Verificar si ya existe un producto con el mismo SKU
    // const existeProducto = await Producto.findOne({ sku: req.body.sku });
    // if (existeProducto) {
    //     res.status(400);
    //     throw new Error('Ya existe un producto con este SKU');
    // }

    let image_filename = `${req.file.filename}`;
    // Si no existe, crear el producto
    const producto = new productosmodel({
        nombre_producto: req.body.nombre_producto,
        sku: req.body.sku,
        plataforma: req.body.plataforma,
        precio: req.body.precio,
        fecha_lanzamiento: req.body.fecha_lanzamiento,
        image: image_filename
    });

    try{
        await producto.save();
        res.status(201).json({success:true, message:"producto añadido"});

    }catch (error){
        console.log(error)
        res.json({success:false, message: "Error"})
    }
    
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

export {crearProducto, getProducto, updateProducto, deleteProducto, buscarPorSku}