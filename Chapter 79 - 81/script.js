/*
===========================================================
A Smarter Way to Learn JavaScript
Chapters 79–81
Browser Control

Chapter 79: Filling the window with content
Chapter 80: Controlling the window's size and location
Chapter 81: Testing for popup blockers
===========================================================
*/

// =========================================================
// CHAPTER 79
// Browser control: Filling the window with content
// =========================================================

/*
IMPORTANT:

window.open() ek new browser window/tab open karne ke liye
use hota hai.

Basic syntax:

window.open();

Iska result ek window handle/reference hota hai.

Handle ka matlab:
JavaScript ke paas new window ko control karne ka reference.
*/

// ---------------------------------------------------------
// 79.1 Opening a blank window
// ---------------------------------------------------------

var monkeyWindow = window.open();

/*
Yahan:

monkeyWindow
    ↓
new window ka handle/reference

window.open()
    ↓
new blank window open karta hai
*/

// ---------------------------------------------------------
// 79.2 New window mein HTML content likhna
// ---------------------------------------------------------

var monkeyWindow = window.open();

var windowContent = "<h1>Capuchin monkey</h1>" + "<p>This is a monkey.</p>";

monkeyWindow.document.write(windowContent);

/*
Breakdown:

1. window.open()
   New window open karta hai.

2. windowContent
   HTML ko string ke form mein store karta hai.

3. monkeyWindow.document.write()
   Us HTML ko new window mein likhta hai.
*/

// ---------------------------------------------------------
// 79.3 HTML string ke andar quotes
// ---------------------------------------------------------

var windowContent =
  "<h1>Capuchin monkey</h1>" +
  "<img src='monkey.jpg'>" +
  "<p>This is a monkey.</p>";

/*
Outer string:
"........................"

Isliye HTML ke andar quotes ko
single quotes mein rakh sakte hain:

<img src='monkey.jpg'>
*/

// ---------------------------------------------------------
// 79.4 document.write() ka important point
// ---------------------------------------------------------

/*
document.write() empty window mein content
add kar sakta hai.

Lekin agar window mein pehle se HTML content hai,
to document.write() original document ko overwrite
kar sakta hai.

Yani existing HTML completely replace ho sakta hai.
*/

// ---------------------------------------------------------
// 79.5 Popup window mein URL assign karna
// ---------------------------------------------------------

var monkeyWindow = window.open();

monkeyWindow.location.assign("http://www.animals.com/capuchin.html");

/*
Alternative:

monkeyWindow.location.href =
  "http://www.animals.com/capuchin.html";
*/

// ---------------------------------------------------------
// 79.6 URL directly window.open() mein
// ---------------------------------------------------------

var monkeyWindow = window.open("http://www.animals.com/capuchin.html");

/*
Ye Chapter 79 mein window ko content dene ka
common method hai.

Agar file same host aur same directory mein hai:

*/

var monkeyWindow = window.open("capuchin.html");

// ---------------------------------------------------------
// 79.7 Window close karna
// ---------------------------------------------------------

var monkeyWindow = window.open("capuchin.html");

monkeyWindow.close();

/*
close() ke liye window ka handle/reference
use hota hai.
*/

// =========================================================
// CHAPTER 80
// Browser control: Controlling the window's size and location
// =========================================================

/*
Chapter 80 mein hum new window ke:

1. Name
2. Size
3. Location

control karna seekhte hain.
*/

// ---------------------------------------------------------
// 80.1 Window name
// ---------------------------------------------------------

var monkeyWindow = window.open("monk.html", "win1");

/*
window.open() ke:

1st argument = URL
2nd argument = window name

"win1" window ka NAME hai.

monkeyWindow window ka HANDLE hai.
*/

/*
IMPORTANT:

HANDLE:
    JavaScript mein window ko control karne ke liye.

NAME:
    Window ko identify/target karne ke liye.
*/

// ---------------------------------------------------------
// 80.2 Empty URL + name
// ---------------------------------------------------------

var monkeyWindow = window.open("", "win1");

/*
URL empty ho sakta hai.

Lekin name dene ke liye URL parameter
ki position phir bhi maintain karni hoti hai.
*/

// ---------------------------------------------------------
// 80.3 Window ki width aur height
// ---------------------------------------------------------

var monkeyWindow = window.open("monk.html", "win1", "width=420,height=380");

/*
Third argument = window specifications

width  = 420 pixels
height = 380 pixels

IMPORTANT:

width aur height numbers pixels mein hote hain.

Book ke example mein:
width=420
height=380

100 se kam size allowed nahi.
*/

// ---------------------------------------------------------
// 80.4 No spaces inside specifications
// ---------------------------------------------------------

var monkeyWindow = window.open("monk.html", "win1", "width=420,height=380");

/*
Correct:

"width=420,height=380"

Incorrect:

"width=420, height=380"

Specifications ke andar spaces nahi hone chahiye.
*/

// ---------------------------------------------------------
// 80.5 width/height order
// ---------------------------------------------------------

/*
Ye dono valid order ho sakte hain:

"width=420,height=380"

"height=380,width=420"

Lekin poora specifications string
third argument hona chahiye.
*/

// ---------------------------------------------------------
// 80.6 Window ki position
// ---------------------------------------------------------

var myWindow = window.open("", "", "width=420,height=380,left=200,top=100");

/*
left = screen ke left edge se 200 pixels

top = screen ke top edge se 100 pixels
*/

// ---------------------------------------------------------
// 80.7 Size + Position
// ---------------------------------------------------------

var myWindow = window.open(
  "about.html",
  "myWin",
  "width=400,height=300,left=150,top=100",
);

/*
Window:

width  = 400px
height = 300px
left   = 150px
top    = 100px
*/

