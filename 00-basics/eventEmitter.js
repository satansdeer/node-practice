const { EventEmitter } = require("events");

const emitter = new EventEmitter();

emitter.on("event", () => {
  console.log("This is an event");
});

emitter.emit("event");
