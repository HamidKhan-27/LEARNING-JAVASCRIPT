/*
========================================================
        A SMARTER WAY TO LEARN JAVASCRIPT
        CHAPTER 58, 59 & 60
        DOM — Parents, Children & Finding Children
========================================================
*/


// ======================================================
// CHAPTER 58 — THE DOM
// ======================================================

/*
DOM = Document Object Model

Browser HTML page ko ek structure/tree mein convert karta hai.
JavaScript DOM ke through HTML elements ko access aur change
kar sakti hai.

Basic structure:

document
   |
   └── HTML
       |
       ├── head
       |
       └── body
           |
           ├── div
           ├── p
           └── button


"document" current webpage ko represent karta hai.
*/


// ------------------------------------------------------
// 58.1 — document
// ------------------------------------------------------

console.log(document);


// ------------------------------------------------------
// 58.2 — Finding an element using getElementById()
// ------------------------------------------------------

var heading = document.getElementById("heading");

console.log(heading);


// ------------------------------------------------------
// 58.3 — Changing HTML using innerHTML
// ------------------------------------------------------

heading.innerHTML = "Hello JavaScript!";


// ------------------------------------------------------
// 58.4 — Changing style using style
// ------------------------------------------------------

heading.style.color = "blue";


// ------------------------------------------------------
// 58.5 — DOM element ko variable mein store karna
// ------------------------------------------------------

var paragraph = document.getElementById("paragraph");

paragraph.innerHTML = "I am learning the DOM.";

paragraph.style.fontSize = "25px";


// ------------------------------------------------------
// CHAPTER 58 — IMPORTANT POINTS
// ------------------------------------------------------

/*
1. DOM webpage ka structure represent karta hai.
2. document current webpage ko represent karta hai.
3. getElementById() se element find kar sakte hain.
4. Element ko variable mein store karke repeatedly use kar sakte hain.
5. DOM element ki properties change karke webpage modify kar sakte hain.
6. innerHTML se content change/read kar sakte hain.
7. style se CSS styles JavaScript se change kar sakte hain.
*/


// ======================================================
// CHAPTER 59 — DOM: PARENTS AND CHILDREN
// ======================================================

/*
Parent:
Ek element jo doosre elements ko contain karta hai.

Child:
Jo element parent ke andar hota hai.

Example:

<div id="box">
    <p>One</p>
    <p>Two</p>
</div>

div = parent
p = children


Structure:

div
├── p
└── p
*/


// ------------------------------------------------------
// 59.1 — Parent ko find karna
// ------------------------------------------------------

var parent = document.getElementById("box");


// ------------------------------------------------------
// 59.2 — Parent ke andar paragraphs find karna
// ------------------------------------------------------

var paragraphs = parent.getElementsByTagName("p");

console.log(paragraphs);


// ------------------------------------------------------
// 59.3 — Collection ki length
// ------------------------------------------------------

console.log(paragraphs.length);


// ------------------------------------------------------
// 59.4 — Specific element ko index se target karna
// ------------------------------------------------------

paragraphs[0].innerHTML = "First paragraph";

paragraphs[1].innerHTML = "Second paragraph";


// ------------------------------------------------------
// 59.5 — Parent ke andar matching elements par loop
// ------------------------------------------------------

for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "blue";
}


// ------------------------------------------------------
// 59.6 — Scoped getElementsByTagName()
// ------------------------------------------------------

/*
document.getElementsByTagName("p")

poori webpage ke matching <p> elements find karta hai.

parent.getElementsByTagName("p")

sirf parent ke andar matching <p> elements find karta hai.
*/

var box = document.getElementById("box");

var boxParagraphs = box.getElementsByTagName("p");

console.log(boxParagraphs);


// ------------------------------------------------------
// CHAPTER 59 — IMPORTANT POINTS
// ------------------------------------------------------

/*
1. Parent ek containing element hota hai.
2. Child parent ke andar hota hai.
3. getElementsByTagName() matching elements ki collection deta hai.
4. Collection ko index se access kar sakte hain.
5. Collection ka number .length se milta hai.
6. Parent ke saath getElementsByTagName() use karne se
   search us parent ke andar limited ho jati hai.
7. Nested elements bhi getElementsByTagName() se mil sakte hain.
*/


