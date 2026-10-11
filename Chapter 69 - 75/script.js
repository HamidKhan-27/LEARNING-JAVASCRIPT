/*
============================================================
A Smarter Way to Learn JavaScript
Chapters 69–75: OBJECTS
============================================================

Topics Covered:
69 - Objects: Creating Objects & Accessing Properties
70 - Changing & Adding Object Properties
71 - Object Methods
72 - this Keyword
73 - Methods with Parameters
74 - Constructor Functions & new
75 - Constructor Methods

============================================================
OBJECTS — COMPLETE STUDY NOTES
============================================================
*/

// ==========================================================
// CHAPTER 69 — OBJECTS
// ==========================================================

/*
An object is used to store related information together.

Object:
- contains properties
- each property has a name and a value

Basic syntax:

var objectName = {
    property: value,
    property: value
};
*/

var student = {
  name: "Hamid",
  age: 18,
  city: "Karachi",
};

/*
Here:

student  -> object
name     -> property
"Hamid"  -> value
age      -> property
18       -> value
city     -> property
"Karachi"-> value
*/

// ---------- Accessing Properties ----------

// Dot notation
console.log(student.name);
console.log(student.age);
console.log(student.city);

// Bracket notation
console.log(student["name"]);
console.log(student["age"]);
console.log(student["city"]);

/*
IMPORTANT:

Array:
students[0]

Object:
student.name
student["name"]

Arrays normally use indexes.
Objects use named properties.
*/

// Object can store different types of values

var user = {
  name: "Hamid",
  age: 18,
  isStudent: true,
};

console.log(user.name);
console.log(user.age);
console.log(user.isStudent);

/*
MEMORY:

OBJECT
   ↓
PROPERTIES
   ↓
VALUES
*/

// ==========================================================
// CHAPTER 70 — CHANGING & ADDING PROPERTIES
// ==========================================================

/*
An existing property can be changed by assigning a new value.
*/

var student70 = {
  name: "Hamid",
  age: 18,
};

student70.age = 19;

console.log(student70.age); // 19

// Bracket notation can also change a property

student70["age"] = 20;

console.log(student70.age); // 20

/*
Adding a new property:

If the property does not already exist,
assigning a value creates it.
*/

student70.city = "Karachi";

console.log(student70.city); // Karachi

// Another example

var car = {
  brand: "Toyota",
  color: "Black",
};

// Change existing property
car.color = "White";

// Add new property
car.model = "Corolla";

console.log(car.color);
console.log(car.model);

/*
IMPORTANT:

Existing property
→ value changes

Non-existing property
→ new property is added
*/

// ==========================================================
// CHAPTER 71 — OBJECT METHODS
// ==========================================================

/*
A function stored inside an object is called a METHOD.

Property:
    stores information

Method:
    performs an action
*/

var student71 = {
  name: "Hamid",

  sayHello: function () {
    console.log("Hello!");
  },
};

// Calling the method

student71.sayHello();

/*
Basic pattern:

objectName.methodName();
*/

// Object with properties and methods

var car71 = {
  color: "Black",

  start: function () {
    console.log("Car started");
  },
};

console.log(car71.color);

car71.start();

/*
Difference:

color
→ property
→ stores data

start()
→ method
→ performs an action
*/

// Method can use an object's property

var studentInfo = {
  name: "Hamid",

  introduce: function () {
    console.log("My name is " + studentInfo.name);
  },
};

studentInfo.introduce();

// Multiple methods

var calculator = {
  add: function () {
    console.log(10 + 5);
  },

  subtract: function () {
    console.log(10 - 5);
  },
};

calculator.add();
calculator.subtract();

// ==========================================================
// CHAPTER 72 — this KEYWORD
// ==========================================================

/*
Inside an object method, "this" refers to
the current object.

Easy rule:

this = current object
*/

var student72 = {
  name: "Hamid",

  sayName: function () {
    console.log(this.name);
  },
};

student72.sayName();

/*
this.name means:

"current object's name property"

In this example:

this.name
is referring to
student72.name
*/

// More properties with this

var studentInfo72 = {
  name: "Hamid",
  age: 18,

  showInfo: function () {
    console.log(this.name);
    console.log(this.age);
  },
};

studentInfo72.showInfo();

// Another example

var car72 = {
  brand: "Toyota",
  color: "Black",

  showInfo: function () {
    console.log(this.brand);
    console.log(this.color);
  },
};

car72.showInfo();

/*
MEMORY:

OBJECT
   ↓
METHOD
   ↓
this
   ↓
CURRENT OBJECT
*/

// ==========================================================
// CHAPTER 73 — METHODS WITH PARAMETERS
// ==========================================================

/*
Object methods can also have parameters,
just like normal functions.
*/

var student73 = {
  greet: function (name) {
    console.log("Hello " + name);
  },
};

student73.greet("Hamid");

/*
name
→ parameter

"Hamid"
→ argument
*/

// Multiple parameters

