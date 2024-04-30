# Node JS Examples

Documentation: 
https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
https://docs.npmjs.com/about-npm

## What I've learned

## What is `node.js`?

Node.js is a powerful and versatile runtime enviroment that allows you to run JavaScript outside of the browser (Firefox or Google Chrome). Also it allows developer to use it for server-side scripting.

## Why can it run JavaScript outside of the browser environment?

Node.js includes `modules` that allow it to interact with the file system (files on your computer). It uses the V8 engine, the same JavaScript engine used by Google Chrome, to process and execute JavaScript. This enables Node.js to run JavaScript code outside of a browser environment, allowing for server-side scripting and various back-end functionalities.

### Example:

**index.html**

```html
<script type="text/javascript"> src="index.mjs"></script>
<!-- OR -->
<script type="module"> src="index.mjs"></script>
```
* The`.mjs` extension indicates that it uses ES Modules, which are supported by Node.js.
* Node will treat the file as ES Module regardless of the `content-type`.

**index.js**

```javascript

console.log("hello");

```
* When I run `node index.mjs` in my terminal, I see the console log message 'hello'. This demonstrates how JavaScript can be executed locally. This execute the JavaScript code in the .mjs file.

## What will happen if I don't use the `.mjs` extension?

When you run `node index.js` without using the `.mjs` extension, the terminal will return a warning message: "To load an ES module, set "type": "module" in the package.json or use the .mjs extension." The example above demonstrated that we were using the .mjs extension. The following example demonstrates how you can use the .js extension and still be able to run Node.js in your terminal.

## Use ES Module syntax in `.js`

We would need to set up "type": "module" in the package.json. This tells Node.js to treat all .js files as ES Modules.

### 1. How to create package.json in your project directory:

```terminal
npm init
```

* This command will prompt you to enter details about your project (package name, description, entry-point: index.js, author, license) 
* It generates a `package.json` file and keeps track of the project's dependencies, scripts, and other metadata.

### 2. How to set up module in the package.json file:

```package json
"scripts": {
    "start": "node index.js"
},

"type": "module",

```
* In the `scripts` object of a package.json file, the entry `"start": "node index.js"` defines the script that can be run with the command `npm start`. This script simply instructs Node.js to execute the index.js file.
* `"type": "module"`, this will tell Node.js to treat .js files as ES Modules.

## What is `npm`, and why is it always associated with `Node.js`?

* `npm` aka `node package manager`, think about like a utility package, which allows developer to use libraries, packages and install dependencies. 
* It is closely associated with Node.js because it is the default package manager for Node.js applications. npm makes it easy to share and reuse code, and it provides access to a vast registry of JavaScript libraries and applications.

