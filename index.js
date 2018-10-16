var Mqtt = require('./mqtt');
var WebSocket = require('./webSocket');

try {
    new WebSocket();
    new Mqtt();
} catch (e) {
    console.log(e);
}
