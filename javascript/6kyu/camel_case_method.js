/*
DESC:
Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

Examples (input --> output):
"hello case" --> "HelloCase"
*/

String.prototype.camelCase=function(){
  // Trims whitespace
  const stringTrim = this.trim()
  // Splits words into array by spacing
  const firstLetter = stringTrim.split(' ')
  // Creates a new array/capitalizes first letter of each word
  const firstCaps = firstLetter.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
    
  })
  // Makes arr a string again
  const capString = firstCaps.join('')

  return capString
  
}
