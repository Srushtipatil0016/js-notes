// datatyper classified on basic of storage and how it accessed from memory


// 1)  primitive   
 
// 7 types  == String , Number , Boolean , null , undefined , BigInt , symbol

const score = 100
const scoreValue = 100.3  //( here num is num )  -- no float 

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')       // symbol used  to give same data different value  
const anotherId = Symbol('123')

console.log(id === anotherId);   // o/p === false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {             // obj written inside {}
    name: "hitesh",
    age: 22,
}


// function(){}   ----  this is function defination
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);



// 2 types of memory 

// 1) stack memory  (use in primitive)  data copy use 



// 2) Heap memory (non primitive)  refrence of value