/*
Given an integer array of unique elements, return all possible subsets (the power set). The solution set
must not contain duplicate subsets. Return the solution in any order.
*/

function powerSet(nums) {
  const output = [];
  const helper = (nums, i, subset) => {
    if (i === nums.length) {
      output.push(subset.slice());
      return;
    }
    helper(nums, i + 1, subset);
    subset.push(nums[i]);
    helper(nums, i + 1, subset);
    subset.pop();
  };
  helper(nums, 0, []);
  return output;
}

console.log(powerSet([1, 2, 3]));
