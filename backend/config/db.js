import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://JuanBalam1510:DgtxKSP7zR1BqOCd@cluster0.8kx07jx.mongodb.net/star_rail_videogame_shop?')
        .then(()=>console.log("DB conectada"));
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

// module.exports = connectDB