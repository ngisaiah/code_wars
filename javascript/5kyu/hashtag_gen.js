/*
DESC:
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized, and remaining letters lowercased.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
*/

function generateHashtag (str) {
  // Trims whitespace
  const stringTrim = str.trim()
  // Splits words into array by spacing
  const firstLetter = stringTrim.split(' ')
  // Creates a new array/capitalizes first letter of each word
  const firstCaps = firstLetter.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
    
  })
  // Makes arr a string again
  const capString = firstCaps.join('')
  // If str is empty returns false & if > 140 chars
  if ((capString.length === 0) || (`#${capString}`.length>140)){
    return false
  } else {
    return '#' + capString
  }
}
