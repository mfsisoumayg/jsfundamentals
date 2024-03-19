/*
    number -> string; object; array
*/

let num1 = 1 // is equal to Number() = 0
let num2
let num3 = 2n
let num4 = 3.14
let num5 = new Number()
let num6 = new Number(3)

// string using toString()
let num1_1 = num1.toString()
//let num2_1 = num2.toString() // TypeError: cannot read properties of undefined
let num3_1 = num3.toString()
let num4_1 = num4.toString()
let num5_1 = num5.toString()
let num6_1 = num6.toString()
// console.log(num1, num1_1, typeof num1_1) // 1 1 string
// console.log(num3, num3_1, typeof num3_1) // 2n 2 string
// console.log(num4, num4_1, typeof num4_1) // 3.14 3.14 string
// console.log(num5, num5_1, typeof num5_1) // [Number: 0] 0 string
// console.log(num6, num6_1, typeof num6_1) // [Number: 3] 3 string

// string using `{}`
num1_1 = `${num1}`
let num2_1 = `${num2}`
num3_1 = `${num3}`
num4_1 = `${num4}`
num5_1 = `${num5}`
num6_1 = `${num6}`
// console.log(num1, num1_1, typeof num1_1) // 1 1 string
// console.log(num2, num2_1, typeof num2_1) // undefined undefined string
// console.log(num3, num3_1, typeof num3_1) // 2n 2 string
// console.log(num4, num4_1, typeof num4_1) // 3.14 3.14 string
// console.log(num5, num5_1, typeof num5_1) // [Number: 0] 0 string
// console.log(num6, num6_1, typeof num6_1) // [Number: 3] 3 string

// string using String()
num1_1 = String(num1)
num2_1 = String(num2)
num3_1 = String(num3)
num4_1 = String(num4)
num5_1 = String(num5)
num6_1 = String(num6)
// console.log(num1, num1_1, typeof num1_1) // 1 1 string
// console.log(num2, num2_1, typeof num2_1) // undefined undefined string
// console.log(num3, num3_1, typeof num3_1) // 2n 2 string
// console.log(num4, num4_1, typeof num4_1) // 3.14 3.14 string
// console.log(num5, num5_1, typeof num5_1) // [Number: 0] 0 string
// console.log(num6, num6_1, typeof num6_1) // [Number: 3] 3 string

// string using new String()
num1_1 = new String(num1)
num2_1 = new String(num2)
num3_1 = new String(num3)
num4_1 = new String(num4)
num5_1 = new String(num5)
num6_1 = new String(num6)
// console.log(num1, num1_1, typeof num1_1) // 1 [String: '1'] object
// console.log(num2, num2_1, typeof num2_1) // undefined [String: 'undefined'] object
// console.log(num3, num3_1, typeof num3_1) // 2n [String: '2'] object
// console.log(num4, num4_1, typeof num4_1) // 3.14 [String: '3.14'] object
// console.log(num5, num5_1, typeof num5_1) // [Number: 0] [String: '0'] object
// console.log(num6, num6_1, typeof num6_1) // [Number: 3] [String: '3'] object


// boolean using Boolean()
let num1_2 = Boolean(num1)
let num2_2 = Boolean(num2)
let num3_2 = Boolean(num3)
let num4_2 = Boolean(num4)
let num5_2 = Boolean(num5)
let num6_2 = Boolean(num6)
// console.log(num1, num1_2, typeof num1_2) // 1 true boolean
// console.log(num2, num2_2, typeof num2_2) // undefined false boolean
// console.log(num3, num3_2, typeof num3_2) // 2n true boolean
// console.log(num4, num4_2, typeof num4_2) // 3.14 true boolean
// console.log(num5, num5_2, typeof num5_2) // [Number: 0] true boolean
// console.log(num6, num6_2, typeof num6_2) // [Number: 3] true boolean

// boolean using new Boolean()
num1_2 = new Boolean(num1)
num2_2 = new Boolean(num2)
num3_2 = new Boolean(num3)
num4_2 = new Boolean(num4)
num5_2 = new Boolean(num5)
num6_2 = new Boolean(num6)
console.log(num1, num1_2, typeof num1_2) // 1 [Boolean: true] object
console.log(num2, num2_2, typeof num2_2) // undefined [Boolean: false] object
console.log(num3, num3_2, typeof num3_2) // 2n [Boolean: true] object
console.log(num4, num4_2, typeof num4_2) // 3.14 [Boolean: true] object
console.log(num5, num5_2, typeof num5_2) // [Number: 0] [Boolean: true] object
console.log(num6, num6_2, typeof num6_2) // [Number: 3] [Boolean: true] object
