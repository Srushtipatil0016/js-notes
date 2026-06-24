let score = "333"

//console.log(typeof score);

let valueInNumber = Number(score);   // string =>  number

//console.log(typeof valueInNumber);//num N capital ... string S
//console.log(valueInNumber);
 

//"33" => 33
//"33abc"=> NaN  (not an number ) but type of nan is number
// true => 1; false => 0


let isLoggedIn = "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);


//1 => true ; 
//0 => false;

//"" => false
//"hitesh "=> true
 
let someNumber = 33    //here no is converted into string

//let stringNumber4 = stringNumber(someNumber)   // n
//console.log(stringNumber);  

//console.log(typeof stringNumber);




//**************Operations******************

let value = 3
let negValue = -value 
//console.log(negValue);
//console.log(2*2)
//console.log(2**3)
//console.log(2/3)
//console.log(2%3)


let str1 = "hello"
let str2 = "  Hitesh"

let str3 = str1 + str2  // str only can add (not sub)
console.log(str3);

//console.log("1" + 2);  // o/p  == 12            // dont write complex code
//console.log(1 + "2");   // o/p == 12
// console.log("1" + 2 + 2);// o/p == 122
// console.log(1 + 2 + "2");  // o/p == 32

// console.log( (3 + 4) * 5 % 3);             //write code readable like this

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);