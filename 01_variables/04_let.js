// What happens if you try to re-declare a variable using let in the same scope?
let name = "amit";
// let name = "amrit";
console.log(name);
// SyntaxError: Identifier 'name' has already been declared

// Why is let generally preferred over var in modern JavaScript development?
// Answer: let provides block-level scoping, which helps avoid issues with variable hoisting and unintended global variables.
{
  var a = 20;
  let b = 30;
}
// let b = 10;
console.log(a + 10); // 30
// console.log(b); // ReferenceError: b is not defined

// If a variable's value is intended to change (e.g., a loop counter), which ES6 keyword should you use?
// Answer: let

let counter = 0;
for (let i = 0; i < 5; i++) {
  counter += i;
}
console.log(counter); // 10

// True or False: It is best practice to default to const, and only use let when you know the value will change.
// Answer: True

