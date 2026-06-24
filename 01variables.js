const accountId = 121
let accountEmail = "srushtikriti@g.com"
var accountPassword = "123"
accountCity = "Bengaluru"

console.log(accountId);
  
accountEmail= "kriti,com"
accountPassword = "4345689"
accountCity = "pune"

/*
prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity])
