/*
DSEC:
Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings: each line should be a separate element - see the example at the bottom.

Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters

Lyrics
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.
*/

var sing = function () {
  const result = []
  for (let i = 0; i < 100; i++) {
    if (i == 99) {
      result.push(`No more bottles of beer on the wall, no more bottles of beer.`)
      result.push(`Go to the store and buy some more, 99 bottles of beer on the wall.`)
    } 
    else if (i == 97) {
      result.push((99 - i)+` bottles of beer on the wall, `+(99-i)+` bottles of beer.`)
      result.push(`Take one down and pass it around, `+(98-i)+` bottle of beer on the wall.`)
    } 
    else if (i == 98) {
      result.push((99 - i)+` bottle of beer on the wall, `+(99-i)+` bottle of beer.`)
      result.push(`Take one down and pass it around, no more bottles of beer on the wall.`)
    }
    else {
      result.push((99 - i)+` bottles of beer on the wall, `+(99-i)+` bottles of beer.`)
      result.push(`Take one down and pass it around, `+(98-i)+` bottles of beer on the wall.`)
    }
  }
  return result
};
