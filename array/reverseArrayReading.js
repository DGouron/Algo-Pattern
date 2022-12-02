/**
 *
 * @param {Array} arrayToRead
 * @returns {Array}
 */
const reverseArrayReading = (arrayToRead) => {
  let newArray = [];
  for (let i = arrayToRead.length - 1; i >= 0; i--) {
    newArray.push(arrayToRead[i]);
  }
  return newArray;
};

/**
 *
 * @param {Array} arrayToRead
 * @returns {Array}
 */
const reverseArrayReadingWithForOf = (arrayToRead) => {
  let newArray = [];
  for (let element of arrayToRead) {
    newArray.unshift(element);
  }
  return newArray;
};

/**
 *
 * @param {Array} arrayToRead
 * @returns {Array}
 */
const reverseArrayReadingWithWhile = (arrayToRead) => {
  let newArray = [];
  let i = arrayToRead.length - 1;
  while (i >= 0) {
    newArray.push(arrayToRead[i]);
    i--;
  }
  return newArray;
};

/**
 *
 * @param {Array} arrayToRead
 * @returns {Array}
 */
const reverseArrayReadingWithReduce = (arrayToRead) => {
  let newArray = [];
  arrayToRead.reduce((accumulator, element) => {
    newArray.unshift(element);
  }, 0);
  return newArray;
};

/**
 *
 * @param {Array} arrayToRead
 * @returns {Array}
 */
const reverseArrayReadingWithEntries = (arrayToRead) => {
  let newArray = [];
  for (let [index, element] of arrayToRead.entries()) {
    newArray.unshift(element);
  }
  return newArray;
};

// Path: array\reverseArrayReading.js

module.exports = {
  reverseArrayReading,
  reverseArrayReadingWithForOf,
  reverseArrayReadingWithWhile,
  reverseArrayReadingWithReduce,
  reverseArrayReadingWithEntries,
};
