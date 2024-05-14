import mongoose, { mongo } from "mongoose";

const producSchema = new mongoose.Schema({
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
    },
    image: {
        type: String,
        required: [true, "Ingrese la imagen a usar"]
    }

},{
    timestamps: true
})
  
const productosmodel = mongoose.models.Producto || mongoose.model("Producto", producSchema)

export default productosmodel;