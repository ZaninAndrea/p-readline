const readline = require("readline")
const chalk = require("chalk")

function ask(q) {
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        })

        rl.question(chalk.green(q + " "), answer => {
            rl.close()
            resolve(answer)
        })
    })
}

module.exports = ask
