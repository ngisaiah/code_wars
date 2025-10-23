// Description:
// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

// Solution:

function findAverage(array) {
  // your code here
  if (array.length > 0) {
    const arrSum = array.reduce((acc, cv) => acc + cv, 0)
    return arrSum / array.length
  }else {
    return 0

  }
}
