const ask = require("./index.js")

async function myAsyncFunc() {
    const answer = await ask("How are you?")
    console.log(`I'm glad you feel ${answer}`)
}

myAsyncFunc()
