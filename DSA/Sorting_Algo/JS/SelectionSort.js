/*
You are given an array of integers.

Write a function that will take this array as input and 
return the sorted array using Selection sort.

Time complexity => O(n^2)
Space complexity => O(1)

*/

const selectionSort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) smallest = j;
    }
    if (i !== smallest) [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
  }

  return arr;
};

console.log(selectionSort([4, 8, 2, 6, 1, 5, 1]));
