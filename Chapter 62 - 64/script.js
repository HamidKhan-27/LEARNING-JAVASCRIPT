/*
========================================================
CHAPTER 62–64
THE DOM: MORE WAYS TO TARGET ELEMENTS
THE DOM: GETTING A TARGET'S NAME
THE DOM: COUNTING ELEMENTS
========================================================

This file covers:

Chapter 62:
- firstChild
- lastChild
- parentNode
- nextSibling
- previousSibling
- null
- whitespace/text-node issue with siblings

Chapter 63:
- nodeName
- Difference between nodeType and nodeName

Chapter 64:
- Counting elements
- length
- Counting child nodes
- Looping through collections
- Counting specific elements
*/

/*
========================================================
CHAPTER 62
THE DOM: MORE WAYS TO TARGET ELEMENTS
========================================================

In the previous chapters, we used childNodes with an index:

parentNode.childNodes[0]
parentNode.childNodes[1]
parentNode.childNodes[2]

Chapter 62 gives us other ways to move around the DOM
hierarchy.

The main properties are:

1. firstChild
2. lastChild
3. parentNode
4. nextSibling
5. previousSibling
*/

/*
--------------------------------------------------------
1. firstChild
--------------------------------------------------------

firstChild targets the first child node of a parent.

This:

parentNode.childNodes[0]

is equivalent to:

parentNode.firstChild
*/

var box = document.getElementById("box");

var first = box.firstChild;

console.log(first);

/*
IMPORTANT:

firstChild works with NODES.

Because whitespace and line breaks in HTML can sometimes
be treated as text nodes, firstChild may be a text node
instead of the first HTML element.
*/

/*
--------------------------------------------------------
2. lastChild
--------------------------------------------------------

lastChild targets the last child node.
*/

var last = box.lastChild;

console.log(last);

/*
--------------------------------------------------------
3. parentNode
--------------------------------------------------------

If you already have a child node and want to find
its parent, use:

childNode.parentNode
*/

var paragraph = document.getElementById("para1");

var parent = paragraph.parentNode;

console.log(parent);

/*
--------------------------------------------------------
4. nextSibling
--------------------------------------------------------

nextSibling targets the next node that has the same parent.
*/

var firstParagraph = document.getElementById("para1");

var next = firstParagraph.nextSibling;

console.log(next);

/*
IMPORTANT:

nextSibling targets the NEXT NODE, not necessarily the
next HTML element.

Whitespace between HTML elements may be treated as a
text node.
*/

/*
--------------------------------------------------------
5. previousSibling
--------------------------------------------------------

previousSibling targets the previous node with the
same parent.
*/

var secondParagraph = document.getElementById("para2");

var previous = secondParagraph.previousSibling;

console.log(previous);

/*
--------------------------------------------------------
6. null
--------------------------------------------------------

If there is no next sibling or previous sibling,
JavaScript returns null.
*/

var firstElement = document.getElementById("para1");

var noPrevious = firstElement.previousSibling;

console.log(noPrevious);

/*
--------------------------------------------------------
7. nodeType with DOM navigation
--------------------------------------------------------

nodeType 1 = Element Node
nodeType 3 = Text Node
*/

var node = firstElement.nextSibling;

if (node.nodeType === 1) {
  console.log("Element");
}

if (node.nodeType === 3) {
  console.log("Text");
}

/*
--------------------------------------------------------
8. Chapter 62 Quick Summary
--------------------------------------------------------

firstChild
= first child node

lastChild
= last child node

parentNode
= parent of the current node

nextSibling
= next node at the same level

previousSibling
= previous node at the same level

null
= no matching node exists in that direction
*/

/*
========================================================
CHAPTER 63
THE DOM: GETTING A TARGET'S NAME
========================================================

nodeType tells us WHAT KIND OF NODE we have.

nodeType:
1 = Element Node
3 = Text Node

Chapter 63 introduces nodeName.

nodeName tells us the NAME of the node.
*/

/*
--------------------------------------------------------
1. nodeName
--------------------------------------------------------

Use:

targetNode.nodeName

to get the name of the targeted node.

For an HTML element, nodeName gives the tag name.

Example:

<div id="box"></div>

box.nodeName

returns:

"DIV"
*/

var target = document.getElementById("box");

console.log(target.nodeName);

/*
--------------------------------------------------------
2. Different HTML elements
--------------------------------------------------------

Example:

<h1 id="title">Hello</h1>
<p id="text">JavaScript</p>
<button id="btn">Click</button>

Their nodeName values are:

H1
P
BUTTON
*/

var title = document.getElementById("title");

var text = document.getElementById("text");

var button = document.getElementById("btn");

console.log(title.nodeName);
console.log(text.nodeName);
console.log(button.nodeName);

/*
--------------------------------------------------------
3. Using nodeName in a condition
--------------------------------------------------------
*/

var element = document.getElementById("box");

if (element.nodeName === "DIV") {
  console.log("This is a DIV");
}

/*
--------------------------------------------------------
4. nodeType vs nodeName
--------------------------------------------------------

nodeType answers:

"What type of node is this?"

nodeName answers:

"What is the name of this node?"

Remember:

nodeType = TYPE
nodeName = NAME
*/

