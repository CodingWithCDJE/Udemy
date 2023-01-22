/* 
You are given an array of integers. Write a function that
will take this array as input and return the sorted array 
using Bubble sort.

Time complexity : O(n^2) --> n(n-1)/2 --> (n-1)(n-1)/2
Space complexity: O(1)
*/

const bubbleSort = function (arr) {
  if (arr.length == 1) return arr;

  let currPointer = 0;
  let nextPointer = currPointer + 1;
  let lastPointer = arr.length;

  while (currPointer < lastPointer) {
    if (arr[currPointer] > arr[nextPointer]) {
      //Swap
      // swap(arr, currPointer, nextPointer);
      [arr[currPointer], arr[nextPointer]] = [
        arr[nextPointer],
        arr[currPointer],
      ];
    } else {
      currPointer++;
      nextPointer++;
    }

    if (nextPointer == lastPointer) {
      currPointer = 0;
      nextPointer = currPointer + 1;
      lastPointer--;
    }
  }

  return arr;
};

const arrOne = [2, 3, 7, 1, 8];
const arrTwo = [1, 4, 3, 5, 2];
const arrThree = [9, 4, 7, -1, -3, 5, 5];

console.log(bubbleSort(arrOne));
console.log(bubbleSort(arrTwo));
console.log(bubbleSort(arrThree));
