// const message = function() {  
//     console.log("Func- This message is shown after 3 seconds");
// }
// setTimeout(message, 3000);

// setTimeout(function() {  
//     console.log("Anon- This message is shown after 3 seconds");
// }, 3000);

// const arrFunc = setTimeout(() => {
//     console.log("ArrowFunc- This message is shown after 3 seconds")
// }, 3000)
// arrFunc

 
// function taskOne() {
//     console.log("task 1")
// }

// function taskTwo(task1) {
//     task1()
//     console.log("task 2")
// }

// taskTwo(taskOne)

function greet(callback) {
    setTimeout(function() {
        console.log("Hi Musab");
        callback();
    }, 1000);
}

function introduce(callback) {
    setTimeout(function() {
        console.log("I am your academic advisor");
        callback();
    }, 1000);
}

function question(callback) {
    setTimeout(function() {
        console.log("Are you currently facing any challenge in your academics");;
        callback();
    }, 1000);
}

// callback hell
greet(function() {
    introduce(function() {
        question(function() {
            console.log("Done");
        });
    });
});
