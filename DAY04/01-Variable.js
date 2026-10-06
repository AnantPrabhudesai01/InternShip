# JavaScript Variables

Variables are used to store values so that those values can be used later in a program. A variable provides a name that can be used to access a value.

For example:

```js
let age = 25;
const name = "Anant";

console.log(age);
console.log(name);
```

Output:

```text
25
Anant
```

In this example, `age` and `name` are variable identifiers. The values associated with them are `25` and `"Anant"`.

JavaScript provides three keywords for declaring variables:

- `var`
- `let`
- `const`

Although all three can be used to declare variables, their behavior is different, especially when it comes to reassignment, redeclaration, scope, and hoisting.

---

## 1. Declaring Variables

A variable can be declared and initialized at the same time:

```js
let age = 25;
```

This statement contains three important parts:

```text
let      → declaration keyword
age      → variable name
25       → initial value
```

The `=` operator assigns the value to the variable.

Another example:

```js
const name = "Anant";
```

Here:

```text
const    → declaration keyword
name     → variable name
"Anant"  → initial value
```

A variable can then be used elsewhere:

```js
const name = "Anant";

console.log(name);
```

Output:

```text
Anant
```

The main purpose of a variable is to give a meaningful name to data that the program needs to work with.

---

# 2. `let`

`let` is used when a variable may need to be assigned a different value later.

Example:

```js
let age = 25;

age = 26;

console.log(age);
```

Output:

```text
26
```

The variable was initially assigned `25` and was later reassigned to `26`.

A `let` variable can be reassigned multiple times:

```js
let score = 0;

score = 10;
score = 20;
score = 30;

console.log(score);
```

Output:

```text
30
```

`let` is useful for values that change during the execution of a program.

For example:

```js
let count = 0;

count++;
count++;
count++;
```

At the end, `count` is `3`.

---

## 2.1 Declaring `let` Without an Initial Value

A `let` variable does not have to be initialized when it is declared.

```js
let result;

console.log(result);
```

Output:

```text
undefined
```

The variable exists, but no value has been assigned to it.

It can be assigned later:

```js
let result;

result = 100;

console.log(result);
```

Output:

```text
100
```

This is different from `const`, which must be initialized during declaration.

---

# 3. Reassignment

Reassignment means assigning a new value to an existing variable.

Example:

```js
let age = 25;

age = 30;
```

The first value of `age` is `25`.

After:

```js
age = 30;
```

the value associated with `age` is `30`.

Another example:

```js
let name = "Anant";

name = "Rahul";

console.log(name);
```

Output:

```text
Rahul
```

Reassignment is allowed with `let`.

---

# 4. Redeclaration

Redeclaration means declaring another variable with the same name in the same scope.

For example:

```js
let age = 25;
let age = 30;
```

This is not allowed.

JavaScript produces a `SyntaxError`.

However, this is allowed:

```js
let age = 25;

age = 30;
```

The difference is:

```text
Redeclaration:
let age = 25;
let age = 30;

Reassignment:
let age = 25;
age = 30;
```

Redeclaration tries to create another variable with the same name.

Reassignment changes the value of an existing variable.

---

# 5. `const`

`const` is used when a variable binding should not be reassigned.

Example:

```js
const name = "Anant";

console.log(name);
```

After declaring it, the following is not allowed:

```js
const name = "Anant";

name = "Rahul";
```

This produces a `TypeError`.

A `const` variable must be initialized when it is declared.

This is invalid:

```js
const age;
```

This is valid:

```js
const age = 25;
```

The reason is that `const` does not allow the binding to be reassigned later.

---

# 6. `const` Does Not Mean Immutable

One of the most important concepts when learning JavaScript variables is that `const` does not automatically make the value immutable.

Consider:

```js
const user = {
    name: "Anant",
    age: 25
};
```

This is not allowed:

```js
user = {
    name: "Rahul",
    age: 30
};
```

because this attempts to make `user` refer to a different object.

However, this is allowed:

```js
user.age = 30;
```

The object has been modified, but the `user` binding still refers to the same object.

For example:

```js
const user = {
    name: "Anant",
    age: 25
};

user.age = 30;

console.log(user);
```

Output:

