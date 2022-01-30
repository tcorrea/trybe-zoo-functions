const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstSpecieId = data.employees.find((employee) => employee.id === id).responsibleFor[0];

  const specieFound = data.species.find((specie) => specie.id === firstSpecieId);

  return Object.values(
    specieFound.residents.reduce((acc, curr) => ((acc.age < curr.age) ? curr : acc)),
  );
}
module.exports = getOldestFromFirstSpecies;
