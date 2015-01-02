var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var socketManager = require('./socketManager.js')(io);
var router = require('./router.js')(app, socketManager);

server.listen(1337);

