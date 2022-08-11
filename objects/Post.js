import mongoose from "mongoose";

const Post=new mongoose.Schema({
    userId:{type:String,required:true},
    caption:{type:String,required:true},
    file:{data:Buffer},
    date:{type:String,required:true}
})


export default mongoose.model('Post',Post)
