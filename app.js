import express  from "express";
import userRouter from './routes/user.js';
import taskRouter from './routes/task.js';
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import { errorMiddleWare } from "./middlewares/error.js";
import cors from "cors"
export const app=express();

config({
    path:"./data/config.env"
})
//using middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET", "POST", "PUT", "DELETE"], 
    credentials:true
}))
//Using Routes
app.use("/api/v1/users", userRouter)
app.use("/api/v1/task", taskRouter)




app.get("/", (req, res)=>{
    res.send("Hello World")
})

//using error middleware
app.use(errorMiddleWare)