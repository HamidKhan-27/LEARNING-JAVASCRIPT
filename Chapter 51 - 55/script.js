/*
========================================================
     A SMARTER WAY TO LEARN JAVASCRIPT
     CHAPTERS 51 - 55
========================================================

Chapter 51: Reading and Setting Paragraph Text
Chapter 52: Manipulating Images and Text
Chapter 53: Swapping Images
Chapter 54: Swapping Images and Setting Classes
Chapter 55: Setting Styles
========================================================
*/

/*
========================================================
CHAPTER 51
Reading and Setting Paragraph Text
========================================================

Main concept:
    innerHTML

innerHTML ka use kisi HTML element ke andar ka
content read ya change karne ke liye hota hai.

Read:
    element.innerHTML

Set:
    element.innerHTML = "New Content";
========================================================
*/

// ------------------------------------------------------
// 51.1 Reading content with innerHTML
// ------------------------------------------------------

var whatsThere = document.getElementById("content").innerHTML;

console.log(whatsThere);

// ------------------------------------------------------
// 51.2 Setting / changing content
// ------------------------------------------------------

document.getElementById("content").innerHTML = "Hello Hamid!";

// ------------------------------------------------------
// 51.3 innerHTML HTML tags ko bhi read karta hai
// ------------------------------------------------------

var data = document.getElementById("info").innerHTML;

console.log(data);

// Agar HTML ho:
//
// <p id="info"><strong>JavaScript</strong> is fun!</p>
//
// To innerHTML return karega:
//
// <strong>JavaScript</strong> is fun!

// ------------------------------------------------------
// 51.4 Function ke through content read karna
// ------------------------------------------------------

function readContent() {
  var content = document.getElementById("content").innerHTML;

  console.log(content);
}

// ------------------------------------------------------
// 51.5 Function ke through content set karna
// ------------------------------------------------------

function changeContent() {
  document.getElementById("content").innerHTML = "Welcome to JavaScript!";
}

// ------------------------------------------------------
// Chapter 51 Important Syntax
// ------------------------------------------------------

/*
Read:

document.getElementById("id").innerHTML;


Set:

document.getElementById("id").innerHTML = "New Text";
*/

/*
========================================================
CHAPTER 52
Manipulating Images and Text
========================================================

Main concept:
    className

JavaScript mein class ko access karne ke liye
className use hota hai.

Example:

element.className = "hidden";

Is se element ki existing classes replace ho jati hain.

Agar existing class ko preserve karke new class add
karni ho:

element.className += " big";
========================================================
*/

// ------------------------------------------------------
// 52.1 Class ko replace karna
// ------------------------------------------------------

function makeInvisible() {
  document.getElementById("ugly").className = "hidden";
}

// ------------------------------------------------------
// 52.2 Existing class replace hogi
// ------------------------------------------------------

document.getElementById("para").className = "big";

/*
Agar pehle:

<p id="para" class="text red">Hello</p>

To:

className = "big";

ke baad sirf:

class="big"

reh jayegi.
*/

// ------------------------------------------------------
// 52.3 Existing class ko preserve karke new class add
// ------------------------------------------------------

document.getElementById("para").className += " big";

/*
Agar pehle:

class="text"

To baad mein:

class="text big"

ho jayegi.

IMPORTANT:
" big" mein starting space zaroori hai.
*/

// ------------------------------------------------------
// 52.4 Function ke through class change
// ------------------------------------------------------

function makeBig() {
  document.getElementById("p1").className += " big";
}

// ------------------------------------------------------
// Chapter 52 Important Syntax
// ------------------------------------------------------

/*
Replace classes:

element.className = "newClass";


Add class while preserving existing classes:

element.className += " newClass";


Remember:

className =

    Existing classes replace


className +=

    Existing classes preserve + new class add
*/

/*
========================================================
CHAPTER 53
Swapping Images
========================================================

Main concept:
    src

Image ka source change karne ke liye .src use karte hain.

Example:

document.getElementById("pic").src = "after.jpg";

Is se image ki source file change ho jayegi.
========================================================
*/

// ------------------------------------------------------
// 53.1 Image ka src change karna
// ------------------------------------------------------

document.getElementById("myImage").src = "new.jpg";

// ------------------------------------------------------
// 53.2 Function ke through image swap
// ------------------------------------------------------

function swapPic() {
  document.getElementById("pic").src = "after.jpg";
}

// ------------------------------------------------------
// 53.3 Variable ke through image swap
// ------------------------------------------------------

function changeImage() {
  var image = document.getElementById("photo");

  image.src = "new.jpg";
}

// ------------------------------------------------------
// Chapter 53 ka basic flow
// ------------------------------------------------------

/*
Mouse image ke upar:

        ↓

onmouseover

        ↓

swapPic()

        ↓

src change

        ↓

New image display
*/

