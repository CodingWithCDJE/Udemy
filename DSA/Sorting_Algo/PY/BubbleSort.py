"""
You are given an array of integers. Write a function that
will take this array as input and return the sorted array 
using Bubble sort.

Time complexity : O(n^2) --> n(n-1)/2 --> (n-1)(n-1)/2
Space complexity: O(1)

"""

def bubble_sort(list):
  if(len(list) == 1): return list

  curr_pointer = 0
  next_pointer = curr_pointer + 1
  last_pointer = len(list)

  while curr_pointer < last_pointer:
    if list[curr_pointer] > list[next_pointer]:
      #Swap
      list[curr_pointer], list[next_pointer] = list[next_pointer], list[curr_pointer]
    else:
      curr_pointer+=1
      next_pointer+=1
    
    if next_pointer == last_pointer:
      curr_pointer=0
      next_pointer = curr_pointer + 1
      last_pointer-=1
  

  return list


print(bubble_sort([1,2,3,4,0]))