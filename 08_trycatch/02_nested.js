try {
    try {
        console.log("inner try 1")
        hello()
    } finally {
        console.log("inner finally 1")
    }
} catch {
    console.log("outer catch 1")
}

try {
    try {
        console.log("inner try 2")
        hello()
    } catch {
        console.log("inner catch 2")
    } finally {
        console.log("inner finally 2")
    }
} catch {
    console.log("outer catch 2")
}

