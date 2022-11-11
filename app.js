const EventEmitter = require("node:events");


// var files = fs.readdirSync("./")

// console.log(files);







const Logger = require("./logger");

const logger = new Logger();


logger.on("messageLogged", function(eventArg){
    console.log("horraay", eventArg);
})

logger.on("message", arg=>{
    console.log("we've done this before, haven't we?", arg);
})

logger.log("message");