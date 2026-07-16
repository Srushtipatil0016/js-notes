//.reduce() is the big one — often called the "Swiss army knife" of array methods
// because you can technically rebuild map, filter, and more using just reduce


const myNumbers = [1,2,3]
// const myTotal = myNumbers.reduce(function (acc,currval){
// console.log(`acc : {acc} and currval : ${currval}` );
// return acc  + currval
// } , 0)         // here 0  = accumulator  value

// in arrow function form 

const myTotal   = myNumbers.reduce((acc, curr) => acc + curr, 0)
console.log(myTotal);

