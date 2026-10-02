// ============================================================
// A SMARTER WAY TO LEARN JAVASCRIPT
// CHAPTERS 41–42
// while LOOPS & do...while LOOPS
// ============================================================
//
// This file contains:
// - Chapter concepts
// - Detailed explanations in comments
// - Examples
// - Important differences
// - Practice questions
// - Practice solutions
// ============================================================


// ============================================================
// CHAPTER 41 — WHILE LOOPS
// ============================================================
//
// A while loop repeats a block of code as long as its condition
// is true.
//
// BASIC SYNTAX:
//
// while (condition) {
//     // code
// }
//
// IMPORTANT:
// The condition is checked BEFORE the code inside the loop runs.
//
// If the condition is false from the beginning, the while loop
// will not execute even once.
//
// A counter is normally:
// 1. Created before the loop.
// 2. Used in the condition.
// 3. Updated inside the loop.
// ============================================================


// ------------------------------------------------------------
// Example 1 — Basic while Loop
// ------------------------------------------------------------

var i = 1;

while (i <= 5) {

    console.log(i);

    i++;
}

// Output:
// 1
// 2
// 3
// 4
// 5
//
// How it works:
//
// i = 1
// 1 <= 5 → true → print 1
// i becomes 2
//
// 2 <= 5 → true → print 2
// i becomes 3
//
// This continues until i becomes 6.
//
// 6 <= 5 → false
// Loop stops.


// ------------------------------------------------------------
// Example 2 — Counting Backward
// ------------------------------------------------------------

var countDown = 10;

while (countDown >= 1) {

    console.log(countDown);

    countDown--;
}

// Output:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
//
// Here we use -- because we want the value to decrease.



// ------------------------------------------------------------
// Example 3 — Printing Even Numbers
// ------------------------------------------------------------

var evenNumber = 1;

while (evenNumber <= 10) {

    if (evenNumber % 2 === 0) {

        console.log(evenNumber);

    }

    evenNumber++;
}

// Output:
// 2
// 4
// 6
// 8
// 10
//
// % gives us the remainder.
//
// If:
//
// number % 2 === 0
//
// then the number is even.



// ------------------------------------------------------------
// Example 4 — Sum Using while Loop
// ------------------------------------------------------------

var number = 1;
var sum = 0;

while (number <= 5) {

    sum = sum + number;

    number++;
}

console.log(sum);

// Output:
// 15
//
// Calculation:
//
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15



// ------------------------------------------------------------
// Example 5 — Counting Even Numbers
// ------------------------------------------------------------

var currentNumber = 1;
var evenCount = 0;

while (currentNumber <= 10) {

    if (currentNumber % 2 === 0) {

        evenCount++;

    }

    currentNumber++;
}

console.log(evenCount);

// Output:
// 5
//
// Even numbers:
//
// 2, 4, 6, 8, 10
//
// Total = 5



// ============================================================
// CHAPTER 41 — IMPORTANT POINTS
// ============================================================
//
// 1. while repeats code while its condition is true.
//
// 2. The condition is checked BEFORE the loop body.
//
// 3. A while loop can execute zero times.
//
// 4. The counter must be updated so the loop can eventually
//    become false.
//
// 5. ++ increases a value by 1.
//
// 6. -- decreases a value by 1.
//
// 7. while loops can be used for:
//    - counting
//    - reverse counting
//    - calculating sums
//    - counting specific values
//    - checking conditions
// ============================================================



// ============================================================
// CHAPTER 42 — do...while LOOPS
// ============================================================
//
// A do...while loop is another type of loop.
//
// The important difference is:
//
// while:
// condition is checked FIRST.
//
// do...while:
// code is executed FIRST, then condition is checked.
//
// BASIC SYNTAX:
//
// do {
//     // code
// } while (condition);
//
// IMPORTANT:
// A do...while loop executes its body AT LEAST ONCE,
// even if its condition is false at the beginning.
// ============================================================


// ------------------------------------------------------------
// Example 1 — Basic do...while Loop
// ------------------------------------------------------------

var x = 1;

do {

    console.log(x);

    x++;

} while (x <= 5);

// Output:
// 1
// 2
// 3
// 4
// 5



// ------------------------------------------------------------
// Example 2 — Counting Backward
// ------------------------------------------------------------

var reverseNumber = 10;

do {

    console.log(reverseNumber);

    reverseNumber--;

} while (reverseNumber >= 1);

// Output:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1



// ------------------------------------------------------------
// Example 3 — Even Numbers
// ------------------------------------------------------------

var even = 2;

