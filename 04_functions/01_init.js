function fun1() {
    console.log("Hello Function")
}
fun1()

function fun2(a, b) {
    console.log(a + b)
}
fun2(1,2)

function fun3(a, b) {
    return a + b
}
console.log(fun3(1,2))


// Parameters-> when declaring a function
// Arguments-> when calling a function


var sum2 = function() {
    var a = 10, b = 20
    sum = a + b
    console.log(`sum: ${sum}`)
    return sum
}

console.log(typeof sum2)
console.log(`sum2: ${sum2}`)
