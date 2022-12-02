/**
 *
 * @param {Number} number
 * @returns {Number}
 */
const recursion = (number) => {
  if (number === 0) return 0;
  return number + recursion(number - 1);
};

module.exports = recursion;