/*
--------------------------------------------------------
5. Example: nodeType + nodeName
--------------------------------------------------------
*/

var targetElement = document.getElementById("box");

console.log(targetElement.nodeType);
console.log(targetElement.nodeName);

/*
If box is:

<div id="box"></div>

the output will be:

1
DIV
*/

/*
--------------------------------------------------------
6. nodeName and capitalization
--------------------------------------------------------

For HTML element names, nodeName is commonly returned
in uppercase.

So:

element.nodeName === "DIV"

is appropriate.
*/

/*
--------------------------------------------------------
7. Combining Chapter 62 + Chapter 63
--------------------------------------------------------
*/

var current = document.getElementById("para2");

var parentNode = current.parentNode;

console.log(parentNode.nodeName);

/*
If para2 is inside:

<div id="box">

the parent node's name will be:

DIV
*/

/*
========================================================
CHAPTER 64
THE DOM: COUNTING ELEMENTS
========================================================

Chapter 64 teaches us how to count elements and nodes
that we have targeted.

The main property used for counting is:

.length
*/

/*
--------------------------------------------------------
1. Counting elements with getElementsByTagName()
--------------------------------------------------------

getElementsByTagName() returns a collection of matching
elements.

.length tells us how many elements are in that collection.

Example:

var paragraphs = document.getElementsByTagName("p");

var total = paragraphs.length;
*/

var paragraphs = document.getElementsByTagName("p");

var totalParagraphs = paragraphs.length;

console.log(totalParagraphs);

/*
If the page contains 5 <p> elements:

paragraphs.length

will return:

5
*/

/*
--------------------------------------------------------
2. Counting <li> elements
--------------------------------------------------------
*/

var liElements = document.getElementsByTagName("li");

var howManyLi = liElements.length;

console.log(howManyLi);

/*
--------------------------------------------------------
3. Counting child nodes
--------------------------------------------------------

childNodes also has a .length property.

It tells us how many child NODES are inside the parent.

IMPORTANT:

childNodes can include text nodes caused by whitespace
and line breaks.

So childNodes.length is not always the same as the
number of HTML elements.
*/

var parent = document.getElementById("box");

var nodeList = parent.childNodes;

var howManyKids = nodeList.length;

console.log(howManyKids);

/*
--------------------------------------------------------
4. Looping through a collection
--------------------------------------------------------

.length is commonly used with a for loop.

The loop checks every element one by one.
*/

var paragraphs = document.getElementsByTagName("p");

var howManyParagraphs = paragraphs.length;

for (var i = 0; i < howManyParagraphs; i++) {
  console.log(paragraphs[i]);
}

/*
--------------------------------------------------------
5. Counting specific elements
--------------------------------------------------------

We can count only a specific type of node.

For example, we can count only <img> nodes.

Steps:

1. Start a counter at 0.
2. Get the child nodes.
3. Loop through all child nodes.
4. Check nodeName.
5. If the node is an image, increase the counter.
*/

var box = document.getElementById("box");

var nodeList = box.childNodes;

var numberPics = 0;

for (var i = 0; i < nodeList.length; i++) {
  if (nodeList[i].nodeName.toLowerCase() === "img") {
    numberPics++;
  }
}

console.log(numberPics);

/*
--------------------------------------------------------
6. Why do we use numberPics++?
--------------------------------------------------------

numberPics starts at 0.

Every time an <img> node is found:

numberPics++

increases the value by 1.

For example:

0 → first image → 1
1 → second image → 2
2 → third image → 3
*/

/*
--------------------------------------------------------
7. length + loop + condition
--------------------------------------------------------

These three things can work together:

.length
→ tells us how many nodes/elements to check

for loop
→ checks them one by one

if
→ checks whether the current node matches
*/

/*
========================================================
CHAPTER 64 — QUICK SUMMARY
========================================================

getElementsByTagName()
→ returns a collection of matching elements

.length
→ counts items in the collection

childNodes
→ returns child nodes

childNodes.length
→ counts child nodes

for loop
→ checks nodes/elements one by one

nodeName
→ tells the name of the node

counter++
→ increases the counter when the required node is found


MEMORY TRICK:

getElementsByTagName()
        ↓
   collection
        ↓
     .length
        ↓
      count


For specific nodes:

childNodes
    ↓
  loop
    ↓
nodeName check
    ↓
 counter++
*/

/*
========================================================
FINAL SUMMARY — CHAPTER 62–64
========================================================

CHAPTER 62:

firstChild
→ first child NODE

lastChild
→ last child NODE

parentNode
→ parent NODE

nextSibling
→ next NODE at the same level

previousSibling
→ previous NODE at the same level

null
→ no node exists in that direction


CHAPTER 63:

nodeName
→ tells the name/tag of the node

nodeType
→ tells the type of the node


MEMORY:

nodeType = TYPE
nodeName = NAME


CHAPTER 64:

.length
→ count elements/nodes

getElementsByTagName()
→ get matching elements

childNodes.length
→ count child nodes

for loop
→ check each node

counter++
→ count specific nodes


========================================================
CHAPTER 62–64 COMPLETE
========================================================
*/
