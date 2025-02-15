const {io} = require('socket.io-client');

const socket=new io('http://localhost:3000');

socket.on("connect",()=>{
    console.log("connected");
    socket.on("server-resp",(message)=>{
        console.log(message);
    })
})