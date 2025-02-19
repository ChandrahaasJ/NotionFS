const express=require('express');
const router=express.Router();
const ReqModel=require("D:\\CODES\\NotionFSTracker\\backend\\DataBases\\requests.js")

router.delete('/delete_request',async(req,res)=>{
    try{
        const {username}=req.body;
        if(!username){
            res.send({"message":"username is required"})
        }else{
            const del=await ReqModel.findOneAndDelete({username});
            if(!del){
                res.status(404).send({"message":"user not found"})
            }else{
                res.status(200).send({"message":"deleted successfully"});
            }
        }
    }catch(e){
        console.log(e);
        res.status(500).send({"message":"error occurred"})
    }
})

router.post('/make_new_request',async(req,res)=>{
    try{
        const { username, password } = req.body;
        const saver=new ReqModel({ username, password });
        try{
            await saver.save();
            res.status(200).send({"message":"requested access"})
        }catch(e){
            if(e.code===11000){
                res.status(401).send({"message":"Email already exists"});
            }else{
                res.send({"message":"error occurred"});
            }
        }
    }catch(e){
        console.log(e);
        res.status(500).send({"message":"Internal server error"});
    }
})


module.export=router