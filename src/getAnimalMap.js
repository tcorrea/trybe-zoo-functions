const data = require('../data/zoo_data');

const isSorted = (array, sorted = false) => ((sorted) ? array.sort() : array);

// function speciesByLocation(objLocation, sorted = false) {
//   return data.species.reduce((acc, specie) => {
//     acc[specie.location].push({ [specie.name]: isSorted(specie.residents.map((element) => element.name), sorted) });
//     return acc;
//   }, objLocation);
// }

// function animalsBySex(objLocation, sex, sorted = false) {
//   return data.species.reduce((acc, specie) => {
//     acc[specie.location].push({ [specie.name]: isSorted(specie.residents.filter((element) => element.sex === sex).map((item) => item.name), sorted) });
//     return acc;
//   }, objLocation);
// }

function speciesByLocation(objLocation, sex, sorted = false) {
  return data.species.reduce((acc, specie) => {
    if (sex) {
      const varsex = specie.residents.filter((element) => element.sex === sex).map((item) => item.name);
      acc[specie.location].push({ [specie.name]: isSorted(varsex, sorted) });
    } else {
      const names = specie.residents.map((element) => element.name);
      acc[specie.location].push({ [specie.name]: isSorted(names, sorted) });
    }
    return acc;
  }, objLocation);
}

function animalsNamesByLocation(objLocation) {
  return data.species.reduce((acc, specie) => {
    acc[specie.location] = data.species.filter(
      (element) => element.location === specie.location,
    ).map((item) => item.name);
    return acc;
  }, objLocation);
}

function getAnimalMap(options) {
  const objLocation = { NE: [], NW: [], SE: [], SW: [] };
  { includeNames, sex, sorted } = options;
}

module.exports = getAnimalMap;

// if (typeof options === 'undefined') {
//   return animalsNamesByLocation(objLocation);
// }
// if (!('includeNames' in options)) {
//   animalsNamesByLocation(objLocation);
// }
// if (('includeNames' in options) && ('sex' in options)) {
//   return speciesByLocation(objLocation, options.sex, options.sorted);
// }
// if (options.includeNames === true && !('sex' in options)) {
//   return speciesByLocation(objLocation, options.sorted);
// }
// return animalsNamesByLocation(objLocation);