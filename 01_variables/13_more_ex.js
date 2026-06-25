// What is the output of let x; console.log(x); x = 5;?
let x;
console.log(x);
x = 5;

// Can you initialize a variable with the result of a function call?

function greet() {
  return "Ram Ram ji ";
}
let greeting = greet();
console.log(greeting);

// What happens if you declare a variable with var but assign it no value, and then try to do math with it (e.g., var x; console.log(x + 5);)?
var y;
console.log(y + 5);

// Why is accidentally creating global variables (by omitting var, let, or const) considered bad practice?

// Answer: Because it can lead to unexpected behavior and make the code harder to debug and maintain.


