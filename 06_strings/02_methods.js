let str = "I_am_learning_JavaScript"

// extract the element at nth index
// console.log(str.charAt(0))

// ASCII code of the element at nth index
// console.log(str.charCodeAt(0))

// to uppercase
str.toLowerCase() // cannot covert to lowercase itself -> assign the same variable
// console.log(str.toLowerCase())

str.toUpperCase() // cannot covert to lowercase itself -> assign the same variable
// console.log(str.toUpperCase())

// get index of any element (1st from 0th index)
// console.log(str.indexOf("a"))

// get index of any element (last from 0th index or 1st index from last)
// console.log(str.lastIndexOf("a"))

// get a part of string from i th index to j-1 th index
console.log(str.substring(2,4)) // am
// i th index with lengh
console.log(str.substr(2,4)) // am_l
// get a part of string from i th index to j-1 th index
console.log(str.slice(2,4)) // am

// with negative numbers
console.log('substring(4,2):', str.substring(4,2)) // am
console.log('slice(4,2):', str.slice(4,2)) // 

console.log('substring(-4,2):',str.substring(-4,2)) // I_
console.log('substring(-4,-2)',str.substring(-4,-2)) // 

console.log('slice(-4,2)',str.slice(-4,2)) //
console.log('slice(-4,-2)',str.slice(-4,-2)) // ri


// using Array
let arr1 = Array.from(str)
console.log(arr1)

// using ... spread operator
let arr2 = [...str]
console.log(arr2)

let str1 = "I_Am_Learning_JAVASCRIPT"
let str2 = "I_Am_Learning_JáVáSCRIPT"
console.log(str.localeCompare(str1, undefined, {sensitivity: 'base'})) // A and á
console.log(str.localeCompare(str1, undefined, {sensitivity: 'accent'})) // A and a
console.log(str.localeCompare(str2, undefined, {sensitivity: 'base'})) // A and á
console.log(str.localeCompare(str2, undefined, {sensitivity: 'accent'})) // A and a

str = str.replaceAll("_","-")
console.log(str)

str = str.concat(str1) // cannot concat itself -> assign the same variable
console.log(str)