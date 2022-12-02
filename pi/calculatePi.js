/**
 *
 * @param {Number} numberOfIteration
 * @returns {Number}
 */
const calculatePi = (numberOfIteration) => {
  let pi = 0;
  for (let i = 0; i < numberOfIteration; i++) {
    pi += (4 * Math.pow(-1, i)) / (2 * i + 1);
  }
  return pi;
};

/**
 *
 * @param {Number} numberOfIteration
 * @returns {Number}
 */
const calculatePiWithReducer = (numberOfIteration) => {
  let pi = 0;
  Array(numberOfIteration)
    .fill(0)
    .reduce((accumulator, element, index) => {
      pi += (4 * Math.pow(-1, index)) / (2 * index + 1);
    }, 0);
  return pi;
};

module.exports = {
  calculatePi,
  calculatePiWithReducer,
};
