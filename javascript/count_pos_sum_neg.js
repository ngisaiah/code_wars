/*
DSEC:
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
*/

function countPositivesSumNegatives(arr) {
  let sum = 0
  const result = []
  for (i in arr) {
    if(arr[i] < 0) {
      sum += arr[i]
    }
    else if (arr[i]===0) {
    } 
    else {
      result.push(arr[i])
    }
  }
  //return [result.length, sum]
  return (result.length === 0 && sum === 0) ? [] : [result.length, sum]
}
