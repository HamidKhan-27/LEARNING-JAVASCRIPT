/*

// ============================================================
// A SMARTER WAY TO LEARN JAVASCRIPT
// CHAPTERS 43–44
// ============================================================

Chapters 76–78
Topic: Browser Control

===========================================================
CHAPTER 76
Browser control: Getting and setting the URL
============================================

CONCEPT:
JavaScript se hum browser ki current URL ko read kar
sakte hain aur browser ko kisi new URL par navigate
kar sakte hain.

---

1. GETTING THE COMPLETE CURRENT URL

---

*/

var whereWeAt = window.location.href;

console.log(whereWeAt);

/*
window.location.href
→ Complete current URL deta hai.

Example:
http://www.example.com/products/page33.html#section

---

2. GETTING THE DOMAIN

---

*/

var theDomain = window.location.hostname;

console.log(theDomain);

/*
hostname
→ Sirf domain name deta hai.

Example:
[www.example.com](http://www.example.com)

---

3. GETTING THE PATH

---

*/

var thePath = window.location.pathname;

console.log(thePath);

/*
pathname
→ URL ka path deta hai.

Example:
/products/page33.html

---

4. GETTING THE ANCHOR

---

*/

var theAnchor = window.location.hash;

console.log(theAnchor);

/*
hash
→ URL ke # ke baad wala part deta hai.

Example:
#section

---

5. CHANGING THE URL

---

*/

window.location.href = "http://www.me.com";

/*
Ye browser ko new URL par navigate karta hai.

Detailed URL bhi set kar sakte hain:
*/

// window.location.href = "http://www.me.com/1.html#section9";

/*
`window` ko omit bhi kar sakte hain:

location.href
location.hostname
location.pathname
location.hash

Current URL ke liye document.URL bhi use ho sakta hai.

===========================================================
CHAPTER 77
Browser control: Getting and setting the URL another way
========================================================

CONCEPT:
Chapter 76 mein URL change karne ke liye
window.location.href use kiya.

Chapter 77 mein URL change karne ke alternative methods
seekhte hain: assign() aur replace().

---

1. location.assign()

---

*/

window.location.assign("http://www.me.com");

/*
assign()
→ New URL par navigate karta hai.
→ Previous page browser history mein rehti hai.

Isliye user Back button se previous page par
wapas ja sakta hai.

---

2. location.replace()

---

*/

window.location.replace("http://www.me.com");

/*
replace()
→ New URL par navigate karta hai.
→ Previous page ko browser history se replace kar deta hai.

Simple difference:

assign()
→ New page + old page history mein

replace()
→ New page + old page history mein nahi

---

3. RELOAD CURRENT PAGE

---

*/

window.location.reload();

/*
Current page reload hota hai.

Book mein ye forms bhi diye gaye hain:

window.location.reload(true);
window.location.reload(false);

true
→ Page ko server se load karne ke liye force karta hai.

false / no argument
→ Cached version use ho sakta hai.

===========================================================
CHAPTER 78
Browser control: Forward and reverse
====================================

CONCEPT:
JavaScript se browser ki history mein backward aur
forward move kar sakte hain.

---

1. GO BACK

---

*/

history.back();

/*
Previous URL par jata hai.

Ye browser ke Back button jaisa hai.

---

2. GO FORWARD

---

*/

history.forward();

/*
Next URL par jata hai.

Ye browser ke Forward button jaisa hai.

---

3. history.go()

---

Negative number
→ Backward

Positive number
→ Forward
*/

history.go(-3); // 3 steps backward

history.go(2); // 2 steps forward

/*
One step backward:
*/

history.go(-1);

/*
Same as:
*/

history.back();

/*
One step forward:
*/

history.go(1);

/*
Same as:
*/

history.forward();
/*

4. document.referrer

---

Agar user kisi link ko click karke current page par aya
hai, document.referrer previous page ka URL de sakta hai.
*/

var whereUserCameFrom = document.referrer;

console.log(whereUserCameFrom);

/*
Agar user bookmark se ya address bar mein URL type karke
page par aya ho, referrer empty string ho sakta hai.

===========================================================
QUICK REVISION
==============

## CHAPTER 76

window.location.href
→ Complete current URL

window.location.hostname
→ Domain

window.location.pathname
→ Path

window.location.hash
→ Anchor

window.location.href = "URL"
→ Browser ko new URL par bhejna

## CHAPTER 77

window.location.assign("URL")
→ New URL + history maintained

window.location.replace("URL")
→ New URL + previous page history se replace

window.location.reload()
→ Current page reload

## CHAPTER 78

history.back()
→ 1 step backward

history.forward()
→ 1 step forward

history.go(-2)
→ 2 steps backward

history.go(2)
→ 2 steps forward

document.referrer
→ Referring page ka URL

===========================================================
IMPORTANT DIFFERENCES
=====================

href
→ URL read/set

assign()
→ URL change + history remains

replace()
→ URL change + old page history se replace

back()
→ Backward

forward()
→ Forward

go(-number)
→ Backward

go(+number)
→ Forward

===========================================================
PRACTICE QUESTIONS
==================

Q1:
Current complete URL ko variable mein store karo.

Q2:
Browser ko Google par navigate karne ka code likho.

Q3:
Sirf domain name get karne ka code likho.

Q4:
1 step backward jane ke do different methods likho.

Q5:
assign() aur replace() mein main difference explain karo.

Q6:
2 steps forward jane ka code likho.

===========================================================
END — CHAPTERS 76–78
====================

*/
