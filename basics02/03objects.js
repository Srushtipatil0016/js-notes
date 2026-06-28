// Objects
// can be declare by 2 ways  -----1)literals   2)constructor


//singleton ---form by constructors (not by literals)

// Object literals

const JsUser = {
    name:" hitesh" ,
    "full name" : "hitesh chaudhary",
    location :"pune",
    email : "hitesh@gmail.com",
    mySym : "key1",   //  -- wrong syntax for symbol to add i n key
    age : 18 , 
}

JsUser.email = "hiteshjgjhjkhb.com"//  to change email


//Object.freeze(JsUser)  //-- here oobj get freez    --- changes cannot possible now 




// to acess objects 

//console.log(JsUser.name); //----this is not that good way 

console.log(JsUser.email) // mostly use this way to acess values .email kind of
console.log(JsUser["emali"])  // here o/p is undefined becau  key is undefined
console.log(JsUser["full name"])
//console,log(JsUser.my Sym)   //-- wrong
console.log(typeof JsUser.sym)


// to decleare symbol,  and add in key ---cannot direct

const mySym =Symbol("key 1")  //---take a symbol

const user = {
    [mySym]: "key 1",          // symbol act as key 
}

console.log(user[mySym])



///
JsUser.greeting =function(){
    console.log("hello js user");
}
console.log(JsUser.greeting);  // method o define --- o/p is undefined

console.log(JsUser.greeting()); // its function --error occur --  becoz we freez jsuser above 
// after unfreez it it give o/p == [function(anonymous)]
