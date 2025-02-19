const mongoose=require('mongoose');

const DB=mongoose.createConnection("mongodb://localhost:27017/Credentials");
DB.on("connection",()=>{
    console.log("connected successfully");
})

const reqSchema=new mongoose.Schema({
    username: {type: String,required : true,unique:true},
    password : String
})

const ReqModel=DB.model("Requests",reqSchema)

module.exports=ReqModel;