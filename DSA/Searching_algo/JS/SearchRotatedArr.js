/* 
You are given an integer array nums sorted in ascending order (with distinct values). Prior to being passed
to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length).

For example, [0,1,2,3,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2]. Given an integer
target, return the index of target if it is in the array, else return -1. You must right an algorithm with
O(log n) runtime complexity.

Time complexity: O(log n) => Average and worst
Best => O(1)

Space complexity: O(1)


*/

const searchRotatedArr = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let middle;
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (target === arr[middle]) return middle;
    if (arr[left] <= arr[middle]) {
      if (target >= arr[left] && target < arr[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if (target <= arr[right] && target > arr[middle]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  return -1;
};
