/*
DESC:
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
*/

function alphabetPosition(text) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const textArr = text.toLowerCase().split('')
  let result = ''
  // Compares both arrays and returns index number 
  for (let i =0; i < text.length; i++) {
    if (alpha.includes(textArr[i]) ) result += (alpha.indexOf(textArr[i])+ 1) + ' '
  }
  // Returns result minus the last space
  return result.slice(0, result.length -1)
}

