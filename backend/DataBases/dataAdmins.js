const mongoose=require('mongoose')

const DB=mongoose.createConnection("mongodb://localhost:27017/users")
DB.on("connection",()=>{
    console.log("connected");
})

const Users=mongoose.Schema({
    username : String,
    password : String
});

const UserModel=new mongoose.model("Users",Users);

module.exports= UserModel