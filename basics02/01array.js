// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)  -----add  at end 
// myArr.push(7)
// myArr.pop() ------remove at end

// myArr.unshift(9)------add at front
// myArr.shift()  --------remove frome front

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  //   In slice only print given index no ----no change in origional arary
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  // in splice there is change in original array ---- remove given no from original array----

console.log("C ", myArr);
console.log(myn2);