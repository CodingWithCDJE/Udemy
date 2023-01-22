"""
You are given an array of integers. Write a function that
will take this array as input and return the sorted array
using Insertion sort.

Time complexity : O(n^2) --> n(n-1)/2 --> (n-1)(n-1)/2
Space complexity: O(1)

"""

def insertion_sort(list):
  for i in range(1, len(list)):
    j = i-1
    temp = list[i]
    while j>=0 and list[j] > temp:
      list[j+1] = list[j]
      j-=1
    
    list[j+1] = temp
  
  return list



print(insertion_sort([5,4,3,2,1]))