/*
HTML example:

<img
    src="before.jpg"
    id="pic"
    onmouseover="swapPic()"
>


JavaScript:

function swapPic() {
    document.getElementById("pic").src = "after.jpg";
}
*/

/*
========================================================
CHAPTER 54
Swapping Images and Setting Classes
========================================================

Chapter 54 mein Chapter 53 ke image swapping concept
ke saath className ko combine kiya jata hai.

Yani ek function mein:

1. Image ka src change
2. Image ki class change
========================================================
*/

// ------------------------------------------------------
// 54.1 Image + class ek saath change
// ------------------------------------------------------

function swapImageAndClass() {
  var image = document.getElementById("pic");

  image.src = "after.jpg";
  image.className = "big";
}

// ------------------------------------------------------
// 54.2 Directly image aur class change
// ------------------------------------------------------

var image = document.getElementById("photo");

image.src = "new.jpg";
image.className = "large";

// ------------------------------------------------------
// 54.3 Existing class preserve karke new class add
// ------------------------------------------------------

function swapAndAddClass() {
  var image = document.getElementById("picture");

  image.src = "after.jpg";
  image.className += " big";
}

// ------------------------------------------------------
// Chapter 54 Important Concept
// ------------------------------------------------------

/*
Chapter 53:

    Image ka src change.


Chapter 54:

    Image ka src change
          +
    Image ki class change.


Example:

image.src = "after.jpg";
image.className = "big";
*/

/*
========================================================
CHAPTER 55
Setting Styles
========================================================

Main concept:

    element.style.property = "value";

JavaScript se hum directly CSS styles change kar
sakte hain.

Examples:

    style.color
    style.backgroundColor
    style.fontSize

CSS property ko JavaScript mein aksar camelCase
mein likhna padta hai.
========================================================
*/

// ------------------------------------------------------
// 55.1 Text color change
// ------------------------------------------------------

document.getElementById("text").style.color = "blue";

// ------------------------------------------------------
// 55.2 Background color change
// ------------------------------------------------------

document.getElementById("text").style.backgroundColor = "yellow";

// ------------------------------------------------------
// 55.3 Font size change
// ------------------------------------------------------

document.getElementById("text").style.fontSize = "30px";

// ------------------------------------------------------
// 55.4 Multiple styles apply karna
// ------------------------------------------------------

function applyStyles() {
  var element = document.getElementById("para");

  element.style.color = "blue";
  element.style.backgroundColor = "yellow";
  element.style.fontSize = "25px";
}

// ------------------------------------------------------
// 55.5 Variable ke through style change
// ------------------------------------------------------

var text = document.getElementById("text");

text.style.color = "red";
text.style.backgroundColor = "yellow";

// ------------------------------------------------------
// CSS vs JavaScript property names
// ------------------------------------------------------

/*
CSS:

    background-color
    font-size


JavaScript:

    backgroundColor
    fontSize


Example:

element.style.backgroundColor = "yellow";

element.style.fontSize = "30px";
*/

/*
========================================================
CHAPTER 55 IMPORTANT SYNTAX
========================================================

General:

element.style.property = "value";


Examples:

element.style.color = "red";

element.style.backgroundColor = "yellow";

element.style.fontSize = "30px";
========================================================
*/

/*
========================================================
QUICK REVISION
CHAPTERS 51 - 55
========================================================
*/

// Chapter 51
// Read content:
var content = document.getElementById("content").innerHTML;

// Set content:
document.getElementById("content").innerHTML = "New Text";

// Chapter 52
// Replace class:
document.getElementById("element").className = "hidden";

// Add class:
document.getElementById("element").className += " big";

// Chapter 53
// Change image:
document.getElementById("pic").src = "new.jpg";

// Chapter 54
// Change image + class:
document.getElementById("pic").src = "new.jpg";
document.getElementById("pic").className = "big";

// Chapter 55
// Change style:
document.getElementById("text").style.color = "red";

/*
========================================================
PRACTICE QUESTIONS
========================================================

CHAPTER 51
-----------

Q1:
id "message" wale paragraph ka content read karke
variable mein store karo.

Q2:
id "heading" wale paragraph ka content
"Welcome to JavaScript" se change karo.


CHAPTER 52
-----------

Q3:
id "box" wale element ko "hidden" class do.

Q4:
id "para" ki existing class ko preserve karte hue
"big" class add karo.


CHAPTER 53
-----------

Q5:
id "myImage" wali image ka src "new.jpg" karo.

Q6:
Ek function "swapPic()" banao jo image ka src
"after.jpg" kar de.


CHAPTER 54
-----------

Q7:
Ek function banao jo:

    1. image ka src "after.jpg" kare
    2. image ki class "big" kare


CHAPTER 55
-----------

Q8:
id "text" ka color blue karo.

Q9:
id "text" ka background yellow karo.

Q10:
id "text" ka font size 30px karo.


========================================================
END OF CHAPTERS 51 - 55
========================================================
*/
