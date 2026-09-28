// ==========================================
// A Smarter Way to Learn JavaScript
// Chapters 26 - 30 Practice
// ==========================================

// ==========================================
// CHAPTER 26
// Rounding Numbers
// ==========================================

var number = 4.7;

// Math.round() nearest integer par round karta hai
var roundedNumber = Math.round(number);

console.log("Math.round():", roundedNumber);
// Output: 5

// Math.ceil() hamesha upar ki taraf round karta hai
var ceilNumber = Math.ceil(4.1);

console.log("Math.ceil():", ceilNumber);
// Output: 5

// Math.floor() hamesha neeche ki taraf round karta hai
var floorNumber = Math.floor(4.9);

console.log("Math.floor():", floorNumber);
// Output: 4

// ==========================================
// CHAPTER 27
// Generating Random Numbers
// ==========================================

// Math.random() 0 se 1 se chhoti random decimal value deta hai
var randomNumber = Math.random();

console.log("Random number:", randomNumber);

// 1 se 10 tak random integer
var randomNumber1To10 = Math.floor(Math.random() * 10) + 1;

console.log("Random number (1-10):", randomNumber1To10);

// 1 se 6 tak random number
// Isko dice ke example ki tarah use kar sakte hain
var dice = Math.floor(Math.random() * 6) + 1;

console.log("Dice:", dice);

// ==========================================
// CHAPTER 28
// Converting Strings to Integers and Decimals
// ==========================================

// prompt() se normally input string milta hai.
// Example:
// var age = prompt("Enter your age");

// parseInt() string ko integer mein convert karta hai
var integerNumber = parseInt("25.75");

console.log("parseInt():", integerNumber);
// Output: 25

// parseFloat() string ko decimal number mein convert karta hai
var decimalNumber = parseFloat("25.75");

console.log("parseFloat():", decimalNumber);
// Output: 25.75

// Example: prompt se number lena aur calculation karna
var currentAge = "20";

// String ko integer mein convert karke 1 add kar rahe hain
var nextAge = parseInt(currentAge) + 1;

console.log("Next age:", nextAge);
// Output: 21

// ==========================================
// CHAPTER 29
// Converting Strings to Numbers, Numbers to Strings
// ==========================================

// Number() string ko number mein convert karta hai
var stringNumber = "100";

var convertedNumber = Number(stringNumber);

console.log("String to number:", convertedNumber);
// Output: 100

// String numbers ko convert karke addition
var firstNumber = "10";
var secondNumber = "5";

var sum = Number(firstNumber) + Number(secondNumber);

console.log("Sum:", sum);
// Output: 15

// Number ko string mein convert karna
var originalNumber = 1234;

var numberAsString = originalNumber.toString();

console.log("Number to string:", numberAsString);
// Output: "1234"

// String() bhi value ko string mein convert kar sakta hai
var anotherString = String(500);

console.log("Using String():", anotherString);
// Output: "500"

// ==========================================
// CHAPTER 30
// Controlling the Length of Decimals
// ==========================================

var price = 10.59675;

// toFixed(2) number ko 2 decimal places tak round karta hai
var formattedPrice = price.toFixed(2);

console.log("Formatted price:", formattedPrice);
// Output: "10.60"

// 1 decimal place
var oneDecimal = (12.3456).toFixed(1);

console.log("1 decimal place:", oneDecimal);
// Output: "12.3"

// 3 decimal places
var threeDecimals = (12.3456).toFixed(3);

console.log("3 decimal places:", threeDecimals);
// Output: "12.346"

// ==========================================
// FINAL PRACTICE
// Combining Chapters 26 - 30
// ==========================================

// Ek price calculate karte hain
var itemPrice = 9.95;
var taxRate = 0.065;

// Tax calculate
var tax = itemPrice * taxRate;

// Total price
var total = itemPrice + tax;

// Total ko 2 decimal places tak round
var finalPrice = total.toFixed(2);

// Dollar sign add
var currencyTotal = "$" + finalPrice;

console.log("Final price:", currencyTotal);
// Example output: "$10.60"
