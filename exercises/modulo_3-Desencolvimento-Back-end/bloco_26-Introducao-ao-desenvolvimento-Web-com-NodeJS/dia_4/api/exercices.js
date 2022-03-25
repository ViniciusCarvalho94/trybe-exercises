const express = require('express');
const app = express();

app.use(express.json());
const PORT = 3001;

// exercise 1
app.get('/ping', (_req, res) => {
  return res.status(200).json({ message: 'pong' })
})

// exercise 2
app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ "message": `Hello, ${name}` })
})

// exercise 3
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  
  if(age < 17) return res.status(401).json({ "message": "Unauthorized" })

  return res.status(200).json({ "message": `Hello, ${name}` })
})

// exercise 4
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
})

app.listen(PORT, () => {
  console.log("API:3001 ON")
})