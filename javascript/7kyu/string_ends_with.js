// Desc: Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// EX: Inputs: "abc", "bc" Output: true || Inputs: "abc", "d" Output: fals

// Solution:

function solution(str, ending){
  // Slice end of string to compare with ending param
  let endStr = str.slice(-ending.length, str.length)
  console.log(endStr)
  // Conditional checks to see if ends match
  if (endStr === ending) {
    return true
  } else if (ending === '') {
    return true
  }else {
    return false
  }
}e