do {

    if (even % 2 === 0) {

        console.log(even);

    }

    even++;

} while (even <= 10);

// Output:
// 2
// 4
// 6
// 8
// 10



// ------------------------------------------------------------
// Example 4 — Sum Using do...while
// ------------------------------------------------------------

var n = 1;
var total = 0;

do {

    total = total + n;

    n++;

} while (n <= 5);

console.log(total);

// Output:
// 15



// ------------------------------------------------------------
// Example 5 — Condition False but Code Runs Once
// ------------------------------------------------------------
//
// This is the most important example of Chapter 42.
//
// Here the condition will eventually be false:
//
// 10 < 5 → false
//
// But the do block executes before the condition is checked.

var value = 10;

do {

    console.log(value);

    value++;

} while (value < 5);

// Output:
// 10
//
// Why?
//
// Step 1:
// The do block executes.
//
// Step 2:
// console.log(value) prints 10.
//
// Step 3:
// value++ changes value from 10 to 11.
//
// Step 4:
// Condition is checked:
//
// 11 < 5 → false
//
// Step 5:
// Loop stops.
//
// So even though the condition is false,
// the code inside do executes once.



// ============================================================
// WHILE vs do...while
// ============================================================
//
// WHILE:
//
// while (condition) {
//     // code
// }
//
// Execution order:
//
// condition
//     ↓
// code
//
// If condition is false initially:
// code does NOT execute.
//
//
// do...while:
//
// do {
//     // code
// } while (condition);
//
// Execution order:
//
// code
//     ↓
// condition
//
// If condition is false initially:
// code executes ONCE.
//
// IMPORTANT:
//
// do...while ends with a semicolon:
//
// } while (condition);
// ============================================================



// ============================================================
// SIDE-BY-SIDE EXAMPLE
// ============================================================


// -------------------------
// while
// -------------------------

var a = 10;

while (a < 5) {

    console.log(a);

    a++;
}

// Output:
// Nothing
//
// Because:
//
// 10 < 5 → false
//
// The condition is checked first.



// -------------------------
// do...while
// -------------------------

var b = 10;

do {

    console.log(b);

    b++;

} while (b < 5);

// Output:
// 10
//
// Because the code executes first,
// and the condition is checked afterwards.



// ============================================================
// CHAPTER 42 — IMPORTANT POINTS
// ============================================================
//
// 1. do...while executes the code before checking the condition.
//
// 2. A do...while loop executes at least once.
//
// 3. The while condition comes AFTER the do block.
//
// 4. A semicolon is required after the condition:
//
//       } while (condition);
//
// 5. while:
//
//       condition → code
//
// 6. do...while:
//
//       code → condition
//
// 7. Both loops can use:
//    - counters
//    - if statements
//    - ++
//    - --
//    - sums
//    - counting
// ============================================================



// ============================================================
// PRACTICE QUESTIONS — CHAPTER 41
// ============================================================
//
// These are the practice questions we solved during the lesson.
// ============================================================


// ------------------------------------------------------------
// Q1 — Print 10 to 1
// ------------------------------------------------------------

var q1 = 10;

while (q1 >= 1) {

    console.log(q1);

    q1--;
}


// ------------------------------------------------------------
// Q2 — Print Even Numbers 2 to 10
// ------------------------------------------------------------

var q2 = 1;

while (q2 <= 10) {

    if (q2 % 2 === 0) {

        console.log(q2);

    }

    q2++;
}


// ------------------------------------------------------------
// Q3 — Sum from 1 to 5
// ------------------------------------------------------------

var q3 = 1;
var q3Sum = 0;

while (q3 <= 5) {

    q3Sum = q3Sum + q3;

    q3++;
}

console.log(q3Sum);


// ------------------------------------------------------------
// Q4 — Count Even Numbers from 1 to 10
// ------------------------------------------------------------

var q4 = 1;
var q4Count = 0;

while (q4 <= 10) {

    if (q4 % 2 === 0) {

        q4Count++;

    }

    q4++;
}

console.log(q4Count);


// ------------------------------------------------------------
// Q5 — Sum from 10 to 1
// ------------------------------------------------------------

var q5 = 10;
var q5Sum = 0;

while (q5 >= 1) {

    q5Sum = q5Sum + q5;

    q5--;
}

console.log(q5Sum);


// ------------------------------------------------------------
// Q6 — Print Odd Numbers from 1 to 20
// ------------------------------------------------------------

var q6 = 1;

while (q6 <= 20) {

    if (q6 % 2 === 1) {

        console.log(q6);

    }

    q6++;
}


