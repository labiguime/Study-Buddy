exports = module.exports = (io) => {

	io.on('connection', (socket) => {
		console.log(socket.id+" has joined the socket server.");
		socket.on('disconnect', () => {
			console.log(socket.id+ " has left the server.");
		});
		//next();
		socket.on('drawing', (data) => socket.broadcast.emit('drawing', data))
		
		socket.on('video', (data) => {
			console.log(data)
			socket.emit("hello", "world");
		});

		socket.on('chat', (data) => {
			//console.log('data)
			socket.broadcast.emit("chat", data.message);
		});
	});


};