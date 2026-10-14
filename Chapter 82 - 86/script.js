/*
==========================================================
A Smarter Way to Learn JavaScript
Chapters 82–86
FORM VALIDATION
==========================================================

82 - Form validation: text fields
83 - Form validation: drop-downs
84 - Form validation: radio buttons
85 - Form validation: ZIP codes
86 - Form validation: email

Main Goal:
User form submit kare to JavaScript check kare ke
required information properly enter/select hui hai ya nahi.

Important:
return false  -> form submission cancel
return true   -> validation successful
==========================================================
*/

// ========================================================
// CHAPTER 82
// FORM VALIDATION: TEXT FIELDS
// ========================================================

/*
Concept:

Agar user ne text field empty chhor di ho to
form submit nahi hona chahiye.

HTML side par:

<form onSubmit="return checkForLastName();">
    <input type="text" id="lastNameField">
    <input type="submit" value="Submit Form">
</form>

JavaScript function field ki value check karega.
*/

function checkForLastName() {
  var targetField = document.getElementById("lastNameField");

  // value.length === 0 means field empty hai
  if (targetField.value.length === 0) {
    alert("Please enter your last name");

    // Cursor ko isi field mein wapas le aao
    targetField.focus();

    // Form submission cancel
    return false;
  }

  // Agar field empty nahi hai to background white
  targetField.style.background = "white";
}

// --------------------------------------------------------
// CHAPTER 82 - IMPORTANT POINTS
// --------------------------------------------------------

/*
document.getElementById("lastNameField")
    -> HTML element ko target karta hai.

.value
    -> input ke andar entered value deta hai.

.value.length
    -> entered value ke characters ki quantity deta hai.

.value.length === 0
    -> field empty hai.

.focus()
    -> cursor ko field mein le aata hai.

return false
    -> form submit hone se rokta hai.

IMPORTANT:
Calling HTML mein bhi return hona chahiye:

<form onSubmit="return checkForLastName();">

Sirf function ke andar return false likhne se
form submission automatically cancel nahi hoti.
*/

// ========================================================
// CHAPTER 83
// FORM VALIDATION: DROP-DOWNS
// ========================================================

/*
Concept:

Dropdown mein user ko koi option select karna zaroori ho.

Example HTML:

<form onSubmit="return checkForSelection();">

<select id="states">
    <option value="" selected="selected">
        SELECT A STATE
    </option>

    <option value="AL">Alabama</option>
    <option value="AK">Alaska</option>
    <option value="AZ">Arizona</option>
    <option value="AR">Arkansas</option>
</select>

<input type="submit" value="Submit Form">

</form>
*/

function checkForSelection() {
  var target = document.getElementById("states");

  /*
    selectedIndex:

    0 -> first option selected
         yani SELECT A STATE

    1 -> Alabama
    2 -> Alaska
    3 -> Arizona
    4 -> Arkansas
    */

  if (target.selectedIndex === 0) {
    alert("Please select a state.");

    return false;
  }
}

// --------------------------------------------------------
// CHAPTER 83 - REUSABLE FUNCTION
// --------------------------------------------------------

/*
Book mein function ko reusable banaya gaya:

Function ko dropdown ki ID parameter ke through milti hai.
*/

function checkForSelectionReusable(selecID) {
  var target = document.getElementById(selecID);

  if (target.selectedIndex === 0) {
    alert("Please select a state.");

    return false;
  }
}

/*
Calling:

<form onSubmit="return checkForSelectionReusable('states');">

Ab isi function ko different dropdowns ke liye bhi use
kiya ja sakta hai.
*/

// ========================================================
// CHAPTER 83 - IMPORTANT POINTS
// ========================================================

/*
selectedIndex
    -> selected option ka index deta hai.

selectedIndex === 0
    -> user ne actual option select nahi kiya.

return false
    -> form submission cancel.

Parameter:

function checkForSelectionReusable(selecID)

    -> function ko element ki ID bahar se mil rahi hai.

Example:

checkForSelectionReusable("states");

*/

// ========================================================
// CHAPTER 84
// FORM VALIDATION: RADIO BUTTONS
// ========================================================

/*
Concept:

Radio buttons ke group mein user ko kam az kam
ek option select karna zaroori ho.

Example:

<input type="radio" name="r1" value="cat"> Cat
<input type="radio" name="r1" value="bat"> Bat
<input type="radio" name="r1" value="hat"> Hat

IMPORTANT:

Radio buttons ka SAME name hona chahiye agar
woh ek group ka part hain.
*/

function validateRadios() {
  // Same name wale saare radio buttons milenge
  var radios = document.getElementsByName("r1");

  // Har radio button check karo
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      // Ek option selected mil gaya
      return true;
    }
  }

  // Koi bhi radio selected nahi
  alert("Please check one.");

  return false;
}

