// ==========================================================
// CHAPTER 61
// The DOM: Junk Artifacts and NodeType
// ==========================================================

// ==========================================================
// 1. CHAPTER INTRODUCTION
// ==========================================================
//
// DOM mein HTML page ke elements ko nodes ki form mein
// represent kiya jata hai.
//
// Example:
//
// <div>
//   <p>Hello</p>
// </div>
//
// Yahan:
// - div ek Element Node hai.
// - p bhi ek Element Node hai.
// - HTML ke darmiyan whitespace aur line breaks bhi
//   Text Nodes ban sakte hain.
//
// Isi wajah se childNodes use karte waqt humein
// "junk artifacts" mil sakte hain.
//
// ==========================================================

// ==========================================================
// 2. childNodes
// ==========================================================
//
// childNodes kisi element ke tamam child nodes return karta hai.
//
// Is mein:
// - Element Nodes
// - Text Nodes
//
// dono aa sakte hain.
//
// Example HTML:
//
// <div id="box">
//   <p>Hello</p>
// </div>
//
// Agar hum:
//
// var box = document.getElementById("box");
// var nodes = box.childNodes;
//
// karein, to nodes mein element ke sath whitespace/newline
// ke Text Nodes bhi aa sakte hain.
//
// ==========================================================

var box = document.getElementById("box");

var nodes = box.childNodes;

console.log(nodes);

// ==========================================================
// 3. children vs childNodes
// ==========================================================
//
// children:
// Sirf HTML Element Nodes return karta hai.
//
// childNodes:
// Tamam child nodes return karta hai, including Text Nodes.
//
// Example:
//
// var box = document.getElementById("box");
//
// console.log(box.children);
// console.log(box.childNodes);
//
// children zyada clean collection deta hai jab humein
// sirf HTML elements chahiye.
//
// childNodes tab useful hai jab humein actual nodes
// ke sath kaam karna ho.
//
// ==========================================================

// ==========================================================
// 4. nodeType
// ==========================================================
//
// nodeType property batati hai ke koi node kis type ka hai.
//
// Sabse important values:
//
// 1 → Element Node
// 3 → Text Node
//
// Example:
//
// var node = box.childNodes[0];
//
// console.log(node.nodeType);
//
// Agar node Element hai to result 1 hoga.
// Agar node Text hai to result 3 hoga.
//
// ==========================================================

// ==========================================================
// 5. Element Node Check Karna
// ==========================================================
//
// Agar humein check karna ho ke node Element Node hai,
// to nodeType === 1 use karte hain.
//
// IMPORTANT:
//
// node.nodeType
//
// use karna hai.
//
// Sirf:
//
// node === 1
//
// galat hai, kyun ke node khud node hai aur 1 uska
// nodeType value hai.
//
// ==========================================================

for (var i = 0; i < nodes.length; i++) {
  if (nodes[i].nodeType === 1) {
    console.log("Element Node");
  }
}

// ==========================================================
// 6. Text Node Check Karna
// ==========================================================
//
// Text Node ka nodeType 3 hota hai.
//
// ==========================================================

for (var i = 0; i < nodes.length; i++) {
  if (nodes[i].nodeType === 3) {
    console.log("Text Node");
  }
}

// ==========================================================
// 7. Element aur Text Dono Check Karna
// ==========================================================
//
// Hum ek hi loop mein dono node types check kar sakte hain.
//
// ==========================================================

for (var i = 0; i < nodes.length; i++) {
  if (nodes[i].nodeType === 1) {
    console.log("This is an Element Node");
  }

  if (nodes[i].nodeType === 3) {
    console.log("This is a Text Node");
  }
}

// ==========================================================
// 8. Practical Example
// ==========================================================
//
// HTML:
//
// <div id="container">
//   <p>Hello</p>
//   <p>JavaScript</p>
// </div>
//
// childNodes use karne par whitespace/newline ki wajah se
// Text Nodes bhi aa sakte hain.
//
// Hum nodeType ki madad se sirf Elements ko identify kar
// sakte hain.
//
// ==========================================================

var container = document.getElementById("container");

var childNodes = container.childNodes;

for (var i = 0; i < childNodes.length; i++) {
  if (childNodes[i].nodeType === 1) {
    console.log("Found an Element Node");
  }
}

// ==========================================================
// 9. Junk Artifacts
// ==========================================================
//
// "Junk artifacts" se murad woh unwanted Text Nodes hain jo
// HTML ke whitespace, spaces aur line breaks ki wajah se
// childNodes collection mein aa sakte hain.
//
// Example:
//
// <div id="box">
//
//   <p>Hello</p>
//
// </div>
//
// Yahan line breaks aur spaces bhi Text Nodes ke form mein
// appear ho sakte hain.
//
// Isi liye childNodes ke sath kaam karte waqt nodeType
// check karna useful hota hai.
//
// ==========================================================

// ==========================================================
// 10. IMPORTANT SUMMARY
// ==========================================================
//
// DOM
// → HTML document ka tree/structure.
//
// Node
// → DOM tree ka ek item.
//
// Element Node
// → HTML element.
// → nodeType = 1
//
// Text Node
// → Text, spaces aur line breaks.
// → nodeType = 3
//
// children
// → Sirf HTML Element Nodes.
//
// childNodes
// → All child nodes, including possible Text Nodes.
//
// nodeType
// → Node ka type identify karta hai.
//
// ==========================================================

// ==========================================================
// QUICK MEMORY TRICK
// ==========================================================
//
// children
// → Elements
//
// childNodes
// → Nodes
//
// nodeType
// → Node ka Type
//
// 1
// → Element
//
// 3
// → Text
//
// ==========================================================
