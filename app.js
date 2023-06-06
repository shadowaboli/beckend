const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT,()=>{
console.log('Server is Stared on ', PORT);
});

const io = require ('socket.io')(server);

io.on('connection',(socket)=>{
    console.log("Connected Successfully.",socket.id);
    socket.on('disconnect',()=>{
        console.log("disconnected",socket.id);
    });
    socket.on("message",(data)=>{
        console.log(data);
        socket.broadcast.emit('massage-receive',data);
    });
});