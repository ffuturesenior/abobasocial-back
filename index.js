import express from 'express'
import cors from 'cors'
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';
import UserRouter from './routers/UserRouter.js';
import PostRouter from './routers/PostRouter.js'
import ParcipiantRouter from './routers/ParcipiantRouter.js'
import MessageRouter from './routers/MessageRouter.js'
import LikeRouter from './routers/LikeRouter.js'
import CommentRouter from './routers/CommentRouter.js';
import ChatRouter from './routers/ChatRouter.js';
import FriendShipRouter from './routers/FriendShipRouter.js';
import p2pChatRouter from './routers/p2pChatRouter.js';
import dotenv from 'dotenv/config'
import bodyParser from 'body-parser'
import multer from 'multer'

//import cors from './middleware/cors.middleware.js';
const PORT=process.env.PORT||5000;
const DB_URL=`mongodb+srv://aboba:aboba@cluster0.e91r802.mongodb.net/?retryWrites=true&w=majority`


const app=express();
app.use(bodyParser.urlencoded(
    { extended:false }
))

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
 

var upload = multer({ storage: storage })


app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use(express.static('static'))
app.use('/aboba',UserRouter)
app.use('/aboba',PostRouter)
app.use('/aboba',ParcipiantRouter)
app.use('/aboba',MessageRouter)
app.use('/aboba',LikeRouter)
app.use('/aboba',CommentRouter)
app.use('/aboba',ChatRouter)
app.use('/aboba',FriendShipRouter)
app.use('/aboba',p2pChatRouter)

async function StartApp(){
    try{
        await mongoose.connect(DB_URL,{useUnifiedTopology:true,useNewUrlParser:true})
        app.listen(PORT,()=>{console.log("working")})
    }catch(e){
        console.log(e)
    }
}
StartApp()

app.get('/',(req,res)=>{
    res.status(200).json(req.body)
})