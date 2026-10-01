// ============================================================
// A Smarter Way to Learn JavaScript
// JavaScript Practice — Chapters 38–40
// Local & Global Variables + Switch Statements
// ============================================================

// ============================================================
// CHAPTER 38 — LOCAL & GLOBAL VARIABLES
// ============================================================

// Global variable
var studentName = "Hamid";

function showStudent() {
  // Local variable
  var course = "JavaScript";

  console.log(course);
  console.log(studentName);
}

showStudent();

console.log(studentName);

// ------------------------------------------------------------
// Question 1 — Global and Local Variables
// ------------------------------------------------------------

var userName = "Hamid";

function showUser() {
  var course = "JavaScript";

  console.log(course);
  console.log(userName);
}

showUser();

console.log(userName);

// ------------------------------------------------------------
// Question 2 — Local Variable
// ------------------------------------------------------------

function showMessage() {
  var message = "I am learning JavaScript";

  console.log(message);
}

showMessage();

// ------------------------------------------------------------
// Question 3 — Parameters are Local Variables
// ------------------------------------------------------------

function greet(name) {
  console.log("Hello " + name);
}

greet("Hamid");
greet("Ali");
greet("Hamza");

// ------------------------------------------------------------
// Question 4 — Same Global and Local Variable Name
// ------------------------------------------------------------

var name = "Hamid";

function showName() {
  var name = "Ali";

  console.log(name);
}

showName();

console.log(name);

// ------------------------------------------------------------
// Question 5 — Shadowing Practice
// ------------------------------------------------------------

var city = "Karachi";

function showCity() {
  var city = "Lahore";

  console.log(city);
}

showCity();

console.log(city);

// ============================================================
// CHAPTER 39 — SWITCH STATEMENTS
// ============================================================

// Basic switch statement

var day = "monday";

switch (day) {
  case "monday":
    console.log("Start of the week");
    break;

  case "friday":
    console.log("Almost weekend");
    break;

  case "saturday":
    console.log("Weekend");
    break;

  case "sunday":
    console.log("Weekend");
    break;

  default:
    console.log("Normal Day");
}

// ------------------------------------------------------------
// Question 6 — Traffic Light
// ------------------------------------------------------------

var color = "green";

switch (color) {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Get Ready");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Unknown Color");
}

// ------------------------------------------------------------
// Question 7 — Grade Checker
// ------------------------------------------------------------

var grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent");
    break;

  case "B":
    console.log("Very Good");
    break;

  case "C":
    console.log("Good");
    break;

  case "D":
    console.log("Needs Improvement");
    break;

  default:
    console.log("Invalid Grade");
}

// ------------------------------------------------------------
// Question 8 — Number Switch
// ------------------------------------------------------------

var number = 3;

switch (number) {
  case 1:
    console.log("One");
    break;

  case 2:
    console.log("Two");
    break;

  case 3:
    console.log("Three");
    break;

  case 4:
    console.log("Four");
    break;

  default:
    console.log("Other Number");
}

// ============================================================
// CHAPTER 40 — SWITCH STATEMENTS: HOW TO COMPLETE THEM
// ============================================================

// ------------------------------------------------------------
// Question 9 — Break Practice
// ------------------------------------------------------------

var selectedDay = "Sunday";

switch (selectedDay) {
  case "Saturday":
    console.log("Saturday");
    break;

  case "Sunday":
    console.log("Sunday");
    break;

  case "Monday":
    console.log("Monday");
    break;

  default:
    console.log("Other Day");
}

// ------------------------------------------------------------
// Question 10 — Fall-Through Demonstration
// ------------------------------------------------------------

// Intentionally no break after case 2.
// When value is 2, case 3 also executes.

var value = 2;

switch (value) {
  case 1:
    console.log("One");
    break;

  case 2:
    console.log("Two");

  case 3:
    console.log("Three");
    break;

  default:
    console.log("Other");
}

// ------------------------------------------------------------
// Question 11 — Multiple Cases with Same Result
// ------------------------------------------------------------

var weekendDay = "Sunday";

switch (weekendDay) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;

  default:
    console.log("Weekday");
}

// ------------------------------------------------------------
// Question 12 — Complete Day Checker
// ------------------------------------------------------------

var currentDay = "Sunday";

switch (currentDay) {
  case "Monday":
    console.log("Start of week");
    break;

  case "Friday":
    console.log("Almost weekend");
    break;

  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;

  default:
    console.log("Invalid day");
}

// ------------------------------------------------------------
// Question 13 — Month Checker
// ------------------------------------------------------------

var month = "December";

switch (month) {
  case "January":
    console.log("Month 1");
    break;

  case "February":
    console.log("Month 2");
    break;

  case "March":
    console.log("Month 3");
    break;

  case "December":
    console.log("Month 12");
    break;

  default:
    console.log("Unknown Month");
}

// ------------------------------------------------------------
// Question 14 — Menu Selection
// ------------------------------------------------------------

var choice = 2;

switch (choice) {
  case 1:
    console.log("Burger");
    break;

  case 2:
    console.log("Pizza");
    break;

  case 3:
    console.log("Pasta");
    break;

  case 4:
    console.log("Sandwich");
    break;

  default:
    console.log("Invalid Choice");
}

// ------------------------------------------------------------
// Question 15 — Day Type
// ------------------------------------------------------------

var today = "Saturday";

switch (today) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;

  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Weekday");
    break;

  default:
    console.log("Invalid Day");
}

// ============================================================
// CHAPTER 38–40 — QUICK REVIEW
// ============================================================

// Global variable:
// Declared outside a function.

// Local variable:
// Declared inside a function.

// Parameter:
// A local variable created by a function parameter.

// Shadowing:
// A local variable with the same name as a global variable
// hides the global variable inside that function.

// switch:
// Tests one value against multiple possible cases.

// case:
// Represents one possible value.

// break:
// Stops execution of the switch after a matching case.

// default:
// Runs when none of the cases match.

// Fall-through:
// When a matching case has no break, execution continues
// into the following case.

// Multiple cases:
// Cases can intentionally share the same code.
