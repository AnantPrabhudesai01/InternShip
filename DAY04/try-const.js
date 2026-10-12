// try-const.js - E02 const mutation vs reassignment (M3 fix)
try {
  const user = {name:"Anant"}; user.name = "Rahul"; console.log(user.name); // Q1
} catch(e) { console.log("Q1 ERROR:", e.message); }
try {
  const user2 = {name:"Anant"}; user2 = {}; console.log("no error?"); // Q2
} catch(e) { console.log("Q2 ERROR:", e.constructor.name + ": " + e.message); }
