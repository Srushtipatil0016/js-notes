//scope  -- determine where is variable is accessible.
// types 
// 1) Global  scope ---  declare outsid eany function(accessible every where in code)
// 2)Function scope --- applies to variable declare with var.(this is classic source of var bug)
// 3) Block scope------applies to "let" and "const ".  (block scope exist only in {})


 //nested sope ------child can acess parent
 

 function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
 
 // console.log(website);

     two()
}
// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}