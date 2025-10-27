/*
DESC: Jumping number is the number that All adjacent digits in it differ by 1.
Number passed is always Positive .

Return the result as String .

The difference between ‘9’ and ‘0’ is not considered as 1 .

All single digit numbers are considered as Jumping numbers.
*/

function jumpingNumber(n){
  // Converts number to array of strings -> numbers
  const numString = String(n)
  const stringDigits = numString.split('')
  const numberArr = stringDigits.map(Number)
  // Single digits are Jumping
  if (numberArr.length === 1) return 'Jumping!!'

  // iterates through digits & determines if numbers are jumping
  for (let i = 1; i < numberArr.length; i++) {
    const digit1 = numberArr[i]
    const digit2 = numberArr[i-1]

    if (Math.abs(digit1 - digit2) !== 1) {
      return 'Not!!'
    }
  }
  return 'Jumping!!'
}
