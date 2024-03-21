const message = function() {  
    console.log("Func- This message is shown after 3 seconds");
}
setTimeout(message, 3000);

setTimeout(function() {  
    console.log("Anon- This message is shown after 3 seconds");
}, 3000);

const arrFunc = setTimeout(() => {
    console.log("ArrowFunc- This message is shown after 3 seconds")
}, 3000)
arrFunc

 
function taskOne() {
    console.log("task 1")
}

function taskTwo(task1) {
    task1()
    console.log("task 2")
}

taskTwo(taskOne)