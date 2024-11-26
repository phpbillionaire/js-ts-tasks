/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  const cleanFirst = firstNumber.toString().replace(/\s+/g, '').trim();
  const cleanSecond = secondNumber.toString().replace(/\s+/g, '').trim();

  return Number(cleanFirst) + Number(cleanSecond);
};
