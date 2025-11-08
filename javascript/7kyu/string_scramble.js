/*
DSC:
Given a string and an array of indices, rearrange the characters of the string so that each character is placed at the position specified by the corresponding index in the array.

Example
input: "abcd", [0, 3, 1, 2]
output: "acdb"
*/

function scramble(str, arr) {
  let result = []
  for (i in arr) {
    result[arr[i]] = str[i]
  }
  return result.join('')
};
