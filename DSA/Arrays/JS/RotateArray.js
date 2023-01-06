// Given an array, rotate the array to the right by k steps, where k is non-negative.

const reverseArr = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};

const rotateArr = (arr, k) => {
  const rotateInt = k % arr.length;

  let endPointer = arr.length - 1;

  reverseArr(arr, 0, endPointer);

  reverseArr(arr, 0, rotateInt - 1);

  reverseArr(arr, rotateInt, endPointer);

  return arr;
};

rotateArr([1, 2, 3, 4, 5, 6], 2);
