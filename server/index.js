import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
dotenv.config()
import morgan from "morgan"
import helmet from "helmet"
import connectDB from "./config/connectDB.js"
import { connect } from "mongoose"
const app = express()
app.use(cors({
    credentials: true ,
    origin : process.env.FRONTEND_URI
}))

app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy: false
}))

const PORT = 8080 || process.env.PORT

app.get("/",(req,res)=>{
res.json({
    message: "Server is running...."
})
})
connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server is running ", PORT)
    })
})

