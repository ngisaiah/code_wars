// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// Solution

let Ghost = function() {
  // color = Array to random index
  let expectedColors = ['white', 'yellow', 'purple', 'red'];
  this.color = expectedColors[Math.floor(Math.random() * 4)]
};:
