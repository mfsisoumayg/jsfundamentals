const set1 = new Set();
const set2 = new Set([1,2,3,3]);

console.log(set1)
console.log(set2) // duplicate value removed

const fruits = new Set(['apple','mango'])
fruits.add('banana')
console.log(fruits)

console.log(fruits.has('orange')) // false -> fruits does not contain the 'orange'
console.log(fruits.has('Banana')) // false -> case-sensitive

console.log(fruits.delete('orange')) // false -> fruits does not contain the 'orange'
console.log(fruits.delete('mango')) // true
console.log(fruits)

console.log(fruits.size)

fruits.clear()
console.log(fruits)

fruits.add('banana')
fruits.add('orange')
fruits.add('apple')
fruits.add('mango')

console.log("---for...of...entries---")
for (const fruit of fruits.entries()) {
    console.log(fruit)
}

console.log("---for...of...values---")
for (const fruit of fruits.values()) {
    console.log(fruit)
}

console.log("---for.each---")
fruits.forEach((i) => console.log(i))

console.log(fruits, typeof fruits)