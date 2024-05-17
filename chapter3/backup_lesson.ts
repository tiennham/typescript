// lesson 20: IF ELESE

// let age = 18
// let age = 15
let age = 10

if (age >= 18) {
    console.log("you can watch JAV")
} else if (age >= 15) {
    console.log("You can watch advanture")
} else {
    console.log("You can watch cartoon")
}

export { }

// lesson 21: switch case control

let age = Math.floor(Math.random() * 18) + 1
// let age = 17
console.log(">>> age: ", age)

switch (age) {
    case 18:
    case 17:
        console.log(`age ${age} is High schood graduate`)
        break;
    case 15:
        console.log(`age ${age} is Secondary school graduate`)
        break;
    case 11:
        console.log(`age ${age} is Elementary school graduate`)
        break;
    default:
        console.log(`No worry, age ${age} just play all the time!!!`);
        break;
}

export { }

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


// lesson 23: while loop 
let n = 1
while (true) {
    console.log(`\n`)
    console.log(`//==== Throw the dices ${n} times ====`)
    let dice1 = Math.floor(Math.random() * 6) + 1
    console.log(`Dice 1: ${dice1}`)
    let dice2 = Math.floor(Math.random() * 6) + 1
    console.log(`Dice 2: ${dice2}`)
    if (dice1 == dice2) { // This is the purpose for while loop, break in the body
        console.log(`Bye loop`)
        break
    }
    n++
}

export { }