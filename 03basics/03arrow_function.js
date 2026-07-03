// "this " refer to current context 
//In an arrow function, this doesn't have its own this at all. It just borrows this from wherever the arrow function was written (its outer/parent scope). This is called lexical this.

//In a regular function, this depends on how the function is called — it changes based on who calls it.

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

 }
 user.welcomeMessage()
 user.username = "sam"
 user.welcomeMessage()


console.log(this)

// node environment means = printing this in function 

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

//=> arrow func

// syntax of arrow function -- () => {}


const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// if u take {} --need to write return keyword

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// if u take () - no need to erite return word


// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(
