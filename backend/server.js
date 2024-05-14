import express from "express" 
import cors from "cors"
// const colors = require('colors')
import { connectDB }  from "./config/db.js"
import router from "./route/productosRoutes.js";
// const dotenv = require('dotenv').config()
// const {errorHandler} = require('./middleware/errorMiddleware')

connectDB();

const port = process.env.PORT || 5000
     
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// api endpoint
app.use('/api/producto',router)
app.use("/images", express.static('uploads')) 
// app.use('/api/users', require('./route/userRoutes'))


app.use(cors())
//app.use(errorHandler)

app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port, () => console.log(`Servidor inicado en el puerto ${port}`))