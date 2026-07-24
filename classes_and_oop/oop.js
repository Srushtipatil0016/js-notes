// const userss = {
//     username: 'hitesh',
//     loginCount:8,
//     signedIn : true,

//     getUserDetails: function(){
//         console.log("got user details from database")

//     }


// }
// console.log(userss.username);
// console.log(userss.getUserDetails());



// const promiseOne = new Promise()   // 'new'--constructor function (allow to make multiple instance from one object)
// const date  = new date()


function User(username, loginCount , isLoggedIn){
    this.username = username;                   // '.this '  ---is object , insert values 
    this.loginCount =loginCount;
    this.isLoggedIn = isLoggedIn;                // this.username == is variable

    return this
}

// const userOne = User("hitesh ",8, true)
// const userTwo = User("chai aur code" , 6 , true)   // hre a values are overrinde
// console.log(userOne);


const userOne = new User("hitesh ",8, true)
const userTwo =  new User("chai aur code" , 6 , true)   // hre a values are overrinde
console.log(userOne.constructor);


