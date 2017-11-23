const express = require('express');

const router = express.Router();

let animals = [
  {
    name: 'Bonobo',
    count: 15
  },
  {
    name: 'Rhinoceros',
    count: 4
  },
  {
    name: 'Giraffe',
    count: 8
  }
]
router.get('/animals', (req, res) => {
  res.json(animals);
});

module.exports = router;