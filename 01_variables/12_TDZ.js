// What does the term "Temporal Dead Zone" (TDZ) refer to in JavaScript?

// Answer: The period during execution where a let or const variable exists in memory but cannot be accessed because it has not yet been formally declared in the code.

// Explanation: When entering a block scope, the engine reserves memory for let and const variables. However, until the actual line of code containing the declaration is executed, accessing them is strictly forbidden.
// let x;
// console.log(x); // ReferenceError: Cannot access 'x' before initialization
console.log(b); // undefined
let x = 10;
var b = 10 

//=================================================================//

// Do var declarations experience a Temporal Dead Zone?
// answer : no

//==========//

// What error is thrown if you try to access a let variable inside its TDZ?
// ReferenceError

// ======= //

// Does the TDZ end when the variable is declared, or when it is initialized?
// Answer: When it is declared.

// ========================= //

// True or False: The Temporal Dead Zone is a physical location in the code.
// Answer: False. The TDZ is a conceptual term that describes the state of a variable in memory before it is declared and initialized. It is not a physical location in the code, but rather
// -> a  period of time during which the variable cannot be accessed.<-