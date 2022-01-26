const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (typeof animal === 'undefined') {
    return data.species.reduce((acc, current) => {
      acc[current.name] = current.residents.length;
      return acc;
    }, {});
  }

  const animalFound = data.species.find((element) => element.name === animal.specie);

  if ('sex' in animal) {
    return animalFound.residents.filter((element) => element.sex === 'female').length;
  }
  return animalFound.residents.length;
}

module.exports = countAnimals;
