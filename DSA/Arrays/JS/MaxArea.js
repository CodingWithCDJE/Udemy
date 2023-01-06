/*
 Given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of
 the ith line are (i,0) and (i, height[i]). Find two lines that together with the x-axis form a container,
 such that the container contains the most water. Return the area of container which can store the max 
 amount of water.

*/

const maxArea = (arr) => {
  let area = 0;
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let height = Math.min(i, j);
    let newArea = height * (j - i);
    area = Math.max(area, newArea);
    if (arr[i] < arr[j]) i++;
    else j--;
  }

  return area;
};
