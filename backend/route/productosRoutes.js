import express from 'express'
import { crearProducto, getProducto, updateProducto, buscarPorSku, deleteProducto } from '../controllers/productosController.js'
import multer from "multer"

const router = express.Router()
//const {getProducto, crearProducto, updateProducto, deleteProducto, buscarPorSku} = require('../controllers/productosController')

//sistema de guardado de imagenes ISE
const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req,file, cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

router.post("/add",upload.single("image"),crearProducto)
router.get("/list",getProducto)
//router.route('/').get(getProducto).post("/add",crearProducto)
//router.route('/:sku').put(updateProducto).delete(deleteProducto).get(buscarPorSku)

export default router;