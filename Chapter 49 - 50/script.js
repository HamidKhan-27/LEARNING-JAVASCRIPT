// ============================================================
// A Smarter Way to Learn JavaScript
// Chapters 49–50
// ============================================================
//
// CHAPTER 49 — Reading Field Values
// CHAPTER 50 — Setting Field Values
//
// ============================================================
//
// CHAPTER 49:
// - Reading a value from an input field
// - document.getElementById()
// - .value
// - Using field IDs
// - Reading field values inside functions
// - Checking whether a field is empty
// - Using onSubmit with forms
//
// CHAPTER 50:
// - Setting a value inside an input field
// - Using .value =
// - Reading one field and setting another field
// - Using onBlur
// - Using switch with field values
//
// ============================================================

// ============================================================
// CHAPTER 49 — READING FIELD VALUES
// ============================================================
//
// In Chapter 49, we learn how to read the value entered by
// the user inside an input field.
//
// The main concept is:
//
// document.getElementById("id").value
//
// document
// → Represents the current HTML document.
//
// getElementById()
// → Finds an HTML element using its ID.
//
// .value
// → Reads the value entered inside an input field.
//
// ============================================================

// ------------------------------------------------------------
// Example 1 — Reading an Input Value
// ------------------------------------------------------------

var userName = document.getElementById("name").value;

console.log(userName);

// ------------------------------------------------------------
// Example 2 — Reading an Email Value
// ------------------------------------------------------------

var userEmail = document.getElementById("email").value;

console.log(userEmail);

// ------------------------------------------------------------
// Example 3 — Reading a Value Inside a Function
// ------------------------------------------------------------

function showName(fieldId) {
  var name = document.getElementById(fieldId).value;

  console.log(name);
}

// ------------------------------------------------------------
// Example 4 — Checking an Empty Field
// ------------------------------------------------------------

function checkName(fieldId) {
  if (document.getElementById(fieldId).value === "") {
    alert("Name is required");
  }
}

// ------------------------------------------------------------
// Example 5 — Checking Email Field
// ------------------------------------------------------------

function checkEmail(fieldId) {
  if (document.getElementById(fieldId).value === "") {
    alert("Email address required.");
  }
}

// ------------------------------------------------------------
// Example 6 — Reading Value When Form Is Submitted
// ------------------------------------------------------------

function checkAddress(fieldId) {
  if (document.getElementById(fieldId).value === "") {
    alert("Email address required.");
  }
}

// ============================================================
// CHAPTER 49 — FORM + onSubmit
// ============================================================
//
// onSubmit is used with the <form> element.
//
// Example:
//
// <form onsubmit="checkAddress('email')">
//
// When the form is submitted, checkAddress() runs.
//
// The function can then read the input value using:
//
// document.getElementById(fieldId).value
//
// ============================================================

// ============================================================
// CHAPTER 49 — IMPORTANT CONCEPT
// ============================================================
//
// READ:
//
// var value = document.getElementById("email").value;
//
// This means:
//
// Find the email field
//        ↓
// Read its value
//        ↓
// Store the value in a variable
//
// ============================================================

// ============================================================
// CHAPTER 50 — SETTING FIELD VALUES
// ============================================================
//
// Chapter 50 is the continuation of Chapter 49.
//
// Chapter 49:
// → We READ a field value.
//
// Chapter 50:
// → We SET a field value.
//
// ============================================================
//
// READ:
//
// document.getElementById("name").value
//
// SET:
//
// document.getElementById("name").value = "Hamid";
//
// ============================================================

// ------------------------------------------------------------
// Example 1 — Setting a Name
// ------------------------------------------------------------

function setName() {
  document.getElementById("name").value = "Hamid";
}

setName();

// ------------------------------------------------------------
// Example 2 — Setting a City
// ------------------------------------------------------------

function fillCity() {
  document.getElementById("city").value = "Chicago";
}

fillCity();

// ------------------------------------------------------------
// Example 3 — Copy One Field's Value to Another Field
// ------------------------------------------------------------
//
// First we READ the value from the name field.
//
// Then we SET the same value inside the username field.
//
// ------------------------------------------------------------

