/*
primitive data types: string, number, bigint, boolean, undefined, symbol
Non-primitive data types: Object, Array, Date, String, Number, Boolean

NEW keyword used to create object. datatype => object
*/

console.log('---Check string---')
let str1 = "Hello 2"
let str2 = String("Hello 2")
let str3 = new String("Hello 3")
let str4 = ""
let str5
console.log(typeof str1) // string
console.log(typeof str2) // string
console.log(typeof str3) // object
console.log(typeof str4) // string
console.log(typeof str5) // undefined

console.log('---Check number---')
let nm1 = 1
let nm2 = Number(2)
let nm3 = new Number(3)
console.log(nm1, typeof nm1) // number
console.log(nm2, typeof nm2) // number
console.log(nm3, typeof nm3) // object

console.log('---Check bigint---')
let bi1 = 1234567891234567891n
let bi2 = BigInt(1234567891234567892n)
// let bi3 = new BigInt(1234567891234567893n) // not a constructor
console.log(bi1, typeof bi1) // bigint
console.log(bi2, typeof bi2); // bigint

console.log('---Check boolean---')
let bln1 = true
let bln2 = Boolean(true)
let bln3 = new Boolean(true)
console.log(bln1, typeof bln1) // number
console.log(bln2, typeof bln2) // number
console.log(bln3, typeof bln3) // object

console.log('---Check undefined---')
let ud
console.log(typeof ud)

console.log('---Check null---')
console.log(typeof null) // object

console.log('---Check symbol---')
let sym1 = Symbol('Hello');
// let sym2 = new Symbol('Hello'); // not a constructor
console.log(sym1, typeof sym1) // number

console.log('---Check array---')
/*
1. when adding element if array is empty. We can use push() or unshift() to add the element to 0th index
2. when removing element if array is empty. We can use pop() or shift() and not throwing error
3. using Array(n) or new Array(n) remains the same and n is optional
3.1. If n is not null and type Number -> a specified length is added and values can be modified using the index only
3.2. If n is not null and type String/Boolean -> creates a array with number of elements provided in the arguments
*/
let arr1 = []
arr1.push(1)
let arr2 = new Array()
arr2.push(1)
let arr3 = new Array(3) // (number) -> specify the length; (string, boolean) -> elements in array
arr3.forEach((item) => console.log(item)) // if values present -> print the items
arr3.unshift(1)
arr3.push(3)
// let arr4 = new Array.from(arr1) // not a constructor while using any method
console.log(arr1, typeof arr1, arr1.length) // object
console.log(arr2, typeof arr2, arr2.length) // object
console.log('Original array ARR3  check the <N empty items>')
console.log(arr3, typeof arr3, arr3.length) // object
console.log('Updated array ARR3  check the <N empty items>')
arr3[1] = 2 // as we have added the element at 0th index with unshift()
console.log(arr3, typeof arr3, arr3.length) // object

console.log('---Check object---')
/*
1. using Object() or new Object() remains the same
*/
let obj1 = {}
obj1.ver = 18
let obj2 = new Object() // additional parameters can be added
obj2.ver = 18
let obj3 = Object() // additional parameters can be added
obj3.ver = 18
console.log(obj1, typeof obj1) // object
console.log(obj2, typeof obj2) // object
console.log(obj3, typeof obj3) // object
