"""
You are given an array of integers sorted in non-decreasing order, find the starting and ending position of a
given target value. If target is not found in the array, return [-1, -1]. You must write an algorithm with 
O(log n) runtime complexity.

"""

def search_sorted_list(list, target):
  left_extreme = find_left(list, target)
  right_extreme = find_right(list, target)

  return [left_extreme, right_extreme]


def find_left(list, target):
  left_pointer = 0
  right_pointer = len(list)-1
  while left_pointer <= right_pointer:
    middle = (left_pointer + right_pointer) // 2
    if target == list[middle]:
      # Do the modifications that aren't included in Binary Search
      if middle == 0: 
        return 0
      if target == list[middle-1]:
        right_pointer = middle-1
      else:
        return middle
    elif target < list[middle]:
      right_pointer= middle-1
    else:
      left_pointer= middle+1
  
  return -1

def find_right(list, target):
  left_pointer = 0
  right_pointer = len(list)-1

  while(left_pointer <= right_pointer):
    middle = (left_pointer + right_pointer) // 2
    if target == list[middle]:
      # Do the modifications that aren't included in Binary Search
      if middle == len(list)-1:
        return len(list)-1
      if target == list[middle+1]:
        left_pointer = middle+1
      else:
        return middle
    elif target < list[middle]:
      right_pointer = middle-1
    else:
      left_pointer = middle+1
  
  return -1

print(search_sorted_list([1, 2, 3, 3, 3, 3, 4, 5], 3))

