// lesson 30: default parameter

function sum(a: number, b: number, c = false) {
    if (c === false) {
        return a - b
    }
    return a + b
}

console.log(">>> sum(6, 7): ", sum(6, 7))
console.log(">>> sum(6, 7): ", sum(6, 7, true))
// console.log(">>> sum(): ", sum()) // error

export { }
