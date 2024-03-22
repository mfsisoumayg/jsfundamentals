const p = new Promise((resolve, reject) => {
    resolve("Hello")
})

// always return a promise
async function getData() {
    return "Namastae"
}

async function getData1(){
    return p;
}

let dataPromise1 = getData()
dataPromise1.then((res) => console.log(res))

let dataPromise2 = getData1()
dataPromise2.then((res) => console.log(res))
