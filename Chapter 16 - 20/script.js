// ==========================================
// A Smarter Way to Learn JavaScript
// Chapters 16 - 20 Practice
// ==========================================

// ==========================================
// CHAPTER 16
// Arrays: Adding and Removing Elements
// ==========================================

var fruits = ["Apple", "Banana", "Mango"];

// push() → end mein element add karta hai
fruits.push("Orange");

console.log("After push:", fruits);

// pop() → end se element remove karta hai
fruits.pop();

console.log("After pop:", fruits);

// unshift() → beginning mein element add karta hai
fruits.unshift("Grapes");

console.log("After unshift:", fruits);

// shift() → beginning se element remove karta hai
fruits.shift();

console.log("After shift:", fruits);

// ==========================================
// CHAPTER 17
// Arrays: Removing, Inserting, Extracting
// ==========================================

var students = ["Ali", "Ahmed", "Hamza", "Usman"];

// splice() se element remove karna
// Index 1 se 1 element remove hoga
students.splice(1, 1);

console.log("After removing Ahmed:", students);

// splice() se element insert karna
// Index 1 par Bilal insert hoga
students.splice(1, 0, "Bilal");

console.log("After inserting Bilal:", students);

// splice() se replace karna
students.splice(2, 1, "Hassan");

console.log("After replacing:", students);

// slice() array ka portion copy karta hai
var selectedStudents = students.slice(0, 2);

console.log("Selected students:", selectedStudents);

// ==========================================
// CHAPTER 18
// for Loops
// ==========================================

// 1 se 10 tak numbers print karna
for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// Array ko loop karna
var cities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];

for (var i = 0; i < cities.length; i++) {
  console.log("City:", cities[i]);
}

// Even numbers
for (var i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("Even:", i);
  }
}

// ==========================================
// CHAPTER 19
// Flags, Booleans, Array Length & break
// ==========================================

var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];

var cityToCheck = "Lahore";

// Flag initially false
var matchFound = false;

// Array ki length automatically find karna
var numberOfCities = cleanestCities.length;

for (var i = 0; i < numberOfCities; i++) {
  if (cityToCheck === cleanestCities[i]) {
    matchFound = true;

    console.log("City found!");

    // Match milne ke baad loop stop
    break;
  }
}

// Agar match nahi mila
if (matchFound === false) {
  console.log("City not found.");
}

// ==========================================
// CHAPTER 20
// Nested for Loops
// ==========================================

var firstNames = ["Ali", "Ahmed", "Hamza"];

var lastNames = ["Khan", "Malik", "Shah"];

var fullNames = [];

// Outer loop first names ke liye
for (var i = 0; i < firstNames.length; i++) {
  // Inner loop har first name ke saath
  // saare last names combine karega
  for (var j = 0; j < lastNames.length; j++) {
    var fullName = firstNames[i] + " " + lastNames[j];

    fullNames.push(fullName);
  }
}

console.log("Generated full names:");

console.log(fullNames);

// ==========================================
// FINAL PRACTICE
// Combining Chapters 16 - 20
// ==========================================

var studentsList = ["Ali", "Ahmed", "Hamza", "Usman", "Bilal"];

// New student add
studentsList.push("Hassan");

// Beginning mein student add
studentsList.unshift("Zain");

// Array length
console.log("Total students:", studentsList.length);

// Har student ko loop se print karna
for (var i = 0; i < studentsList.length; i++) {
  console.log("Student " + (i + 1) + ": " + studentsList[i]);
}

// Kisi student ko search karna
var studentToFind = "Hamza";
var studentFound = false;

for (var i = 0; i < studentsList.length; i++) {
  if (studentsList[i] === studentToFind) {
    studentFound = true;

    console.log(studentToFind + " found!");

    break;
  }
}

if (studentFound === false) {
  console.log(studentToFind + " not found.");
}
