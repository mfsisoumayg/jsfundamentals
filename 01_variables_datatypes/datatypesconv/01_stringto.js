/*
 string -> number; object; array
*/

let st1 = "abc"
let st2 = "1"
let st3 = "m1"
let st4 = "11m1"
let st5 = "" // is equal String()
let st6
let st7 = new String()
let st8 = new String("abc")
let st9 = new String("1")
let st10 = new String("m1")
let st11 = new String("11m1")
/*
    1. using parseInt(str)
    1.1 get the index til the each item as ASCII code -> get the number (the number should start from 0th index)
    2. using Number or new Number()
    2.1 the elements should be a number otherwise NaN
    2.2 if empty string, return 0
*/

// number using parseInt()
let str1_1 = parseInt(st1)
let str2_1 = parseInt(st2)
let str3_1 = parseInt(st3)
let str4_1 = parseInt(st4)
let str5_1 = parseInt(st5)
let str6_1 = parseInt(st6)
let str7_1 = parseInt(st7)
let str8_1 = parseInt(st8)
let str9_1 = parseInt(st9)
let str10_1 = parseInt(st10)
let str11_1 = parseInt(st11)
// console.log(st1, str1_1, typeof str1_1) // abc NaN number
// console.log(st2, str2_1, typeof str2_1) // 1 1 number
// console.log(st3, str3_1, typeof str3_1) // m1 NaN number
// console.log(st4, str4_1, typeof str4_1) // 11m1 11 number
// console.log(st5, str5_1, typeof str5_1) //  NaN number
// console.log(st6, str6_1, typeof str6_1) // undefined NaN number
// console.log(st7, str7_1, typeof str7_1) // [String: ''] NaN number
// console.log(st8, str8_1, typeof str8_1) // [String: 'abc'] NaN number
// console.log(st9, str9_1, typeof str9_1) // [String: '1'] 1 number
// console.log(st10, str10_1, typeof str10_1) // [String: 'm1'] NaN number
// console.log(st11, str11_1, typeof str11_1) // [String: '11m1'] 11 number

// number using Number()
str1_1 = Number(st1) 
str2_1 = Number(st2) 
str3_1 = Number(st3) 
str4_1 = Number(st4) 
str5_1 = Number(st5)
str6_1 = Number(st6)
str7_1 = Number(st7)
str8_1 = Number(st8)
str9_1 = Number(st9)
str10_1 = Number(st10)
str11_1 = Number(st11)
// console.log(st1, str1_1, typeof str1_1) // abc NaN number
// console.log(st2, str2_1, typeof str2_1) // 1 1 number
// console.log(st3, str3_1, typeof str3_1) // m1 NaN number
// console.log(st4, str4_1, typeof str4_1) // 11m1 NaN number
// console.log(st5, str5_1, typeof str5_1) //  0 number
// console.log(st6, str6_1, typeof str6_1) // undefined NaN number
// console.log(st7, str7_1, typeof str7_1) // [String: ''] 0 number
// console.log(st8, str8_1, typeof str8_1) // [String: 'abc'] NaN number
// console.log(st9, str9_1, typeof str9_1) // [String: '1'] 1 number
// console.log(st10, str10_1, typeof str10_1) // [String: 'm1'] NaN number
// console.log(st11, str11_1, typeof str11_1) // [String: '11m1'] NaN number

