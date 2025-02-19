const express=require('express')
const app=express();
const ReqModel=require("D:\\CODES\\NotionFSTracker\\backend\\DataBases\\requests.js")
const UserModel=require("D:\\CODES\\NotionFSTracker\\backend\\DataBases\\dataAdmins.js")
const adminrouter=require("D:\\CODES\\NotionFSTracker\\backend\\main\\Routes\\adminAPIs.js")
const userRouter=require("D:\\CODES\\NotionFSTracker\\backend\\main\\Routes\\requestsAPIs.js")

app.use(express.json());
app.use("/admin",adminrouter);
app.use("/requests",userRouter)


app.listen(3000,()=>{
    console.log("listening on 3000");
})