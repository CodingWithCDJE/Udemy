/*
const memFib = (n) => {
  const storeHash = {
    0: 0,
    1: 1,
  };
  for (let i = 2; i <= n; i++) {
    storeHash[i] = storeHash[i - 1] + storeHash[i - 2];
  }
  return storeHash[n];
};

*/

// Iterative

const memFib = (n) => {
  if (n <= 1) return n;
  let counter = 1;
  let prev = 0;
  let curr = 1;
  let next;
  while (counter < n) {
    next = prev + curr;
    prev = curr;
    curr = next;
    counter++;
  }

  return curr;
};

console.log(memFib(10));
console.log(memFib(3));
console.log(memFib(5));
