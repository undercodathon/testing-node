const EventEmitter = require("node:events");


class Logger extends EventEmitter{

    log(message){
        console.log(message)
     
    this.emit("messageLogged", {id : 1, url : "http://bring me life"});
    this.emit("message", "yes, yes we have");
    }
    
}

module.exports = Logger;