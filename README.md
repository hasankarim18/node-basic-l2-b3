# Node .js

### index

### [Local Module](#local-module)

### [Builtt in Moduls of node.js](#built-in-module)

### [Event Driven Archetecture node.js](#event-driven-archetecture)

# Local Module

### `Important node.js modules`

- Operating System Modules (os0)
- File System Module (fs)
- Path Module (path)
- HTTP module (url)
- Utilities Module (util)

### `Why node.js is popular?`

- We can use javascript on server side
- Build highly scalable backend application
- It is single threaded, event driven and works non blocking I/O
- Perfect building data intensive, streaming application

### `node.js` `cons`

- Not good for Highly cpu intensive tasks
- But you can do using worker threads

## `Node.js dependencies`

- V8 engine
- Libuv

##### `V8 engine`

- Node js runtime is based on V8 engine written in C++ & and Javascript.

##### `Libuv`

- Libuv is an open source library written on C++ which focuses on asynchronous I/O and gives node access to Computer OS, File Systems, Networking, etc.
- Liveuv implements two important parts of Node Js
  - `Event Loop`
    - Executes calklback functions
    - Network I/O
  - `Tread Pool` (Handle heavy tasks)
    - CPU intensive Tasks
    - File Access
    - File Compression
    - Cryptogrphy

---

# What is module, commonjs vs esm?

### `What is a module?`

- A module is an `isolated` and `reusable` block of code that has its `own scope`
- `global scope` ----> `functional scope`

### common js vs esm

- `common js`: mainly used in moduler system such as `node` use `require`
- `esm`: use `import` we use in react

- Node.js now supports ESM module from `version >= 14`

<table>
    <tr>
        <th> common js </th>
        <th> esm </th>
    </tr>
    <tr>
        <td>require</td>
        <td>import</td>        
    </tr>
    <tr>
        <td>export / module.exports</td>
        <td>export default</td>        
    </tr>
    <tr>
        <td>.js</td>
        <td>.mjs</td>        
    </tr>
</table>

### `types of modules`

#### In general modules system has three types

- Local Modules (we create)
- Built in modules (come with node.js)
- Third party modules (created by others)

### `module.exports and require`

`local.js`

```
const add = (num1, num2) => num1 + num2

const a = 10

module.exports = {
    add,
    a
}
```

`index.js`

```
const { add, a} = require("./local");

console.log(a)            // 10
console.log(add(2, 3));   // 5

```

### `exporting same name variable or fucntion form different file and require by name alias`

`name alias`

`localOne.js`

```
const add = (num1, num2) => num1 + num2

const a = 10

module.exports = {
    add,
    a
}
```

`localTwo.js`

```
const add = (num1, num2, num3) => num1 + num2 + num3

const a = 20

module.exports = {
    add,
    a
}
```

`index.js`

```
const { add, a} = require("./localOne");
const { add:add2, a:a2} = require("./localTwo");


console.log(a)            // 10
console.log(add(2, 3));   // 5

// files from localTwo
console.log(a2)                // 20
console.log(add(2, 3, 3));    // 8

```

- From the localTwo file `add` and `a` are exported as <br>
  `localTwo.js` ⬇️

```
module.exports = {
    add, a
}
```

- but when it is `require` in `index.js` function add and variable a was present previously
- so `add` and `a` has given different name it is called `name alias`
- `add:add2` ==> `add` from `localTwo` become `add2` in `index.js`
- `a:a2` ==> `a` from `localTwo` become `a2` in `index.js`

---

# Built in Module

### path

- path is a built in module of node.js

```
const path = require("path");

console.log(path.dirname("D:/Programming-Helo/p-hero-L2B3/module-7/index.js"));
```

- node modules in initially disened for unix, for windows the `path` string should converted to forward string

`D:\Programming-Helo\p-hero-L2B3\module-7\index.js` ==> `D:/Programming-Helo/p-hero-L2B3/module-7/index.js`

- backward slash `\` to forward slash `/`

## `path.join` -- for joining path

```

```

### `fs.readFileSync` `fs.writeFileSync`

- This is syncronous which is blocking

```
const fs = require("fs");
const path = require("path");

// step one
const readtext = fs.readFileSync("./components/read/readLongTxt.txt", "utf-8");

//step two
const writtingtext = fs.writeFileSync(
path.join(\_\_dirname + "/components/read/", "writtentext.txt"),
readtext
);

```

### better way of doing it is `async chronous`

`fs.readFile(path[, options], callback)`

```
const fs = require("fs");
const path = require("path");

const readAndWriteFile = fs.readFile(
  "./components/read/readLongTxt.txt",
  "utf-8",
  (err, data) => {
    if (err) {
      throw Error("Error reading text");
    } else {
      // console.log(data);
      fs.writeFile("./components/read/write.txt", data, "utf-8", (err) => {
        if (err) {
          console.log("writting file error");
        } else {
          console.log("file successfully writter");
        }
      });
    }
  }
);

```

---

# Event Driven Archetecture

- Node.js is built upon even driven architecture
- Every core module of node.js is event <br>
  `steps`

1. `First` a event will be emitted form a `emitter`
2. A `event listener` will listen the event
3. then the `event listener` will fire a `callback`

`emitter.emit()`

```
const EventEmitter = require("node:events");

const myEmitter = new EventEmitter();

// listener

myEmitter.on("greet", (arg) => {
  const guest = console.log(`Welcome "${arg}" to our house.`);
});

// emit

myEmitter.emit("greet", "hasan");

```

1. `EventEmitter` `class` is required from `node:events`, then a `instance` of that class is created `myEmitter`
2. Then a listener is created and the listener is given a name `greet` by `.on` method on `myEmitter` instance

```
const EventEmitter = require("node:events");

const myEmitter = new EventEmitter();

// listener

myEmitter.on("greet", (arg) => {
  const guest = console.log(`Welcome "${arg}" to our house.`);
});
```

3. After that perticular event is `emitted` (in case of front end it consider it as button click or any aciton)

```
myEmitter.emit("greet", "hasan");
```

4. when this `greet` event is `emited` by `emit` i.e. the greet listener will listen to it and the call back function will fire
