"""
 Question:
  An array is monotonic if it is either monotone increasing or monotone decreasing. An array is monotone 
  increasing if all its elements from left to right are non-decreasing. An array is monotone decreasing if all
  its elements from left to right are non-increasing. Given an integer array return true if the given array 
  is monotonic, or false otherwise.

"""

def is_Monotonic(my_list: list):
  left_index = 0
  right_index = len(my_list) - 1

  left_pointer = my_list[left_index]
  right_pointer = my_list[right_index]

  if (left_pointer < right_pointer):
    #MI => Monotonic Increasing
    for i in range(right_index):
      if my_list[i] > my_list[i + 1]:
        return False
  elif left_pointer > right_pointer:
    # MD => Monotonic Decreasing
    for i in range(right_index):
      if my_list[i] < my_list[i + 1]:
        return False
  else:
    # Monotonic if it's the same
    for i in range(right_index):
      if my_list[i] != my_list[i + 1]:
        return False

  return True