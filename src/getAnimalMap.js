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
  if (options.sex === 'female' && !('includeNames' in options) && !('sorted' in options)) {
    return animalsByLocation(objLocation);
  }
  if (!('includeNames' in options) && options.sex === 'female' && options.sorted === true) {
    return animalsByLocation(objLocation);
  }
  if (options.includeNames === true && !('sex' in options)) {
    return getSpeciesByLocation(objLocation, options.sorted);
  }
  return animalsBySex(objLocation, options.sex, options.sorted);
}

// ✓ sem parâmetros, retorna animais categorizados por localização (2ms)
// ✓ sem a opção `includeNames` especificada e somente com a opção `sex: female` especificada, retorna todos os animais categorizados por localização sem aplicar o filtro `sex`
// ✓ sem a opção `includeNames` especificada e as opções `sex: female` e `sorted: true` forem especificadas, retorna animais categorizados por localização sem aplicar os filtros `sex` e `sorted`
// ✓ com a opção `includeNames: true` especificada, retorna nomes de animais (1ms)
// ✓ com a opção `sorted: true` especificada, retorna nomes de animais ordenados (5ms)
// ✕ com a opção `sex: 'female'` ou `sex: 'male'` especificada, retorna somente nomes de animais macho/fêmea (6ms)
// ✕ com a opção `sex: 'female'` ou `sex: 'male'` es

const t = animalsBySex({ NE: [], NW: [], SE: [], SW: [] }, 'female', true);
console.log(t.NE);

module.exports = getAnimalMap;
