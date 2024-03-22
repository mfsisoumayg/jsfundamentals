const arr = [5, 1, 3, 2, 6]

// double - [10, 2, 6, 4, 12]
// triple - [15, 3, 9, 6, 18]
// binary - ["101", "1", "11", "10", "110"]


// const double = (x) => x * 2
// const triple = (x) => x * 3
// const binary = (x) => x.toString(2)

// NOTE - iterate over each element and apply logic
// const oDouble = arr.map(double);
// console.log(oDouble)
// const oTriple = arr.map(triple);
// console.log(oTriple)
// const oBinary = arr.map(binary);
// console.log(oBinary)

// NOTE - iterate over each element and filter element based on the condition
// const oOdd = arr.filter((x) => x%2 == 1)
// console.log(oOdd)
// const oEven = arr.filter((x) => x%2 == 0)
// console.log(oEven)

//NOTE - iterate over each element and return only one object
// using for loop and required extra lines
function findSum() {
    let sum = 0
    for (let i = 0; i < arr.length; i++) 
        sum += arr[i]
    console.log(sum)
}
findSum()
// using reduce
const oSum = arr.reduce((acc, curr) => acc + curr, 0)
console.log(oSum)

// consider the array contains only positive integers
const oMax = arr.reduce((acc, curr) => acc > curr ? acc : curr, 0)
console.log(oMax)