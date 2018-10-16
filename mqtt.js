var mqtt = require('mqtt');
var webSocketHelper = require('./webSocket');

var url = 'mqtt://172.31.10.46:1881';

var privated = {}, client, self;
var options = {
    username: '',
    password: '',
    clientId: 'Nodejs-ed16ef77-5cf2-4e5c-b511-1af14451df58'
};
function Mqtt() {
    self = this;
    self.__private = privated;
    client = mqtt.connect(url, options);
    privated.initMqtt();
}

privated.initMqtt = function() {
    client.on('connect', function () {
        client.subscribe('t5', function (err) {
            if (!err) {
                client.publish('presence', 'Hello mqtt')
            } else {
                console.log(err);
            }
        })
    });
    client.on('message', function (topic, message) {

        webSocketHelper.prototype.send(message.toString(), function (err) {
            if(err) {
                console.log(err);
            }
        });
    });
};

module.exports = Mqtt;
