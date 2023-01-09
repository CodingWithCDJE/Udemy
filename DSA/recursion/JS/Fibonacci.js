/*
In the Fibonacci sequence, each subsequent term is obtained by adding the preceding 2 terms. This is true
for all the numbers except the first 2 numbers of the Fibonacci series as they do not have 2 preceding
numbers. The first 2 terms in the Fibonacci series is 0 and 1. F(n) = F(n-1) + f(n-2) for n>1. Write a 
function that finds F(n) given n where n is an integer greater than equal to 0. For the first term n=0.

*/

const fib = (n) => {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(4));
console.log(fib(5));
console.log(fib(0));
console.log(fib(7));
