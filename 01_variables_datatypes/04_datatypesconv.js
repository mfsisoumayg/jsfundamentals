/*
 string -> number; object; array
*/

let st1 = "abc"
let st2 = "1"
let st3 = "m1"
let st4 = "11m1"
let str5 = ""
let str6
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
let str5_1 = parseInt(str5)
let str6_1 = parseInt(str6)
// console.log(str1_1, typeof str1_1) // NaN number
// console.log(str2_1, typeof str2_1) // 1 number
// console.log(str3_1, typeof str3_1) // NaN number
// console.log(str4_1, typeof str4_1) // 11 number
// console.log(str5_1, typeof str5_1) // NaN number
// console.log(str6_1, typeof str6_1) // NaN number
// number using Number()
str1_1 = Number(st1) 
str2_1 = Number(st2) 
str3_1 = Number(st3) 
str4_1 = Number(st4) 
str5_1 = Number(str5)
str6_1 = Number(str6)
// console.log(str1_1, typeof str1_1) // NaN number
// console.log(str2_1, typeof str2_1) // 1 number
// console.log(str3_1, typeof str3_1) // NaN number
// console.log(str4_1, typeof str4_1) // NaN number
// console.log(str5_1, typeof str5_1) // 0 number
// console.log(str6_1, typeof str6_1) // NaN number
// number using new Number()
str1_1 = new Number(st1)
str2_1 = new Number(st2)
str3_1 = new Number(st3)
str4_1 = new Number(st4)
str5_1 = new Number(str5)
str6_1 = new Number(str6)
// console.log(str1_1, typeof str1_1) // [Number: NaN] object
// console.log(str2_1, typeof str2_1) // [Number: 1] object
// console.log(str3_1, typeof str3_1) // [Number: NaN] object
// console.log(str4_1, typeof str4_1) // [Number: NaN] object
// console.log(str5_1, typeof str5_1) // [Number: 0] object
// console.log(str6_1, typeof str6_1) // [Number: NaN] object


