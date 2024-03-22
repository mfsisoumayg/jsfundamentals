function *test() {
    console.log("First")
    yield "First"
    console.log("Second")
    yield "Second"
    console.log("Third")
    yield "Third"
    console.log("Fourth")
    yield
    console.log("Fifth")
}

test()

let g = test()
console.log(g)

// console.log(g.next(), '-end')
// console.log(g.next(), '-end')
// console.log(g.next(), '-end')
// console.log(g.next(), '-end')
// console.log(g.next())

for (let val of g){
    console.log(val, '-end')
}