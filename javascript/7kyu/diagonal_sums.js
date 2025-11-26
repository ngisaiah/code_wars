/*
Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary).

[   // 3x3 matrix
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
]

// Should return 30: (1 + 5 + 9) + (3 + 5 + 7)
*/

// Solution:

function sum(matrix) {

  const len = matrix.length
  // conditional returns 0 if nothing is in the array
  if (len == 0) {
    return 0
  }

  let sum = 0
  // for loop that sums both diagnols 
  for (let i = 0; i < len; i++) {
    sum += matrix[i][i] + matrix[i][len - 1 - i]
  }
  return sum
}
