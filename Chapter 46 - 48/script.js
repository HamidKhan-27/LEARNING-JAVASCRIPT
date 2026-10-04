// ============================================================
// A Smarter Way to Learn JavaScript
// Chapters 46–48
// ============================================================
//
// CHAPTER 46 — Events: Button
// CHAPTER 47 — Events: Mouse
// CHAPTER 48 — Events: Fields
//
// ============================================================
//
// IMPORTANT NOTE:
//
// These chapters introduce INLINE EVENT HANDLING.
//
// Inline event handling means JavaScript code is written
// directly inside an HTML event attribute.
//
// Examples:
//
// onClick
// onMouseover
// onMouseout
// onFocus
// onBlur
//
// The book explains that inline event handling is easy to
// learn, although later in the book a more professional
// scripting approach will be introduced.
//
// ============================================================

// ============================================================
// CHAPTER 46 — EVENTS: BUTTON
// ============================================================
//
// In the previous chapter we learned how to make a link
// trigger a JavaScript event.
//
// In this chapter we learn how to use an actual BUTTON
// to trigger an event.
//
// Main concept:
//
// onClick
//
// ============================================================

// ------------------------------------------------------------
// 1. Basic Button
// ------------------------------------------------------------
//
// HTML:
//
// <input
//     type="button"
//     value="Click"
//     onClick="alert('Hello world!');"
// >
//
// Explanation:
//
// type="button"
//     → Creates a button.
//
// value="Click"
//     → Text displayed on the button.
//
// onClick
//     → Runs when the user clicks the button.
//
// alert()
//     → Displays a message.
//
// ------------------------------------------------------------

// ------------------------------------------------------------
// 2. onClick Event
// ------------------------------------------------------------
//
// The event handler:
//
// onClick="alert('Hello world!');"
//
// is used when the user clicks the button.
//
// Important:
//
// The event handler itself is the same kind of
// JavaScript action that was used with a link.
//
// The beginning of the HTML is different because now
// we are creating an input button.
//
// ------------------------------------------------------------

// ------------------------------------------------------------
// 3. Button Does Not Absolutely Need a Form
// ------------------------------------------------------------
//
// Example:
//
// <input
//     type="button"
//     value="Click"
//     onClick="alert('Hello world!');"
// >
//
// According to the book, the button does not absolutely
// have to be enclosed in form tags.
//
// ------------------------------------------------------------

// ------------------------------------------------------------
// 4. Image Can Also Trigger an Event
// ------------------------------------------------------------
//
// An image can be used to trigger JavaScript.
//
// Example:
//
// <img
//     src="button-greet.png"
//     onClick="alert('Hello world!');"
// >
//
// When the image is clicked, the alert appears.
//
// ------------------------------------------------------------

// ------------------------------------------------------------
// 5. Calling a Function from onClick
// ------------------------------------------------------------
//
// Instead of putting the alert directly inside the event,
// we can call a function.
//
// HTML:
//
// <img
//     src="button-greet.png"
//     onClick="greetTheUser();"
// >
//
// JavaScript:
//
// function greetTheUser() {
//
//     alert("Hello world!");
//
// }
//
// Flow:
//
// User clicks image
//        ↓
//     onClick
//        ↓
// greetTheUser()
//        ↓
//      alert
//
// ------------------------------------------------------------

// ============================================================
// CHAPTER 46 — KEY TAKEAWAYS
// ============================================================
//
// 1. A button can trigger JavaScript.
//
// 2. onClick runs when the user clicks an element.
//
// 3. <input type="button"> creates a button.
//
// 4. The value attribute controls the button text.
//
// 5. An image can also trigger an event.
//
// 6. onClick can directly contain JavaScript.
//
// 7. onClick can also call a function.
//
// ============================================================

// ============================================================
// CHAPTER 47 — EVENTS: MOUSE
// ============================================================
//
// In Chapter 47 we learn how to respond when the user:
//
// 1. Mouses over an element.
// 2. Mouses away from an element.
//
// Main events:
//
// onMouseover
// onMouseout
//
// ============================================================

// ------------------------------------------------------------
// 1. onMouseover
// ------------------------------------------------------------
//
// onMouseover is triggered when the user moves the mouse
// over an element.
//
// Example:
//
// <img
//     src="before-pic.jpg"
//     onMouseover="src='after-pic.jpg'"
// >
//
// Initially:
//
// before-pic.jpg
//
// Mouse moves over image:
//
// after-pic.jpg
//
// ------------------------------------------------------------

// ------------------------------------------------------------
// 2. Understanding the onMouseover Example
// ------------------------------------------------------------
//
// Code:
//
// onMouseover="src='after-pic.jpg'"
//
// The response is placed inside quotation marks.
//
// The image source is:
//
// src='after-pic.jpg'
//
// Notice:
//
// Outer quotes → double quotes
// Inner quotes → single quotes
//
// This avoids quotation conflicts.
//
// ------------------------------------------------------------