// ------------------------------------------------------------
// Q7 — Average from 1 to 10
// ------------------------------------------------------------

var q7 = 1;
var q7Sum = 0;

while (q7 <= 10) {

    q7Sum = q7Sum + q7;

    q7++;
}

var q7Average = q7Sum / 10;

console.log(q7Average);


// ------------------------------------------------------------
// Q8 — Sum of Multiples of 5 from 5 to 20
// ------------------------------------------------------------

var q8 = 5;
var q8Sum = 0;

while (q8 <= 20) {

    q8Sum = q8Sum + q8;

    q8 += 5;
}

console.log(q8Sum);


// ------------------------------------------------------------
// Q9 — Even Numbers from 20 to 2
// ------------------------------------------------------------

var q9 = 20;

while (q9 >= 2) {

    if (q9 % 2 === 0) {

        console.log(q9);

    }

    q9--;
}


// ------------------------------------------------------------
// Q10 — Count Multiples of 5 from 1 to 50
// ------------------------------------------------------------

var q10 = 5;
var q10Count = 0;

while (q10 <= 50) {

    q10Count++;

    q10 += 5;
}

console.log(q10Count);


// ------------------------------------------------------------
// Q11 — Sum of Odd Numbers from 1 to 10
// ------------------------------------------------------------

var q11 = 1;
var q11Sum = 0;

while (q11 <= 10) {

    if (q11 % 2 === 1) {

        q11Sum = q11Sum + q11;

    }

    q11++;
}

console.log(q11Sum);


// ------------------------------------------------------------
// Q12 — Count Numbers Divisible by 3 from 1 to 100
// ------------------------------------------------------------

var q12 = 1;
var q12Count = 0;

while (q12 <= 100) {

    if (q12 % 3 === 0) {

        q12Count++;

    }

    q12++;
}

console.log(q12Count);


// ------------------------------------------------------------
// Q13 — Calculate Sum
// ------------------------------------------------------------

var q13 = 1;
var q13Sum = 0;

while (q13 <= 5) {

    q13Sum = q13Sum + q13;

    q13++;
}

console.log(q13Sum);

// Answer:
// 15



// ============================================================
// PRACTICE QUESTIONS — CHAPTER 42
// ============================================================


// ------------------------------------------------------------
// Q1 — Print 1 to 5
// ------------------------------------------------------------

var c1 = 1;

do {

    console.log(c1);

    c1++;

} while (c1 <= 5);


// ------------------------------------------------------------
// Q2 — Print 10 to 1
// ------------------------------------------------------------

var c2 = 10;

do {

    console.log(c2);

    c2--;

} while (c2 >= 1);


// ------------------------------------------------------------
// Q3 — Print Even Numbers from 2 to 10
// ------------------------------------------------------------

var c3 = 2;

do {

    if (c3 % 2 === 0) {

        console.log(c3);

    }

    c3++;

} while (c3 <= 10);


// ------------------------------------------------------------
// Q4 — Predict the Output
// ------------------------------------------------------------

var c4 = 5;

do {

    console.log(c4);

    c4++;

} while (c4 < 5);

// Answer:
// 5



// ------------------------------------------------------------
// Q5 — Sum from 1 to 10
// ------------------------------------------------------------

var c5 = 1;
var c5Sum = 0;

do {

    c5Sum = c5Sum + c5;

    c5++;

} while (c5 <= 10);

console.log(c5Sum);

// Answer:
// 55



// ------------------------------------------------------------
// Q6 — Count Odd Numbers from 1 to 20
// ------------------------------------------------------------

var c6 = 1;
var c6Count = 0;

do {

    if (c6 % 2 === 1) {

        c6Count++;

    }

    c6++;

} while (c6 <= 20);

console.log(c6Count);

// Answer:
// 10



// ------------------------------------------------------------
// Q7 — Predict the Output
// ------------------------------------------------------------

var c7 = 1;

do {

    console.log(c7);

    c7 += 2;

} while (c7 <= 10);

// Answer:
// 1
// 3
// 5
// 7
// 9



// ------------------------------------------------------------
// Q8 — Convert while into do...while
// ------------------------------------------------------------

var c8 = 5;

do {

    console.log(c8);

    c8++;

} while (c8 <= 8);

// Output:
// 5
// 6
// 7
// 8



// ============================================================
// FINAL KEY TAKEAWAYS
// ============================================================
//
// while:
//     condition → code
//
// do...while:
//     code → condition
//
// while can execute zero times.
//
// do...while executes at least once.
//
// ============================================================
// END OF CHAPTERS 41–42
// ============================================================