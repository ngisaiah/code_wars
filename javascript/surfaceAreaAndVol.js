// Write a function that returns the total surface area and volume of a box.

// The given input will be three positive non-zero integers: width, height, and depth.

// Solution:

function getSize(width, height, depth) {
  let surfaceArea = 0; //variables needed to answer questions
  let volume = 0;
  const volSurface = []
  surfaceArea = 2 * (width * height + width * depth + height * depth)
  volume = width * height * depth //equations needed to solve
  volSurface.push(surfaceArea, volume) //adds results to empty array
  return volSurface //returns array with results
}
