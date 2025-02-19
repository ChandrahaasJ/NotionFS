const express=require("express")
const router=express.Router();
const ReqModel=require("D:\\CODES\\NotionFSTracker\\backend\\DataBases\\requests.js")
const UserModel=require("D:\\CODES\\NotionFSTracker\\backend\\DataBases\\dataAdmins.js")

router.get('/get_requests',async(req,res)=>{
    try{
        const results=await ReqModel.find();
        console.log(results);
        res.send({"results":results})
    }catch(e){
        console.log(e);
        res.status(500).send("internal server error");
    } 
})
router.post('/accept_request',async(req,res)=>{
    try{
        const {username,password}=req.body;

        const saver=new UserModel();
        await saver.save();
    }catch(e){
        console.log(e);
        res.status(500).send("error");
    }
})
module.exports=router;