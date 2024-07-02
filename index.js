const EventEmitter = require("node:events");

const myEmitter = new EventEmitter();

// listener

myEmitter.on("greet", (arg) => {
  const guest = console.log(`Welcome "${arg}" to our house.`);
});

// emit

myEmitter.emit("greet", "hasan");
