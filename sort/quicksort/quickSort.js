/*QuickSort is a fast and efficient sorting algorithm that uses the pivot technique to sort the elements of an array. 
It works by recursively dividing the array into two parts: one part containing the elements lower than the pivot, 
and the other part containing the elements higher than the pivot. These two parts are sorted in the same way, using 
a new pivot, until each part only contains one element. Then, the sorted parts are concatenated to form the final 
sorted array. */

function sortByFirstName(arrayToSort) {
  if (arrayToSort.length <= 1) {
    return arrayToSort;
  }

  const pivot = arrayToSort[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arrayToSort.length; i++) {
    const current = arrayToSort[i];
    if (current.firstName < pivot.firstName) {
      left.push(current);
    } else {
      right.push(current);
    }
  }

  return [...sortByFirstName(left), pivot, ...sortByFirstName(right)];
}

module.exports = sortByFirstName;
