// ============================================================
// A Smarter Way to Learn JavaScript
// Chapters 35–37: Functions Practice
// ============================================================
// Topics Covered:
// - Function declaration
// - Function calls
// - Parameters
// - Arguments
// - Multiple parameters
// - Passing data to functions
// - return statement
// - Using returned values
// - if / else inside functions
// - for loops inside functions
// ============================================================

// ============================================================
// CHAPTER 35 — FUNCTION BASICS
// ============================================================

// -------------------------
// Basic Function
// -------------------------

// A function is a reusable block of code.
// We define a function using the "function" keyword.

function showName() {
  alert("Hamid Khan");
}

// Calling the same function multiple times
showName();
showName();
showName();

// -------------------------
// Parameters and Arguments
// -------------------------

// "name" is a parameter.
// The actual values passed when calling the function are arguments.

function showMessage(name) {
  alert(name);
}

showMessage("Hello Hamid");
showMessage("Welcome to JavaScript");
showMessage("I Can Learn JavaScript");

// -------------------------
// Multiple Parameters
// -------------------------

function calculateSum(num1, num2) {
  alert(num1 + num2);
}

calculateSum(10, 20);
calculateSum(50, 25);
calculateSum(100, 200);

// ============================================================
// CHAPTER 36 — PASSING DATA TO FUNCTIONS
// ============================================================

// Functions can receive different values through parameters.
// Arguments are assigned to parameters according to their order.

function calculateBill(price, quantity) {
  alert(price * quantity);
}

calculateBill(250, 2);
calculateBill(500, 3);
calculateBill(1000, 4);

// ============================================================
// CHAPTER 37 — RETURNING DATA FROM FUNCTIONS
// ============================================================

// return sends a value back outside the function.
// The returned value can be stored in a variable.

function calculateProduct(a, b) {
  return a * b;
}

var result = calculateProduct(10, 5);

console.log(result);

// -------------------------
// Using a Returned Value
// -------------------------

function calculateSumWithReturn(a, b) {
  return a + b;
}

var total = calculateSumWithReturn(10, 20);

console.log(total * 2);

// -------------------------
// Returned Value + Another Function
// -------------------------

function add(a, b) {
  return a + b;
}

function calculateDouble(num) {
  return num * 2;
}

var finalResult = calculateDouble(add(10, 20));

console.log(finalResult);

// Flow:
//
// add(10, 20)
//      ↓
//     30
//      ↓
// calculateDouble(30)
//      ↓
//     60

// -------------------------
// Calculate Average
// -------------------------

function calculateAverage(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

var average = calculateAverage(10, 20, 30);

console.log(average);

// ============================================================
// PRACTICE QUESTIONS
// ============================================================

// ============================================================
// Question 1 — Greeting Function
// ============================================================

function greet(name) {
  console.log("Hello " + name);
}

greet("Hamid");
greet("Ali");
greet("Hamza");

// ============================================================
// Question 2 — Add Two Numbers
// ============================================================

function addNumbers(a, b) {
  console.log(a + b);
}

addNumbers(20, 10);
addNumbers(5, 7);

// ============================================================
// Question 3 — Multiply Two Numbers Using return
// ============================================================

function multiply(a, b) {
  return a * b;
}

let finalNum = multiply(5, 4);

console.log(finalNum);

// ============================================================
// Question 4 — Check Even or Odd
// ============================================================

function isEven(a) {
  if (a % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

let num = isEven(7);

console.log(num);

// ============================================================
// Question 5 — Grade Calculator
// ============================================================

function getGrade(marks) {
  if (marks >= 80) {
    return "A One Grade";
  } else if (marks >= 70) {
    return "A Grade";
  } else if (marks >= 60) {
    return "B Grade";
  } else if (marks >= 50) {
    return "C Grade";
  } else if (marks >= 40) {
    return "D Grade";
  } else {
    return "Fail";
  }
}

let grade = getGrade(76);

console.log(grade);

// ============================================================
// Question 6 — Age Eligibility
// ============================================================

function checkAge(age, name) {
  if (age >= 18) {
    return name + " is eligible";
  } else {
    return name + " is not eligible";
  }
}

let answer = checkAge(20, "Hamid");

console.log(answer);

// ============================================================
// Question 7 — Calculate Total Bill
// ============================================================

function calculateTotal(price, quantity) {
  return price * quantity;
}

let totalBill = calculateTotal(500, 3);

console.log(totalBill);

// ============================================================
// Question 8 — Calculate Average
// ============================================================

function calculateAverageNumbers(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

let averageMarks = calculateAverageNumbers(10, 20, 30);

console.log(averageMarks);

// ============================================================
// Question 9 — Calculate Discount
// ============================================================

function calculateDiscount(price, discount) {
  if (price >= 1000) {
    let discountPrice = (price * discount) / 100;

    return price - discountPrice;
  } else {
    return "You can not get discount";
  }
}

let finalPrice = calculateDiscount(1000, 20);

console.log(finalPrice);

// ============================================================
// Question 10 — Print Numbers in a Range
// ============================================================

function printNumbers(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}

printNumbers(1, 5);

// ============================================================
// Question 11 — Calculate Sum of a Range
// ============================================================

function calculateRangeSum(start, end) {
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum = sum + i;
  }

  return sum;
}

let finalSum = calculateRangeSum(1, 5);

console.log(finalSum);

// ============================================================
// Question 12 — Count Even Numbers in a Range
// ============================================================

function countEven(start, end) {
  let count = 0;

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }

  return count;
}

let finalCount = countEven(1, 10);

console.log(finalCount);

// ============================================================
// KEY TAKEAWAYS
// ============================================================

// 1. function → creates a reusable block of code.
//
// 2. parameter → variable written inside the function definition.
//
// 3. argument → actual value passed during the function call.
//
// 4. return → sends a value back outside the function.
//
// 5. A returned value can be stored in a variable.
//
// 6. A returned value can be used in another calculation.
//
// 7. A returned value can be passed to another function.
//
// 8. Functions can contain if/else statements.
//
// 9. Functions can contain for loops.
//
// 10. The same function can be called multiple times
//     with different data.
