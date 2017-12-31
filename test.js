const ask = require("./index.js")

async function myAsyncFunc() {
    const answer = await ask("How are you?", {defaultValue: "happy"})
    console.log(`I'm glad you feel ${answer}`)
    const answer2 = await ask("How are you?", {
        defaultValue: "happy",
        color: "red",
        hideDefault: true,
    })
    console.log(`I'm glad you feel ${answer2}`)
    const answer3 = await ask("How are you?", {
        defaultValue: "happy",
        color: "yellow",
        bgRgb: [0, 100, 50],
    })
    console.log(`I'm glad you feel ${answer3}`)
}

myAsyncFunc()
