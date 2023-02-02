/*

You are given an array of non-negative integers.

Write a function that will take this array as input
and return the sorted array using Radix sort.

Time Complexity => O(dn)
Space Complexity => O(n)

*/

const radixSort = function (arr) {
  if (arr.length == 0) return arr;
  const greatestNum = Math.max(...arr);
  const numberOfDigits = Math.floor(math.log10(greatestNum)) + 1;
  // Well run the counting sort x amount of times where x equals numberOfDigits
  for (let i = 0; i < numberOfDigits; i++) {
    countingSort(array, i);
  }

  return arr;
};

const countingSort = function (arr, place) {
  const output = new Array(arr.length).fill(0);
  const temp = new Array(10).fill(0); // 10 because 0-9 possible numbers
  const digitPlace = Math.pow(10, place);

  for (let num of arr) {
    let digit = Math.floor(num / digitPlace) % 10;
    temp[digit]++;
  }

  for (let i = 1; i < 10; i++) {
    temp[i] = temp[i] + temp[i - 1];
  }

  for (let j = arr.length - 1; j > -1; j--) {
    let currDigit = Math.floor(arr[j] / digitPlace) % 10;
    temp[currDigit]--;
    const insertPosition = temp[currDigit];
    output[insertPosition] = array[j];
  }

  for (let i = 0; i < output.length; i++) {
    arr[i] = output[i];
  }
};
