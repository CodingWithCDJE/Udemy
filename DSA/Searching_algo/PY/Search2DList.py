"""
Write an efficient algorithm that searches for a value target in an m x n integer matrix. This matrix has the
following properties:

Integers in each rows are sorted from left to right.

The first integer of each rows is greater than the last integer of the previous row.

If the value is there in the matrix return true, else false.

"""

def search_in_matrix(list, target):
  columns = len(list[0])
  rows = len(list)

  # Do binary search to figure out the specific rows

  top = 0
  bottom = rows-1
 
  while top <= bottom:
    middle = (top+bottom)// 2
    if target < list[middle][0]:
      bottom = middle-1
    elif target > list[middle][columns-1]:
      top=middle+1
    else:
      break;
  
  if top > bottom:
    return False
  
  #Otherwise, you want to do binary search to find the specific target within that rows

  left_pointer = 0
  right_pointer = columns-1
  

  while left_pointer <= right_pointer:  
    mid_value = (left_pointer + right_pointer) // 2
    if(target == list[middle][mid_value]):
      return True
    elif(target < list[middle][mid_value]):
      right_pointer=mid_value-1
    else:
      left_pointer= mid_value+1
  
  return False


print(search_in_matrix(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [20, 30, 40, 50],
    ],
    100
  ))