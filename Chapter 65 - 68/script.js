/*
========================================================
A Smarter Way to Learn JavaScript
Chapters 65–68: DOM Attributes and Nodes
========================================================

Chapters:
65. The DOM: Attributes
66. The DOM: Attribute names and values
67. The DOM: Adding nodes
68. The DOM: Inserting nodes

These chapters continue working with the DOM.
We learn how to:
- Check HTML attributes
- Read and change attribute values
- Examine all attributes of an element
- Create new nodes
- Add new elements to the page
- Insert elements at a specific position
- Remove elements
========================================================
*/

// ======================================================
// CHAPTER 65 — THE DOM: ATTRIBUTES
// ======================================================

/*
HTML elements can have attributes.

Examples:

<p id="para1" class="text">Hello</p>
<a id="link1" href="https://google.com">Google</a>
<img id="pic1" src="car.jpg" alt="Car">

Some common attributes are:
- id
- class
- href
- src
- alt
- title

JavaScript can check, read, and change these attributes.
*/

// ------------------------------------------------------
// 1. hasAttribute()
// ------------------------------------------------------

/*
hasAttribute() checks whether an element has a
particular attribute.

It returns:
true  -> attribute exists
false -> attribute does not exist
*/

var paragraph = document.getElementById("para1");

var hasClass = paragraph.hasAttribute("class");

console.log(hasClass);

/*
For example, if the HTML is:

<p id="para1" class="text">Hello</p>

then:

paragraph.hasAttribute("class")

returns true.

Remember:

hasAttribute = "Kya ye attribute mojood hai?"
*/

// ------------------------------------------------------
// 2. getAttribute()
// ------------------------------------------------------

/*
getAttribute() reads the VALUE of an attribute.

Example:

class="text"

getAttribute("class")

returns:

"text"
*/

var classValue = paragraph.getAttribute("class");

console.log(classValue);

/*
Another example:

<a id="link1" href="https://google.com">Google</a>
*/

var link = document.getElementById("link1");

var linkValue = link.getAttribute("href");

console.log(linkValue);

/*
Remember:

getAttribute = "Attribute ki value lao."
*/

// ------------------------------------------------------
// 3. setAttribute()
// ------------------------------------------------------

/*
setAttribute() changes an attribute or creates it
if it doesn't already exist.

Syntax:

element.setAttribute("attribute", "value");
*/

paragraph.setAttribute("class", "special");

console.log(paragraph.getAttribute("class"));

/*
The class changes from:

class="text"

to:

class="special"
*/

// setAttribute() can also create a new attribute.

paragraph.setAttribute("title", "Welcome");

console.log(paragraph.getAttribute("title"));

/*
Important:

setAttribute() itself does not give you the new value.
If you want to check the value, use getAttribute()
after setting it.
*/

// ------------------------------------------------------
// CHAPTER 65 QUICK MEMORY
// ------------------------------------------------------

/*
hasAttribute()  -> Does the attribute exist?
getAttribute()  -> Give me its value.
setAttribute()  -> Set/change its value.

Easy memory:

HAS  = hai?
GET  = value lao
SET  = value lagao
*/

// ======================================================
// CHAPTER 66 — ATTRIBUTE NAMES AND VALUES
// ======================================================

/*
In Chapter 65 we worked with one attribute at a time.

Chapter 66 introduces:

element.attributes

This gives us a collection of ALL attributes
belonging to an element.
*/

// ------------------------------------------------------
// 1. Getting all attributes
// ------------------------------------------------------

var p = document.getElementById("para1");

var attributeList = p.attributes;

console.log(attributeList);

/*
If the HTML is:

<p id="para1" class="text" title="Hello">Welcome</p>

the element has attributes such as:

id
class
title
*/

// ------------------------------------------------------
// 2. Counting attributes
// ------------------------------------------------------

/*
The attributes collection has a length property.
*/

var numberOfAttributes = attributeList.length;

console.log(numberOfAttributes);

/*
length tells us how many attributes are in the collection.
*/

// ------------------------------------------------------
// 3. nodeName
// ------------------------------------------------------

/*
Each item in the attributes collection is an attribute node.

nodeName gives the ATTRIBUTE NAME.
*/

var firstAttributeName = attributeList[0].nodeName;

console.log(firstAttributeName);

/*
For example, an attribute may give:

"id"

or

"class"

or

"title"
*/

// ------------------------------------------------------
// 4. nodeValue
// ------------------------------------------------------

/*
nodeValue gives the VALUE of the attribute.
*/

var firstAttributeValue = attributeList[0].nodeValue;

console.log(firstAttributeValue);

/*
Example:

class="text"

nodeName  -> "class"
nodeValue -> "text"
*/

// ------------------------------------------------------
// 5. Working with a specific attribute
// ------------------------------------------------------

var list = document.getElementById("para1").attributes;