function copyName() {
  var copyName = document.getElementById("name").value;

  document.getElementById("username").value = copyName;
}

// ============================================================
// CHAPTER 50 — onBlur
// ============================================================
//
// onBlur runs when the user leaves an input field.
//
// Example:
//
// <input type="text" onblur="fillCity()">
//
// Flow:
//
// User enters value
//        ↓
// User leaves the field
//        ↓
// onBlur
//        ↓
// fillCity()
//        ↓
// Another field can be updated
//
// ============================================================

// ------------------------------------------------------------
// Example 4 — onBlur + Setting a Value
// ------------------------------------------------------------

function setCityOnBlur() {
  document.getElementById("city").value = "Karachi";
}

// ============================================================
// CHAPTER 50 — READING + SETTING
// ============================================================
//
// This is one of the most important concepts of Chapter 50.
//
// We can:
//
// 1. Read a value from one field.
// 2. Use that value.
// 3. Set a value in another field.
//
// Example:
//
// Name field:
// "Hamid"
//
// ↓ READ
//
// var copyName = document.getElementById("name").value;
//
// ↓ SET
//
// document.getElementById("username").value = copyName;
//
// Result:
//
// Username field → Hamid
//
// ============================================================

// ============================================================
// CHAPTER 50 — ZIP CODE + CITY EXAMPLE
// ============================================================
//
// In this example, the user enters a ZIP code.
//
// When the user leaves the ZIP field,
// onBlur calls fillCity().
//
// fillCity() reads the ZIP value.
//
// Then switch checks the ZIP code.
//
// Finally, the city field is updated.
//
// ============================================================

function findCityFromZip() {
  var cityName;

  var zipEntered = document.getElementById("zip").value;

  switch (zipEntered) {
    case "60608":
      cityName = "Chicago";

      break;

    case "68114":
      cityName = "Omaha";

      break;

    case "53212":
      cityName = "Milwaukee";

      break;
  }

  document.getElementById("city").value = cityName;
}

// ============================================================
// CHAPTER 50 — SWITCH FLOW
// ============================================================
//
// Suppose the user enters:
//
// 60608
//
// Then:
//
// zipEntered = "60608"
//
// switch checks:
//
// case "60608"
//
// cityName becomes:
//
// "Chicago"
//
// Then:
//
// document.getElementById("city").value = cityName;
//
// Result:
//
// City field → Chicago
//
// ============================================================

// ============================================================
// CHAPTER 49 vs CHAPTER 50
// ============================================================
//
// CHAPTER 49
//
// Main purpose:
// READ a value.
//
// Example:
//
// var email = document.getElementById("email").value;
//
//
//
// CHAPTER 50
//
// Main purpose:
// SET a value.
//
// Example:
//
// document.getElementById("city").value = "Chicago";
//
// ============================================================

// ============================================================
// MOST IMPORTANT SYNTAX
// ============================================================
//
// READ:
//
// document.getElementById("fieldId").value
//
//
// SET:
//
// document.getElementById("fieldId").value = "some value";
//
// ============================================================

// ============================================================
// PRACTICE QUESTIONS — CHAPTER 49
// ============================================================
//
// Q1 — Read Input Value
//
// Create an input field with:
// id = "name"
//
// Use document.getElementById() and .value to read
// the value entered by the user.
//
// Example:
// If the user enters "Hamid",
// the JavaScript should be able to get "Hamid".
//
//
// ------------------------------------------------------------
//
// Q2 — Read Email Value
//
// Create an input field with:
// id = "email"
//
// Write JavaScript that reads the current value
// entered inside the email field.
//
//
//
// ------------------------------------------------------------
//
// Q3 — Check Empty Name Field
//
// Create a function:
//
// checkName(fieldId)
//
// The function should:
//
// 1. Find the field using fieldId.
// 2. Read its value.
// 3. Check whether the value is empty.
//
// If it is empty, show:
//
// "Name required."
//
// If something is entered, do not show the alert.
//
//
//
// ------------------------------------------------------------
//
// Q4 — Check Email on Form Submit
//
// Create a form containing:
//
// - An email input with id="email"
// - A submit button
//
// Use onSubmit on the form to call:
//
// checkAddress("email")
//
// Inside the function, check whether the email field
// is empty.
//
// If it is empty, show:
//
// "Email address required."
//
//
//
// ------------------------------------------------------------
//
// Q5 — Read Name and Show It
//
// Create an input field with:
//
// id = "name"
//
// Create a function that reads the value of the field.
//
// If the user enters:
//
// Hamid
//
// the function should show:
//
// Hamid
//
// in an alert.
//
// ============================================================

