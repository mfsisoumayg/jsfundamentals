fun1()
function fun1() {
    console.log("fun1: Hello Function")
}

fun2(1,2)
function fun2(a, b) {
    console.log(`fun2: ${a + b}`)
}

console.log(`fun3: ${fun3(1,2)}`)
function fun3(a, b) {
    return a + b
}

// in case of arrow function declared with var
console.log("fun4:beforeInit", fun4) // in execution context, fun4 is declared as var then this line is executed, so it's undefined
// console.log(fun4(1,2)) // undefined as var, so this throws TypeError: fun4 is not a function
var fun4 = (a, b) => {
    return a + b
}
console.log(`fun4:afterInit ${fun4(1,2)}`)

// in case of arrow function declared with let
// console.log(fun5(1,2)) // Reference Error: Cannot access fun5 before initialization
// console.log(fun5) // Reference Error: Cannot access fun5 before initialization
let fun5 = (a, b) => {
    return a + b
}
console.log("fun5:afterInit", fun5)
console.log(`fun5:afterInit ${fun5(1,2)}`)


// in case of arrow function declared with const
// console.log("fun6:beforeInit", fun6) // ReferenceError: Cannot access 'fun6' before initialization
// console.log("fun6:beforeInit", fun6(1,2)) // ReferenceError: Cannot access 'fun6' before initialization
const fun6 = (a, b) => {
    return a + b
}
console.log("fun6:afterInit", fun6)
console.log("fun6:afterInit", fun6(1,2))