"""
def mem_fib(n:int):
  store_dict = {
    0:0, 
    1:1
  }
  for i in range(2,n+1, 1):
    store_dict[i] = store_dict[i-1] + store_dict[i-2]

  return store_dict[n]

"""

def mem_fib(n:int):
  if(n<=1): return n
  counter = 1
  prev = 0
  curr = 1
  
  while(counter < n):
    next = curr + prev
    prev = curr
    curr = next
    counter+=1

  return curr

print(mem_fib(10))
print(mem_fib(3))
print(mem_fib(5))