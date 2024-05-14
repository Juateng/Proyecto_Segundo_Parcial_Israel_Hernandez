import express from 'express'
import { login, register, showdata, updateByEmail, deleteByEmail } from '../controllers/userController.js'
import multer from "multer"
import router from "./route/productosRoutes.js";
import protect from "../middleware/authMiddleware.js"

router.post('/login', login)
router.post('/register', register)
router.get('/showdata', protect,showdata)
router.put('/update/:email',protect, updateByEmail)
router.delete('/delete/:email',protect, deleteByEmail)

module.exports = router