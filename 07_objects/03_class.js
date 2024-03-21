class Demo {
    #a
    constructor() {
        this.#a = 0
    };

    printA() {
        console.log(this.#a);
    }
}

let demo = new Demo()
console.log(demo, "-", typeof demo)
console.log(demo.a) // no access to private variable
demo.printA()