var attributeName = list[1].nodeName;
var attributeValue = list[1].nodeValue;

console.log(attributeName);
console.log(attributeValue);

/*
The number inside [] selects an attribute from
the attributes collection.

Just like arrays, the first item starts at 0.
*/

// ------------------------------------------------------
// 6. Looping through all attributes
// ------------------------------------------------------

var allAttributes = document.getElementById("para1").attributes;

for (var i = 0; i < allAttributes.length; i++) {
  console.log(allAttributes[i].nodeName);
  console.log(allAttributes[i].nodeValue);
}

/*
This loop checks every attribute.

For each attribute:

nodeName  -> attribute name
nodeValue -> attribute value
*/

// ------------------------------------------------------
// CHAPTER 66 QUICK MEMORY
// ------------------------------------------------------

/*
attributes -> gives all attributes

attributes.length
-> number of attributes

attributes[i].nodeName
-> name of the attribute

attributes[i].nodeValue
-> value of the attribute

Think:

attributes
   ↓
one attribute
   ↓
nodeName = name
nodeValue = value
*/

// ======================================================
// CHAPTER 67 — THE DOM: ADDING NODES
// ======================================================

/*
Until now, we mainly worked with elements that
already existed on the page.

Now we learn how to CREATE new nodes.

The main tools are:

document.createElement()
document.createTextNode()
appendChild()
setAttribute()
*/

// ------------------------------------------------------
// 1. createElement()
// ------------------------------------------------------

/*
createElement() creates a new HTML element.

Example:
*/

var newParagraph = document.createElement("p");

console.log(newParagraph);

/*
This creates a new <p> element in JavaScript.

But it is NOT automatically visible on the page yet.

We have only created the element.
*/

// ------------------------------------------------------
// 2. setAttribute() on a new element
// ------------------------------------------------------

/*
We can give the new element an attribute.
*/

newParagraph.setAttribute("class", "message");

/*
Now the new element is conceptually:

<p class="message"></p>
*/

// ------------------------------------------------------
// 3. createTextNode()
// ------------------------------------------------------

/*
createTextNode() creates text that can be placed
inside an element.
*/

var newText = document.createTextNode("Welcome to JavaScript");

/*
At this point we have:

newParagraph -> <p>
newText      -> "Welcome to JavaScript"

But the text is not inside the paragraph yet.
*/

// ------------------------------------------------------
// 4. appendChild()
// ------------------------------------------------------

/*
appendChild() can put the text node inside
the new paragraph.
*/

newParagraph.appendChild(newText);

/*
Now the structure becomes:

<p class="message">
  Welcome to JavaScript
</p>

But there is still one important step:

The paragraph itself must be added to an existing
element on the page.

That is the main subject of Chapter 68.
*/

// ------------------------------------------------------
// GOLDEN RULE
// ------------------------------------------------------

/*
When creating an element with text, remember:

TEXT
  ↓
ELEMENT
  ↓
PARENT

Example:

newText
   ↓
newParagraph
   ↓
parentDiv
*/

// ======================================================
// CHAPTER 68 — THE DOM: INSERTING NODES
// ======================================================

/*
Chapter 67 taught us how to CREATE and PREPARE a node.

Chapter 68 teaches us how to put that node into
the page and control its position.
*/

// ------------------------------------------------------
// 1. appendChild()
// ------------------------------------------------------

/*
appendChild() adds a node at the END of the parent's
children.

Example HTML:

<div id="box"></div>
*/

var parentDiv = document.getElementById("box");

var paragraphToAdd = document.createElement("p");

var textToAdd = document.createTextNode("Hello world!");

paragraphToAdd.appendChild(textToAdd);

parentDiv.appendChild(paragraphToAdd);

/*
The important order is:

1. Create paragraph
2. Create text
3. Put text inside paragraph
4. Put paragraph inside parent

Result:

<div id="box">
  <p>Hello world!</p>
</div>
*/

// ------------------------------------------------------
// appendChild() always adds at the end
// ------------------------------------------------------

/*
Suppose the div already contains:

<p>One</p>
<p>Two</p>

If we use:

parentDiv.appendChild(newParagraph);

the new paragraph goes after "Two".

appendChild() does NOT let us choose a position.
It places the new node at the end.
*/

// ------------------------------------------------------
// 2. insertBefore()
// ------------------------------------------------------

/*
When we want to control where the new node goes,
we use insertBefore().

Syntax:

parent.insertBefore(newNode, targetNode);
*/

var newParagraph2 = document.createElement("p");

var newText2 = document.createTextNode("Inserted paragraph");

newParagraph2.appendChild(newText2);

var targetNode = parentDiv.firstChild;

parentDiv.insertBefore(newParagraph2, targetNode);

/*
This means:

Insert newParagraph2
BEFORE targetNode.
*/

