let a = "a"; // declared only once w.r.t variable name
var b = "b"; // declared infinite w.r.t variable name
const c = "c"; // declared only once w.r.t variable name
console.log(a)
console.log(b)
console.log(c)

a = "1"; // cannot be defined with same variable name; values can be changed
var b = "2" // can be defined with same variable name; values can be changed
// c = "3" // cannot be defined with same variable name; throwing an error trying to change value
// let b = 4 // SyntaxError: Identified has already been declared
console.log(a)
console.log(b)
console.log(c)
