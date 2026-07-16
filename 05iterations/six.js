// Map -- callback func
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNumbers.map((num) => num + 10)
console.log(newNums);


// chaining ----calling multiple methods / accessing multiple properties



const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);