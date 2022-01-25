const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.reduce((acc, current) => {
    ids.forEach((element) => { if (current.id === element) acc.push(current); });
    return acc;
  }, []);
}
module.exports = getSpeciesByIds;
