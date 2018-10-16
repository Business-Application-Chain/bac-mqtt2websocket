var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});

var privated={}, self, conArray = [];

function WebSocket() {

    self = this;
    self.__private = privated;
    privated.initWebSocket();
}
privated.initWebSocket = function() {
    server.listen(8081, function() {
        console.log((new Date()) + ' Server is listening on port 8081');
    });
    let wsServer = new WebSocketServer({
        httpServer: server,
        autoAcceptConnections: false
    });

    wsServer.on('request', function(request) {
        if (!originIsAllowed(request.origin)) {
            // Make sure we only accept requests from an allowed origin
            request.reject();
            console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
            return;
        }

        var connection = request.accept('echo-protocol', request.origin);
        console.log((new Date()) + ' Connection accepted.');
        connection.on('message', function(message) {
            if (message.type === 'utf8') {
                console.log('Received Message: ' + message.utf8Data);
                connection.sendUTF(message.utf8Data);
            }
            else if (message.type === 'binary') {
                console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
                connection.sendBytes(message.binaryData);
            }
        });
        conArray.push(connection);
        connection.on('close', function(reasonCode, description) {
            conArray.remove(connection);
            console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
        });
    });
};


function originIsAllowed(origin) {
    return true;
}

WebSocket.prototype.send = function (data, cb) {
    if(!conArray) {
        cb('socketConnect do not ready');
    } else {
        conArray.forEach(function (itemSocket) {
            itemSocket.sendUTF(data);
            console.log('address -> ', itemSocket.remoteAddress);
            console.log('socket msg -> ', data);
        });
    }
};

Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};

Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};



module.exports = WebSocket;
