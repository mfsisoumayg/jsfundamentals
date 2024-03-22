const map1 = new Map()
// console.log(map1, typeof map1)

const map2 = new Map([['key', 'value'],['new', 'hello world']])
// console.log(map2, typeof map2)

const player1 = {name: 'Soumay', age: '25'}
const playerData = new Map([[player1, [{date:'today',price:2333}]]])
// console.log(playerData)

console.log(map2.entries());

// get all keys
console.log("---keys---")
for (let key of map2.keys()){
    console.log(key)
}

// get all values
console.log("---values---")
for (let key of map2.values()){
    console.log(key)
}

// enumerate over map
map2.forEach((value, key) =>{
    console.log(`Key: ${key} |and| Value: ${value}`)
})

console.log(map2.size)

console.log(map2.get('key'))
