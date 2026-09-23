// ==========================================
// A Smarter Way to Learn JavaScript
// Chapters 01 - 05 Practice
// ==========================================

// ==========================================
// CHAPTER 01
// Alerts
// ==========================================

// alert() browser mein popup message show karta hai
alert("Welcome to JavaScript!");

// ==========================================
// CHAPTER 02
// Variables for Strings
// ==========================================

// String ko variable mein store karna
var userName = "Hamid";

console.log(userName);

// Variable ko alert mein use karna
alert("Hello " + userName);

// Variable ki value change karna
userName = "Ali";

console.log(userName);

// ==========================================
// CHAPTER 03
// Variables for Numbers
// ==========================================

// Number ko variable mein store karna
var age = 20;

console.log(age);

// Numbers par calculation
var birthYear = 2026 - age;

console.log("Birth Year:", birthYear);

// ==========================================
// CHAPTER 04
// Variable Names: Legal and Illegal
// ==========================================

// Legal variable names
var firstName = "Hamid";
var userAge = 20;
var student_name = "Hamid";
var $price = 100;

// JavaScript variable names case-sensitive hain
var city = "Karachi";
var City = "Lahore";

console.log("city:", city);
console.log("City:", City);

// CamelCase naming convention
var userFirstName = "Hamid Khan";

console.log(userFirstName);

// ==========================================
// CHAPTER 05
// Math Expressions: Familiar Operators
// ==========================================

// Addition
var addition = 10 + 5;

console.log("Addition:", addition);

// Subtraction
var subtraction = 10 - 5;

console.log("Subtraction:", subtraction);

// Multiplication
var multiplication = 10 * 5;

console.log("Multiplication:", multiplication);

// Division
var division = 10 / 5;

console.log("Division:", division);

// Modulus (%) remainder deta hai
var remainder = 10 % 3;

console.log("Remainder:", remainder);

// Variables ke saath calculation
var num1 = 10;
var num2 = 20;

var total = num1 + num2;

console.log("Total:", total);

// ==========================================
// FINAL PRACTICE
// ==========================================

var studentName = "Hamid";
var marks = 85;
var totalMarks = 100;

var percentage = (marks / totalMarks) * 100;

alert(
  "Student: " +
    studentName +
    "\nMarks: " +
    marks +
    "\nPercentage: " +
    percentage +
    "%",
);
