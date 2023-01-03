/*The radix sort algorithm is an efficient sorting algorithm that sorts numbers by using a relatively small number of key comparisons. 
This makes it particularly useful for sorting large amounts of data.
 */

function radixSort(arr, radix) {
  if (!Array.isArray(arr)) {
    return null;
  }

  if (arr.length < 2) {
    return arr;
  }

  let minValue = arr[0];
  let maxValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    } else if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  let exponent = 1;
  while ((maxValue - minValue) / exponent >= 1) {
    let buckets = new Array(radix).fill(0).map(() => []);

    for (let i = 0; i < arr.length; i++) {
      let bucketIndex = Math.floor((arr[i] - minValue) / exponent) % radix;
      buckets[bucketIndex].push(arr[i]);
    }

    arr = [].concat(...buckets);
    exponent *= radix;
  }

  return arr;
}

module.exports = radixSort;

/*    The function starts by checking if the arr argument is an array and returns null if it is not. 
    It also checks if the array has less than two elements and returns the array as is if it is empty or has only one element, as it is already sorted.

    The function defines the variables minValue and maxValue and initializes them with the first value in the array. 
    It then iterates through the array and updates minValue and maxValue with the minimum and maximum values found. 
    This allows us to determine the range of values in which the array elements are.

    The function defines the variable exponent and initializes it to 1. It then enters a loop that runs 
    while (maxValue - minValue) / exponent is greater than or equal to 1. 
    This condition helps us determine how many passes are needed to sort the array using the radix sort algorithm.

    Inside the loop, the function creates an array of "buckets" (called buckets) using the radix parameter as the length. 
    Each bucket is an empty array.

    The function iterates through the input array again and calculates the index of the bucket to which each element should be added using 
    the formula Math.floor((arr[i] - minValue) / exponent) % radix. This step distributes the elements into the buckets based on their value.

    Once all elements have been distributed into the buckets, the function concatenates all the buckets into a single array and assigns this array to arr.

    Finally, the function multiplies exponent by the radix parameter and goes back to step 3 to perform another pass until the 
    loop condition is no longer met. Once the loop has finished, the arr array is sorted and the function returns this result.
*/
