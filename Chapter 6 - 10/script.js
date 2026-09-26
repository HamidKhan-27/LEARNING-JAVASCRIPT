// ==========================================
// A Smarter Way to Learn JavaScript
// Chapters 06 - 10 Practice
// ==========================================

// ==========================================
// CHAPTER 06
// Math Expressions: Unfamiliar Operators
// ==========================================

// ++ number ko 1 se increase karta hai
var num = 5;

num++;

console.log("After increment:", num);
// Output: 6

// -- number ko 1 se decrease karta hai
num--;

console.log("After decrement:", num);
// Output: 5

// Post-increment
var number1 = 10;

var result1 = number1++;

console.log("Post-increment result:", result1);
console.log("Number after increment:", number1);

// Pre-increment
var number2 = 10;

var result2 = ++number2;

console.log("Pre-increment result:", result2);
console.log("Number after increment:", number2);

// ==========================================
// CHAPTER 07
// Math Expressions: Eliminating Ambiguity
// ==========================================

// Multiplication pehle execute hoti hai
var result3 = 1 + 3 * 4;

console.log("Without parentheses:", result3);
// Output: 13

// Parentheses operation ka order control karti hain
var result4 = (1 + 3) * 4;

console.log("With parentheses:", result4);
// Output: 16

// Complex calculation
var totalCost = 2 * 4 * (4 + 2);

console.log("Total cost:", totalCost);

// ==========================================
// CHAPTER 08
// Concatenating Text Strings
// ==========================================

var firstName = "Hamid";
var lastName = "Khan";

// + strings ko join karta hai
var fullName = firstName + " " + lastName;

console.log("Full Name:", fullName);

// Personalized message
var message = "Hello, " + firstName + "!";

console.log(message);

// String + number
var age = 20;

var info = "My age is " + age;

console.log(info);

// Quotes mein numbers strings ban jate hain
var stringResult = "10" + "5";

console.log("String addition:", stringResult);
// Output: 105

// Numbers as numbers
var numberResult = 10 + 5;

console.log("Number addition:", numberResult);
// Output: 15

// ==========================================
// CHAPTER 09
// Prompts
// ==========================================

// prompt() user se input leta hai

var userName = prompt("Enter your name:");

alert("Welcome " + userName + "!");

// Prompt ka input normally string hota hai
var userAge = prompt("Enter your age:");

console.log("User age:", userAge);

// ==========================================
// CHAPTER 10
// if Statements
// ==========================================

var ageToCheck = 20;

if (ageToCheck >= 18) {
  alert("You are eligible.");
}

// False condition ka code execute nahi hoga
if (ageToCheck < 18) {
  alert("You are under 18.");
}

// String comparison
var city = "Karachi";

if (city === "Karachi") {
  alert("You are from Karachi.");
}

// ==========================================
// FINAL PRACTICE
// ==========================================

var userAgeInput = prompt("Enter your age:");

var userAgeNumber = Number(userAgeInput);

if (userAgeNumber >= 18) {
  alert("You are an adult.");
}