```text
{
    name: "Anant",
    age: 30
}
```

Therefore:

```text
const
    prevents reassignment of the binding

const
    does not automatically prevent mutation of objects or arrays
```

This distinction is frequently asked in JavaScript interviews.

---

# 7. Reassignment vs Mutation

Reassignment and mutation are different operations.

## Reassignment

Reassignment changes what a variable is assigned to.

```js
let age = 25;

age = 30;
```

Here the variable has been reassigned.

Another example:

```js
let user = {
    name: "Anant"
};

user = {
    name: "Rahul"
};
```

The variable `user` now refers to another object.

---

## Mutation

Mutation means changing an existing object or array.

```js
const user = {
    name: "Anant",
    age: 25
};

user.age = 30;
```

The object itself has been modified.

The `user` binding has not been reassigned.

Arrays can also be mutated:

```js
const skills = ["JavaScript", "React"];

skills.push("Node.js");

console.log(skills);
```

Output:

```text
["JavaScript", "React", "Node.js"]
```

The existing array was modified.

But this is not allowed:

```js
skills = ["Python", "Java"];
```

because this attempts to reassign the `const` variable.

The distinction can be summarized as:

```text
Mutation
    → change the contents of an existing object/array

Reassignment
    → make the variable refer to a different value/object/array
```

---

# 8. `var`

`var` is the older variable declaration mechanism in JavaScript.

Before ES6, `var` was the primary way to declare variables.

Example:

```js
var age = 25;

age = 30;

console.log(age);
```

Output:

```text
30
```

Like `let`, `var` allows reassignment.

However, `var` also allows redeclaration in the same scope:

```js
var age = 25;

var age = 30;

console.log(age);
```

Output:

```text
30
```

This behavior can create unexpected results in larger programs.

Because of this and because of its function-scoping behavior, modern JavaScript generally prefers `let` and `const`.

---

# 9. Difference Between `var`, `let`, and `const`

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Reassignment | Allowed | Allowed | Not allowed |
| Redeclaration in same scope | Allowed | Not allowed | Not allowed |
| Block scoped | No | Yes | Yes |
| Function scoped | Yes | Yes | Yes |
| Must initialize immediately | No | No | Yes |
| Temporal Dead Zone | No | Yes | Yes |
| Modern usage | Generally avoid | Use when reassignment is needed | Preferred by default |

A common modern JavaScript rule is:

```text
Use const by default.

Use let when the variable needs reassignment.

Avoid var in new code unless there is a specific reason to use it.
```

---

# 10. Scope

Scope determines where a variable can be accessed.

For example:

```js
const name = "Anant";

console.log(name);
```

The variable `name` is accessible in the scope where it was declared.

The important types of scope for JavaScript variables are:

- Global/module scope
- Function scope
- Block scope

The location where a variable is declared determines its scope.

---

# 11. Block Scope

A block is generally a section of code enclosed in curly braces:

```js
{
    // block
}
```

Blocks are also created by structures such as:

```js
if (condition) {
}

for (...) {
}

while (...) {
}
```

`let` and `const` are block-scoped.

Example:

```js
if (true) {
    let age = 25;
    const name = "Anant";

    console.log(age);
    console.log(name);
}
```

Both variables are accessible inside the block.

However:

```js
if (true) {
    let age = 25;
}

console.log(age);
```

This produces a `ReferenceError`.

The reason is that `age` exists only inside the `if` block.

---

# 12. Function Scope

A function creates its own scope.

Example:

```js
function showAge() {
    let age = 25;

    console.log(age);
}

showAge();
```

The variable `age` belongs to the function's scope.

It cannot be accessed outside the function:

```js
function showAge() {
    let age = 25;
}

console.log(age);
```

This produces a `ReferenceError`.

Function scope is especially important when working with `var`.

---

# 13. `var` and Function Scope

`var` is function-scoped.

Example:

```js
function test() {
    var value = 10;

    console.log(value);
}

test();
```

The variable can be used inside the function.

It cannot be used outside:

```js
function test() {
    var value = 10;
}

console.log(value);
```

This results in a `ReferenceError`.

However, a normal block does not create a separate scope for `var`:

```js
if (true) {
    var value = 10;
}

console.log(value);
```

