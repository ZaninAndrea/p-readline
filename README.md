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

### Options

You can also pass options as a second argument.

```js
ask("How are you?", {defaultValue: "ehi"})
```

The options supported are:

* `defaultValue`(string): a fallback value if the user writes nothing
* `hideDefault`(boolean): if true does not show the default value to the user
* `password` (boolean): if true the user's input is hidden
* `color`(string): text color. Supported:
  * black
  * red
  * green
  * yellow
  * blue (On Windows the bright version is used since normal blue is illegible)
  * magenta
  * cyan
  * white
  * gray ("bright black")
  * redBright
  * greenBright
  * yellowBright
  * blueBright
  * magentaBright
  * cyanBright
  * whiteBright
* `rgb`(array): text color as rgb array. Example: `{rgb:[0,100,0]}`
* `hsl`(array): text color as hsl array. Example: `{hsl: [32,100,50]}`
* `bgColor`(string): background color. Supported:
  * Black
  * Red
  * Green
  * Yellow
  * Blue
  * Magenta
  * Cyan
  * White
  * BlackBright
  * RedBright
  * GreenBright
  * YellowBright
  * BlueBright
  * MagentaBright
  * CyanBright
  * WhiteBright
* `bgRgb`(array): background color as rgb array. Example `{bgRgb:[100,0,50]}`
* `bgHsl`(array): background color as hsl array. Example `{bgHsl:[32,100,50]}`
