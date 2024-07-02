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