var calculator73 = {
  add: function (a, b) {
    console.log(a + b);
  },
};

calculator73.add(10, 5);

/*
a, b
→ parameters

10, 5
→ arguments
*/

// this + parameter together

var studentGreeting = {
  name: "Hamid",

  greet: function (friendName) {
    console.log(this.name + " says hello to " + friendName);
  },
};

studentGreeting.greet("Ali");

/*
Here:

this.name
→ current object's property

friendName
→ method parameter

"Ali"
→ argument
*/

// ==========================================================
// CHAPTER 74 — CONSTRUCTOR FUNCTIONS & new
// ==========================================================

/*
If we need many similar objects,
writing every object separately becomes repetitive.

Constructor functions allow us to create
multiple similar objects from one template.
*/

function Student(name, age) {
  this.name = name;
  this.age = age;
}

/*
Student
→ constructor function

this.name
→ new object's name property

this.age
→ new object's age property
*/

// Creating objects using new

var student1 = new Student("Hamid", 18);
var student2 = new Student("Ali", 19);

console.log(student1.name);
console.log(student1.age);

console.log(student2.name);
console.log(student2.age);

/*
new
→ creates a new object using the constructor
*/

// Another constructor example

function Car(brand, color) {
  this.brand = brand;
  this.color = color;
}

var car1 = new Car("Toyota", "Black");
var car2 = new Car("Honda", "White");

console.log(car1.brand);
console.log(car2.brand);

/*
MEMORY:

Constructor → Blueprint / Template
new         → Create new object
this        → New object's properties
*/

// ==========================================================
// CHAPTER 75 — CONSTRUCTOR METHODS
// ==========================================================

/*
A constructor can also create methods
for the objects it creates.
*/

function StudentWithMethod(name, age) {
  this.name = name;
  this.age = age;

  this.introduce = function () {
    console.log("My name is " + this.name);
  };
}

var student75 = new StudentWithMethod("Hamid", 18);

student75.introduce();

/*
The constructor creates:

name       → property
age        → property
introduce  → method
*/

// Multiple objects with the same constructor

var studentA = new StudentWithMethod("Hamid", 18);
var studentB = new StudentWithMethod("Ali", 19);

studentA.introduce();
studentB.introduce();

/*
Output:

My name is Hamid
My name is Ali

Same method.
Different object.
Different this.name.
*/

// Another constructor with a method

function CarWithMethod(brand, color) {
  this.brand = brand;
  this.color = color;

  this.showInfo = function () {
    console.log(this.brand + " - " + this.color);
  };
}

var car75 = new CarWithMethod("Toyota", "Black");

car75.showInfo();

/*
============================================================
OBJECTS — COMPLETE CONNECTION
============================================================

Object
   ↓
Properties
   ↓
Methods
   ↓
this
   ↓
Parameters
   ↓
Constructor
   ↓
new
   ↓
Multiple Objects
   ↓
Constructor Methods


============================================================
IMPORTANT DIFFERENCES
============================================================

PROPERTY:
Stores information.

Example:
    name: "Hamid"


METHOD:
Performs an action.

Example:
    sayHello: function() { ... }


PARAMETER:
Variable written when defining a function/method.

Example:
    function(name) { ... }


ARGUMENT:
Actual value passed when calling it.

Example:
    greet("Hamid");


CONSTRUCTOR:
Function used as a template for creating objects.

Example:
    function Student(name, age) { ... }


new:
Creates a new object from a constructor.

Example:
    new Student("Hamid", 18)


this:
Refers to the current object.

Example:
    this.name


============================================================
COMMON MISTAKES
============================================================
*/

// WRONG:
// student.sayHello;

// Correct method call:
student71.sayHello();

// WRONG:
// student.age == 19;

// Correct assignment:
student70.age = 19;

// Correct:
student70.city = "Karachi";

// Correct constructor object creation:
var studentCorrect = new Student("Hamid", 18);

/*
============================================================
PRACTICE QUESTIONS
============================================================

1. Create an object called "book" with:
   - title
   - author
   - pages

2. Access the title using dot notation.

3. Access the author using bracket notation.

4. Change the number of pages.

5. Add a new property called "price".

6. Create an object called "person" with:
   - name
   - age
   - a method called greet()

7. Make greet() print:
   "Hello!"

8. Create a constructor called "Car" with:
   - brand
   - color

9. Create two cars using new.

10. Add a method called showInfo() to the constructor
    that prints the brand and color.

============================================================
FINAL REVISION
============================================================

Object:
    var student = {};

Property:
    student.name

Change property:
    student.age = 19;

Add property:
    student.city = "Karachi";

Method:
    student.sayHello();

this:
    this.name

Method parameter:
    greet: function(name) { }

Constructor:
    function Student(name) {
        this.name = name;
    }

Create object:
    new Student("Hamid");

Constructor method:
    this.introduce = function() {
        console.log(this.name);
    };


============================================================
OBJECTS TOPIC COMPLETE
Chapters 69–75
============================================================
*/
