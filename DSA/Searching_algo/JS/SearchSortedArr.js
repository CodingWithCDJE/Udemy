/* 

You are given an array of integers sorted in non-decreasing order, find the starting and ending position of a
given target value. If target is not found in the array, return [-1, -1]. You must write an algorithm with 
O(log n) runtime complexity.

*/

const searchSortedArr = function (arr, target) {
  const leftExtreme = findLeft(arr, target);
  const rightExtreme = findRight(arr, target);

  return [leftExtreme, rightExtreme];
};

const findLeft = function (arr, target) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let middle;
  while (leftPointer <= rightPointer) {
    middle = Math.floor((leftPointer + rightPointer) / 2);
    if (target === arr[middle]) {
      // Do modification that's not included in Binary Search
      if (middle === 0) return 0;
      if (target === arr[middle - 1]) {
        rightPointer = middle - 1;
      } else {
        return middle;
      }
    } else if (target < arr[middle]) {
      rightPointer = middle - 1;
    } else {
      leftPointer = middle + 1;
    }
  }

  return -1;
};

const findRight = function (arr, target) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let middle;

  while (leftPointer <= rightPointer) {
    middle = Math.floor((leftPointer + rightPointer) / 2);
    if (target === arr[middle]) {
      // Do modification that's not included in Binary Search
      if (middle === arr.length - 1) {
        return arr.length - 1;
      }
      if (target === arr[middle + 1]) {
        leftPointer = middle + 1;
      } else {
        return middle;
      }
    } else if (target < arr[middle]) {
      rightPointer = middle - 1;
    } else {
      leftPointer = middle + 1;
    }
  }
};

console.log(searchSortedArr([1, 2, 3, 3, 3, 3, 4, 5], 3));
