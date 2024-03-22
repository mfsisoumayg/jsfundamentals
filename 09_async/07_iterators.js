let arr1 = ['apple','orange','grapes']

let arrIter = arr1[Symbol.iterator]()
console.log(typeof arr1[Symbol.iterator])

// console.log(arrIter.next())
// console.log(arrIter.next())
// console.log(arrIter.next())
// console.log(arrIter.next()) // since the arr1 contains only 3 elements

// let resArrIter = arrIter.next()
// while (!resArrIter.done) {
//     console.log(resArrIter.value)
//     resArrIter = arrIter.next()
// }

// let set1 = new Set([1,2,3])

// let setIter = set1[Symbol.iterator]()
// console.log(setIter, typeof setIter)

// let resSetIter = setIter.next()
// while (!resSetIter.done) {
//     console.log(resSetIter.value)
//     resSetIter = setIter.next()
// }

let map1 = new Map([['key','value'],['new','hello world']])

let mapIter = map1[Symbol.iterator]()
console.log(mapIter, typeof mapIter)

let resMapIter = mapIter.next()
while (!resMapIter.done) {
    // in case of map, we get array [key, value]
    console.log(resMapIter.value)
    resMapIter = mapIter.next()
}

