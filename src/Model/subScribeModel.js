import mongoose, { models } from "mongoose";
const subscribe=mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    message:{type:String,require:true}
})
export default mongoose.models.subscribe || mongoose.model('subscribe',subscribe)