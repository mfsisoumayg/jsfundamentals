console.log("Hello") // stdout
console.log("World") // stdout
console.error("Error") // stderr
console.log(console.error("Error")) // bad practice

/*
1. while running thorugh command line. All looks normal.
2. while running through run on visual studio. The error is highlighted in red and rest are blue.

Output:
Hello
World
Error
Error
undefined
*/

