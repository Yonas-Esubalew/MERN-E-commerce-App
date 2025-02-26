import mongoose from 'mongoose'
import dotenv from "dotenv"

dotenv.config()

if(!process.env.MONGODB_URI){
    throw new error (
        "Please provide MONGODB_URI in the .env file"
    )

}

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB connected successfully!👌")
    } catch (error) {
        console.log(
            "Mongodb Connect error", error
        )
    }
}
export default connectDB