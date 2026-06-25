// If you have an array declared with const, can you push new elements into it?
const arr = [1, 2, 3, 4, 5];
// arr = [6, 7, 8]; // This will throw an error because you cannot reassign a const variable
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]