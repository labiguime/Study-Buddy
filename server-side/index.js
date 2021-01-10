const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// We setup socket.io
require('./routes/socket')(io);

app.get('/', (req, res) => {
	return res.send("You have landed on the server's main page.");
});

// We setup express
server.listen(5000, () => {
	console.log('The server is up and running on port 5000!');
});