Output:

```text
10
```

This is different from `let`:

```js
if (true) {
    let value = 10;
}

console.log(value);
```

This results in:

```text
ReferenceError
```

Therefore:

```text
var   → function scoped
let   → block scoped
const → block scoped
```

---

# 14. Nested Scope

Scopes can be nested inside other scopes.

Example:

```js
const country = "India";

function outer() {
    const state = "Gujarat";

    function inner() {
        const city = "Vadodara";

        console.log(country);
        console.log(state);
        console.log(city);
    }

    inner();
}

outer();
```

Inside `inner()`, JavaScript can access:

```text
city
state
country
```

because the variable lookup can move outward through surrounding scopes.

The lookup can be visualized as:

```text
inner scope
    ↓
outer function scope
    ↓
outer/global/module scope
```

---

# 15. Lexical Scope

JavaScript uses lexical scoping.

Lexical scope means that the accessibility of variables is determined by where the code is written.

Example:

```js
const name = "Anant";

function outer() {
    const age = 25;

    function inner() {
        console.log(name);
        console.log(age);
    }

    inner();
}

outer();
```

The `inner()` function can access `age` and `name` because they exist in its surrounding lexical environment.

The structure of the source code determines the relationship between these scopes.

This concept is important later when learning closures.

---

# 16. Variable Shadowing

Variable shadowing occurs when an inner scope declares a variable with the same name as a variable in an outer scope.

Example:

```js
let name = "Anant";

{
    let name = "Rahul";

    console.log(name);
}

console.log(name);
```

Output:

```text
Rahul
Anant
```

Inside the block, the inner `name` shadows the outer `name`.

Outside the block, the outer `name` is used.

Another example:

```js
const name = "Anant";

function greet() {
    const name = "Rahul";

    console.log(name);
}

greet();

console.log(name);
```

Output:

```text
Rahul
Anant
```

The two variables have the same identifier but belong to different scopes.

---

# 17. Hoisting

Hoisting is a term used to describe how JavaScript handles declarations when an execution context is created.

A common beginner explanation is:

> JavaScript moves declarations to the top.

This is useful as an initial mental model, but it is not literally moving the source code.

Different declarations behave differently.

---

# 18. `var` Hoisting

Consider:

```js
console.log(age);

var age = 25;
```

The output is:

```text
undefined
```

A useful simplified way of understanding this is:

```js
var age;

console.log(age);

age = 25;
```

The declaration is available before the assignment happens.

Therefore, when `console.log(age)` executes, the variable exists but its value is `undefined`.

---

# 19. `let` and `const` Before Declaration

Consider:

```js
console.log(age);

let age = 25;
```

This produces:

```text
ReferenceError
```

The same happens with `const`:

```js
console.log(age);

const age = 25;
```

This also produces a `ReferenceError`.

The reason is the Temporal Dead Zone.

---

# 20. Temporal Dead Zone

The Temporal Dead Zone, usually called TDZ, is the period between entering a scope and reaching the declaration of a `let` or `const` variable.

Example:

```js
{
    console.log(age);

    let age = 25;
}
```

The access occurs before the declaration is reached.

Therefore JavaScript throws a `ReferenceError`.

A simplified model is:

```text
Scope begins
    ↓
Temporal Dead Zone
    ↓
Declaration is reached
    ↓
Variable can be accessed
```

The TDZ is one reason `let` and `const` behave differently from `var`.

---

# 21. Are `let` and `const` Hoisted?

This is a common interview question.

A technically accurate answer is:

> `let` and `const` declarations are processed when the scope is created, but they cannot be accessed before their declaration is reached because they are in the Temporal Dead Zone.

Therefore, saying:

```text
let and const are not hoisted
```

is an oversimplification.

A better comparison is:

```text
var
    declaration is available before its line
    accessing it before assignment gives undefined

let / const
    declaration is processed
    accessing it before the declaration causes ReferenceError
    because of the Temporal Dead Zone
```

---

# 22. Variables in Loops

The difference between `var` and `let` becomes particularly useful in loops.

Example:

```js
for (var i = 0; i < 3; i++) {
    console.log(i);
}

console.log(i);
```

Output:

```text
0
1
2
3
```

