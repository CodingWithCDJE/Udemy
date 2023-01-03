/* Question:
  You are given an array of Integers in which each subsequent value is not less than the previous value. 
  Write a function that takes this array as an input and returns a new array with the squares of each number
  sorted in ascending order.

*/
function sortedSquare(arr) {
  let start = 0;
  let end = arr.length - 1;
  const sortedArr = new Array(arr.length).fill(0);

  for (let i = arr.length - 1; i > 0; i--) {
    let firstValue = arr[start] ** 2;
    let secondValue = arr[end] ** 2;

    if (firstValue > secondValue) {
      sortedArr[i] = firstValue;
      start++;
    } else {
      sortedArr[i] = secondValue;
      end--;
    }
  }

  return sortedArr;
}
