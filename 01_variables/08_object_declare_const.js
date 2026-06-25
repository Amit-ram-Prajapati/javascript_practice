// If you have an object declared with const, can you modify its properties?
const obj = {
  name: "Amit",
  age: 19,
  position: "CEO",
};
obj.age = 20;
console.log(obj); // { name: 'Amit', age: 20, position: 'CEO' }

/*

In JavaScript, the const keyword does not make the object itself immutable (unchangeable). Instead, it creates a read-only reference to the object in memory.

When you declare const obj = { ... }, you are telling JavaScript: "The variable obj must always point to this specific object in memory. It cannot be reassigned to point anywhere else."

*/
