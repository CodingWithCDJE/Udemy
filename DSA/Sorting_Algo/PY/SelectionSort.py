"""
You are given an array of integers.

Write a function that will take this array as input and 
return the sorted array using Selection sort.

Time complexity => O(n^2)
Space complexity => O(1)

"""

def selection_sort(list):
  

  for i in range(len(list)):
    smallest = i
    for j in range(i+1, len(list)):
      if list[j] < list[smallest]: smallest = j
    
    if i != smallest: list[i], list[smallest] = list[smallest], list[i]
  
  return list;



print(selection_sort([4,8,2,6,1,5,1]))
