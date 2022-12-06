/* Problem : Given a sorted array of n elements and a target element x, find the index of the target element in the array.
              Return the index of the element if found, else return -1.
   Solution: Binary Search
*/

/**
 *
 * @param {array} arrayOfItems
 * @param {*} targetToFind
 * @returns {number}
 */
const binarySearch = (arrayOfItems, targetToFind) => {
  let start = 0;
  let end = arrayOfItems.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arrayOfItems[mid] === targetToFind) {
      return mid;
    } else if (arrayOfItems[mid] < targetToFind) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

module.exports = binarySearch;
