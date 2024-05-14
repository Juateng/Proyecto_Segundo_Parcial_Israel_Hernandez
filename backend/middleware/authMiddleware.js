const jwt = require('jsonwebtoken')
import usersmodel from '../models/userModel.js'
import asyncHandler from "express-async-handler"

const protect = asyncHandler( async (req, res ,next) => {
    //obtenemos el token 
    let token
    
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            //obtenemos el token
            token = req.headers.authorization.split(' ')[1]
    
            //verificamos las forma del token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            
            //obtener los datos del usuario del payload del token y lo vamos a poner en un objeto
            req.user = await usersmodel.findById(decoded.idusuario).select('-password')

            next()

        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Acceso no autorizado')
        }
    }
    
    if(!token){
        res.status(401)
        throw new Error('Acceso no autorizado, no proporcionaste el token')
    }

})

export default protect;