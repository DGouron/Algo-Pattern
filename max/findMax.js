const findMax = (array) => {
  if (array.length === 0) return 0;
  return Math.max(...array);
};

const findMaxWithLoop = (array) => {
  if (array.length === 0) return 0;
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

const findMaxWithRecursion = (array) => {
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];
  return Math.max(array[0], findMaxWithRecursion(array.slice(1)));
};

const findMaxWithReduce = (array) => {
  if (array.length === 0) return 0;
  return array.reduce((max, current) => {
    if (current > max) {
      return current;
    }
    return max;
  }, array[0]);
};

module.exports = {
  findMax,
  findMaxWithLoop,
  findMaxWithRecursion,
  findMaxWithReduce,
};
