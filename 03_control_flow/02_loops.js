// --- ARRAY ---
let arr1 = []
for (var a = 0; a < 10; a++) {
    arr1.push(a + 1)
}
// console.log(arr1)
// console.log(a) // global variable as declared in for when initializing

let arr2 = []
// get index of each element
for (let index in arr1) {
    arr2.push(index)
}
// console.log(arr2)

arr2 = []
// get element at each index
for (let value of arr1) {
    arr2.push(value)
}
// console.log(arr2)


// --- MAP ---
let map1 = {}
for (let b = 0; b < 10; b++) {
    map1[b + 1] = (b + 1) * 10
}
// console.log(map1)
// console.log(b) // ReferenceError: is not defined

// for (let item in map1) {
//     console.log(item, map1[item])
// }

// for (let [key, value] of Object.entries(map1)) {
//     console.log(key, value)
// }


let b = 1
// while (b < 5) {
//     console.log(`while: ${b++}`)
// }

// do {
//     console.log(`doWhile: ${b++}`)
// } while (b < 5)

// for (let c = 0; c < 5; c++) {
//     console.log(`c-start : ${c}`)
//     for (let d = 0; d < 5; d++) {
//         if ((c+d) % 2 == 0) {
//             console.log(`d%2 : ${d}`)
//             break
//         }
//         else if ((c+d) % 3 == 0) {
//             console.log(`d%3 : ${d}`)
//             continue
//         }
//         console.log(`d-end : ${d}`)
//     }
//     console.log(`c-end : ${c}`)
// }