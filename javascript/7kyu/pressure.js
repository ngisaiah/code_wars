// Desc: You need to make a constructor function with two methods (and only these two methods) to return and increment a counter, but the counter should not be directly accessible from outside the function.

// Solution:

function Counter() {
  //saves increments
  let sum = 0
  //returns sum
  this.check = function () {
    return sum
  }
  //Increment Method
  this.increment = function () {
    sum++
    return sum
  }

};
