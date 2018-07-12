var express = require('express');
var http = require('http');
var socketIO = require('socket.io');

var app = express();
var server = http.createServer(app);

var io = socketIO(server);

var points=[];

io.on('connection',(socket)=>{
    console.log('alguien se ha conectado!');
    
    points.forEach(p=>{
        socket.emit('point_added',p);
    })

    socket.on('add_point',(point)=>{
        
        points.push(point);
        
        console.log('alguien agregó un punto',point);
        io.sockets.emit('point_added',point);
    });

    socket.on('disconnect',()=>{
        console.log('alguien se ha ido');
    })
});

app.get('/',(req,res)=>{
    res.send(new Date());
});

server.listen(4000,()=>{
    console.log('Server listening on port 4000')
});