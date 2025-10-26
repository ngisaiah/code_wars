/*
For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)
*/

function cookie(x){
  // Conditional checking data type of x
  if ((typeof x == typeof 3.14) || (typeof x == typeof 3)) {
    return "Who ate the last cookie? It was Monica!"
  } else if (typeof x == typeof 's') {
    return "Who ate the last cookie? It was Zach!"
  } else {
    return "Who ate the last cookie? It was the dog!"
  }
}
