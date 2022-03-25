const fs = require("fs").promises

// __dirname se refere ao PWD do arquivo
const simpsonsJson = __dirname + "/data/simpsons.json"
const simpsonsFamilyJson = __dirname + "/data/simpsonsFamily.json"

async function readFileSimpsons() {
  const dataSimpsonsJson = JSON.parse(await fs.readFile(simpsonsJson, "utf8"))
  console.log(dataFile)
  try {
    dataSimpsonsJson.map(({id, name}) => console.log(`${id} - ${name}`) )
  } catch {
    console.log("Erro ao ler o arquivo")
  }
}

async function rewriteFileSimpsons() {
  let dataSimpsonsJson = JSON.parse(await fs.readFile(simpsonsJson, "utf8"))
    .filter(({id}) => id !== "10" && id !== "6")
  await fs.writeFile(simpsonsJson, JSON.stringify(dataSimpsonsJson))
}

async function createSimpsonsFamily() {
  const dataSimpsonsJson = JSON.parse(await fs.readFile(simpsonsJson, "utf8"))
    .filter(({id}) => id <= 4 )
  await fs.writeFile(simpsonsFamilyJson, JSON.stringify(dataSimpsonsJson))
}

async function rewriteFileSimpsonsFamily() {
  const dataSimpsonsJson = JSON.parse(await fs.readFile(simpsonsJson, "utf8"))
    .find(({name}) => name === "Nelson Muntz")
  const dataSimpsonsFamilyJson = JSON.parse(await fs.readFile(simpsonsFamilyJson, "utf8"))
  dataSimpsonsFamilyJson.push(dataSimpsonsJson)
  await fs.writeFile(simpsonsFamilyJson, JSON.stringify(dataSimpsonsFamilyJson))
}

function replace() {
  return fs.readFile('./simpsonsFamily.json', 'utf8')
    .then((fileContent) => JSON.parse(fileContent))
    .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8'))
    .then((simpsonsWithoutNelson) => simpsonsWithoutNelson.concat([{ id: '8', name: 'Maggie Simpson' }]))
    .then((simpsonsWithMaggie) => fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie)));
}

async function replaceNelsonFamily() {
  const maggie = { id: '5', name: 'Maggie Simpson' }
  const data = JSON.parse(await fs.readFile(simpsonsFamilyJson, "utf8"))
  const filterNelson = data.filter(({ name }) => name !== "Nelson Muntz")
  filterNelson.push(maggie)
  return await fs.writeFile(simpsonsFamilyJson, JSON.stringify(filterNelson))
}

async function test() {
  const data = JSON.parse(await fs.readFile(simpsonsFamilyJson, "utf8"))
  console.log(data)
}

test()