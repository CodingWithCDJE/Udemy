# Given an array, rotate the array to the right by k steps, where k is non-negative.

def reverse_list(list, start, end):
  while(start < end):
    list[start], list[end] = list[end], list[start]
    start+=1
    end -=1


def rotate_list(list, k):
  k = k % len(list)

  reverse_list(list, 0, len(list)-1)

  reverse_list(list, 0, k-1)

  reverse_list(list, k, len(list)-1)
   
  return list


print(rotate_list([1,2,3,4,5,6], 9))

print(rotate_list([1,2,3,4,5],3))