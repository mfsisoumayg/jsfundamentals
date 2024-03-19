let a = 1 // local scope
var b = 2 // global scope
const c = 3

// if; else if; else
// if (a < b) {
//     console.log("if 1")
// } if (a < b) {
//     console.log("if 2")
// } else if (a < b) {
//     console.log("else if")
// } else {
//     console.log("else")
// }

// switch
// switch (a) {
//     case 1: console.log("1")
//     case 2: console.log("2")
//         break;
//     case 3: console.log("3")
//     default: console.log("default")
// }


// scope
if (a <= b) {
    let a = 10 // shadowing var "a".
    var b = 20 // value updated globally in var "b"
    const c = 30 // shadowing var "c".
    console.log(`a ${a}`) // 10
    console.log(`b ${b}`) // 20
    console.log(`c ${c}`) // 30
}
console.log(`a ${a}`) // 1
console.log(`b ${b}`) // 20
console.log(`c ${c}`) // 3

if (true) {
    let d = 3
    var e = 4
    const f = 5
    console.log(`d ${d}`) // 3
    console.log(`e ${e}`) // 4
    console.log(`f ${f}`) // 5
}
// console.log(`d ${d}`) // ReferenceError: is not defined
console.log(`e ${e}`) // 4 - global variable declared in if at line 37
// console.log(`f ${f}`) // ReferenceError: is not defined

