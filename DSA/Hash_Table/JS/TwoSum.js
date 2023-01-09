/* 
Given an array of Integers and another Integer targetValue. Write a function that will take these inputs
and return the indices of the 2 integers in the array that add up targetValue.
*/

const TwoSum = (arr, val) => {
  const hashObj = {};
  for (let i = 0; i < arr.length; i++) {
    let targetNum = val - arr[i];
    if (targetNum in hashObj) {
      return [i, hashObj[targetNum]];
    } else {
      hashObj[arr[i]] = i;
    }
  }

  return [];
};

array = [3, 9];
targetValue = 12;
console.log(TwoSum(array, targetValue));
// TwoSum([2, 7, 3, -1, 4], 2);
