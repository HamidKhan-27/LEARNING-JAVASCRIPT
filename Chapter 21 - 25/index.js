// ==========================================
// A Smarter Way to Learn JavaScript
// Chapters 21 - 25 Practice
// ==========================================

// ==========================================
// CHAPTER 21
// Changing Case
// ==========================================

var city = "KaRaChI";

// toLowerCase() string ko lowercase mein convert karta hai
var lowerCity = city.toLowerCase();

console.log("Lowercase:", lowerCity);
// Output: karachi

// toUpperCase() string ko uppercase mein convert karta hai
var upperCity = city.toUpperCase();

console.log("Uppercase:", upperCity);
// Output: KARACHI

// ==========================================
// CHAPTER 22
// Strings: Measuring Length & Extracting Parts
// ==========================================

var name = "Hamid";

// .length string mein total characters count karta hai
var nameLength = name.length;

console.log("Name length:", nameLength);
// Output: 5

// slice() string ka ek portion extract karta hai
var cityName = "Karachi";

var firstThree = cityName.slice(0, 3);

console.log("First three characters:", firstThree);
// Output: Kar

// slice() mein second index include nahi hota
var someCharacters = cityName.slice(2, 5);

console.log("Characters from index 2 to 5:", someCharacters);
// Output: rac

// Sirf first character nikalna
var firstChar = cityName.slice(0, 1);

console.log("First character:", firstChar);
// Output: K

// First character ko uppercase aur baqi characters ko lowercase
var userCity = "kArAcHi";

var firstLetter = userCity.slice(0, 1);
var remainingLetters = userCity.slice(1);

firstLetter = firstLetter.toUpperCase();
remainingLetters = remainingLetters.toLowerCase();

var formattedCity = firstLetter + remainingLetters;

console.log("Formatted city:", formattedCity);
// Output: Karachi

// ==========================================
// CHAPTER 23
// Strings: Finding Segments
// ==========================================

var sentence = "I am learning JavaScript";

// indexOf() kisi word/character ki first position find karta hai
var position = sentence.indexOf("JavaScript");

console.log("JavaScript starts at index:", position);

// Agar segment nahi mile to indexOf() -1 return karta hai
var searchResult = sentence.indexOf("Python");

console.log("Python position:", searchResult);
// Output: -1

// lastIndexOf() last occurrence ki position find karta hai
var text = "JavaScript is easy. I like JavaScript.";

var lastPosition = text.lastIndexOf("JavaScript");

console.log("Last JavaScript position:", lastPosition);

// ==========================================
// CHAPTER 24
// Finding a Character at a Location
// ==========================================

var studentName = "Hamid";

// charAt() specified index ka character return karta hai
var character = studentName.charAt(0);

console.log("First character:", character);
// Output: H

var thirdCharacter = studentName.charAt(2);

console.log("Third character:", thirdCharacter);
// Output: m

// Last character nikalna
// length - 1 last index deta hai
var lastCharacter = studentName.charAt(studentName.length - 1);

console.log("Last character:", lastCharacter);
// Output: d

// String ke har character ko loop se check karna
var message = "Hello!";

for (var i = 0; i < message.length; i++) {
  var currentCharacter = message.charAt(i);

  console.log("Character at index " + i + ":", currentCharacter);
}

// ==========================================
// CHAPTER 25
// Finding a Character & Replacing It
// ==========================================

var text = "I like cats";

// replace() ek text ko doosre text se replace karta hai
var newText = text.replace("cats", "dogs");

console.log("After replacement:", newText);
// Output: I like dogs

// Original string change nahi hoti
console.log("Original text:", text);
// Output: I like cats

// Original variable ko directly update karna
text = text.replace("cats", "dogs");

console.log("Updated text:", text);
// Output: I like dogs

// ==========================================
// Replacing Multiple Occurrences
// ==========================================

var animals = "cat cat cat";

// Normal replace() sirf first occurrence replace karta hai
var oneReplacement = animals.replace("cat", "dog");

console.log("One replacement:", oneReplacement);
// Output: dog cat cat

// /cat/g mein g ka matlab global replacement hai
// Isse saari matching occurrences replace hoti hain
var allReplacements = animals.replace(/cat/g, "dog");

console.log("All replacements:", allReplacements);
// Output: dog dog dog

// ==========================================
// FINAL PRACTICE
// Combining Chapters 21 - 25
// ==========================================

// User ka city name different cases mein aa sakta hai
var enteredCity = "kArAcHi";

// First character aur remaining characters ko separate karna
var firstLetter = enteredCity.slice(0, 1);
var otherLetters = enteredCity.slice(1);

// First character uppercase
firstLetter = firstLetter.toUpperCase();

// Baqi characters lowercase
otherLetters = otherLetters.toLowerCase();

// Dono parts ko combine karna
var correctCity = firstLetter + otherLetters;

console.log("Correct city:", correctCity);
// Output: Karachi

// City ke andar "a" ki position find karna
var aPosition = correctCity.indexOf("a");

console.log("First 'a' position:", aPosition);

// Last character find karna
var lastChar = correctCity.charAt(correctCity.length - 1);

console.log("Last character:", lastChar);
// Output: i
