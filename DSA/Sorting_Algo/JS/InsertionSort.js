/*
You are given an array of integers. Write a function that
will take this array as input and return the sorted array
using Insertion sort.

Time complexity : O(n^2) --> n(n-1)/2 --> (n-1)(n-1)/2
Space complexity: O(1)

*/

const insertionSort = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let tempVal = arr[i];
    while (j >= 0 && arr[j] > tempVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = tempVal;
  }

  return arr;
};

console.log(insertionSort([4, 3, 2, 1]));
