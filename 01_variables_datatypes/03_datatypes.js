/*
primitive data types: string, number, bigint, boolean, undefined, symbol
Non-primitive data types: Object, Array, Date, String, Number, Boolean

NEW keyword used to create object. datatype => object
*/

console.log('---Check string---')
let str1 = "Hello 1"
let str2 = String("Hello 2")
let str2_1 = String()
let str3 = new String("Hello 3")
let str3_1 = new String()
let str4 = ""
let str5
// console.log(str1, typeof str1) // Hello 1 string
// console.log(str2, typeof str2) // Hello 2 string
// console.log(str2_1, typeof str2_1) //  string
// console.log(str3, typeof str3) // [String: 'Hello 3'] object
// console.log(str3_1, typeof str3_1) // [String: ''] object
// console.log(str4, typeof str4) //  string
// console.log(str5, typeof str5) // undefined undefined

console.log('---Check number---')
let nm1 = 1
let nm2 = Number(2)
let nm2_1 = Number()
let nm3 = new Number(3)
let nm3_1 = new Number()
// console.log(nm1, typeof nm1) // 1 number
// console.log(nm2, typeof nm2) // 2 number
// console.log(nm2_1, typeof nm2_1) // 0 number
// console.log(nm3, typeof nm3) // [Number: 3] object
// console.log(nm3_1, typeof nm3_1) // [Number: 0] object

console.log('---Check bigint---')
let bi1 = 1234567891234567891n
let bi2 = BigInt(1234567891234567892n)
// let bi2_1 = BigInt() // TypeError: Cannot convert undefined to a BigInt
// let bi3 = new BigInt(1234567891234567893n) // not a constructor
// console.log(bi1, typeof bi1) // 1234567891234567891n bigint
// console.log(bi2, typeof bi2); // 1234567891234567892n bigint

console.log('---Check boolean---')
let bln1 = true
let bln2 = Boolean(true)
let bln2_1 = Boolean()
let bln3 = new Boolean(true)
let bln3_1 = new Boolean()
// console.log(bln1, typeof bln1) // true boolean
// console.log(bln2, typeof bln2) // true boolean
// console.log(bln2_1, typeof bln2_1) // false boolean
// console.log(bln3, typeof bln3) // [Boolean: true] object
// console.log(bln3_1, typeof bln3_1) // [Boolean: false] object

console.log('---Check undefined---')
let ud
// console.log(typeof ud)

console.log('---Check null---')
// console.log(typeof null) // object

console.log('---Check symbol---')
let sym1 = Symbol('Hello');
// let sym2 = new Symbol('Hello'); // not a constructor
// console.log(sym1, typeof sym1) // number

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
// console.log(arr1, typeof arr1, arr1.length) // [ 1 ] object 1
// console.log(arr2, typeof arr2, arr2.length) // [ 1 ] object 1
// console.log('Original array ARR3  check the <N empty items>')
// console.log(arr3, typeof arr3, arr3.length) // [ 1, <3 empty items>, 3 ] object 5
// console.log('Updated array ARR3  check the <N empty items>')
// arr3[1] = 2 // as we have added the element at 0th index with unshift()
// console.log(arr3, typeof arr3, arr3.length) // [ 1, 2, <2 empty items>, 3 ] object 5

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
// console.log(obj1, typeof obj1) // {} object
// console.log(obj2, typeof obj2) // {} object
// console.log(obj3, typeof obj3) // {} object


console.log('---Check Map---');
let map1 = new Map()
map1.set("ver", 1)
map1.set("dateType", typeof map1)
// let map2 = Map() // TypeError: Constructor Map required 'new'
// console.log(map1)