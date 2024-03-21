function attachEventListeners() {
    let count = 0
    document.getElementById("#demo").addEventListener("click", function xyz() {
        console.log("button clicked", ++count);
    });
}
attachEventListeners();