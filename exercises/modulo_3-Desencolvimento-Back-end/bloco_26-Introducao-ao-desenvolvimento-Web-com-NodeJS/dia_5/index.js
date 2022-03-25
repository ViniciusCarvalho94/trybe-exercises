const express = require('express');
const validateRegister = require('./middleware/validateRegister')

const app = express();
const PORT = 3001;
app.use(express.json())

app.post('/user/register', validateRegister, (req, res) => {
  const { username, email, password } = req.body;


});

app.listen(PORT, () => {
  console.log('API on in port 3001')
})