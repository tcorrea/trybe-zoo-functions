const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const employee = data.employees.find(
    (element) => element.firstName === employeeName || element.lastName === employeeName,
  );
  return employee !== undefined ? employee : {};
}
module.exports = getEmployeeByName;
