const calc = require("./functions/calc")

async function test() {
  try {
    const result = await calc(10, "aaa", 3)
    console.log(`Resultado: ${result}`)
  } catch (err) {
    console.log(err.message)
  }
}

test()