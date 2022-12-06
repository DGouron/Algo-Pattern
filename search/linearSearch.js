/* Problem : Given an array of n elements, write a function to search a given element x in the array.
             Return the index of the element if found, else return -1.
   Solution: Linear Search
*/

/**
 *
 * @param {array} arrayOfItems
 * @param {*} targetToFind
 * @returns {number} index of the targetToFind in the arrayOfItems
 */
const linearSearch = (arrayOfItems, targetToFind) => {
  for (let index = 0; index < arrayOfItems.length; index++) {
    if (arrayOfItems[index] === targetToFind) {
      return index;
    }
  }
  return -1;
};

module.exports = {
  linearSearch,
};
