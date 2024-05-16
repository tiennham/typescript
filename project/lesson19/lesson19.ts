
type add_or_concate = number | string | boolean

function addOrConcat(a: add_or_concate, b: add_or_concate) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b
    }

    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b)

    }

    throw new Error("params must be number or string")
}

let a = addOrConcat(6, 9)
console.log(a)
let b = addOrConcat("Tien", "Python")
console.log(b)


export { }