'''
 Given an array of Integers and another Integer targetValue. Write a function that will take these inputs
 and return the indices of the 2 integers in the array that add up targetValue.
 '''

def two_sum(list:list, target_value):
  hashDict = {}

  for index in range(len(list)):
    targetNum = target_value - list[index]
    if targetNum in hashDict:
      return [index, hashDict[targetNum]]
    else:
      hashDict[index] = index
  

  return []

 