// ------------------------------------------------------------
// 3. onMouseover with Other HTML Elements
// ------------------------------------------------------------
//
// onMouseover is not limited to images.
//
// It can also be used with other HTML elements.
//
// Example:
//
// <h1
//     onMouseover="alert('Hello Hamid');"
// >
//     Hello JavaScript
// </h1>
//
// When the mouse moves over the heading,
// the alert appears.
//
// ------------------------------------------------------------

// ------------------------------------------------------------
// 4. Changing Link Color with onMouseover
// ------------------------------------------------------------
//
// Example:
//
// <a
//     href="index.html"
//     onMouseover="this.style.color='green';"
// >
//     Home Page
// </a>
//
// When the mouse moves over the link,
// its text color becomes green.
//
// IMPORTANT:
//
// The book says not to worry about the overall idea behind
// this.style.color yet.
//
// For now, remember the sequence:
//
// this.style.color='green';
//
// ------------------------------------------------------------

// ------------------------------------------------------------
// 5. Calling a Function with onMouseover
// ------------------------------------------------------------
//
// Instead of putting all the code directly inside
// onMouseover, we can call a function.
//
// Example:
//
// <p
//     id="loris"
//     onMouseover="expand();"
// >
//     Slow Loris: Mouse over for more info
// </p>
//
// Here:
//
// Mouse over paragraph
//        ↓
//    onMouseover
//        ↓
//     expand()
//
// The book says the details of how expand() changes
// the paragraph will be learned later.
//
// ------------------------------------------------------------

// ------------------------------------------------------------
// 6. onMouseout
// ------------------------------------------------------------
//
// onMouseout is triggered when the user moves the mouse
// away from an element.
//
// It is useful together with onMouseover.
//
// Example:
//
// <img
//     src="before-pic.jpg"
//     onMouseover="src='after-pic.jpg'"
//     onMouseout="src='before-pic.jpg'"
// >
//
// Flow:
//
// Mouse enters image
//        ↓
//   onMouseover
//        ↓
//   after-pic.jpg
//
// Mouse leaves image
//        ↓
//    onMouseout
//        ↓
//   before-pic.jpg
//
// This allows the image to return to its original state.
//
// ------------------------------------------------------------

// ============================================================
// CHAPTER 47 — KEY TAKEAWAYS
// ============================================================
//
// 1. onMouseover runs when the mouse moves over an element.
//
// 2. onMouseout runs when the mouse moves away.
//
// 3. onMouseover can change an image.
//
// 4. onMouseover can display an alert.
//
// 5. onMouseover can change a link's color.
//
// 6. onMouseover can call a function.
//
// 7. onMouseover and onMouseout can be combined.
//
// 8. Mouse events can be used with different HTML elements.
//
// ============================================================

// ============================================================
// CHAPTER 48 — EVENTS: FIELDS
// ============================================================
//
// Chapter 48 introduces events related to text fields.
//
// Main events:
//
// onFocus
// onBlur
//
// ============================================================

// ------------------------------------------------------------
// 1. onFocus
// ------------------------------------------------------------
//
// onFocus tells JavaScript to do something when the user
// clicks inside a field.
//
// Example:
//
// Email:
//
// <input
//     type="text"
//     size="30"
//     onFocus="this.style.backgroundColor='yellow';"
// >
//
// When the user clicks inside the field:
//
// Background → Yellow
//
// ------------------------------------------------------------

// ------------------------------------------------------------
// 2. Understanding onFocus
// ------------------------------------------------------------
//
// The keyword:
//
// onFocus
//
// tells JavaScript that an action should happen when
// the field receives focus.
//
// In this chapter, focus happens when the user clicks
// in the field.
//
// ------------------------------------------------------------

// ------------------------------------------------------------
// 3. onBlur
// ------------------------------------------------------------
//
// onBlur is the opposite of onFocus.
//
// It happens when the field no longer has focus.
//
// For example:
//
// - User clicks outside the field.
// - User presses Tab and moves to another field.
//
// Example:
//
// onBlur="this.style.backgroundColor='white';"
//
// ------------------------------------------------------------

// ------------------------------------------------------------
// 4. onFocus + onBlur Together
// ------------------------------------------------------------
//
// Example:
//
// <input
//     type="text"
//     size="30"
//     onFocus="this.style.backgroundColor='yellow';"
//     onBlur="this.style.backgroundColor='white';"
// >
//
// Behavior:
//
// User clicks inside:
//
// onFocus
//     ↓
// Background becomes yellow
//
// User clicks outside:
//
// onBlur
//     ↓
// Background becomes white
//
// ------------------------------------------------------------

