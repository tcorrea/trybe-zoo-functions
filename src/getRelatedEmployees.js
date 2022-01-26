const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees
    .map((elemet) => elemet.managers.includes(id))
    .some((element) => element === true);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees.reduce((acc, current) => {
      if (current.managers.includes(managerId)) {
        acc.push(`${current.firstName} ${current.lastName}`);
      }
      return acc;
    }, []);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
