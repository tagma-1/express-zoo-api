let seaCritters = [
  {
    id: 1,
    name: 'Shark',
    count: 5
  },
  {
    id: 2,
    name: 'Dolphin',
    count: 10
  },
  {
    id: 3,
    name: 'Goldfish',
    count: 50
  }
];

let nextId = 4; 

function all() {
  return seaCritters;
}

function find(id) {
  id = parseInt(id, 10);
  let seaCritter = null;
  seaCritters.forEach((critter) => {
    if (critter.id === id) {
      seaCritter = critter;
    }
  })
  return seaCritter;
}

function create(attributes) {
  newCritter = Object.assign({}, attributes, {
    id: nextId
  })
  nextId++;
  seaCritters.push(newCritter);
  return newCritter;
}

function destroy(id) {
  critter = find(id);
  if (critter) {
    index = seaCritters.indexOf(critter);
    seaCritters.splice(index, 1);
    return seaCritters;
  } else {
    return null;
  }
}

function update(id, attributes) {
  critter = find(id);
  if (critter) {
    updatedCritter = Object.assign(critter, attributes);
    return updatedCritter;
  } else {
    return null
  }
}

module.exports = {
  all,
  find,
  create,
  destroy,
  update
}
