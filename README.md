# p-readline

`p-readline` is a Promise-based version of the `readline` module in node.

## Install

```
npm install --save p-readline
```

or

```
yarn add p-readline
```

## Usage

The api is extremely simple:

```js
const ask = require("p-readline")

ask("How are you?").then(answer => console.log(`I'm glad you feel ${answer}`))
```

If you are inside an async function you can also use the `await` notation

```js
const ask = require("p-readline")

async function myAsyncFunc() {
    const answer = await ask("How are you?")
    console.log(`I'm glad you feel ${answer}`)
}

myAsyncFunc()
```
