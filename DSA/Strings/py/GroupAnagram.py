'''
Given an array of strings consisting of lower case English letters, group the anagrams together. You can 
return the answer in any order. An anagram is a word or phrase formed by rearranging the letters of a 
different word or phrase, using all the original letters exactly once.
'''

def grouping_anagram(list):
  sorted_list = [''.join(sorted(word)) for word in list]
  anagram_dict = {}

  for i in range(len(sorted_list)):
    if sorted_list[i] in anagram_dict:
      anagram_dict[sorted_list[i]].append(list[i])
    else:
      anagram_dict[sorted_list[i]] = [list[i]]
  
  return anagram_dict.values()

print(grouping_anagram(['arc', 'abc', 'car', 'cat', 'act', 'acb', 'atc']))
print(grouping_anagram(['eat','tea', 'tan', 'ate', 'nat', 'bat']))