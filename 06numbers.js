const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

const otherNumber = 123.098

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
(hundreds.toLocaleString('en-IN'));

//*********  Maths****************************************


// console.log(Math);         ==== hre it has lots functions
// console.log(Math.abs(-4));  --it give you -ve to + ve ,   not vice versa , +ve to +ve
// console.log(Math.round(4.6));------o/p is 5   ---   round of of 4.6
// console.log(Math.ceil(4.2));-------like top ki value   ex-- 4 
// console.log(Math.floor(4.9));-------- less value
// console.log(Math.min(4, 3, 6, 8));-------find the min value iin array
// console.log(Math.max(4, 3, 6, 8));-------here max value

console.log(Math.random()); //  value always range 0 and 1
console.log((Math.random()*10) + 1);  
console.log(Math.floor(Math.random()*10) + 1);

//imp syntax  formula 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
