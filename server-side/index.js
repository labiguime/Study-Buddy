const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

server.listen(3000, () => {
	console.log('The server is up and running on port 3000!');
});