/* Question:
  An array is monotonic if it is either monotone increasing or monotone decreasing. An array is monotone 
  increasing if all its elements from left to right are non-decreasing. An array is monotone decreasing if all
  its elements from left to right are non-increasing. Given an integer array return true if the given array 
  is monotonic, or false otherwise.

*/

function isMonotonic(arr) {
  const leftIndex = 0;
  const rightIndex = arr.length - 1;

  const leftPointer = arr[leftIndex];
  const rightPointer = arr[rightIndex];

  if (leftPointer < rightPointer) {
    // MI => Monotonic Increasing
    for (let i = 0; i < rightIndex; i++) {
      if (arr[i] > arr[i + 1]) return false;
    }
  } else if (leftPointer > rightPointer) {
    // MD => Monotonic Decreasing
    for (let i = 0; i < rightIndex; i++) {
      if (arr[i] < arr[i + 1]) return false;
    }
  } else {
    // Monotonic only if equals to each other
    for (let i = 0; i < rightIndex; i++) {
      if (arr[i] != arr[i + 1]) return false;
    }
  }
  return true;
}
