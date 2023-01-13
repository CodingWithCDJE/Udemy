/* 
You are given a string consisting of only lower case and upper-case English Alphabets and integers 0 to 9.
Write a function that will take this string as input and return the index of the first character that is
non-repeating.
*/

const nonRepeatChar = (str) => {
  const charHash = {};
  for (let i = 0; i < str.length; i++) {
    charHash[str[i]] ? charHash[str[i]]++ : (charHash[str[i]] = 1);
  }

  for (let t = 0; t < str.length; t++) {
    if (charHash[str[t]] == 1) {
      return t;
    }
  }

  return null;
};

console.log(nonRepeatChar('aabbccd'));
