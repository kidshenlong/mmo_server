var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');//file writing

server.listen(3000, function(){
	console.log('listening on *:3000');
});

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});


var player = require('./modules/player.js');
var client = require('./modules/client.js');
var activePlayers = {};
var fakeTime = 0;

io.on('connection', function(socket){
	console.log('a user connected');
	/*var newPlayer = new player({
		client : new client()
	});
	io.emit('init', newPlayer);*/
	var newPlayer = new player({
		owner_id : socket.id
	});
	//activePlayers.push(newPlayer.owner_id);


	activePlayers[socket.id] = newPlayer;
	console.log(socket.id);
	socket.emit('game.init', {
		player_id : newPlayer.id
	});
	console.log('Active Players', activePlayers);

	socket.on('disconnect', function(){
		delete activePlayers[socket.id];
		console.log('Disconnect at: ', socket.id);
	});
});
setInterval(function(){
	fakeTime++;
	io.sockets.emit('game.update',{
		data: 'lots of new data',
		time: fakeTime
	});
}, 500);