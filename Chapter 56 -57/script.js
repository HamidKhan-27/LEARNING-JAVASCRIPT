/*
========================================================
    A SMARTER WAY TO LEARN JAVASCRIPT
    CHAPTER 56 & 57
    GET ELEMENTS BY TAG NAME
========================================================
*/

// ======================================================
// CHAPTER 56 — TARGET ALL ELEMENTS BY TAG NAME
// ======================================================

/*
Chapter 56 mein hum getElementsByTagName() seekhte hain.

document.getElementsByTagName("p")

Ye webpage ke andar maujood ALL <p> elements
ki collection return karta hai.
*/

// ------------------------------------------------------
// 56.1 — Get all paragraphs
// ------------------------------------------------------

var paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);

// ------------------------------------------------------
// 56.2 — Check how many elements were found
// ------------------------------------------------------

console.log(paragraphs.length);

// ------------------------------------------------------
// 56.3 — Access an element using index
// ------------------------------------------------------

console.log(paragraphs[0]);

console.log(paragraphs[1]);

// ------------------------------------------------------
// 56.4 — Change a specific paragraph
// ------------------------------------------------------

paragraphs[0].innerHTML = "First paragraph";

// ------------------------------------------------------
// 56.5 — Change multiple paragraphs
// ------------------------------------------------------

paragraphs[1].innerHTML = "Second paragraph";

paragraphs[2].innerHTML = "Third paragraph";

// ------------------------------------------------------
// 56.6 — Using a for loop
// ------------------------------------------------------

for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "blue";
}

// ------------------------------------------------------
// 56.7 — Change all paragraphs
// ------------------------------------------------------

var allParagraphs = document.getElementsByTagName("p");

for (var i = 0; i < allParagraphs.length; i++) {
  allParagraphs[i].style.fontSize = "20px";
}

// ======================================================
// CHAPTER 56 — IMPORTANT POINTS
// ======================================================

/*
1. getElementsByTagName() multiple elements return karta hai.

2. document.getElementsByTagName("p")
   poori webpage ke <p> elements find karta hai.

3. Result ek collection hota hai.

4. .length se collection mein elements ki quantity
   pata chalti hai.

5. [0], [1], [2] se individual elements access kar sakte hain.

6. for loop use karke collection ke har element par
   same operation perform kar sakte hain.
*/

// ======================================================
// CHAPTER 57 — TARGET SOME ELEMENTS BY TAG NAME
// ======================================================

/*
Chapter 57 mein hum getElementsByTagName() ko
kisi specific parent ke saath use karte hain.

Chapter 56:

document.getElementsByTagName("p")

    ↓

poori webpage ke <p> elements


Chapter 57:

parent.getElementsByTagName("p")

    ↓

sirf us parent ke andar ke <p> elements
*/

// ------------------------------------------------------
// 57.1 — Find the parent
// ------------------------------------------------------

var box = document.getElementById("box");

// ------------------------------------------------------
// 57.2 — Find paragraphs inside the parent
// ------------------------------------------------------

var boxParagraphs = box.getElementsByTagName("p");

console.log(boxParagraphs);

// ------------------------------------------------------
// 57.3 — Check the number of paragraphs
// ------------------------------------------------------

console.log(boxParagraphs.length);

// ------------------------------------------------------
// 57.4 — Access a specific paragraph
// ------------------------------------------------------

boxParagraphs[0].innerHTML = "First paragraph in box";

// ------------------------------------------------------
// 57.5 — Change all paragraphs inside the box
// ------------------------------------------------------

for (var i = 0; i < boxParagraphs.length; i++) {
  boxParagraphs[i].style.color = "red";
}

// ------------------------------------------------------
// 57.6 — Another scoped example
// ------------------------------------------------------

var card = document.getElementById("card");

var cardParagraphs = card.getElementsByTagName("p");

for (var i = 0; i < cardParagraphs.length; i++) {
  cardParagraphs[i].style.backgroundColor = "yellow";
}

// ------------------------------------------------------
// 57.7 — Nested elements
// ------------------------------------------------------

/*
Agar paragraph parent ke andar kisi aur element
ke andar bhi ho, getElementsByTagName() usko bhi
find kar sakta hai.

Example:

<div id="container">

    <p>One</p>

    <div>
        <p>Two</p>
    </div>

</div>

container ke andar total 2 <p> hain.

Dono getElementsByTagName("p") se milenge.
*/

var container = document.getElementById("container");

var containerParagraphs = container.getElementsByTagName("p");

console.log(containerParagraphs);

// ------------------------------------------------------
// 57.8 — Loop through nested matching elements
// ------------------------------------------------------

for (var i = 0; i < containerParagraphs.length; i++) {
  containerParagraphs[i].style.color = "green";
}

// ======================================================
// CHAPTER 56 vs CHAPTER 57
// ======================================================

/*
CHAPTER 56
-----------

document.getElementsByTagName("p")

Search poori webpage mein hoti hai.


CHAPTER 57
-----------

parent.getElementsByTagName("p")

Search sirf specified parent ke andar hoti hai.


Example:

document
   |
   ├── p
   ├── div
   |    └── p
   |
   └── p


document.getElementsByTagName("p")
    ↓
Teeno <p> mil sakte hain.


Agar:

var box = document.getElementById("box");

box.getElementsByTagName("p");

    ↓

Sirf box ke andar ke <p> milenge.
*/

// ======================================================
// QUICK REVISION
// ======================================================

/*
getElementsByTagName()
        ↓
Multiple matching elements find karta hai.


.length
        ↓
Kitne elements mile.


[index]
        ↓
Specific element access karna.


for loop
        ↓
Har matching element par same operation.


document.getElementsByTagName()
        ↓
Whole document/page


parent.getElementsByTagName()
        ↓
Specific parent ke andar


IMPORTANT:

Chapter 56 = ALL matching elements on the page

Chapter 57 = Matching elements inside a specific parent
*/

// ======================================================
// PRACTICE EXAMPLES
// ======================================================

// Practice 1 — All headings
var headings = document.getElementsByTagName("h2");

for (var i = 0; i < headings.length; i++) {
  headings[i].style.color = "purple";
}

// Practice 2 — All list items
var listItems = document.getElementsByTagName("li");

console.log(listItems.length);

// Practice 3 — Paragraphs inside a specific section
var section = document.getElementById("section");

var sectionParagraphs = section.getElementsByTagName("p");

for (var i = 0; i < sectionParagraphs.length; i++) {
  sectionParagraphs[i].style.fontSize = "18px";
}

// ======================================================
// END OF CHAPTER 56 & 57
// ======================================================
