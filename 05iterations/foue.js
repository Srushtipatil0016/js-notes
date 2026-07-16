//A for-each loop lets you loop through elements of an array (or other iterable) without manually managing an index. 
//In JavaScript it's the forEach() method (and also for...of).


// in ForEach loop for each takess a callback function .
// and call it for every elemnnt internally



//  mycoding.forEach( function (){
//      console.log(val);
//  } )  






const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]




myCoding.forEach( (item) => {  // item is here name of obj 
    
    console.log(item.languageName);
} )
