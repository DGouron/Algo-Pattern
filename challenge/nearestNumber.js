//Find the nearest number in the array to the given value

/**
 *
 * @param {Number} valueToFind
 * @param {Array} arrayOfNumber
 * @returns {Number || undefined}
 */
const nearestNumberWithForOf = (valueToFind, arrayOfNumber) => {
  if (!arrayOfNumber) {
    return undefined;
  }

  let nearest = arrayOfNumber[0];

  for (let number of arrayOfNumber) {
    if (number === valueToFind) {
      return number;
    }
    if (
      nearest === null ||
      Math.abs(valueToFind - nearest) > Math.abs(number - valueToFind)
    ) {
      nearest = number;
    }
  }
  return (
    arrayOfNumber.find((number) => number === Math.abs(nearest)) ?? nearest
  );
};

module.exports = nearestNumberWithForOf;
