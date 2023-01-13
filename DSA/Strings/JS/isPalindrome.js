// function isPalindrome(str) {
//   const check = [];

//   for (let i = str.length - 1; i > 0; i--) {
//     check.push(str[i]);
//   }

//   if (str.join('') === convertedStr) return true;
//   else return false;
// }

function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;

  while (i <= j) {
    if (str[i] !== str[j]) {
      return false;
    } else {
      i++;
      j--;
    }
  }

  return true;
}

console.log(isPalindrome('aabaa'));
console.log(isPalindrome('defdef'));
