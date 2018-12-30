let express = require('express');
let socket = require('socket.io');
let xss = require('xss');
let moment = require('moment');

let app = express();
let port = process.env.PORT || 5000;

let server = app.listen(port, function(){
    console.log('listening on ' + port);
});

app.use(express.static('public'));

let io = socket(server);

io.on('connection', function(socket) {
    console.log(socket.id + " connected");

    socket.on('chat', function(data) {

        let messege = xss(data.message);

        io.sockets.emit('chat', {
            message: messege,
            time: moment().format('h:mm:ss a')
        });
    });
});