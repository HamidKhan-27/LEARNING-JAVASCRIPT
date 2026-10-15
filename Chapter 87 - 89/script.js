/*
===========================================================
A Smarter Way to Learn JavaScript
Chapters 87–89
===========================================================

Chapter 87: Exceptions: try and catch
Chapter 88: Exceptions: throw
Chapter 89: Handling events within JavaScript

===========================================================
*/

// =========================================================
// CHAPTER 87
// Exceptions: try and catch
// =========================================================

/*
WHAT IS AN EXCEPTION?

JavaScript code run karte waqt agar koi error aa jaye,
to normally JavaScript execution ko stop kar sakta hai.

try...catch ka use hum error ko handle karne ke liye
karte hain.

Basic structure:

try {
    // code that may cause an error
}
catch (err) {
    // error handle karne wala code
}
*/

// ---------------------------------------------------------
// 1. Basic try...catch
// ---------------------------------------------------------

try {
  alert(myVariable);
} catch (err) {
  alert("An error occurred.");
}

/*
Yahan:

try
    JavaScript ko kehta hai:
    "Is code ko execute karne ki try karo."

catch
    Agar try ke andar error aaye,
    to catch execute hoga.

err
    Error ki information receive karne wala variable hai.
*/

// ---------------------------------------------------------
// 2. Error information ko display karna
// ---------------------------------------------------------

try {
  alert(myVariable);
} catch (err) {
  alert(err);
}

/*
err ke andar JavaScript error ki information aa sakti hai.

Example:

ReferenceError:
myVariable is not defined

Important:
err sirf isi naam ka hona zaroori nahi.

Ye bhi valid hain:

catch (err)
catch (error)
catch (e)

Example:

try {
    alert(myVariable);
}
catch (error) {
    alert(error);
}
*/

// ---------------------------------------------------------
// 3. try aur catch hamesha pair mein
// ---------------------------------------------------------

/*
try ke saath catch hona chahiye.

try {
    // code
}

catch {
    // error handling
}

Dono mil kar error handling mechanism banate hain.
*/

// ---------------------------------------------------------
// 4. try...catch ki limitation
// ---------------------------------------------------------

/*
try...catch har type ki problem ko handle nahi karta.

Agar syntax hi galat ho:

try {
    alert("Hello"
}

to missing bracket/quote ki wajah se code properly
parse nahi hoga.

Book ke mutabiq try...catch mainly un errors ke liye
useful hai jo JavaScript runtime par encounter karta hai,
jaise undefined variable/reference type errors.
*/

// =========================================================
// CHAPTER 88
// Exceptions: throw
// =========================================================

/*
CHAPTER 87:
JavaScript khud error generate karta hai
aur catch us error ko handle karta hai.

CHAPTER 88:
Hum khud bhi error/value generate kar sakte hain.

Iske liye:

throw

use hota hai.
*/

// ---------------------------------------------------------
// 1. Basic throw
// ---------------------------------------------------------

try {
  throw "Something went wrong.";
} catch (err) {
  alert(err);
}

/*
Flow:

try
  ↓
throw
  ↓
custom error/value
  ↓
catch
  ↓
err
  ↓
alert(err)
*/

// ---------------------------------------------------------
// 2. throw ke saath custom message
// ---------------------------------------------------------

function checkPassword() {
  try {
    var password = "abc";

    if (password.length < 8) {
      throw "Please enter at least 8 characters.";
    }
  } catch (err) {
    alert(err);
  }
}

checkPassword();

/*
Yahan JavaScript ne khud error nahi banaya.

Humne khud decide kiya:

Agar password 8 characters se chhota hai,
to throw karo.

Is tarah user ke wrong input ko handle kiya ja sakta hai.
*/

// ---------------------------------------------------------
// 3. Password validation example
// ---------------------------------------------------------

function validatePassword() {
  try {
    var password = document.getElementById("password").value;

    // Password length
    if (password.length < 8) {
      throw "Please enter at least 8 characters.";
    }

    // Spaces check
    if (password.indexOf(" ") !== -1) {
      throw "No spaces in the password, please.";
    }

    // Number check
    var numberSomewhere = false;

    for (var i = 0; i < password.length; i++) {
      var thisChar = parseInt(password[i]);

      if (isNaN(thisChar) === false) {
        numberSomewhere = true;
        break;
      }
    }

    if (numberSomewhere === false) {
      throw "Include at least 1 number.";
    }
  } catch (err) {
    alert(err);
  }
}

/*
Yahan teen possible problems hain:

1. Password 8 characters se chhota
2. Password mein space hai
3. Password mein number nahi hai

Har situation mein different message throw hota hai.
*/

// ---------------------------------------------------------
// 4. throw sirf string ke liye nahi
// ---------------------------------------------------------

try {
  throw "Error message";
} catch (err) {
  console.log(err);
}

try {
  throw 404;
} catch (err) {
  console.log(err);
}

try {
  throw true;
} catch (err) {
  console.log(err);
}

/*
throw ke through different types ki values pass ki ja sakti hain:

String
Number
Boolean
Variable
etc.
*/

// ---------------------------------------------------------
// CHAPTER 87 + 88 ka main difference
// ---------------------------------------------------------

/*
CHAPTER 87:

try...catch
    JavaScript ke generated errors ko handle karna.

CHAPTER 88:

throw
    Hum khud custom error/value generate karte hain.

Example:

try {
    throw "Invalid password";
}
catch (err) {
    alert(err);
}

throw ne value bheji.
catch ne us value ko err mein receive kiya.
*/

