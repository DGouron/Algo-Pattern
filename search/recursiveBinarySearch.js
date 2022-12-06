/* Problem : Given a sorted array of n elements and a target element x, find the index of the target element in the array.
              Return the index of the element if found, else return -1.
   Solution: Recursive Binary Search
*/

/**
 *
 * @param {array} arrayOfItems
 * @param {*} targetToFind
 * @param {number} start
 * @param {number} end
 * @returns {number}
 */
const recursiveBinarySearch = (arrayOfItems, targetToFind, start, end) => {
  if (start > end) {
    return -1;
  }
  const mid = Math.floor((start + end) / 2);
  if (arrayOfItems[mid] === targetToFind) {
    return mid;
  } else if (arrayOfItems[mid] < targetToFind) {
    return recursiveBinarySearch(arrayOfItems, targetToFind, mid + 1, end);
  } else {
    return recursiveBinarySearch(arrayOfItems, targetToFind, start, mid - 1);
  }
};

module.exports = recursiveBinarySearch;
