import mongoose from "mongoose";

const Message=new mongoose.Schema({
    userId:{type:String,required:true},
    chatId:{type:String,required:true},
    text:{type:String,required:true},
    readed:{type:Boolean,required:true}
})


export default mongoose.model('Message',Message)
