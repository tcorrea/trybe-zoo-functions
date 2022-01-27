const data = require('../data/zoo_data');

function isSorted(array, sorted = false) { return (sorted) ? array.sort() : array; }

function getSpeciesByLocation(objLocation, sorted = false) {
  return data.species.reduce((acc, specie) => {
    acc[specie.location].push(
      { [specie.name]: isSorted(specie.residents.map((element) => element.name), sorted) },
    );
    return acc;
  }, objLocation);
}

function animalsBySex(objLocation, sex, sorted = false) {
  return data.species.reduce((acc, specie) => {
    acc[specie.location].push({ [specie.name]: isSorted(
      specie.residents.filter((element) => element.sex === sex).map((item) => item.name), sorted,
    ) });
    return acc;
  }, objLocation);
}

function animalsByLocation(objLocation) {
  return data.species.reduce((acc, specie) => {
    acc[specie.location] = data.species.filter((element) => {
      return element.location === specie.location;
    }).map((item) => item.name);
    return acc;
  }, objLocation);
}

function getAnimalMap(options) {
  const objLocation = { NE: [], NW: [], SE: [], SW: [] };
  if (typeof options === 'undefined') {
    return animalsByLocation(objLocation);
  }

  if (('includeNames' in options) && ('sex' in options)){
    return animalsBySex(objLocation, options.sex, options.sorted);
  }

  if (options.includeNames === true && !('sex' in options)) {
    return getSpeciesByLocation(objLocation, options.sorted);
  }
 
  return animalsByLocation(objLocation);
  // if (options.sex === 'female' && !('includeNames' in options) && !('sorted' in options)) {
  //   return animalsByLocation(objLocation);
  // }
  // if (!('includeNames' in options) && options.sex === 'female' && options.sorted === true) {
  //   return animalsByLocation(objLocation);
  // }
  
  
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
// { includeNames: true, sex: 'female', sorted: true }
// { includeNames: true, sex: 'female' };