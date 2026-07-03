function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName       //----this is refrence 

sayMyName()   // - exection


//function addTwoNumbers(number1, number2){   // when we define function , then the input we take ---parameters
 //   console.log(number1  + number2);          -- 
// }

//const result =  addTwoNumbers(3,4) //--- when we call a function then ---arguments
//console.log("Result :", result);   // here result is undefined   and o/p is 8



// 2 nd wat to write the function

function addTwoNumbers(number1, number2){   
    let result =  number1  + number2
    return result

}


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))




//  .... is rest operator   or seprate  operator ====depend on use

// function calculatorCartPrice(num1){   // o/p is 200
//     return num1
// }
// console.log(calculatorCartPrice(200,400))



// function calculatorCartPrice(...num1){   // o/p is[] 200,400]
//     return num1
// }
// console.log(calculatorCartPrice(200,400))


function calculatorCartPrice(val1, val2, ...num1){   // o/p is  [2000, 3444]
    return num1
}
console.log(calculatorCartPrice(200,400, 2000, 3444))




function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
