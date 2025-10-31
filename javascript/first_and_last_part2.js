/*
DESC: This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
*/

function array(string) {
  // Converts string to arr
  const stringArr = string.split(',')
  // if less then 3 indices returns null
  if (stringArr.length < 3) return null
  // returns arr minus 1st & last index + joins arr
  return stringArr.slice(1, -1).join(' ')
  
}
