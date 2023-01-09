/* 
Write a function that will take a peculiar array as its input and find the sum of its elements. If an array
is an element in the peculiar array you have to convert it to it's equivalent value so that you can sum it
with the other elements. Equivalent value of an array is the sum of its elements raised to the number which
represents how far nested it is. 

For e.g., [2,3[4,1,2]] = 2+3+(4+1+2)^2

*/

function sumPow(arr, power = 1) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'object') {
      sum += sumPow(arr[i], power + 1);
    } else {
      sum += arr[i];
    }
  }
  return Math.pow(sum, power);
}

console.log(sumPow([1, 2, [3, 4], [[2]]]));
