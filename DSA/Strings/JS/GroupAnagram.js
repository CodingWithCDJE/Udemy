/* 
Given an array of strings consisting of lower case English letters, group the anagrams together. You can 
return the answer in any order. An anagram is a word or phrase formed by rearranging the letters of a 
different word or phrase, using all the original letters exactly once.

*/

const groupingAnagrams = function (arr) {
  const hashedArr = {};
  const sortedArr = arr.map((char) => char.split('').sort().join(''));
  for (let i = 0; i < arr.length; i++) {
    let sortedWord = sortedArr[i];
    if (hashedArr[sortedWord]) hashedArr[sortedWord].push(arr[i]);
    else hashedArr[sortedWord] = [arr[i]];
  }

  return Object.values(hashedArr);
};

const example = ['arc', 'abc', 'car', 'cat', 'act', 'acb', 'atc'];
const example1 = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupingAnagrams(example));
console.log(groupingAnagrams(example1));