// number using new Number()
str1_1 = new Number(st1)
str2_1 = new Number(st2)
str3_1 = new Number(st3)
str4_1 = new Number(st4)
str5_1 = new Number(st5)
str6_1 = new Number(st6)
str7_1 = new Number(st7)
str8_1 = new Number(st8)
str9_1 = new Number(st9)
str10_1 = new Number(st10)
str11_1 = new Number(st11)
// console.log(st1, str1_1, typeof str1_1) // abc [Number: NaN] object
// console.log(st2, str2_1, typeof str2_1) // 1 [Number: 1] object
// console.log(st3, str3_1, typeof str3_1) // m1 [Number: NaN] object
// console.log(st4, str4_1, typeof str4_1) // 11m1 [Number: NaN] object
// console.log(st5, str5_1, typeof str5_1) //  [Number: 0] object
// console.log(st6, str6_1, typeof str6_1) // undefined [Number: NaN] object
// console.log(st7, str7_1, typeof str7_1) // [String: ''] [Number: 0] object
// console.log(st8, str8_1, typeof str8_1) // [String: 'abc'] [Number: NaN] object
// console.log(st9, str9_1, typeof str9_1) // [String: '1'] [Number: 1] object
// console.log(st10, str10_1, typeof str10_1) // [String: 'm1'] [Number: NaN] object
// console.log(st11, str11_1, typeof str11_1) // [String: '11m1'] [Number: NaN] object



// boolean using Boolean()
let str1to4_2 = Boolean(st1) // constains the value
let str5_2 = Boolean(st5)
let str6_2 = Boolean(st6)
let str7_2 = Boolean(st7)
let str8to11 = Boolean(st8)
// console.log(st1, str1to4_2, typeof str1to4_2) // abc true boolean
// console.log(st5, str5_2, typeof str5_2) //  false boolean
// console.log(st6, str6_2, typeof str6_2) // undefined false boolean
// console.log(st7, str7_2, typeof str7_2) // [String: ''] true boolean
// console.log(st8, str8to11, typeof str8to11) // [String: 'abc'] true boolean

// boolean using new Boolean()
str1to4_2 = new Boolean(st1) // constains the value
str5_2 = new Boolean(st5)
str6_2 = new Boolean(st6)
str7_2 = new Boolean(st7)
str8to11 = new Boolean(st8)
// console.log(st1, str1to4_2, typeof str1to4_2) // abc [Boolean: true] object
// console.log(st5, str5_2, typeof str5_2) //  [Boolean: false] object
// console.log(st6, str6_2, typeof str6_2) // undefined [Boolean: false] object
// console.log(st7, str7_2, typeof str7_2) // [String: ''] [Boolean: true] boolean
// console.log(st8, str8to11, typeof str8to11) // [String: 'abc'] [Boolean: true] object



// object using Object() or new Object()
let str1to4_3 = Object(st1) // constains the value
let str5_3 = Object(st5)
let str6_3 = Object(st6)
// console.log(str1to4_3, typeof str1to4_3) // [String: 'abc'] object
// console.log(str5_3, typeof str5_3) // [String: ''] object
// console.log(str6_3, typeof str6_3) // {} object


// arrays using split()
let str1to4_4 = st1.split()
let str5_4 = st5.split()
// let str6_4 = st6.split() // TypeError: Cannot read properties of undefined
// console.log(str1to4_4, typeof str1to4_4) // [ 'abc' ] object
// console.log(str5_4, typeof str5_4) // [ '' ] object
// arrays using Array.from()
str1to4_4 = Array.from(st1)
str5_4 = Array.from(st5)
// let str6_4 = Array.from(st6) // TypeError: undefined is not iterable
// console.log(str1to4_4, typeof str1to4_4) // [ 'a', 'b', 'c' ] object
// console.log(str5_4, typeof str5_4) // [] object
// array using Array() or new Array()
str1to4_4 = Array(st1)
str5_4 = Array(st5)
let str6_4 = Array(st6)
// console.log(str1to4_4, typeof str1to4_4) // [ 'abc' ] object
// console.log(str5_4, typeof str5_4) // [ '' ] object
// console.log(str6_4, typeof str6_4) // [ undefined ] object
//array using [...] or Array(...) operator
str1to4_4 = [...st1]
str5_4 = [...st5]
// str6_4 = [...st6] // TypeError: is not iterable
// console.log(str1to4_4, typeof str1to4_4) // [ 'a', 'b', 'c' ] object
// console.log(str5_4, typeof str5_4) // [] object
