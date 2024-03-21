function x() {
    let a = 7
    function y() {
        console.log(a)
    }
    y()
    a = 10
    return y
}

var z = x()
console.log(z, typeof z)
z()