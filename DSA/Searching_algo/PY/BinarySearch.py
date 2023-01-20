"""
Given an array of integers which is sorted in ascending order, and a target integer, write a function to 
search for whether the target integer is there in the given array. If it is there then return its index. 
Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.

Time complexity: O(log n) => Worst and average
Best -> o(1)

Space complexity: O(1)

Note: 
Only works when the data set is sorted

int -> ascending/descending
strings -> Alphabetical etc.
"""


def binary_search(list, target):
  left=0
  right=len(list)-1
  while(left <= right):
    middle = (left+right)//2
    if target == list[middle]:
      return middle
    elif target > list[middle]:
      left=middle+1
    else:
      right=middle-1
  
  return -1


print(binary_search([1, 2, 4, 10, 11, 15, 21, 30], 15))
print(binary_search([2, 3, 7, 9, 11, 23, 37, 81, 87, 89], 9))