// ---------------------------------------------------------
// 80.8 Important rule
// ---------------------------------------------------------

/*
Agar position specify karo:

left=200,top=100

lekin size specify na karo,
to position ignore ho sakti hai because
window full-size hogi.
*/

// ---------------------------------------------------------
// 80.9 Window specifications variable
// ---------------------------------------------------------

var windowSpecs = "'faq.html', 'faq', 'width=420,height=380,left=200,top=100'";

var faqPage = window.open(windowSpecs);

/*
Yahan quotes ke andar quotes hain.

Outer string:
"..............................."

Isliye inner values ke liye
single quotes use ki gayi hain.
*/

// =========================================================
// CHAPTER 81
// Browser control: Testing for popup blockers
// =========================================================

/*
IMPORTANT:

Browsers popup blockers use karte hain.

Agar JavaScript new popup open karne ki
koshish kare aur browser usay block kar de,
to humein detect karna hota hai.

Chapter 81 ka main idea:

window.open()
       ↓
handle/reference return karta hai
       ↓
agar popup block ho:
null mil sakta hai

agar popup open ho:
handle ki value milti hai
*/

// ---------------------------------------------------------
// 81.1 Basic popup blocker test
// ---------------------------------------------------------

function checkForPopBlocker() {
  var testPop = window.open("", "", "width=100,height=100");

  if (testPop === null) {
    alert("Please disable your popup blocker.");
  }

  testPop.close();
}

/*
Breakdown:

1.

var testPop = window.open(...);

Ek small test popup open karne ki
koshish karta hai.


2.

if (testPop === null)

Check karta hai ke popup open hua
ya block ho gaya.


3.

alert(...)

Agar popup blocked ho to user ko
message show karta hai.


4.

testPop.close();

Agar popup successfully open hua ho,
to usay close kar deta hai.
*/

// ---------------------------------------------------------
// 81.2 Developer ko kaise pata chalega?
// ---------------------------------------------------------

function checkForPopBlocker() {
  var testPop = window.open("", "", "width=100,height=100");

  console.log(testPop);

  if (testPop === null) {
    alert("Please disable your popup blocker.");
  }

  testPop.close();
}

/*
Developer DevTools Console mein result dekh sakta hai.

null
    = popup blocked

Window reference/object
    = popup open hua
*/

// ---------------------------------------------------------
// 81.3 Alert ka role
// ---------------------------------------------------------

/*
IMPORTANT:

alert() developer ko result nahi batata.

JavaScript pehle condition check karta hai:

if (testPop === null)

Agar condition TRUE ho:

alert("Please disable your popup blocker.");

Alert USER ko message dikhata hai.

Developer ke liye:
console.log(testPop)

useful hai.
*/

// ---------------------------------------------------------
// 81.4 Internet Explorer variation
// ---------------------------------------------------------

/*
Book ke mutabiq Internet Explorer mein
blocked popup ke case mein handle
undefined bhi ho sakta hai.

Isliye book all-bases cover karne ke liye
null + undefined check dikhati hai.

Book source ka form:

if (testPop === null || typeof(testPop) === "undefined") {
  alert("Please disable your popup blocker.");
}

NOTE:
Book ke printed example mein parentheses typo nazar aata hai;
upar wala version syntactically balanced form hai.
*/

// ---------------------------------------------------------
// 81.5 Page load par test run karna
// ---------------------------------------------------------

/*
Book normally popup blocker test ko
page load par run karne ke liye:

<body onLoad="checkForPopBlocker();">

Iska matlab:

Page load
   ↓
checkForPopBlocker()
   ↓
popup test
*/

// =========================================================
// QUICK REVISION
// =========================================================

/*
CHAPTER 79
----------

window.open()
    → new window open

windowContent
    → HTML content store

window.document.write()
    → window mein HTML likhta hai

window.location.assign()
    → popup window ko URL deta hai

window.location.href
    → popup window ka URL set karta hai

window.close()
    → window close karta hai


CHAPTER 80
----------

window.open(URL, name, specs)

Example:

window.open(
  "about.html",
  "myWin",
  "width=400,height=300,left=150,top=100"
);

URL
    → kaunsi page open hogi

name
    → window ka name

handle
    → JavaScript mein window ka reference

width
    → window width

height
    → window height

left
    → screen ke left se distance

top
    → screen ke top se distance


CHAPTER 81
----------

Popup blocker detect karna:

var testPop = window.open(
  "",
  "",
  "width=100,height=100"
);

if (testPop === null) {
  alert("Please disable your popup blocker.");
}

testPop.close();


MAIN IDEA:

window.open()
    ↓
successful?
    ↓
window handle

blocked?
    ↓
null
*/

// =========================================================
// PRACTICE QUESTIONS
// =========================================================

/*
Q1 — Chapter 79

Ek new window open karo aur usmein:

<h1>Hello Hamid</h1>
<p>Welcome to JavaScript</p>

show karo using document.write().

*/

/*
Q2 — Chapter 79

Ek window open karo jo:

about.html

page ko open kare.

Phir us window ko close karo using its handle.
*/

/*
Q3 — Chapter 80

Ek new window create karo:

URL: about.html
Name: myWin
Width: 500
Height: 400
Left: 150
Top: 100

window.open() ka correct code likho.
*/

/*
Q4 — Chapter 80

Explain in your own words:

monkeyWindow
    aur
"win1"

mein kya difference hai?

Hint:
Ek handle hai aur ek window name.
*/

/*
Q5 — Chapter 81

Aisa function banao:

checkForPopBlocker()

Jo:

1. Small popup open karne ki koshish kare.
2. Check kare ke testPop null hai ya nahi.
3. Agar null ho to alert show kare.
4. Agar popup open ho to usay close kare.

*/
