let animals = [
  {
    id: 1,
    name: 'Bonobo',
    count: 15
  },
  {
    id: 2,
    name: 'Rhinoceros',
    count: 4
  },
  {
    id: 3,
    name: 'Giraffe',
    count: 8
  }
]

let nextID = 4;

function all(q) {
  // Sort animals alphabetically
  animals.sort( function (a, b) {
    let nameA = a.name.toUpperCase(); // ignore upper and lowercase
    let nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
  if (q) {
    return animals.filter(animal => animal.name === q.filter);
  } else {
  return animals;
  } 
}

function find(id) {
  // Ensure 'id' is an integer
  id = parseInt(id, 10);
  let foundAnimal = null;
  // Loop through all the animals
  animals.forEach((animal) => {
    // Compare this animal's 'id' to the 'id' of the animal being searched for
    if (animal.id === id) {
      // If so, remember this animal
      foundAnimal = animal;
    }
  })
  // Return the animal found or, if not successful, null
  return foundAnimal;
}

function create(attributes) {
  // Create new naimal 'record' copying atrributes across
  // and assigning it an id
  const newAnimal = Object.assign({}, attributes, { 
    id: nextID
  });
  // Increment id for next animal
  nextID++;
  // Add to the array which stores data
  animals.push(newAnimal);

  return newAnimal;
};

function destroy(animalId) {
  let animal = find(animalId);
  if (!animal) {
    return null
  };
  let index = animals.indexOf(animal);
  animals.splice(index, 1);
  return all();
};

function update(animalId, attributes) {
  let animal = find(animalId);
  if (!animal) {
    return null
  };
  Object.assign(animal, attributes);
  return animal;
}  

module.exports = {
  all,
  find,
  create,
  destroy,
  update
}