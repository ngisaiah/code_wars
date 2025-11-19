// Desc: Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// EX:  when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// Solution:

function sumTwoSmallestNumbers(arr) {
  // Sort array lowest to high and return lowest 2 numbers
  const lowestTwo = arr.sort((a,b) => a - b)
  return lowestTwo[0] + lowestTwo[1]
}
