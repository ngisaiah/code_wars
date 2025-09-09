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
