const express = require('express');
const router = express.Router();
const Dog = require('../models/dog');
const dogsData = require('../../data/dogsData.json');

router.get('/dogs', async (req, res) => {
  res.json(dogsData);
});

router.post('/', async (req, res) => {
  const newDogData = req.body;

  try {
    const newDog = await Dog.create(newDogData);

    res.status(201).json(newDog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create the dog' });
  }
});

module.exports = router;
