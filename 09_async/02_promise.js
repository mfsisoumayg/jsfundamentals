let myName

function displayGreeting() {
    myName = "Soumay"
}

// let promise = new Promise((resolve, reject) => {
//     displayGreeting();
//     reject(myName)
// })

function greet(result) {
    console.log(`Hi ${result}, how do you do?`)
}
function showerror(result) {
    console.log(`Error Error Error: ${result}`)
}

// promise
//     .then(
//         result => greet(result), // resolved
//         () => showerror('debug please -then') // rejected
//     )

// promise
//     .then((res) => {
//         greet(res)
//     }) // resolved
//     .catch((res) => {
//         console.log(`then-catch-finally:catch 1 {} ${res}`)
//         showerror('debug please -then-catch-finally:catch 1')
//     }) // 5th call stack
//     .catch(
//         showerror('debug please -then-catch-finally:catch 2')
//     ) // 1st call stack
//     .finally((res) => {
//         console.log(`then-catch-finally:finally 1 {} ${res}`) // 6th call stack
//     }, // we cannot get the value in finally
//         showerror('debug please -then-catch-finally:finally 1') // 2nd call stack
//     ) 
//     .catch((res) => {
//         console.log(`then-catch-finally:catch 3 {} ${res}`)
//         showerror('debug please -then-catch-finally:catch 3')
//     }) // skipped due to finally
//     .catch(
//         showerror('debug please -then-catch-finally:catch 4')
//     ) // 3rd call stack
//     .finally(
//         showerror('debug please -then-catch-finally:finally 2')
//     ) // 4th call stack


const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First operation completed")
    }, 1000)
})

const secondPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Second operation completed")
    }, 1000)
})

const thirdPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Third operation Rejected")
    }, 1000)
})

firstPromise
    .then((res) => {
        console.log(res)
        return secondPromise;
    }) // 2nd call stack
    .then((res) => {
        console.log(res)
        return res
    }) // 2nd call stack
    .then((res) => {
        console.log(res) 
    })
    .then((res) => {
        console.log(res) // undefined as there is no return on line 81
        return thirdPromise
    }) // 3rd call stack
    .then(console.log("Hii")) // 1st call stack
    .catch(res => console.log(res)) // 4th call stack
