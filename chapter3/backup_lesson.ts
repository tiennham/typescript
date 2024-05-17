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

// fall-through behavior
// case # run!
// case $ run!
// case % run!
// case ^ run!

let special_key = "#"
console.log(">>> special_key: ", special_key)

switch (special_key) {
    case "!":
        console.log(`case ! run!`)
        break

    case "@":
        console.log(`case @ run!`)
        break;

    case "#":
        console.log(`case # run!`)
    // break

    case "$":
        console.log(`case $ run!`)
    // break

    case "%":
        console.log(`case % run!`)
    // break

    case "^":
        console.log(`case ^ run!`)
        break

    default:
        console.log(`case default run!`);
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


// lesson 24: do while loop 
let day = Math.floor(Math.random() * 7) + 1
let n = 1
do {
    console.log(`\n`)
    console.log(`//==== Throw the dices ${n} times ====`)
    if (day == 7) {
        console.log(`Today is Sunday, let take a break.`)
        break
    }
    let dice1 = Math.floor(Math.random() * 6) + 1
    console.log(`Dice 1: ${dice1}`)
    let dice2 = Math.floor(Math.random() * 6) + 1
    console.log(`Dice 2: ${dice2}`)
    if (dice1 == dice2) { // This is the purpose for while loop, break in the body
        console.log(`Bye loop`)
        break
    }
    n++
} while (true)

export { }

// lesson 25: break keyword

let break_point = 5

for (let i = 0; i < 10; i++) {
    console.log(">>> i: ", i)
    if (i == 5) {
        break
    }
}

let products = [
    { name: "Mobile", price: 500 },
    { name: "Tablet", price: 1000 },
    { name: "Computer", price: 99999 },
]

let product = products[1]

switch (product.name) {
    case "Mobile":
        console.log(`Case Mobile`)
        console.log(`${product.name} price: `, product.price)
        break
    case "Tablet":
        console.log(`Case Tablet`)
        console.log(`${product.name} price: `, product.price)
        break
    case "Computer":
        console.log(`Case Computer`)
        console.log(`${product.name} price: `, product.price)
        break
    default:
        console.log(`Case default`)
        console.log("We don't have those product")

}
export { }

// lesson 26: continue keyword

let ignore_guy = "cung dau"

let team_guys = ["ninh than", "cung dau", "xinh dep", "culi", "leader"]

for (let i = 0; i < team_guys.length; i++) {
    if (team_guys[i] == 'cung dau') {
        continue
    }
    console.log(`${team_guys[i]}, You have 1000$ for your efforce!!`)
}

export { }
