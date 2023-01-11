/*
Given an array of distinct integers, return all the possible permutations. You can return the answer in any
order.

*/

const allPermutations = (nums) => {
  const permutations = [];
  const swap = (arr, idxOne, idxTwo) => {
    let temp = arr[idxOne];
    arr[idxOne] = arr[idxTwo];
    arr[idxTwo] = temp;
  };
  function helper(nums, i) {
    if (i === nums.length - 1) {
      permutations.push(nums.slice());
      return;
    }

    for (let j = i; j < nums.length; j++) {
      swap(nums, i, j);
      helper(nums, i + 1);
      swap(nums, i, j);
    }
  }
  helper(nums, 0);
  return permutations;
};

console.log(allPermutations([1, 2, 3]));
