const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')

connectDB()

const port = process.env.PORT || 5000
     
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//coleccion producto y user
app.use('/api/producto', require('./route/productosRoutes')) 
app.use('/api/users', require('./route/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Servidor inicado en el puerto ${port}`))