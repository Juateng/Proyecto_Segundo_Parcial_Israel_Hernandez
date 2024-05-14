import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        .then(()=>console.log("DB conectada"));
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

// module.exports = connectDB