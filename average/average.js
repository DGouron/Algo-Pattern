const reducer = require("../reducer/reducer");

/**
 *
 * @param {Array} arrayOfNumbers
 * @returns {Number}
 */
const average = (arrayOfNumbers) => {
  if (arrayOfNumbers.length === 0) return 0;
  return reducer(arrayOfNumbers, 0) / arrayOfNumbers.length;
};

/**
 *
 * @param {Array} arrayOfNumbers
 * @returns {Number}
 */
const averageWithLoop = (arrayOfNumbers) => {
  if (arrayOfNumbers.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
  }
  return sum / arrayOfNumbers.length;
};

/**
 *
 * @param {Array} arrayOfNumbers
 * @returns {Number}
 */
const averageWithReduce = (arrayOfNumbers) => {
  if (arrayOfNumbers.length === 0) return 0;
  return (
    arrayOfNumbers.reduce((sum, current) => sum + current, 0) /
    arrayOfNumbers.length
  );
};

module.exports = {
  average,
  averageWithLoop,
  averageWithReduce,
};