// ------------------------------------------------------------
// 5. Calling Functions from onFocus and onBlur
// ------------------------------------------------------------
//
// A slightly more professional approach is to call
// functions instead of putting the complete action
// directly inside the event handler.
//
// Example:
//
// <input
//     type="text"
//     size="30"
//     onFocus="makeFieldYellow();"
//     onBlur="makeFieldWhite();"
// >
//
// Flow:
//
// User clicks field
//        ↓
//     onFocus
//        ↓
// makeFieldYellow()
//
// User leaves field
//        ↓
//      onBlur
//        ↓
// makeFieldWhite()
//
// ------------------------------------------------------------

// ============================================================
// CHAPTER 48 — KEY TAKEAWAYS
// ============================================================
//
// 1. onFocus runs when a field receives focus.
//
// 2. In this chapter, clicking inside the field gives it focus.
//
// 3. onBlur is the opposite of onFocus.
//
// 4. onBlur runs when the field loses focus.
//
// 5. Clicking outside the field can cause onBlur.
//
// 6. Pressing Tab to another field can cause onBlur.
//
// 7. onFocus can change the field's background.
//
// 8. onBlur can restore the field's background.
//
// 9. Functions can be called from onFocus and onBlur.
//
// ============================================================

// ============================================================
// QUICK COMPARISON — CHAPTERS 46–48
// ============================================================
//
// CHAPTER 46
//
// Event:
// onClick
//
// Meaning:
// User clicks an element.
//
// Example:
//
// onClick="alert('Hello');"
//
// ------------------------------------------------------------
//
// CHAPTER 47
//
// Events:
// onMouseover
// onMouseout
//
// Meaning:
//
// onMouseover → mouse comes over element
// onMouseout  → mouse leaves element
//
// ------------------------------------------------------------
//
// CHAPTER 48
//
// Events:
// onFocus
// onBlur
//
// Meaning:
//
// onFocus → field receives focus
// onBlur  → field loses focus
//
// ============================================================

// ============================================================
// IMPORTANT EVENT PATTERN
// ============================================================
//
// HTML:
//
// <element
//     event="JavaScript code"
// >
//
// Examples:
//
// onClick="alert('Hello');"
//
// onMouseover="alert('Hello');"
//
// onMouseout="alert('Goodbye');"
//
// onFocus="this.style.backgroundColor='yellow';"
//
// onBlur="this.style.backgroundColor='white';"
//
// ============================================================

// ============================================================
// PRACTICE QUESTIONS — CHAPTER 46
// ============================================================
//
// Q1
// Create an input button that displays:
//
// "Hello Hamid"
//
// when clicked.
//
//
// Q2
// Create an input button with:
//
// value = "Click Me"
//
// and show:
//
// "Welcome to JavaScript"
//
// when clicked.
//
//
// Q3
// Create an image that displays:
//
// "Hello JavaScript"
//
// when the image is clicked.
//
//
// Q4
// Instead of putting alert() directly inside onClick,
// call a function named:
//
// greetTheUser()
//
// ============================================================

// ============================================================
// PRACTICE QUESTIONS — CHAPTER 47
// ============================================================
//
// Q5
// Create an image that changes:
//
// before.jpg
//
// to:
//
// after.jpg
//
// when the mouse moves over it.
//
//
// Q6
// Create an image that:
//
// onMouseover → after.jpg
// onMouseout  → before.jpg
//
//
// Q7
// Create a heading that displays:
//
// "Hello Hamid"
//
// when the mouse moves over it.
//
//
// Q8
// Create a link that changes its text color to green
// when the mouse moves over it.
//
// ============================================================

// ============================================================
// PRACTICE QUESTIONS — CHAPTER 48
// ============================================================
//
// Q9
// Create a text input field that becomes yellow when
// the user clicks inside it.
//
//
// Q10
// Create a text input field that:
//
// onFocus → yellow
// onBlur  → white
//
//
// Q11
// Explain the difference between:
//
// onFocus
// onBlur
//
//
// Q12
// Create an input field that calls:
//
// makeFieldYellow()
//
// when focused and:
//
// makeFieldWhite()
//
// when it loses focus.
//
// ============================================================

// ============================================================
// FINAL REVISION
// ============================================================
//
// CHAPTER 46
//
// onClick
//     ↓
// User clicks
//     ↓
// JavaScript runs
//
//
// CHAPTER 47
//
// onMouseover
//     ↓
// Mouse comes over
//
//
// onMouseout
//     ↓
// Mouse leaves
//
//
// CHAPTER 48
//
// onFocus
//     ↓
// Field receives focus
//
//
// onBlur
//     ↓
// Field loses focus
//
//
// ============================================================
//
// MOST IMPORTANT THINGS TO REMEMBER:
//
// onClick
// onMouseover
// onMouseout
// onFocus
// onBlur
//
// ============================================================
//
// END OF CHAPTERS 46–48
// ============================================================
