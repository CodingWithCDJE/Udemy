"""

Write a function that will take a peculiar array as its input and find the sum of its elements. If an array
is an element in the peculiar array you have to convert it to it's equivalent value so that you can sum it
with the other elements. Equivalent value of an array is the sum of its elements raised to the number which
represents how far nested it is. 

For e.g., [2,3[4,1,2]] = 2+3+(4+1+2)^2


"""

def pow_sum(my_list, power = 1):
  sum = 0
  for i in my_list:
    if type(i) == list:
      sum += pow_sum(i, power + 1)
    else:
      sum += i
  return pow(sum,power)



print(pow_sum([1,2,[3,4],[[2]]]))