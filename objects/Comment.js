import mongoose from "mongoose";

const Comment=new mongoose.Schema({
    userId:{type:String,required:true},
    text:{type:String,required:true},
    postId:{type:String,required:true},
    spacialId:{type:String,required:true}
})


export default mongoose.model('Comment',Comment)
