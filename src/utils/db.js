import mongoose from "mongoose";
const db=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
    }catch(e){
        console.log("connection field")
    }
}   
export default db;