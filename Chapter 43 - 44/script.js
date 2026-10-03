// ============================================================
// A SMARTER WAY TO LEARN JAVASCRIPT
// CHAPTERS 43–44
// ============================================================
//
// CHAPTER 43 — PLACING SCRIPTS
// CHAPTER 44 — COMMENTING
//
// This file contains:
// - Chapter concepts
// - Examples
// - Important syntax
// - Practice questions
// - Practice solutions
// - Key takeaways
// ============================================================

// ============================================================
// CHAPTER 43 — PLACING SCRIPTS
// ============================================================
//
// JavaScript ko HTML page mein add karne ke liye
// <script> tag use hota hai.
//
// JavaScript ko HTML mein do basic ways se place kar sakte hain:
//
// 1. Internal JavaScript
// 2. External JavaScript
// ============================================================

// ============================================================
// 1. INTERNAL JAVASCRIPT
// ============================================================
//
// Internal JavaScript directly HTML file ke andar
// <script> tag mein likhi jati hai.
//
// Example:
//
// <script>
//     console.log("Hello JavaScript");
// </script>
//
// JavaScript HTML file ke andar hi hoti hai.
// ============================================================

/*
<script>

    console.log("Hello JavaScript");

</script>
*/

// ============================================================
// 2. EXTERNAL JAVASCRIPT
// ============================================================
//
// JavaScript ko separate .js file mein bhi likh sakte hain.
//
// Example:
//
// <script src="script.js"></script>
//
// Yahan:
//
// script.js
//
// ek separate JavaScript file hai.
//
// External JavaScript se HTML aur JavaScript
// separate files mein organized rehte hain.
// ============================================================

// ============================================================
// src ATTRIBUTE
// ============================================================
//
// External JavaScript file ko connect karne ke liye
// "src" attribute use hota hai.
//
// Example:
//
// <script src="script.js"></script>
// ============================================================

// ============================================================
// JAVASCRIPT FILE IN A FOLDER
// ============================================================
//
// Agar JavaScript file kisi folder ke andar ho:
//
// <script src="js/app.js"></script>
//
// Yahan:
//
// js/     → folder
// app.js  → JavaScript file
//
// "src" browser ko file ka path batata hai.
// ============================================================

// ============================================================
// INTERNAL VS EXTERNAL JAVASCRIPT
// ============================================================
//
// Internal:
//
// <script>
//     console.log("Hello");
// </script>
//
// External:
//
// <script src="script.js"></script>
//
// Internal JavaScript HTML file ke andar hoti hai.
//
// External JavaScript separate .js file mein hoti hai.
// ============================================================

// ============================================================
// CHAPTER 43 — EXAMPLE
// ============================================================
//
// HTML:
//
// <script src="js/app.js"></script>
//
// app.js:
//
// console.log("Hello JavaScript");
//
// Browser external JavaScript file ko load karega
// aur uska code execute karega.
// ============================================================

// ============================================================
// CHAPTER 43 — KEY TAKEAWAYS
// ============================================================
//
// 1. JavaScript ko HTML mein <script> tag se add karte hain.
//
// 2. JavaScript directly HTML ke andar likh sakte hain.
//
// 3. JavaScript ko separate .js file mein bhi rakh sakte hain.
//
// 4. External JavaScript ke liye "src" attribute use hota hai.
//
// 5. Example:
//
//    <script src="script.js"></script>
//
// 6. Folder ke andar file ho:
//
//    <script src="js/app.js"></script>
// ============================================================

// ============================================================
// CHAPTER 43 — PRACTICE QUESTIONS
// ============================================================
//
// Q1. External JavaScript file "script.js" ko HTML se connect
//     karne ka correct <script> tag likho.
//
// Q2. HTML ke andar JavaScript use karke:
//
//     Hello JavaScript
//
//     console mein print karo.
//
// Q3. Agar "app.js" naam ki JavaScript file "js" folder
//     mein ho, to correct script tag likho.
// ============================================================

