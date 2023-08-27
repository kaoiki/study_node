var events = require ('events');
var eventEmitter = new events.EventEmitter();

var listenerOne = function listenerOne() {
    console.log('listener one running');
}

var listenerTwo = function listenerTwo() {
    console.log('listener two running');
}

eventEmitter.addListener('connection',listenerOne);

eventEmitter.on('connection',listenerTwo);

var listenerCount = eventEmitter.listenerCount('connection');

console.log(listenerCount + "个监听器");

eventEmitter.removeListener('connection',listenerOne);

var listenerCount = eventEmitter.listenerCount('connection');

console.log(listenerCount + "个监听器");

eventEmitter.emit('connection');