// --------------------------------------------------------
// CHAPTER 84 - REUSABLE VERSION
// --------------------------------------------------------

function validateRadioGroup(groupName) {
  var radios = document.getElementsByName(groupName);

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return true;
    }
  }

  alert("Please check one.");

  return false;
}

/*
Example:

<form onSubmit="return validateRadioGroup('animals');">

<input type="radio" name="animals" value="cat">
Cat

<input type="radio" name="animals" value="dog">
Dog

<input type="radio" name="animals" value="bird">
Bird

<input type="submit" value="Submit">

</form>
*/

// ========================================================
// CHAPTER 84 - IMPORTANT POINTS
// ========================================================

/*
document.getElementsByName()
    -> same name wale multiple elements ki collection deta hai.

radios.length
    -> total radio buttons.

radios[i]
    -> current radio button.

radios[i].checked
    -> check karta hai ke current radio selected hai ya nahi.

for loop
    -> saare radio buttons one-by-one check karta hai.

Agar koi checked mil jaye:

return true;

Agar koi checked na mile:

alert(...)
return false;
*/

// ========================================================
// CHAPTER 85
// FORM VALIDATION: ZIP CODES
// ========================================================

/*
Concept:

User se 5-digit ZIP code lena hai.

maxlength="5"
    -> user ko 5 se zyada characters enter karne se rokta hai.

Lekin maxlength ye check nahi karta ke user ne
5 characters enter kiye hain ya nahi.

Isliye JavaScript validation required hai.
*/

function validateZIP() {
  var numChars = document.getElementById("zip").value.length;

  if (numChars < 5) {
    alert("Please enter a 5-digit code.");

    return false;
  }
}

// ========================================================
// CHAPTER 85 - ZIP MUST CONTAIN ONLY NUMBERS
// ========================================================

function validateZIPNumbers() {
  // Actual user input
  var valueEntered = document.getElementById("zip").value;

  // Input ki length
  var numChars = valueEntered.length;

  // Check 5 characters entered hain ya nahi
  if (numChars < 5) {
    alert("Please enter a 5-digit code.");

    return false;
  }

  // First 5 characters check
  for (var i = 0; i <= 4; i++) {
    /*
        valueEntered[i]
            -> current character

        parseInt()
            -> character ko number mein convert
        */

    var thisChar = parseInt(valueEntered[i]);

    /*
        isNaN()
            -> check karta hai conversion ke baad
               number bana ya nahi.
        */

    if (isNaN(thisChar)) {
      alert("Please enter only numbers.");

      return false;
    }
  }
}

// --------------------------------------------------------
// CHAPTER 85 - VERY IMPORTANT DIFFERENCE
// --------------------------------------------------------

/*
Suppose user enters:

"12345"

valueEntered
    = "12345"

numChars
    = 5


Correct:

valueEntered[i]

Wrong:

numChars[i]

Because numChars ek NUMBER hai.
valueEntered actual STRING hai.
*/

// ========================================================
// CHAPTER 85 - FULL FLOW
// ========================================================

/*
User enters:

12345
    ↓
length check
    ↓
5 characters?
    ↓
YES
    ↓
character 1 -> number?
character 2 -> number?
character 3 -> number?
character 4 -> number?
character 5 -> number?
    ↓
YES
    ↓
Form can submit


Example:

12A45

A ko parseInt karne ki attempt hogi.

parseInt("A")
    -> NaN

isNaN(NaN)
    -> true

Therefore:
alert + return false
*/

// ========================================================
// CHAPTER 86
// FORM VALIDATION: EMAIL
// ========================================================

/*
Book ke according email mein basic structure:

one or more characters
        ↓
       @
        ↓
one or more characters
        ↓
       .
        ↓
2 to 4 characters

Example:

hamid@gmail.com

hamid
  ↓
@
  ↓
gmail
  ↓
.
  ↓
com
*/

// ========================================================
// CHAPTER 86 - CHECK SPACES
// ========================================================

function validateEmail() {
  var eEntered = document.getElementById("email").value;

  if (eEntered.indexOf(" ") !== -1) {
    alert("No spaces allowed in address");

    return false;
  }
}

/*
indexOf():

Character mil jaye
    -> uska index return

Character na mile
    -> -1 return

Example:

"hamid khan".indexOf(" ")
    -> 5

"hamid@gmail.com".indexOf(" ")
    -> -1
*/

// ========================================================
// CHAPTER 86 - CHECK @
// ========================================================

function validateEmailAddress() {
  var addressIsLegal = true;

  var eEntered = document.getElementById("address").value;

  // Space check
  if (eEntered.indexOf(" ") !== -1) {
    addressIsLegal = false;
  }

  /*
    @ beginning par nahi hona chahiye.

    @ ke baad bhi required characters hone chahiye.
    */

  if (
    eEntered.indexOf("@") < 1 ||
    eEntered.indexOf("@") > eEntered.length - 5
  ) {
    addressIsLegal = false;
  }

  if (addressIsLegal === false) {
    alert("Please correct email address");

    return false;
  }
}

