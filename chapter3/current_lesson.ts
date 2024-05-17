// lesson 22: for loop 
console.log(`\n`)
console.log("//==== Normal case ====")
for (let i = 0; i < 10; i++) {
    console.log(">>> i: ", i)
}

console.log(`\n`)
console.log("//==== Missing initialize case ====")
let i2 = 0
for (; i2 < 10; i2++) {
    console.log(">>> i2: ", i2)
}

console.log(`\n`)
console.log("//==== Missing initialize and break point case ====")
let i3 = 0
for (; ; i3++) {
    if (i3 >= 10) {
        break
    }
    console.log(">>> i3: ", i3)
}
console.log(`\n`)
console.log("//==== Missing all case ====")
let i4 = 0
for (; ;) {
    i4++
    if (i4 >= 10) {
        break
    }
    console.log(">>> i4: ", i4)
}

export { }
