// Immediately invoke function expression (IIFE)

//The main reason is to protect your variables from leaking into global scope.
//IIFE = define a function + call it immediately + keep its variables private

function sayHi() {
  console.log("hi");
}
sayHi(); // call it separately



//  IIFE just means: define the function and call it at the same time, immediately.

(function() {
  console.log("hi");
})();




(function() {   // 👈 wrap the function in ( ) to make it an expression
  console.log("hi");
})();           // 👈 these () at the end call it immediately  and ; to end the process



//**************Arrow function iife

(() => {
  console.log("arrow IIFE");
})();