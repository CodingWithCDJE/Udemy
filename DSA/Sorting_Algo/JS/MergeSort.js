/* 
You are given an array of integers.

Write a function that will take this array
as input and return the sorted array using merge sort

Sorted Array 
---------------

Time complexity ==> O(n+m)
Space complexity ==> O(n+m)

Unsorted Array
----------------
Time complexity ==> O(n log n)
Space complexity ==> O(n)

*/

const mergeSortedArrays = function (arr1, arr2) {
  const mergedArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }
  return mergedArr;
};

const mergeSort = function (arr) {
  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);
  let leftSide = mergeSort(arr.slice(0, middle));
  let rightSide = mergeSort(arr.slice(middle, arr.length));

  return mergeSortedArrays(leftSide, rightSide);
};

arr = [5, 3, 7, 8, 1, 9, 12];

console.log(mergeSort(arr));