// =========================================================
// CHAPTER 89
// Handling events within JavaScript
// =========================================================

/*
Ab tak hum inline event handling use kar rahe thay.

Example:

<input
    type="button"
    value="Click"
    onclick="sayHello();"
>

Ismein JavaScript directly HTML ke andar likhi hui hai.

Chapter 89 mein JavaScript aur HTML ko separate karte hain.
*/

// ---------------------------------------------------------
// 1. Inline approach
// ---------------------------------------------------------

/*
HTML:

<input
    type="button"
    value="Click"
    onclick="sayHello();"
>

Yahan:

onclick="sayHello();"

HTML ke andar JavaScript hai.
*/

// ---------------------------------------------------------
// 2. Scripting approach
// ---------------------------------------------------------

/*
HTML:

<input
    type="button"
    value="Click"
    id="button1"
>

JavaScript:

var b1 = document.getElementById("button1");

b1.onclick = sayHello;
*/

// ---------------------------------------------------------
// 3. Complete example
// ---------------------------------------------------------

function sayHello() {
  alert("Hello!");
}

var b1 = document.getElementById("button1");

b1.onclick = sayHello;

/*
Important:

onclick = sayHello

NOT:

onclick = sayHello()

NOT:

onclick = "sayHello()"
*/

// ---------------------------------------------------------
// 4. sayHello vs sayHello()
// ---------------------------------------------------------

function sayHello() {
  alert("Hello!");
}

// CALL NOW
sayHello();

/*
sayHello();

iska matlab:

"Function ko abhi execute karo."
*/

// EVENT PAR CALL
b1.onclick = sayHello;

/*
b1.onclick = sayHello;

iska matlab:

"Browser, jab button click ho,
tab sayHello function ko execute karna."

Yahan parentheses nahi hain kyun ke hum function ko
abhi call nahi kar rahe.

Hum function ka reference browser ko de rahe hain.
*/

// ---------------------------------------------------------
// 5. Why not sayHello()?
// ---------------------------------------------------------

/*
Wrong:

b1.onclick = sayHello();

sayHello() ka matlab hai function ko abhi execute karo.

Isliye page load hote hi function execute ho sakta hai.

Correct:

b1.onclick = sayHello;

Ismein browser ko function diya jata hai.

Browser click event hone par function ko call karta hai.
*/

// ---------------------------------------------------------
// 6. Easy flow
// ---------------------------------------------------------

/*

b1.onclick = sayHello;

PAGE LOAD
   ↓
Function execute nahi hota
   ↓
User button ko CLICK karta hai
   ↓
onclick event trigger hota hai
   ↓
Browser sayHello() execute karta hai
   ↓
Alert show hota hai

*/

// ---------------------------------------------------------
// 7. One-line version
// ---------------------------------------------------------

document.getElementById("button1").onclick = sayHello;

/*
Variable banane ki zaroorat nahi.

Directly element find karo
aur uska onclick set kar do.
*/

// ---------------------------------------------------------
// 8. Mouseover event
// ---------------------------------------------------------

function changeImage() {
  console.log("Mouse is over the image.");
}

var targetImg = document.getElementById("image1");

targetImg.onmouseover = changeImage;

/*
Mouse image ke upar jayega
→ onmouseover trigger
→ changeImage execute
*/

// ---------------------------------------------------------
// 9. Form submit event
// ---------------------------------------------------------

function validateForm() {
  console.log("Form submitted.");
}

var emailFrm = document.getElementById("form1");

emailFrm.onsubmit = validateForm;

/*
Form submit hone par:

onsubmit
   ↓
validateForm()
*/

// =========================================================
// IMPORTANT RULES OF CHAPTER 89
// =========================================================

/*
1. Event name lowercase hona chahiye:

Correct:
onclick
onfocus
onsubmit
onmouseover

Avoid:
onClick
onFocus
onSubmit
onMouseover


2. Scripting approach mein function name quotes ke
   andar nahi hota.

Correct:

button.onclick = sayHello;


Wrong:

button.onclick = "sayHello";


3. Function ke baad parentheses nahi lagte.

Correct:

button.onclick = sayHello;


Wrong:

button.onclick = sayHello();


4. Parentheses ka matlab function ko immediately call karna.

sayHello();

= abhi execute karo.


5. Function reference ka matlab browser ko function
   baad mein execute karne ke liye dena.

button.onclick = sayHello;

= click par execute karo.
*/

// =========================================================
// CHAPTER 87–89 QUICK REVISION
// =========================================================

/*

CHAPTER 87
-----------
try...catch

try {
    // risky code
}
catch (err) {
    // error handling
}


CHAPTER 88
-----------
throw

try {
    throw "Custom error";
}
catch (err) {
    alert(err);
}


CHAPTER 89
-----------
JavaScript mein event handling

HTML:

<button id="button1">Click</button>

JavaScript:

function sayHello() {
    alert("Hello");
}

document.getElementById("button1").onclick = sayHello;


MOST IMPORTANT:

sayHello();                 // CALL NOW

button.onclick = sayHello;  // CALL ON CLICK


===========================================================
PRACTICE QUESTIONS
===========================================================

Q1:
try aur catch ka basic purpose kya hai?

Q2:
catch(err) mein err kya represent karta hai?

Q3:
throw keyword ka purpose kya hai?

Q4:
In dono mein difference explain karo:

sayHello();

button.onclick = sayHello;

Q5:
Ye code page load hote hi function execute karega ya
button click par?

button.onclick = sayHello;

Reason bhi explain karo.

===========================================================
END
===========================================================
*/