The final `console.log(i)` can access `i`.

Now compare:

```js
for (let i = 0; i < 3; i++) {
    console.log(i);
}

console.log(i);
```

The final `console.log(i)` produces a `ReferenceError`.

The `let` variable belongs to the loop's block scope.

For modern JavaScript, `let` is normally preferred for loop counters.

---

# 23. Variable Naming Rules

JavaScript variable names are identifiers.

They can contain:

- letters
- numbers
- underscores `_`
- dollar signs `$`

Examples:

```js
let name;
let age25;
let userName;
let _value;
let $price;
```

A variable name cannot start with a number.

Invalid:

```js
let 25age;
```

Variable names are case-sensitive.

These are different identifiers:

```js
let age = 25;
let Age = 30;
let AGE = 40;
```

JavaScript treats all three as separate names.

---

# 24. Reserved Words

JavaScript has keywords that have a special meaning in the language.

Examples include:

```text
var
let
const
if
else
for
while
function
return
class
new
switch
try
catch
```

These should not be used as normal variable names.

For example:

```js
let class = "MCA";
```

is invalid JavaScript.

---

# 25. Naming Conventions

JavaScript commonly uses camelCase for variables.

Examples:

```js
let firstName = "Anant";
let lastName = "Prabhudesai";
let totalPrice = 500;
let userAge = 25;
let isLoggedIn = true;
```

Good names should describe the purpose of the value.

Instead of:

```js
let x = 2500;
```

it is usually better to write:

```js
let totalPrice = 2500;
```

The second version makes the purpose of the value immediately clearer.

For fixed configuration values, uppercase naming is sometimes used:

```js
const API_URL = "https://example.com";
const MAX_RETRIES = 3;
```

This is a convention, not a JavaScript rule.

---

# 26. Dynamic Typing

JavaScript is dynamically typed.

This means a variable does not have one permanent type attached to its name.

For example:

```js
let value = 10;

console.log(typeof value);

value = "Hello";

console.log(typeof value);
```

Output:

```text
number
string
```

The variable `value` first referred to a number and later referred to a string.

The type belongs to the value.

This is one of the differences between JavaScript and statically typed languages such as Java or C#.

---

# 27. `typeof` With Variables

The `typeof` operator can be used to determine the type of a value.

Example:

```js
const name = "Anant";
const age = 25;
const isStudent = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
```

Output:

```text
string
number
boolean
```

Another example:

```js
let result;

console.log(typeof result);
```

Output:

```text
undefined
```

`typeof` is commonly used when inspecting values and debugging JavaScript programs.

---

# 28. Variables and Objects

A variable can refer to an object:

```js
const user = {
    name: "Anant",
    age: 25
};
```

The object's properties can be changed:

```js
user.age = 26;
```

But the binding itself cannot be reassigned:

```js
user = {};
```

The same concept applies to arrays:

```js
const numbers = [10, 20, 30];

numbers.push(40);
```

This is allowed because the existing array was modified.

This is not allowed:

```js
numbers = [1, 2, 3];
```

because the `numbers` binding would have to be reassigned.

---

# 29. `Object.freeze()`

`const` and `Object.freeze()` are not the same thing.

`const` controls reassignment of the variable binding.

`Object.freeze()` restricts changes to an object's own properties.

Example:

```js
const user = {
    name: "Anant",
    age: 25
};

Object.freeze(user);
```

After freezing, normal property modification is prevented.

```js
user.age = 30;
```

In strict mode this can throw a `TypeError`. In non-strict mode, the assignment is ignored.

It is also important to remember that `Object.freeze()` is shallow.

For example:

```js
const user = {
    name: "Anant",
    address: {
        city: "Vadodara"
    }
};

Object.freeze(user);
```

The outer object is frozen, but nested objects are not automatically deeply frozen.

---

# 30. Global Variables

A top-level variable can have broad visibility depending on the JavaScript environment.

In an ES module, top-level variables belong to the module's scope.

In general application development, unnecessary global variables should be avoided because they make programs harder to maintain.

For example:

```js
let total = 0;
```

If many unrelated parts of an application can modify `total`, it becomes difficult to determine where a particular value came from.

