'''
 Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the 
 characters in s can be replaced to get t. All occurrences of a charactermust be replaced with another
 character while preserving the order of characters. No two characters may map to the same character, but a 
 character may map to itself. s and t consist of any valid ascii character.

'''

def is_isomorphic(s:str, t:str):
  if len(s) != len(t):
    return False
  
  s_dict = {}
  t_dict = {}

  for i in range(len(s)):
    s_char = s[i]
    t_char = t[i]

    if s_char not in s_dict:
      s_dict[s_char] = t_char
    if t_char not in t_dict:
      t_dict[t_char] = s_char 
    if s_dict[s_char] != t_char or t_dict[t_char] != s_char:
        return False
  
  return True

print(is_isomorphic('aaca', 'bbdr'))
print(is_isomorphic('abacus', 'rirfgs'))
print(is_isomorphic('aba', 'pqr'))


