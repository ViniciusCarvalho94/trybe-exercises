const calc = require("./functions/calc")
const { a, b, c } = require("./functions/randomNumbers")

async function test() {
  try {
    const result = await calc(a, b, c)
    console.log(`Resultado: ${result}`)
  } catch (err) {
    console.log(err.message)
  }
}

test()