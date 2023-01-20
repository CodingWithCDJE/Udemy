/*
Given an array of integers which is sorted in ascending order, and a target integer, write a function to 
search for whether the target integer is there in the given array. If it is there then return its index. 
Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.


Time complexity: O(log n) => Worst and average
Best -> o(1)

Space complexity: O(1)


Note: 
Only works when the data is sorted

int -> ascending/descending
strings -> Alphabetical etc.
*/

const binarySearch = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let middle;

  while (left <= right) {
    middle = Math.floor((right + left) / 2);
    if (target == arr[middle]) return middle;
    else if (target > arr[middle]) left = middle + 1;
    else right = middle - 1;
  }
  return -1;
};

const arr = [1, 2, 4, 10, 11, 15, 21, 30];
const arr1 = [2, 3, 7, 9, 11, 23, 37, 81, 87, 89];

console.log(binarySearch(arr1, 9));
console.log(binarySearch(arr, 15));
