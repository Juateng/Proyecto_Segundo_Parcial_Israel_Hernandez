import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Por favor teclea tu nombre"]
    },
    email: {
        type: String,
        required: [true, "Por favor teclea tu email"],
        unique: true
    },
    password: {
        
        type: String,
        required: [true, "Por favor teclea tu password"]
    },
    esAdmin: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})
  
module.exports = mongoose.model('Users', userSchema)

const usersmodel = mongoose.models.Users || mongoose.model("Users", userSchema)

export default usersmodel;