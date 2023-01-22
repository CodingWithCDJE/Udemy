/* 

Write an efficient algorithm that searches for a value target in an m x n integer matrix. This matrix has the
following properties:

Integers in each row are sorted from left to right.

The first integer of each row is greater than the last integer of the previous row.

If the value is there in the matrix return true, else false.

*/

// const searchTwoDArr = function (twoDArr, target) {
//   let i = 0;
//   let leftPointer = 0;
//   let rightPointer = twoDArr[i].length - 1;
//   let middle;

//   while (i < twoDArr.length) {
//     middle = Math.floor((leftPointer + rightPointer) / 2);
//     if (twoDArr[i][middle] === target) {
//       return true;
//     } else {
//       if (target < twoDArr[i][middle]) {
//         rightPointer = middle - 1;
//       } else {
//         leftPointer = middle + 1;
//       }
//       if (leftPointer > rightPointer) {
//         i++;
//         leftPointer = 0;
//       }
//     }
//   }

//   return false;
// };

// console.log(
//   searchTwoDArr(
//     [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ],
//     15
//   )
// );

const searchInMatrix = function (arr, target) {
  const columns = arr[0].length;
  const rows = arr.length;
  // Binary Search to identify the row
  let top = 0;
  let bottom = rows - 1;
  let middle;

  while (top <= bottom) {
    middle = Math.floor((top + bottom) / 2);
    if (target < arr[middle][0]) bottom = middle - 1;
    else if (target > arr[middle][columns - 1]) top = middle + 1;
    else break;
  }

  if (top > bottom) return false;

  let left = 0;
  let right = columns - 1;
  while (left <= right) {
    midValue = Math.floor((left + right) / 2);
    if (target === arr[middle][midValue]) return true;
    else if (target < arr[middle][midValue]) right = midValue - 1;
    else left = midValue + 1;
  }

  return false;
};

console.log(
  searchInMatrix(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [20, 30, 40, 50],
    ],
    100
  )
);
