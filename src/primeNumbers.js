/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  return function (lowestNumber, upperBound) {
    const primes = [];

    function isPrime(num) {
      if (num <= 1) return false;
      if (num === 2) return true;
      if (num % 2 === 0) return false;

      for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
      }
      return true;
    }

    for (let i = Math.max(2, lowestNumber); i <= Math.min(highestNumber, upperBound); i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }

    return primes;
  };
};
