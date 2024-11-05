/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  const args = [firstSalary, secondSalary, thirdSalary];
  const max = Math.max(...args);
  const min = Math.min(...args);
  return (fixedSalaries = (max - min).toFixed(6));
};
