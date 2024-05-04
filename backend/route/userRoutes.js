const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')

const {login, register, showdata, updateByEmail, deleteByEmail} = require('../controllers/userController')
router.post('/login', login)
router.post('/register', register)
router.get('/showdata', protect,showdata)
router.put('/update/:email',protect, updateByEmail)
router.delete('/delete/:email',protect, deleteByEmail)

module.exports = router