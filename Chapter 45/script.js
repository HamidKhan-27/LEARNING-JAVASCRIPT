// ============================================================
// A SMARTER WAY TO LEARN JAVASCRIPT
// CHAPTER 45 — EVENTS: LINK
// ============================================================
//
// This file contains:
// - Events
// - Event handlers
// - onClick
// - Link click events
// - href="#"
// - JavaScript:void(0)
// - Calling functions from onClick
// - Passing arguments to functions
// - Examples
// - Practice questions
// - Practice solutions
// ============================================================

// ============================================================
// WHAT IS AN EVENT?
// ============================================================
//
// Event user ka koi action hota hai.
//
// Examples:
//
// - Link par click karna
// - Button par click karna
// - Mouse action
//
// Chapter 45 mein specifically link ke click event
// ko handle karna seekhte hain.
// ============================================================

// ============================================================
// WHAT IS AN EVENT HANDLER?
// ============================================================
//
// Event handler wo code hai jo kisi event ke response mein
// execute hota hai.
//
// Example:
//
// User link par click karta hai
//         ↓
//      Event
//         ↓
// Event handler execute hota hai
//         ↓
// JavaScript action perform hota hai
// ============================================================

// ============================================================
// onClick
// ============================================================
//
// "onClick" click event ko handle karne ke liye use hota hai.
//
// Iska simple meaning:
//
// "Jab user is element par click kare,
//  to ye JavaScript execute karo."
// ============================================================

// ============================================================
// SIMPLE onClick EXAMPLE
// ============================================================
//
// HTML:
//
// <a href="#" onClick="alert('Hello');">
//     Click Me
// </a>
//
// User click karega:
//
// Click
//   ↓
// onClick
//   ↓
// alert("Hello")
//   ↓
// Hello
// ============================================================

// ============================================================
// LINK WITH onClick
// ============================================================
//
// Example:
//
// <a href="JavaScript:void(0)"
//    onClick="alert('Hello Hamid');">
//    Click Me
// </a>
//
// Link par click karne se alert show hoga.
// ============================================================

// ============================================================
// href="#"
// ============================================================
//
// Example:
//
// <a href="#" onClick="alert('Hi');">
//     Click
// </a>
//
// "#" link ke href mein use kiya ja sakta hai,
// lekin isse page/top position change hone ka behavior
// ho sakta hai.
//
// Isi liye chapter mein JavaScript:void(0) ka approach
// bhi explain kiya gaya hai.
// ============================================================

// ============================================================
// JavaScript:void(0)
// ============================================================
//
// Example:
//
// <a href="JavaScript:void(0)"
//    onClick="alert('Hi');">
//    Click
// </a>
//
// Iska purpose link ki normal navigation ko avoid karte hue
// JavaScript action perform karna hai.
// ============================================================

// ============================================================
// QUOTES — IMPORTANT
// ============================================================
//
// HTML attribute usually double quotes mein hota hai:
//
// onClick="..."
//
// Isliye JavaScript string ke liye andar single quotes
// use kar sakte hain:
//
// onClick="alert('Hello');"
//
// Ye correct hai.
//
// ------------------------------------------------------------
//
// Wrong:
//
// onClick="alert("Hello")"
//
// Yahan double quotes conflict kar rahe hain.
//
// Correct:
//
// onClick="alert('Hello')"
// ============================================================

// ============================================================
// DIRECT JAVASCRIPT INSIDE onClick
// ============================================================
//
// onClick ke andar JavaScript statement directly likh sakte hain.
//
// Example:
//
// <a href="JavaScript:void(0)"
//    onClick="alert('Hello');">
//    Click
// </a>
//
// Lekin agar code complex ho to function banana
// zyada organized approach hai.
// ============================================================

// ============================================================
// FUNCTION + onClick
// ============================================================
//
// JavaScript mein function banakar us function ko
// onClick se call kar sakte hain.
// ============================================================

// Function:

function popup(message) {
  alert(message);
}

// HTML:
//
// <a href="JavaScript:void(0)"
//    onClick="popup('Hi');">
//    Click
// </a>
//
// Flow:
//
// Click
//   ↓
// onClick
//   ↓
// popup('Hi')
//   ↓
// message = "Hi"
//   ↓
// alert(message)
//   ↓
// Hi
// ============================================================

// ============================================================
// FUNCTION WITH PARAMETER
// ============================================================
//
// Chapter 35–37 mein parameters aur arguments learn kiye the.
//
// Example:
//
// function greet(name) {
//     alert("Hello " + name);
// }
//
// "name" parameter hai.
//
// Jab call karte hain:
//
// greet("Hamid");
//
// "Hamid" argument hai.
// ============================================================

// ============================================================
// FUNCTION + LINK EVENT
// ============================================================

function greet(name) {
  alert("Hello " + name);
}

