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
