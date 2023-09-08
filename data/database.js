import mongoose from "mongoose"
export const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URI, {
    dbName:"backendapi"
})
.then(()=>console.log("DB Connected!"))
.catch((err)=>console.log(err))
}