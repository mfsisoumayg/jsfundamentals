try {
    hello()
    console.log("try-catch-finally: Try 1") // this won't run as hello() is not defined
} catch(err) {
    // if we have print the error on terminal/console -> console.error(err)
    console.error(err)
    console.log("try-catch-finally: Catch 1")
} finally {
    console.log("try-catch-finally: Finally 1")
}

try {
    console.log("try-catch-1: Try 2")
} catch {
    console.log("try-catch-1: Catch 2")
}

try {
    hello()
    console.log("try-catch-2: Try 3")
} catch {
    console.log("try-catch-2: Catch 3")
}

try {
    console.log("try-finally: Try 4")
} finally {
    console.log("try-finally: Finally 4")
}

try {
    console.log("try-catch-3: Try 5")
    hello()
} catch ({name, message}){
    console.log(name)
    console.log(message)
    console.log("try-catch-3: Catch 5")
}