Keeping variables in the smallest appropriate scope makes code easier to understand and maintain.

---

# 31. Variable vs Value

A variable and the value associated with it are not exactly the same thing.

Consider:

```js
let age = 25;
```

Here:

```text
age
```

is the variable identifier/binding.

And:

```text
25
```

is the value.

The variable provides a name through which the program can access that value.

This distinction becomes especially important with objects:

```js
const user = {
    name: "Anant"
};
```

The variable `user` refers to an object value.

This is why changing an object property and reassigning the variable are two different operations.

---

# 32. Choosing Between `let` and `const`

A practical rule for choosing between `let` and `const` is:

```text
Does the binding need to be reassigned?

No
↓
Use const

Yes
↓
Use let
```

For example:

```js
const userName = "Anant";
```

If `userName` will never be reassigned, `const` communicates that intention.

For a changing value:

```js
let score = 0;

score += 10;
```

`let` is appropriate because the variable is reassigned.

There is usually no advantage in using `let` for every variable.

---

# 33. Common Mistakes

## Mistake 1: Using `var` everywhere

Older tutorials often use:

```js
var name = "Anant";
```

Modern code generally prefers:

```js
const name = "Anant";
```

or:

```js
let name = "Anant";
```

depending on whether reassignment is needed.

---

## Mistake 2: Thinking `const` makes objects immutable

Incorrect:

```text
const means the object can never change
```

Correct:

```text
const prevents reassignment of the binding.

The referenced object or array can still be mutated.
```

Example:

```js
const user = {
    name: "Anant"
};

user.name = "Rahul";
```

This is allowed.

---

## Mistake 3: Confusing reassignment with redeclaration

Reassignment:

```js
let age = 25;

age = 30;
```

Redeclaration:

```js
let age = 25;

let age = 30;
```

The first is valid.

The second is not allowed in the same scope.

---

## Mistake 4: Accessing `let` before declaration

```js
console.log(age);

let age = 25;
```

This produces a `ReferenceError` because the variable is in the Temporal Dead Zone before its declaration is reached.

---

## Mistake 5: Assuming `var` is block-scoped

```js
if (true) {
    var value = 10;
}

console.log(value);
```

This works because `var` is function-scoped.

With `let`:

```js
if (true) {
    let value = 10;
}

console.log(value);
```

The variable is unavailable outside the block.

---

# 34. Practical Examples

## Example 1: User information

```js
const name = "Anant";
const age = 25;
const city = "Vadodara";

console.log(name);
console.log(age);
console.log(city);
```

---

## Example 2: Changing score

```js
let score = 0;

score += 10;
score += 20;

console.log(score);
```

Output:

```text
30
```

---

## Example 3: Object mutation

```js
const user = {
    name: "Anant",
    age: 25
};

user.age = 26;

console.log(user);
```

---

## Example 4: Array mutation

```js
const skills = ["JavaScript", "React"];

skills.push("Node.js");

console.log(skills);
```

---

## Example 5: Block scope

```js
if (true) {
    const message = "Hello JavaScript";

    console.log(message);
}
```

The variable `message` exists only inside the block.

---

# 35. Interview Questions

## Basic Questions

1. What is a variable in JavaScript?
2. What are the three keywords used to declare variables?
3. What is the difference between `let` and `const`?
4. What is `var`?
5. Can a `let` variable be reassigned?
6. Can a `const` variable be reassigned?
7. Can `let` be redeclared in the same scope?
8. Can `const` be redeclared in the same scope?
9. Can `let` be declared without initialization?
10. Can `const` be declared without initialization?

## Scope Questions

11. What is scope?
12. What is block scope?
13. What is function scope?
14. What is the difference between `var` and `let` regarding scope?
15. What is lexical scope?
16. What is variable shadowing?
17. What is the scope chain?
18. Why should global variables generally be minimized?

## Hoisting Questions

19. What is hoisting?
20. What happens when a `var` variable is accessed before its assignment?
21. What happens when a `let` variable is accessed before its declaration?
22. What is the Temporal Dead Zone?
23. Are `let` and `const` hoisted?
24. Why does `var` return `undefined` in some cases before its assignment?

## Object and Array Questions

