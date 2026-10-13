// try-copy.js - micro-2: copy-by-value vs copy-by-reference + typeof quirks
// Predict Q1-Q4 BEFORE running, then run: node DAY04/try-copy.js

// Q1 - copy-by-value (primitive)
let a = 10; let b = a; a = 20; console.log(b);

// Q2 - copy-by-reference + mutation via const
const user = {name:"Anant"}; const u2 = user; u2.name = "Rahul"; console.log(user.name);

// Q3 - typeof quirk
console.log(typeof null);

// Q4 - array check
console.log(typeof [1,2,3], Array.isArray([1,2,3]));
