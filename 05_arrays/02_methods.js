let arr1 = []

// pop, push, shift, unshift
arr1.push(3)
console.log(arr1)
arr1.push(1)
console.log(arr1)
arr1.push(4)
console.log(arr1)
arr1.pop()
console.log(arr1)
arr1.unshift(6)
console.log(arr1)
arr1.unshift(7)
console.log(arr1)
arr1.unshift(9)
console.log(arr1)
arr1.unshift(10)
console.log(arr1)
arr1.shift()
console.log(arr1)

// sort
arr1.sort()
console.log(arr1)

let arr2 = ['Alpha', 'Zeta', 'alpha', 'zeta']
// sorting with ASCII code or case-sensitive order
arr2.sort()
console.log(arr2)
// sorting without case-sensitive order
arr2.sort((str1, str2) => str1.localeCompare(str2, undefined, {sensitivity: 'accent'}))
console.log(arr2)
