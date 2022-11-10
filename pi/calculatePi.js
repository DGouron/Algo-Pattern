const calculatePi = (n) => {
  let pi = 0;
  for (let i = 0; i < n; i++) {
    pi += (4 * Math.pow(-1, i)) / (2 * i + 1);
  }
  return pi;
};

const calculatePiWithReducer = (n) => {
  let pi = 0;
  Array(n)
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
