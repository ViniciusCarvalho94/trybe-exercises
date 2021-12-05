const express = require('express');
const fs = require('fs')

const app = express();
const PORT = 3001;
const json = __dirname + '/data/simpsons.json'
let read = []

function dataFile() {
  read = fs.readFileSync(json, 'utf8')
  return (read.length > 0) ? read : void(0)
}

app.get('/simpsons', (_req, res) => {
  dataFile()

  if(read.length > 0){
    const data = JSON.parse(read)
    return res.status(200).json(data)
  }
  
  return res.status(500).json({ 'Error': '500 Internal Server Error' })
})

app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;
  const data = JSON.parse(dataFile())
  const oneId = data.find((simpsons) => simpsons.id === id)

  if (oneId) return res.status(200).json(oneId)
  
  return res.status(404).json({ 'message': 'simpson not found' })
})

app.listen(PORT, () => {
  console.log('API run in port 3001')
})