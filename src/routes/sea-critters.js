const express = require('express');
const Seacritter = require('../models/seacritter.js');

const router = express.Router();

router.get('/sea-critters', (req, res) => {
  res.json(Seacritter.all());
});

router.get('/sea-critters/:id', (req, res) => {
  const id = req.params['id'];
  const seaCritter = Seacritter.find(id);
  if (seaCritter) {
    res.json(seaCritter);
  } else {
    res.status(404).json({
      error: `There is no sea critter with id '${id} available`
    })
  };
});

router.post('/sea-critters', (req, res) => {
  const attributes = req.body;
  newCritter = Seacritter.create(attributes);
  res.status(201).json(newCritter);
});

router.delete('/sea-critters/:id', (req, res) => {
  const id = req.params['id'];
  const updatedCritters = Seacritter.destroy(id);
  if (updatedCritters) {
    res.status(200).json(Seacritter.all());
  } else {
    res.status(404).json({
      error: `There is no sea critter with an id of '${id}'`
    })
  }
})

router.put('/sea-critters/:id', (req, res) => {
  const id = req.params['id'];
  const attributes = req.body
  const updatedCritter = Seacritter.update(id, attributes);
  if (updatedCritter) {
    res.status(200).json(updatedCritter);
  } else {
    res.status(404).json({
      error: `There is no sea critter with an id of '${id}'`
    })
  }
})

module.exports = router;