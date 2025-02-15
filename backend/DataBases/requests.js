const mongoose=require('mongoose');

const DB=mongoose.createConnection("mongodb://localhost:27017/requests");
DB.on("connection",()=>{
    console.log("connected successfully");
})

const reqSchema=new mongoose.Schema({
    username: String,
    password : String
})

const ReqModel=new mongoose.Model("Requests",reqSchema)

module.exports={ReqModel:ReqModel};