// lesson 29: optional parameter

function sum(a: number, b: number, c?: number) {
    if (c) return a + b + c
    return a + b;
}

console.log(">>> sum(6, 7): ", sum(6, 7))
// console.log(">>> sum(): ", sum()) // error

export { }
