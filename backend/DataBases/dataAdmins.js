const mongoose=require('mongoose')

const DB=mongoose.createConnection("mongodb://localhost:27017/Credentials")
DB.on("connected",()=>{
    console.log("connected");
})

const Users=new mongoose.Schema({
    username : {type: String,required : true},
    password : String
});

const UserModel=DB.model("Users",Users);

module.exports= UserModel;