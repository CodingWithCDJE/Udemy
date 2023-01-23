"""
You are given an array of integers.

Write a function that will take this array
as input and return the sorted array using merge sort

Sorted Array 
---------------

Time complexity ==> O(n+m)
Space complexity ==> O(n+m)

Unsorted Array
----------------
Time complexity ==> O(n log n)
Space complexity ==> O(n)

"""

def merge_sorted_list(list_one, list_two):
  merged_list = []
  i = 0
  j = 0

  while(i < len(list_one) and j < len(list_two)):

    if list_one[i] <= list_two[j]:
      merged_list.append(list_one[i])
      i+=1
    else:
      merged_list.append(list_two[j])
      j+=1
  

  while i < len(list_one):
    merged_list.append(list_one[i])
    i+=1
  
  while j < len(list_two):
    merged_list.append(list_two[j])
    j+=1

  return merged_list



def merge_sort(list):
  if len(list) <= 1: return list

  middle = len(list) // 2

  left_side = merge_sort(list[:middle])
  right_side = merge_sort(list[middle:len(list)])

  return merge_sorted_list(left_side, right_side)




print(merge_sort([5,4,3,2]))
print(merge_sort([5, 3, 7, 8, 1, 9, 12]))


  