// ========================================================
// CHAPTER 86 - CHECK DOT
// ========================================================

function validateEmailComplete() {
  var addressIsLegal = true;

  var eEntered = document.getElementById("address").value;

  // ------------------------------------------
  // 1. Spaces
  // ------------------------------------------

  if (eEntered.indexOf(" ") !== -1) {
    addressIsLegal = false;
  }

  // ------------------------------------------
  // 2. @ position
  // ------------------------------------------

  if (
    eEntered.indexOf("@") < 1 ||
    eEntered.indexOf("@") > eEntered.length - 5
  ) {
    addressIsLegal = false;
  }

  // ------------------------------------------
  // 3. Dot position
  // ------------------------------------------

  if (
    eEntered.indexOf(".") - eEntered.indexOf("@") < 2 ||
    eEntered.indexOf(".") > eEntered.length - 3
  ) {
    addressIsLegal = false;
  }

  // ------------------------------------------
  // Final validation
  // ------------------------------------------

  if (addressIsLegal === false) {
    alert("Please correct email address");

    return false;
  }
}

// ========================================================
// CHAPTER 86 - addressIsLegal CONCEPT
// ========================================================

/*
Initially:

var addressIsLegal = true;

Hum assume karte hain email valid hai.

Agar koi problem milti hai:

addressIsLegal = false;

End par:

if (addressIsLegal === false) {
    alert(...);
    return false;
}

Yani:

TRUE
 ↓
Validation checks
 ↓
Problem?
 ↓
YES -> FALSE
 ↓
Alert + stop submission


Agar problem nahi mili:
TRUE hi rahega.
*/

// ========================================================
// CHAPTER 86 - REGULAR EXPRESSIONS
// ========================================================

/*
Book ke end mein regular expression ka small example
diya gaya hai.

Regular expressions email validation ke liye zyada
powerful aur concise method hain.

Lekin book ke according regular expressions
is book ke scope se bahar hain.

Isliye is pattern ko memorize karna required nahi:

var regex = /^[\w\-\.]+@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

IMPORTANT:
Abhi sirf concept samjho:

Regular Expression
    =
input ko ek predefined pattern ke saath match karna.


==========================================================
CHAPTER 82–86 QUICK REVISION
==========================================================

82 TEXT FIELD
----------------
value.length === 0
    -> field empty?


focus()
    -> cursor field mein


style.background
    -> field ko highlight


return false
    -> form submission cancel


83 DROP-DOWN
----------------
selectedIndex === 0
    -> first/default option selected
       yani actual selection nahi hui


84 RADIO BUTTON
----------------
getElementsByName()
    -> radio group collect


checked
    -> selected hai?


for loop
    -> har radio check


85 ZIP CODE
----------------
value.length
    -> number of characters


parseInt()
    -> character ko number mein convert


isNaN()
    -> check number bana ya nahi


86 EMAIL
----------------
indexOf(" ")
    -> spaces check


indexOf("@")
    -> @ ki position


indexOf(".")
    -> dot ki position


addressIsLegal
    -> validation flag


==========================================================
MOST IMPORTANT PATTERN
==========================================================

Form validation ka overall pattern:

function validateSomething() {

    // value/selection read karo

    // condition check karo

    if (problem) {

        alert("Error message");

        return false;
    }
}

HTML mein:

<form onSubmit="return validateSomething();">

IMPORTANT:
Function ke return false ko form tak pohanchane ke liye
calling code mein bhi return hona chahiye.
==========================================================
*/

// ========================================================
// PRACTICE QUESTIONS
// CHAPTERS 82–86
// ========================================================

/*
Q1 - TEXT FIELD
Aisa function banao jo "nameField" ko check kare.
Agar field empty ho:

1. alert show ho
2. cursor field mein aaye
3. form submit na ho


Q2 - DROP-DOWN
"cities" naam ke select element ke liye validation
function banao.

Agar selectedIndex === 0 ho:

alert("Please select a city.");

return false;


Q3 - RADIO BUTTONS
"gender" name wale radio buttons ko validate karo.

Agar koi radio checked nahi hai:

alert("Please select one.");

return false;


Q4 - ZIP CODE
"zipCode" input ke liye validation banao.

Requirements:

- minimum 5 characters
- first 5 characters numbers hon
- non-number mile to alert
- invalid hone par return false


Q5 - EMAIL
"email" input ko validate karo.

At minimum:

- spaces check karo
- @ ki position check karo
- dot ki position check karo
- invalid hone par alert
- return false

==========================================================
END OF CHAPTERS 82–86
==========================================================
*/
