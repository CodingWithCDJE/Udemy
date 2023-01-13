"""
You are given a string consisting of only lower case and upper-case English Alphabets and integers 0 to 9.
Write a function that will take this string as input and return the index of the first character that is
non-repeating.

"""

def non_repeat_char(str):
  char_hash = {}
  for i in str:
    if i in char_hash:
      char_hash[i] +=1
    else:
      char_hash[i] = 1
  
  print(char_hash)
  for i in range(len(str)):
    if char_hash[str[i]] == 1:
      return i
  
  return None


print(non_repeat_char('aabbccd'))