// ============================================================
// PRACTICE QUESTIONS — CHAPTER 50
// ============================================================
//
// Q1 — Set Name
//
// Create an input field with:
//
// id = "name"
//
// Create a function setName().
//
// When the function runs, set the input value to:
//
// "Hamid"
//
// The word Hamid should appear inside the input field.
//
//
//
// ------------------------------------------------------------
//
// Q2 — Set City
//
// Create two input fields:
//
// ZIP
// City
//
// Give the City field:
//
// id = "city"
//
// Create a function fillCity().
//
// When the function runs, set the City field to:
//
// "Chicago"
//
//
//
// ------------------------------------------------------------
//
// Q3 — onBlur + Set City
//
// Create:
//
// ZIP input → id="zip"
// City input → id="city"
//
// Add onBlur to the ZIP field.
//
// When the user enters anything into the ZIP field
// and then leaves the field, call fillCity().
//
// fillCity() should set the City field to:
//
// "Karachi"
//
// The ZIP value does not need to be checked.
//
//
//
// ------------------------------------------------------------
//
// Q4 — ZIP + Switch
//
// Create:
//
// ZIP input → id="zip"
// City input → id="city"
//
// Add onBlur to the ZIP input.
//
// When the user leaves the ZIP field:
//
// 100 → Lahore
// 200 → Karachi
// 300 → Islamabad
//
// Use switch to check the ZIP value.
//
// Then set the City input's value using .value =
//
//
//
// ------------------------------------------------------------
//
// Q5 — Copy Name to Username
//
// Create:
//
// Name input → id="name"
// Username input → id="username"
//
// Create copyName().
//
// The function should:
//
// 1. Read the Name field's value.
// 2. Store it in a variable.
// 3. Set the same value inside the Username field.
//
// Example:
//
// Name → Hamid
//
// After copyName():
//
// Username → Hamid
//
//
//
// ------------------------------------------------------------
//
// Q6 — Set Default City
//
// Create an input with:
//
// id = "city"
//
// Create setDefaultCity().
//
// When the function runs, JavaScript should set:
//
// City → Karachi
//
// Do not write Karachi directly inside the HTML input.
//
// It must be set using JavaScript and .value.
//
//
//
// ------------------------------------------------------------
//
// Q7 — ZIP + City
//
// Create a complete ZIP and City form.
//
// ZIP:
// id="zip"
//
// City:
// id="city"
//
// When the user leaves the ZIP field,
// call fillCity().
//
// Use switch:
//
// 60608 → Chicago
// 68114 → Omaha
// 53212 → Milwaukee
//
// Finally set the City field using:
//
// document.getElementById("city").value
//
//
//
// ============================================================

// ============================================================
// FINAL KEY TAKEAWAYS
// ============================================================
//
// 1. document
//    → Represents the current HTML document.
//
// 2. getElementById()
//    → Finds an HTML element by its ID.
//
// 3. .value
//    → Reads the value of an input field.
//
// 4. .value =
//    → Sets a value inside an input field.
//
// 5. onSubmit
//    → Runs when a form is submitted.
//
// 6. onBlur
//    → Runs when the user leaves/focuses away from a field.
//
// 7. Chapter 49
//    → Reading field values.
//
// 8. Chapter 50
//    → Setting field values.
//
// 9. A value read from one field can be used to set
//    the value of another field.
//
// 10. switch can be used to choose a value based on
//     the value entered by the user.
//
// ============================================================
//
// END OF CHAPTERS 49–50
// ============================================================
