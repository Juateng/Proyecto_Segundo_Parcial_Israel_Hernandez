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
  
module.exports = mongoose.model('User', userSchema)

const usersmodel = mongoose.models.User || mongoose.model("User", userSchema)

export default usersmodel;