/*
You are given an array of integers.

Write a function that will take this array as input 
and return the sorted array using Quick sort.

Time complexity: O(n log n) ==> Best case / avg case when pivot is middle

Worst case (Already sorted) && (Pivot point as min or max) ==> O(n^2)

Space complexity: O(log n) ==> best case / avg case when pi

Worst case: O(n) => Calling recursively on Both sides

*/

function swap(arr, idxOne, idxTwo) {
  let temp = arr[idxOne];
  arr[idxOne] = arr[idxTwo];
  arr[idxTwo] = temp;
}

function partition(arr, start = 0, end = arr.length - 1) {
  let middle = Math.floor((start + end) / 2);
  swap(arr, start, middle);

  let pivot = arr[start];
  let i = start + 1;
  let j = end;

  while (i <= j) {
    while (arr[i] <= pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i < j) {
      swap(arr, i, j);
    }
  }
  swap(arr, start, j);
  return j;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  while (start < end) {
    let pivotIdx = partition(arr, start, end);
    // Recursively call quick sort on lower sized subarray
    if (pivotIdx - start < end - pivotIdx) {
      quickSort(arr, start, pivotIdx - 1);
      start = pivotIdx + 1;
    } else {
      quickSort(arr, pivotIdx + 1, end);
      end = pivotIdx - 1;
    }
  }
}

const array = [3, 1, 2, 4];
quickSort(array);
console.log(array);
