// You can re-declare a variable using var within the same scope without throwing an error.

var price = 200;
var price = 4500;
console.log(price); // it's possible

// Does using var inside a for loop initialization leak the variable outside the loop?
// Answer: Yes, variables declared with var inside a for loop initialization are function-scoped and can leak outside the loop.

for (var i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
console.log(`Val after loop : ${i} `); // 5 (leaks outside the loop)

for (let j = 0; j < 5; j++) {
  console.log(j); // 0, 1, 2, 3, 4
}
console.log(`Val after loop : ${j} `); // ReferenceError: j is not defined
