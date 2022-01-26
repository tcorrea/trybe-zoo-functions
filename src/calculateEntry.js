const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (Object.keys(entrants).length === 0) return 0;
  return {
    child: entrants.filter((element) => element.age < 18).length,
    adult: entrants.filter((element) => element.age >= 18 && element.age < 50).length,
    senior: entrants.filter((element) => element.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) return 0;
  const nEntrants = countEntrants(entrants);
  return (
    nEntrants.child * data.prices.child
    + nEntrants.adult * data.prices.adult
    + nEntrants.senior * data.prices.senior
  );
}

module.exports = { calculateEntry, countEntrants };
