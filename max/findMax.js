/**
 *
 * @param {Array} arrayOfNumbers
 * @returns {Number}
 */
const findMax = (arrayOfNumbers) => {
  if (arrayOfNumbers.length === 0) return 0;
  return Math.max(...arrayOfNumbers);
};

/**
 *
 * @param {Array} arrayOfNumbers
 * @returns {Number}
 */
const findMaxWithLoop = (arrayOfNumbers) => {
  if (arrayOfNumbers.length === 0) return 0;
  let max = arrayOfNumbers[0];
  for (let i = 1; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > max) {
      max = arrayOfNumbers[i];
    }
  }
  return max;
};

/**
 *
 * @param {Array} arrayOfNumbers
 * @returns {Number}
 */
const findMaxWithRecursion = (arrayOfNumbers) => {
  if (arrayOfNumbers.length === 0) return 0;
  if (arrayOfNumbers.length === 1) return arrayOfNumbers[0];
  return Math.max(
    arrayOfNumbers[0],
    findMaxWithRecursion(arrayOfNumbers.slice(1))
  );
};

/**
 *
 * @param {Array} arrayOfNumbers
 * @returns {Number}
 */
const findMaxWithReduce = (arrayOfNumbers) => {
  if (arrayOfNumbers.length === 0) return 0;
  return arrayOfNumbers.reduce((max, current) => {
    if (current > max) {
      return current;
    }
    return max;
  }, arrayOfNumbers[0]);
};

module.exports = {
  findMax,
  findMaxWithLoop,
  findMaxWithRecursion,
  findMaxWithReduce,
};
