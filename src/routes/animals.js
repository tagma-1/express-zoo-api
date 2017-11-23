const express = require('express');
const Animal = require('../models/animal');

const router = express.Router();

router.get('/animals', (req, res) => {
  res.json(Animal.all());
});

router.get('/animals/:id', (req, res) => {
  const id = req.params['id'];
  const animal = Animal.find(id);
  // If animal was found
  if (animal) {
    res.json(animal);
  // If animal was not found
  } else {
    res.status(404);
    res.json({
      error: `The animal with id '${id}' was not found`,
    });
  };
});

router.post('/animals', (req, res) => {
  const attributes = req.body;
  const newAnimal = Animal.create(attributes);
  res.status(201).json(newAnimal);
})

module.exports = router;