/* 
You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

Write a simple function to check if the string contains the word hallo in different languages.

These are the languages of the possible people you met the night before:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish
*/

// Solution:

function validateHello(greetings) {
  // Converts string to lower case
  const greetingsLower = greetings.toLowerCase()
  // searches for hello in different languages
  const res = greetingsLower.includes('hello') || greetingsLower.includes('ciao') || greetingsLower.includes('salut') || greetingsLower.includes('hallo') || greetingsLower.includes('hola') || greetingsLower.includes('ahoj') || greetingsLower.includes('czesc')
  return res
}
