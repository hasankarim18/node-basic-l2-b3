# Node .js

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
