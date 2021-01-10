exports = module.exports = (io) => {

	io.on('connection', (socket) => {
		console.log(socket.id+" has joined the socket server.");
		socket.on('disconnect', () => {
			console.log(socket.id+ " has left the server.");
		});
		//next();
	});
};