// ======================================================
// CHAPTER 60 — FINDING CHILDREN
// ======================================================

/*
Chapter 60 mein hum specifically parent ke children
ko find karna seekhte hain.

Important properties:

children
children[index]
firstElementChild
lastElementChild
*/


// ------------------------------------------------------
// 60.1 — children
// ------------------------------------------------------

var container = document.getElementById("container");

var childElements = container.children;

console.log(childElements);


// ------------------------------------------------------
// 60.2 — Number of direct children
// ------------------------------------------------------

console.log(childElements.length);


// ------------------------------------------------------
// 60.3 — Specific child using index
// ------------------------------------------------------

childElements[0].innerHTML = "First Child";

childElements[1].innerHTML = "Second Child";


// ------------------------------------------------------
// 60.4 — firstElementChild
// ------------------------------------------------------

var firstChild = container.firstElementChild;

console.log(firstChild);

firstChild.style.color = "red";


// ------------------------------------------------------
// 60.5 — lastElementChild
// ------------------------------------------------------

var lastChild = container.lastElementChild;

console.log(lastChild);

lastChild.style.backgroundColor = "yellow";


// ------------------------------------------------------
// 60.6 — children vs getElementsByTagName()
// ------------------------------------------------------

/*
children:

Sirf DIRECT HTML children ko return karta hai.

getElementsByTagName():

Parent ke andar matching tag ke ALL descendants
find kar sakta hai.

Example:

<div id="box">
    <p>One</p>

    <div>
        <p>Two</p>
    </div>

    <p>Three</p>
</div>


box.children:

Direct children:
1. p
2. div
3. p

Total = 3


box.getElementsByTagName("p"):

Matching <p> elements:
1. One
2. Two
3. Three

Total = 3

Yahan "Two" wala p direct child nahi hai,
lekin wo box ka descendant hai.
*/


// ------------------------------------------------------
// 60.7 — Finding all paragraphs inside a parent
// ------------------------------------------------------

var parentBox = document.getElementById("box");

var allParagraphs = parentBox.getElementsByTagName("p");

console.log(allParagraphs);


// ------------------------------------------------------
// 60.8 — Loop through all matching descendants
// ------------------------------------------------------

for (var i = 0; i < allParagraphs.length; i++) {
    allParagraphs[i].style.color = "green";
}


// ======================================================
// CHAPTER 58–60 — COMBINED EXAMPLE
// ======================================================

/*
Is example mein Chapter 58, 59 aur 60 ke concepts
ek saath use ho rahe hain.
*/

var mainBox = document.getElementById("mainBox");

// Chapter 60:
// Direct children find karna
var directChildren = mainBox.children;

console.log(directChildren);


// Chapter 60:
// First direct child
mainBox.firstElementChild.innerHTML = "First Element";


// Chapter 60:
// Last direct child
mainBox.lastElementChild.innerHTML = "Last Element";


// Chapter 59:
// Parent ke andar saare paragraphs find karna
var mainParagraphs = mainBox.getElementsByTagName("p");


// Chapter 59 + 58:
// Loop se paragraphs modify karna
for (var i = 0; i < mainParagraphs.length; i++) {
    mainParagraphs[i].style.fontSize = "20px";
    mainParagraphs[i].style.color = "blue";
}


// ======================================================
// QUICK REVISION
// ======================================================

/*
CHAPTER 58
-----------
DOM
document
getElementById()
innerHTML
style


CHAPTER 59
-----------
Parent
Child
getElementsByTagName()
.length
[index]
Scoped searching


CHAPTER 60
-----------
children
children[index]
firstElementChild
lastElementChild


MOST IMPORTANT DIFFERENCE
-------------------------

parent.children
    ↓
Direct HTML children


parent.getElementsByTagName("p")
    ↓
Parent ke andar saare matching <p> descendants


firstElementChild
    ↓
First direct HTML child


lastElementChild
    ↓
Last direct HTML child
*/


// ======================================================
// END OF CHAPTER 58–60
// ======================================================