# Given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of
# the ith line are (i,0) and (i, height[i]). Find two lines that together with the x-axis form a container,
# such that the container contains the most water. Return the area of container which can store the max 
# amount of water.

def max_area(list:list):
  left=0
  right= len(list)-1
  area = 0
  while(left < right):
    height = min(list[left], list[right])
    newArea = height * (right-left)
    area = max(area, newArea)
    if list[left] < list[right]:
      left+=1
    else:
      right-=1
  
  return area