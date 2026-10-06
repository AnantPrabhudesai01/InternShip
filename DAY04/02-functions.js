// ============================================================
// JavaScript Functions - Calculator
// ============================================================

// ------------------------------------------------------------
// 1. Addition
// ------------------------------------------------------------

function add(a, b) {
    return a + b;
}


// ------------------------------------------------------------
// 2. Subtraction
// ------------------------------------------------------------

function subtract(a, b) {
    return a - b;
}


// ------------------------------------------------------------
// 3. Multiplication
// ------------------------------------------------------------

function multiply(a, b) {
    return a * b;
}


// ------------------------------------------------------------
// 4. Division
// ------------------------------------------------------------

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }

    return a / b;
}


// ------------------------------------------------------------
// 5. Square
// ------------------------------------------------------------

function square(number) {
    return number * number;
}


// ------------------------------------------------------------
// 6. Cube
// ------------------------------------------------------------

function cube(number) {
    return number * number * number;
}


// ------------------------------------------------------------
// 7. Percentage
// ------------------------------------------------------------

function percentage(number, percent) {
    return (number * percent) / 100;
}


// ------------------------------------------------------------
// 8. Calculator Function Using Callback
// ------------------------------------------------------------

// operation is a function passed as an argument.
// Therefore, operation is a callback function.

function calculate(a, b, operation) {
    return operation(a, b);
}


// ------------------------------------------------------------
// 9. Testing Basic Operations
// ------------------------------------------------------------

console.log("===== BASIC OPERATIONS =====");

console.log("Addition:", add(10, 5));

console.log("Subtraction:", subtract(10, 5));

console.log("Multiplication:", multiply(10, 5));

console.log("Division:", divide(10, 5));

console.log("Division by zero:", divide(10, 0));


// ------------------------------------------------------------
// 10. Testing Additional Operations
// ------------------------------------------------------------

console.log("\n===== ADDITIONAL OPERATIONS =====");

console.log("Square of 5:", square(5));

console.log("Cube of 5:", cube(5));

console.log("20% of 500:", percentage(500, 20));


// ------------------------------------------------------------
// 11. Calculator Using Callback Functions
// ------------------------------------------------------------

console.log("\n===== CALLBACK CALCULATOR =====");

console.log("10 + 5 =", calculate(10, 5, add));

console.log("10 - 5 =", calculate(10, 5, subtract));

console.log("10 × 5 =", calculate(10, 5, multiply));

console.log("10 ÷ 5 =", calculate(10, 5, divide));


// ------------------------------------------------------------
// 12. Calculator Using Arrow Functions as Callbacks
// ------------------------------------------------------------

console.log("\n===== ARROW FUNCTION CALCULATOR =====");

console.log(
    "10 + 5 =",
    calculate(10, 5, (a, b) => a + b)
);

console.log(
    "10 - 5 =",
    calculate(10, 5, (a, b) => a - b)
);

console.log(
    "10 × 5 =",
    calculate(10, 5, (a, b) => a * b)
);

console.log(
    "10 ÷ 5 =",
    calculate(10, 5, (a, b) => a / b)
);


// ------------------------------------------------------------
// 13. Calculator Object
// ------------------------------------------------------------

const calculator = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    square: square,
    cube: cube,
    percentage: percentage
};


// ------------------------------------------------------------
// 14. Using Functions Through the Object
// ------------------------------------------------------------

console.log("\n===== CALCULATOR OBJECT =====");

console.log("Add:", calculator.add(20, 10));

console.log("Subtract:", calculator.subtract(20, 10));

console.log("Multiply:", calculator.multiply(20, 10));

console.log("Divide:", calculator.divide(20, 10));

console.log("Square:", calculator.square(5));

console.log("Cube:", calculator.cube(5));

console.log("Percentage:", calculator.percentage(500, 10));


// ------------------------------------------------------------
// Final Notes
// ------------------------------------------------------------
//
// This calculator demonstrates:
//
// 1. Function declarations
// 2. Parameters
// 3. Arguments
// 4. Return values
// 5. Conditional statements inside functions
// 6. Arrow functions
// 7. Callback functions
// 8. Functions passed as arguments
// 9. Functions stored inside objects
// 10. Reusable functions
//
// ------------------------------------------------------------