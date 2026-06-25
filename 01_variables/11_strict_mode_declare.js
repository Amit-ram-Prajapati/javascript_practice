"use strict";
// In the statement let x = y = 10;, what happens to y if strict mode is not enabled?
  let x = y = 10;

// let x = y = 10; // This will throw a ReferenceError in strict mode
// True or False: In strict mode, assigning a value to an undeclared variable throws a ReferenceError.
// Answer: True

name = "Amit"; // ReferenceError: name is not defined
