/*
 string -> number; object; array
*/

let st1 = "abc"
let st2 = "1"
let st3 = "m1"
let st4 = "11m1"
/*
    1. using parseInt(str)
    1.1 get the index til the each item as ASCII code -> get the number (the number should start from 0th index)
    2. using Number or new Number()
    2.1 the elements should be a number otherwise NaN
*/
// number using parseInt()
let str1_1 = parseInt(st1)
let str2_1 = parseInt(st2)
let str3_1 = parseInt(st3)
let str4_1 = parseInt(st4)
console.log(str1_1, typeof str1_1)
console.log(str2_1, typeof str2_1)
console.log(str3_1, typeof str3_1)
console.log(str4_1, typeof str4_1)
// number using Number()
str1_1 = Number(st1)
str2_1 = Number(st2)
str3_1 = Number(st3)
str4_1 = Number(st4)
console.log(str1_1, typeof str1_1)
console.log(str2_1, typeof str2_1)
console.log(str3_1, typeof str3_1)
console.log(str4_1, typeof str4_1)
// number using new Number()
str1_1 = new Number(st1)
str2_1 = new Number(st2)
str3_1 = new Number(st3)
str4_1 = new Number(st4)
console.log(str1_1, typeof str1_1)
console.log(str2_1, typeof str2_1)
console.log(str3_1, typeof str3_1)
console.log(str4_1, typeof str4_1)