// ============================================================
// CHAPTER 43 — PRACTICE SOLUTIONS
// ============================================================
//
// Q1:
//
// <script src="script.js"></script>
//
// ------------------------------------------------------------
//
// Q2:
//
// <script>
//     console.log("Hello JavaScript");
// </script>
//
// ------------------------------------------------------------
//
// Q3:
//
// <script src="js/app.js"></script>
// ============================================================

// ============================================================
// CHAPTER 44 — COMMENTING
// ============================================================
//
// Comment programmer ke liye explanation ya documentation
// provide karta hai.
//
// JavaScript comments ko execute nahi karti.
//
// JavaScript mein do important types ke comments hain:
//
// 1. Single-line comment
// 2. Multi-line comment
// ============================================================

// ============================================================
// 1. SINGLE-LINE COMMENT
// ============================================================
//
// Single-line comment "//" se start hota hai.
//
// Example:
//
// // This is a comment
//
// JavaScript is line ko execute nahi karegi.
// ============================================================

// This is a single-line comment.

var age = 20;

console.log(age);

// ============================================================
// COMMENT AFTER CODE
// ============================================================
//
// Comment same line mein code ke baad bhi likh sakte hain.
//
// Example:
// ============================================================

var name = "Hamid"; // Student name

console.log(name);

// ============================================================
// 2. MULTI-LINE COMMENT
// ============================================================
//
// Multi-line comment:
//
// /*
//     comment
// */
//
// Multiple lines ko comment karne ke liye use hota hai.
// ============================================================

/*
This is a multi-line comment.
It can contain multiple lines.
JavaScript will ignore this text.
*/

// ============================================================
// MULTI-LINE COMMENT EXAMPLE
// ============================================================

/*
Calculate total price
Price × quantity
Display total
*/

var price = 500;
var quantity = 2;

console.log(price * quantity);

// ============================================================
// COMMENTING OUT CODE
// ============================================================
//
// Comments ka use temporarily code ko disable karne ke liye
// bhi kiya ja sakta hai.
// ============================================================

// console.log("This will not execute");

console.log("This will execute");

// ============================================================
// CHAPTER 44 — KEY TAKEAWAYS
// ============================================================
//
// 1. Single-line comment:
//
//    // comment
//
// 2. Multi-line comment:
//
//    /*
//       comment
//    */
//
// 3. Comments execute nahi hote.
//
// 4. Comments code ko explain/document karne ke liye use hote hain.
//
// 5. Comments temporarily code ko disable karne ke liye bhi
//    useful hain.
// ============================================================

// ============================================================
// CHAPTER 44 — PRACTICE QUESTIONS
// ============================================================
//
// Q4. Is line ke upar single-line comment likho:
//
//     console.log("Hello");
//
//     Comment:
//     Print Hello Message
//
// ------------------------------------------------------------
//
// Q5. Is code ke upar multi-line comment banao:
//
//     var price = 500;
//     var quantity = 2;
//
//     console.log(price * quantity);
//
//     Comment mein ye 3 points hone chahiye:
//
//     Calculate total price
//     Price × quantity
//     Display total
// ============================================================

// ============================================================
// CHAPTER 44 — PRACTICE SOLUTIONS
// ============================================================

// Q4:

// Print Hello Message
console.log("Hello");

// Q5:

/*
Calculate total price
Price × quantity
Display total
*/

var practicePrice = 500;
var practiceQuantity = 2;

console.log(practicePrice * practiceQuantity);

// ============================================================
// FINAL REVISION — CHAPTERS 43–44
// ============================================================
//
// CHAPTER 43 — PLACING SCRIPTS
//
// Internal:
//
// <script>
//     console.log("Hello");
// </script>
//
// External:
//
// <script src="script.js"></script>
//
// Folder:
//
// <script src="js/app.js"></script>
//
// ------------------------------------------------------------
//
// CHAPTER 44 — COMMENTING
//
// Single-line:
//
// // Comment
//
// Multi-line:
//
// /*
//     Comment
// */
//
// Comments execute nahi hote.
// Comments code ko explain/document karte hain.
// ============================================================

// ============================================================
// END OF CHAPTERS 43–44
// ============================================================
