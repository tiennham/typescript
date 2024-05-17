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