25. Is `const` immutable?
26. Can an object declared with `const` be modified?
27. Can an array declared with `const` be modified?
28. What is the difference between mutation and reassignment?
29. What does `Object.freeze()` do?
30. Is `Object.freeze()` deep or shallow?

## Practical Questions

31. Why is `const` generally preferred?
32. When should `let` be used?
33. Why is `var` generally avoided in modern JavaScript?
34. What is dynamic typing?
35. What is variable shadowing?
36. What happens when JavaScript cannot find a variable in the current scope?

---

# 36. Output-Based Questions

Before running these examples, predict the result and explain why.

## Question 1

```js
var age = 25;

console.log(age);
```

## Question 2

```js
let age = 25;

age = 30;

console.log(age);
```

## Question 3

```js
const age = 25;

age = 30;

console.log(age);
```

## Question 4

```js
console.log(age);

var age = 25;
```

## Question 5

```js
console.log(age);

let age = 25;
```

## Question 6

```js
let age = 25;

{
    let age = 30;

    console.log(age);
}

console.log(age);
```

## Question 7

```js
var age = 25;

{
    var age = 30;
}

console.log(age);
```

## Question 8

```js
const user = {
    name: "Anant"
};

user.name = "Rahul";

console.log(user.name);
```

## Question 9

```js
const user = {
    name: "Anant"
};

user = {
    name: "Rahul"
};

console.log(user.name);
```

## Question 10

```js
let result;

console.log(result);
```

## Question 11

```js
const user = {
    age: 25
};

user.age++;

console.log(user.age);
```

## Question 12

```js
function test() {
    var a = 10;
    let b = 20;
}

console.log(a);
console.log(b);
```

The important part of these questions is not only getting the output correct. The explanation is more important.

For example, instead of saying:

```text
Output: 30
```

an interview answer should explain why the value is `30` and which JavaScript rule caused that result.

---

# 37. Practice Exercises

## Exercise 1

Create variables for:

```text
name
age
city
isStudent
```

Choose the appropriate declaration keyword for each.

---

## Exercise 2

Create a score variable starting at `0`.

Increase the score several times during program execution.

---

## Exercise 3

Create a user object using `const`.

The object should contain:

```text
name
age
city
```

Modify the age after creating the object.

---

## Exercise 4

Create an array using `const`.

Add a new item using `push()`.

---

## Exercise 5

Create a block and demonstrate that a `let` variable declared inside the block cannot be accessed outside the block.

---

## Exercise 6

Create an example that demonstrates the difference between `var` and `let` inside an `if` block.

---

## Exercise 7

Create an example of variable shadowing.

---

## Exercise 8

Create an example demonstrating `var` hoisting.

---

## Exercise 9

Create an example demonstrating the Temporal Dead Zone using `let`.

---

## Exercise 10

Create a small program where `let` is necessary because the value changes during execution.

---

# 38. Quick Reference

```text
var
    Function scoped
    Can be reassigned
    Can be redeclared
    No Temporal Dead Zone
    Legacy declaration mechanism

let
    Block scoped
    Can be reassigned
    Cannot be redeclared in the same scope
    Has Temporal Dead Zone

const
    Block scoped
    Cannot be reassigned
    Cannot be redeclared in the same scope
    Must be initialized
    Has Temporal Dead Zone
```

Modern JavaScript:

```text
const → default choice
let   → use when reassignment is required
var   → generally avoid in new code
```

Important distinction:

```text
Reassignment ≠ Mutation
```

Example:

```js
const user = {
    name: "Anant"
};

user.name = "Rahul";
```

This is mutation and is allowed.

But:

```js
user = {};
```

is reassignment and is not allowed.

Scope:

```text
var   → function scope
let   → block scope
const → block scope
```

Hoisting:

```text
var
    → can be accessed before assignment
    → value is undefined

let / const
    → cannot be accessed before declaration
    → ReferenceError because of TDZ
```

The most useful practical rule is:

```text
Use const by default.
Use let when reassignment is required.
Avoid var in modern JavaScript.
```

Understanding variables, reassignment, mutation, scope, shadowing, hoisting, and the Temporal Dead Zone provides the foundation for understanding functions, objects, arrays, closures, asynchronous JavaScript, modules, and React.