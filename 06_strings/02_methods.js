let str = "I_am_learning_JavaScript"

// extract the element at nth index
console.log(str.charAt(0))

// ASCII code of the element at nth index
console.log(str.charCodeAt(0))

// to uppercase
str.toLowerCase() // cannot covert to lowercase itself -> assign the same variable
console.log(str.toLowerCase())

str.toUpperCase() // cannot covert to lowercase itself -> assign the same variable
console.log(str.toUpperCase())

// get index of any element (1st from 0th index)
console.log(str.indexOf("a"))

// get index of any element (last from 0th index or 1st index from last)
console.log(str.lastIndexOf("a"))

// get a part of string from i th index to j-1 th index
console.log(str.substring(2,4))
// i th index with lengh
console.log(str.substr(2,4))
// get a part of string from i th index to j-1 th index
console.log(str.slice(2,4))

// with negative numbers
console.log('substring(4,2):', str.substring(4,2))
console.log('slice(4,2):', str.slice(4,2))

console.log('substring(-4,2):',str.substring(-4,2))
console.log('substring(-4,-2)',str.substring(-4,-2))

console.log('slice(-4,2)',str.slice(-4,2))
console.log('slice(-4,-2)',str.slice(-4,-2))


// using Array
let arr1 = Array.from(str)
console.log(arr1)

// using ... spread operator
let arr2 = [...str]
console.log(arr2)
