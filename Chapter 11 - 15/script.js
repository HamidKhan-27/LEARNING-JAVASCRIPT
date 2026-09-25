// ==========================================
// A Smarter Way to Learn JavaScript
// Chapters 11 - 15 Practice
// ==========================================

// ==========================================
// CHAPTER 11
// Comparison Operators
// ==========================================

var age = 20;

// Greater than
console.log(age > 18);
// true

// Less than
console.log(age < 18);
// false

// Greater than or equal
console.log(age >= 18);
// true

// Less than or equal
console.log(age <= 18);
// false

// Equal value and type
console.log(age === 20);
// true

// Not equal
console.log(age !== 18);
// true

// String comparison
var city = "Karachi";

console.log(city === "Karachi");
// true

// JavaScript case-sensitive hai
console.log(city === "karachi");
// false

// ==========================================
// CHAPTER 12
// if...else and else if Statements
// ==========================================

var marks = 75;

if (marks >= 80) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

// Another example
var userAge = 17;

if (userAge >= 18) {
  alert("You can enter.");
} else {
  alert("You cannot enter.");
}

// ==========================================
// CHAPTER 13
// Testing Sets of Conditions
// ==========================================

// && means AND
// Dono conditions true honi chahiye

var studentAge = 22;

if (studentAge >= 18 && studentAge <= 30) {
  console.log("Age is between 18 and 30.");
}

// || means OR
// Kam az kam ek condition true honi chahiye

var day = "Saturday";

if (day === "Saturday" || day === "Sunday") {
  console.log("It's the weekend.");
}

// Combining conditions
var hasTicket = true;
var ageCheck = 20;

if (ageCheck >= 18 && hasTicket === true) {
  console.log("You can enter the event.");
}

// ==========================================
// CHAPTER 14
// Nested if Statements
// ==========================================

var userAgeCheck = 25;
var country = "Pakistan";

if (userAgeCheck >= 18) {
  if (country === "Pakistan") {
    console.log("Adult from Pakistan.");
  }
}

// Another nested example
var username = "Hamid";
var password = "12345";

if (username === "Hamid") {
  if (password === "12345") {
    console.log("Login successful.");
  }
}

// ==========================================
// CHAPTER 15
// Arrays
// ==========================================

// Array multiple values store karta hai
var cities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];

// Array indexing 0 se start hoti hai
console.log(cities[0]);
// Karachi

console.log(cities[1]);
// Lahore

console.log(cities[2]);
// Islamabad

// Array ki value change karna
cities[1] = "Multan";

console.log(cities);

// Array mein different types bhi store ho sakte hain
var mixedArray = [20, "Hamid", true];

console.log(mixedArray);

// ==========================================
// FINAL PRACTICE
// ==========================================

var studentName = "Hamid";
var studentMarks = 82;

if (studentMarks >= 80) {
  console.log(studentName + " got Grade A.");
} else if (studentMarks >= 60) {
  console.log(studentName + " got Grade B.");
} else {
  console.log(studentName + " needs improvement.");
}
