const express = require('express');

const app = express();
const PORT = 3001;
app.use(express.json())

function validateNamePrice(req, res, next) {
  const { name, price } = req.body;
  
  if (!name || name === '') return res.status(400).json({ message: 'Invalid name!' });

  if (!price || price < 0) return res.status(400).json({ message: 'Invalid price!' });

  next(); 
};

app.use(validateNamePrice)

app.post('/recipes', (_req, res) => {
  
  return res.status(201).json({ message: 'Recipe created successfully!'});
});

app.listen(PORT, () => {
  console.log('API on in port 3001')
})