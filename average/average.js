const reducer = require("../reducer/reducer");

const average = (array) => {
  if (array.length === 0) return 0;
  return reducer(array, 0) / array.length;
};

module.exports = average;
