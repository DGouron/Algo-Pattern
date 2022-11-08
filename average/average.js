const reducer = require("../reducer/reducer");

const average = (array) => {
  if (array.length === 0) return 0;
  return reducer(array, 0) / array.length;
};

const averageWithLoop = (array) => {
  if (array.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
};

const averageWithReduce = (array) => {
  if (array.length === 0) return 0;
  return array.reduce((sum, current) => sum + current, 0) / array.length;
};

module.exports = {
  average,
  averageWithLoop,
  averageWithReduce,
};
