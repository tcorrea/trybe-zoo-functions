const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find((specie) => specie.name === animal)
    .residents.map((resident) => resident.age > age)
    .every((element) => element === true);
}
module.exports = getAnimalsOlderThan;
