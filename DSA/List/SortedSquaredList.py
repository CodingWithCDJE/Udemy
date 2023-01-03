"""
Question:
  You are given an array of Integers in which each subsequent value is not less than the previous value. 
  Write a function that takes this array as an input and returns a new array with the squares of each number
  sorted in ascending order.

"""

def sorted_square(my_list: list):
  sorted_list = [0] * len(my_list)
  start_pointer = 0
  end_pointer = len(my_list) - 1
  for i in reversed(range(len(my_list))):
    first_value = my_list[start_pointer]**2
    second_value = my_list[end_pointer]**2
    if first_value > second_value:
      sorted_list[i] = first_value
      start_pointer += 1
    else:
      sorted_list[i] = second_value
      end_pointer -= 1

  return sorted_list

