var express = require('express');
var app = express();
var pg=require('pg');
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static('chat'));
//Connection for postgres database.
var conString="postgres://postgres:password@localhost:5432/Test";
var client = new pg.Client(conString);
client.connect();

io.on('connection', function(socket){
	socket.on("Message",function(msg){
		console.log("Message from browser "+msg);
		socket.broadcast.emit('hi');
		
	});	
	console.log("User connected");
    socket.on("disconnect",function(){
		console.log("user disconnected");
	});
});
http.listen(3000, function(){
    console.log('listening on *:3000');
});