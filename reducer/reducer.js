/**
 *
 * @param {*} array
 * @param {*} accumulator
 * @returns
 */
const reducer = (array, accumulator) => {
  if (array.length === 0) {
    return accumulator;
  }
  return reducer(array.slice(1), (accumulator += array[0]));
};

module.exports = reducer;
