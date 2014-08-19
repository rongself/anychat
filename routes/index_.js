var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//app.use(express.static(__dirname + '/bower_components'));
app.get('/',function(req,res){
	res.sendfile('index.html');
});

io.on('connection',function(socket){
	console.log('some one connected');
	socket.on('message_send',function(msg){
		if(msg!=''){
			io.emit('message_send',msg);
		}
	});
	socket.on('disconnect',function(socket){
		console.log('some one disconnected');
	});
});

http.listen(3000,function(){
	console.log('listening on *:3000');
});