// ------------------------------------------------------
// 3. There is no insertAfter()
// ------------------------------------------------------

/*
JavaScript does not provide an insertAfter() method
in the approach used in this chapter.

But we can insert something AFTER a target by using:

target.nextSibling
*/

var newElement = document.createElement("p");

var newElementText = document.createTextNode("Added after target");

newElement.appendChild(newElementText);

var target = parentDiv.firstChild;

parentDiv.insertBefore(newElement, target.nextSibling);

/*
The logic is:

target
   ↓
target.nextSibling
   ↓
insert new element BEFORE nextSibling

Therefore the new element ends up AFTER target.
*/

// ------------------------------------------------------
// 4. removeChild()
// ------------------------------------------------------

/*
To remove a child node from a parent, use:

parent.removeChild(child);
*/

var nodeToRemove = parentDiv.lastChild;

parentDiv.removeChild(nodeToRemove);

/*
The selected child is removed from the parent.
*/

// ------------------------------------------------------
// IMPORTANT: childNodes AND JUNK ARTIFACTS
// ------------------------------------------------------

/*
Remember Chapter 61:

childNodes can include whitespace text nodes.

So this:

parentDiv.childNodes[2]

may NOT always be the third HTML element.

For example, formatting like this:

<div>
  <p>One</p>
  <p>Two</p>
</div>

can create whitespace text nodes in the DOM.

Therefore, when you are targeting actual HTML elements,
be careful with childNodes indexes.

The book teaches DOM node manipulation using
childNodes, but you should remember that whitespace
can affect the index.
*/

// ------------------------------------------------------
// CHAPTER 68 COMPLETE FLOW
// ------------------------------------------------------

/*
The complete process of adding a new paragraph is:

1. Find the parent
2. Create the element
3. Create the text
4. Put text inside the element
5. Put the element inside the parent

Example:
*/

var box = document.getElementById("box");

var newP = document.createElement("p");

var newPText = document.createTextNode("New paragraph");

newP.appendChild(newPText);

box.appendChild(newP);

/*
This is the complete DOM creation + insertion flow.
*/

// ======================================================
// CHAPTER 65–68 QUICK REVISION
// ======================================================

/*
CHAPTER 65
-----------
hasAttribute()
-> checks whether an attribute exists

getAttribute()
-> gets attribute value

setAttribute()
-> creates or changes an attribute


CHAPTER 66
-----------
attributes
-> collection of all attributes

attributes.length
-> number of attributes

nodeName
-> attribute name

nodeValue
-> attribute value


CHAPTER 67
-----------
createElement()
-> creates an HTML element

createTextNode()
-> creates a text node

appendChild()
-> puts one node inside another


CHAPTER 68
-----------
appendChild()
-> adds node at the end

insertBefore()
-> inserts node before a target

target.nextSibling
-> useful for inserting after a target

removeChild()
-> removes a child node


MOST IMPORTANT FLOW
-------------------

createElement()
       ↓
createTextNode()
       ↓
element.appendChild(text)
       ↓
parent.appendChild(element)


GOLDEN RULE:

TEXT → ELEMENT → PARENT
*/

// ======================================================
// COMMON MISTAKES
// ======================================================

/*
1. Confusing attribute name and value

nodeName  = "class"
nodeValue = "text"


2. Expecting setAttribute() to return the new value

Wrong idea:

var result = element.setAttribute("class", "new");

Better:

element.setAttribute("class", "new");
console.log(element.getAttribute("class"));


3. Appending TEXT directly when the question asks
   for a new paragraph

Wrong:

parent.appendChild(text);

Correct:

paragraph.appendChild(text);
parent.appendChild(paragraph);


4. Forgetting that createElement() only creates
   the element.

Creating a node does not automatically put it
on the page.


5. Confusing appendChild() and insertBefore()

appendChild()
-> END

insertBefore()
-> BEFORE a target


6. Forgetting that childNodes may contain whitespace
   text nodes.
*/

// ======================================================
// FINAL SELF-CHECK
// ======================================================

/*
1. What does hasAttribute() return?

2. What is the difference between getAttribute()
   and setAttribute()?

3. What does element.attributes give us?

4. What does nodeName give for an attribute?

5. What does nodeValue give for an attribute?

6. What does createElement() do?

7. What does createTextNode() do?

8. Why isn't a newly created element immediately
   visible on the page?

9. Where does appendChild() place a new child?

10. What is the purpose of insertBefore()?

11. How can you insert a node after another node
    when there is no insertAfter() method?

12. What does removeChild() do?

13. Explain this flow:

TEXT → ELEMENT → PARENT

14. Why can childNodes indexes sometimes be confusing?

15. Write the complete code flow for creating a
    paragraph containing "Hello JavaScript" and
    adding it to a div.
*/

// ======================================================
// END — CHAPTERS 65–68
// ======================================================