// HTML:
//
// <a href="JavaScript:void(0)"
//    onClick="greet('Hamid');">
//    Click Me
// </a>
//
// Flow:
//
// onClick
//    ↓
// greet('Hamid')
//    ↓
// name = "Hamid"
//    ↓
// alert("Hello " + name)
//    ↓
// Hello Hamid
// ============================================================

// ============================================================
// ANOTHER FUNCTION EXAMPLE
// ============================================================

function showMessage(message) {
  alert(message);
}

// HTML:
//
// <a href="JavaScript:void(0)"
//    onClick="showMessage('Welcome Hamid');">
//    Click Me
// </a>
//
// Another example:
//
// <a href="JavaScript:void(0)"
//    onClick="showMessage('Welcome to JavaScript');">
//    Click Me
// </a>
// ============================================================

// ============================================================
// FUNCTION WITH DIFFERENT ARGUMENTS
// ============================================================

function welcome(name) {
  alert("Welcome " + name);
}

// HTML:
//
// <a href="JavaScript:void(0)"
//    onClick="welcome('Hamza');">
//    Click Me
// </a>
//
// Output:
//
// Welcome Hamza
// ============================================================

// ============================================================
// CHAPTER 45 — KEY TAKEAWAYS
// ============================================================
//
// 1. Event = user ka action.
//
// 2. Event handler = event ke response mein execute hone wala
//    code.
//
// 3. Link ke click event ke liye onClick use hota hai.
//
// 4. Example:
//
//    onClick="alert('Hello')"
//
// 5. Function ko onClick se call kar sakte hain:
//
//    onClick="greet('Hamid')"
//
// 6. Function ko arguments pass kar sakte hain.
//
// 7. href="JavaScript:void(0)" JavaScript action ke liye
//    normal navigation avoid karne mein use kiya ja sakta hai.
//
// 8. Quotes correctly use karna important hai.
//
// 9. Function ko call karna inline code ko organized rakhta hai.
// ============================================================

// ============================================================
// PRACTICE QUESTIONS — CHAPTER 45
// ============================================================
//
// Q1. Ek link banao jo click hone par:
//
//     Hello Hamid
//
//     ka alert show kare.
//
// ------------------------------------------------------------
//
// Q2. Is code ko complete karo:
//
// <a href="JavaScript:void(0)"
//    onClick="___________">
//    Click Me
// </a>
//
// Click hone par:
//
//     Welcome to JavaScript
//
//     ka alert show hona chahiye.
//
// ------------------------------------------------------------
//
// Q3. Ek function banao:
//
// function greet(name) {
//
//     // code
//
// }
//
// Aur link ke onClick se function ko "Hamid"
// argument ke saath call karo.
//
// Expected:
//
//     Hello Hamid
//
// ------------------------------------------------------------
//
// Q4. Is code ka output kya hoga?
//
// <a href="JavaScript:void(0)"
//    onClick="popup('JavaScript');">
//    Click
// </a>
//
// function popup(message) {
//     alert(message);
// }
//
// ------------------------------------------------------------
//
// Q5. Ek function banao:
//
// function welcome(name) {
//     alert("Welcome " + name);
// }
//
// Aur link click hone par function ko "Hamza"
// argument ke saath call karo.
// ============================================================

// ============================================================
// PRACTICE SOLUTIONS — CHAPTER 45
// ============================================================

// Q1 Solution:
//
// <a href="JavaScript:void(0)"
//    onClick="alert('Hello Hamid');">
//    Click Me
// </a>

// Q2 Solution:
//
// <a href="JavaScript:void(0)"
//    onClick="alert('Welcome to JavaScript');">
//    Click Me
// </a>

// Q3 Solution:

function practiceGreet(name) {
  alert("Hello " + name);
}

// HTML:
//
// <a href="JavaScript:void(0)"
//    onClick="practiceGreet('Hamid');">
//    Click Me
// </a>

// Q4 Solution:
//
// Output:
//
// JavaScript
//
// Flow:
//
// popup('JavaScript')
//        ↓
// message = "JavaScript"
//        ↓
// alert(message)
//        ↓
// JavaScript

// Q5 Solution:

function practiceWelcome(name) {
  alert("Welcome " + name);
}

// HTML:
//
// <a href="JavaScript:void(0)"
//    onClick="practiceWelcome('Hamza');">
//    Click Me
// </a>

// ============================================================
// FINAL REVISION — CHAPTER 45
// ============================================================
//
// Event:
//
// User ka action.
//
// Event Handler:
//
// Event ke response mein execute hone wala code.
//
// onClick:
//
// Click event handle karta hai.
//
// Example:
//
// <a href="JavaScript:void(0)"
//    onClick="greet('Hamid');">
//    Click
// </a>
//
// Function:
//
// function greet(name) {
//     alert("Hello " + name);
// }
//
// Important:
//
// "Hamid" = Argument
// "name"  = Parameter
//
// ============================================================
// END OF CHAPTER 45
// ============================================================
