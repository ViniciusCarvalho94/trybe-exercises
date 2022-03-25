const calc = require("./functions/calc")
const { a, b, c } = require("./functions/randomNumbers")

calc(a, b, c)
  .then((result) => console.log(`Resultado: ${result}`))
  .catch((err) => console.log(err.message))