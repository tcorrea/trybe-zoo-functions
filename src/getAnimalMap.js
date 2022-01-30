const data = require('../data/zoo_data');

const isSorted = (array, sorted = false) => ((sorted) ? array.sort() : array);

function speciesByLocation(objLocation, sex, sorted = false) {
  return data.species.reduce((acc, specie) => {
    if (sex) {
      const sexFilter = specie.residents.filter(
        (element) => element.sex === sex,
      ).map((item) => item.name);
      acc[specie.location].push({ [specie.name]: isSorted(sexFilter, sorted) });
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
  if (typeof options === 'undefined' || !('includeNames' in options)) {
    return animalsNamesByLocation(objLocation);
  }

  if (options.includeNames === true) {
    return speciesByLocation(objLocation, options.sex, options.sorted);
  }
}

console.log(getAnimalMap());
module.exports = getAnimalMap;
