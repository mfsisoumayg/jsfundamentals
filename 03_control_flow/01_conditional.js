let a = 1 // local scope
var b = 2 // global scope

// if; else if; else
if (a < b) {
    console.log("if 1")
} if (a < b) {
    console.log("if 2")
} else if (a < b) {
    console.log("else if")
} else {
    console.log("else")
}

// switch
switch (a) {
    case 1: console.log("1")
    case 2: console.log("2")
        break;
    case 3: console.log("3")
    default: console.log("default")
}


// scope
if (a <= b) {
    let a = 10 // shadowing var "a".
    var b = 20 // value updated globally in var "b"
    console.log(`a ${a}`) // 10
    console.log(`b ${b}`) // 20
}
console.log(`a ${a}`) // 1
console.log(`b ${b}`) // 20
