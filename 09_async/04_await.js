const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!!")
    }, 10000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!!")
    }, 5000)
})

// // before await
// function getData() {
//     p.then((res) => console.log(res)) // 2nd call stack
//     console.log("getData 1") // 1st call stack
// }

// getData()

// using await - this can be used to handle promise and inside async function
// async function handlePromise1() {
//     console.log("Hello Promise")
//     // JS Engine was waiting for promise to be resolved
//     const val1 = await p1;
//     console.log("Handle Promise 1")
//     console.log(val1)

//     const val2 = await p1;
//     console.log("Handle Promise 2")
//     console.log(val2)
// }

// handlePromise1()


// async function handlePromise2() {
//     console.log("Hello Promise")
//     // JS Engine was waiting for promise to be resolved
//     const val1 = await p1;
//     console.log("Handle Promise 1")
//     console.log(val1)

//     const val2 = await p2;
//     console.log("Handle Promise 2")
//     console.log(val2)
// }

// handlePromise2()

async function handlePromise3() {
    console.log("Hello Promise")
    // JS Engine was waiting for promise to be resolved
    const val1 = await p2;
    console.log("Handle Promise 1")
    console.log(val1)

    const val2 = await p1;
    console.log("Handle Promise 2")
    console.log(val2)
}

handlePromise3()
console.log("Outer Hello")


