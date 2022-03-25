const express = require('express');
const { Book } = require('../models')
const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const book = await Book.findOne({ where: { id }});

    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  };
});

router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await Book.create({ title, author, pageQuantity })

    return res.status(201).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  };
});

router.put('/:id', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;

    await Book.update({ title, author, pageQuantity }, { where: { id }});
    const book = await Book.findOne({ where: { id } });

    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await Book.destroy({ where: { id } });
    
    return res.status(204);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
})

module.exports = router;