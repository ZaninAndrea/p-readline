const readline = require("readline")
const chalk = require("chalk")

function titleCase(str) {
    let newString = str
    newString[0] = newString[0].toUpperCase()
    return newString
}

function ask(question, option) {
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        })

        const questionText = option
            ? option.defaultValue
              ? option.hideDefault
                ? `${question} `
                : `${question} (${option.defaultValue}) `
              : `${question} `
            : `${question} `

        let formatter = chalk
        if (
            option &&
            Object.keys(option).length -
                (option.hasOwnProperty("defaultValue") ? 1 : 0) -
                (option.hasOwnProperty("hideDefault") ? 1 : 0) !==
                0
        ) {
            if (option.color) {
                formatter = formatter[option.color]
            } else if (option.rgb) {
                formatter = formatter.rgb(
                    option.rgb[0],
                    option.rgb[1],
                    option.rgb[2]
                )
            } else if (option.hsl) {
                formatter = formatter.hsl(
                    option.hsl[0],
                    option.hsl[1],
                    option.hsl[2]
                )
            }

            if (option.bgColor) {
                formatter = formatter["bg" + titleCase(option.bgColor)]
            } else if (option.bgRgb) {
                formatter = formatter.bgRgb(
                    option.bgRgb[0],
                    option.bgRgb[1],
                    option.bgRgb[2]
                )
            } else if (option.bgHsl) {
                formatter = formatter.bgHsl(
                    option.bgHsl[0],
                    option.bgHsl[1],
                    option.bgHsl[2]
                )
            }
        } else {
            formatter = chalk.green
        }

        rl.question(formatter(questionText), answer => {
            rl.close()

            if (option && option.defaultValue && answer === "")
                answer = option.defaultValue

            resolve(answer)
        })
    })
}

module.exports = ask
