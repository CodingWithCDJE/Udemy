"""
def is_palindrome(str):
  check = []
  for i in reversed(range(len(str))):
    check.append(str[i])


  if(''.join(check) == str):
    return True
  else:
    return False


"""

def is_palindrome(str):
  i=0
  j=len(str)-1
  while(i <= j):
    if str[i] != str[j]:
      return False
    else:
      i+=1
      j-=1

  return True
print(is_palindrome('defdef'))
print(is_palindrome('aabaa'))