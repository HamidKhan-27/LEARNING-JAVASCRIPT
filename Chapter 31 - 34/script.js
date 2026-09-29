// ==========================================
// A Smarter Way to Learn JavaScript
// Chapters 31–34 Practice
// Date & Time
// ==========================================

// ==========================================
// Chapter 31: Getting the Current Date & Time
// ==========================================

var rightNow = new Date();

console.log("Current Date & Time:");
console.log(rightNow);

// Get the current day number
// Sunday = 0, Monday = 1, ..., Saturday = 6
var day = rightNow.getDay();

console.log("Day Number:", day);

// ==========================================
// Chapter 32: Extracting Parts of Date & Time
// ==========================================

var year = rightNow.getFullYear();
var month = rightNow.getMonth(); // January = 0
var date = rightNow.getDate();
var hours = rightNow.getHours();
var minutes = rightNow.getMinutes();
var seconds = rightNow.getSeconds();
var milliseconds = rightNow.getMilliseconds();

console.log("Year:", year);
console.log("Month:", month);
console.log("Date:", date);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);
console.log("Milliseconds:", milliseconds);

// ==========================================
// Chapter 33: Specifying a Date & Time
// ==========================================

// Creating a specific date
var futureDate = new Date("January 1, 2030");

console.log("Future Date:", futureDate);

// Finding the difference between two dates
var today = new Date();

var msToday = today.getTime();
var msFutureDate = futureDate.getTime();

var difference = msFutureDate - msToday;

// Convert milliseconds into days
var daysDifference = difference / (1000 * 60 * 60 * 24);

daysDifference = Math.floor(daysDifference);

console.log("Days Difference:", daysDifference);

// ==========================================
// Chapter 34: Changing Elements of Date & Time
// ==========================================

var customDate = new Date();

// Change year
customDate.setFullYear(2030);

// December = 11
customDate.setMonth(11);

// Change date
customDate.setDate(25);

// 18 = 6 PM
customDate.setHours(18);

// Change minutes
customDate.setMinutes(30);

console.log("Custom Date:", customDate);

// ==========================================
// GET vs SET
// ==========================================

// GET methods → values read/get karte hain
console.log(customDate.getFullYear());
console.log(customDate.getMonth());
console.log(customDate.getDate());

// SET methods → values change/set karte hain
customDate.setFullYear(2031);
customDate.setMonth(0);
customDate.setDate(1);

console.log("Updated Custom Date:", customDate);
