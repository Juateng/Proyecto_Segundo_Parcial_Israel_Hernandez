const mongoose = require('mongoose')

const producSchema = mongoose.Schema({
    nombre_producto: {
        type: String,
        required: [true, "Ingrese el nombre del producto"]
    },
    sku: {
        type: String,
        required: [true, "Ingrese un SKU para el producto"],
        unique: true
    },
    plataforma: {
        type: String,
        required: [true, "Ingrese una plataforma"]
    },
    precio: {
        type: String,
        required: [true, "Ingrese el precio del producto"]
    },
    fecha_lanzamiento: {
        type: String,
        required: [true, "Ingrese una fecha de lanzamiento en formato dd/mm/yy"]
    }
},{
    timestamps: true
})
  
module.exports = mongoose.model('Producto', producSchema)