"""
Given an array of distinct integers, return all the possible permutations. You can return the answer in any
order.

"""

def all_permutations(nums:list):
  permutations = []
  if len(nums) == 0: return [[]]
  def swap(arr:list, idxOne, idxTwo):
    temp = arr[idxOne]
    arr[idxOne] = arr[idxTwo]
    arr[idxTwo] = temp
  def helper(nums:list, i:int):
    if i == len(nums) -1:
      permutations.append(nums.copy())
      return
    for j in range(i, len(nums)):
      swap(nums, i, j)
      helper(nums, i+1)
      swap(nums, i, j)
  helper(nums, 0)
  return permutations


print(all_permutations([1,2,3]))