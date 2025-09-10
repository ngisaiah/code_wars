/* 

Prompt: You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

You should return the result of applying the given operation to these numbers.

Note: In dynamically typed languages (JS, PHP, Python), the first and second arguments can be not numbers. In that case, return "unknown value".

If the given operation to perform on the two numbers is not one of the four mentioned above, you should:

return a value:
"unknown value" (JS, PHP, Python)
throw an exception:
std::invalid_argument (C++)
ArgumentException (C#)
IllegalArgumentException (Java)

*/

// Solution: 

function calculator(a,b,sign){
  // Conditional used to detect mathematical sign and ensure a/b are numbers
  if (sign === "+" && typeof a === typeof 1 && typeof b === typeof 1) {
    return a + b
  } else if (sign === "-" && typeof a === typeof 1 && typeof b === typeof 1) {
    return a - b
  } else if (sign === "*" && typeof a === typeof 1 && typeof b === typeof 1) {
    return a * b
  } else if (sign === "/" && typeof a === typeof 1 && typeof b === typeof 1) {
    return a / b
  } else {
    return "unknown value"
  }
}
