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


