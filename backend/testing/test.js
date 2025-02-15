const express=require('express')
const http=require('http')
const app=express()
const {Server}=require('socket.io')

const server=http.createServer(app);
const ws=new Server(server);

ws.on("connection",(socket)=>{
    console.log("connected to An instance of",socket.id)
    socket.emit("server-resp","connection successful");

    socket.on("A1",(message)=>{
        console.log(message);
        
    })
})


app.get('/',(req,res)=>{
    res.send("HI")
})

server.listen(3000)