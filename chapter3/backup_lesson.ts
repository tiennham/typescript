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


// lesson 27: function

// case normal

function sum(a: number, b: number) {
    return a + b;
}

console.log("sum function normal: ", sum(5, 1))

// arrow function
// https://viblo.asia/p/su-khac-biet-giua-arrow-function-va-function-trong-javascript-07LKXpw2KV4
// khong nen dung arrow function trong phuong thuc cua object, 
// vi arrow fucntion khong co bind & this thay doi kho kiem soat
// dung trong cac ham filter, map cua array thi tien dung, ngan gon hon
// arrow function co the khong can return

const sum_arrow = (a: number, b: number) => a + b

console.log("arrow function: ", sum_arrow(22, 33))


let init_array = [2, 3, 4, 5, 6]

let double_array = init_array.map(item => item * 2)

console.log("Init array: ", init_array)
console.log("Double array: ", double_array)

export { }

// lesson 28: function return type

function sum_wrong_type(a: number, b: number) {
    return "abc" // no error
}

console.log("sum with wrong type: ", sum_wrong_type(11, 22))

let new_number = 10
new_number = sum_wrong_type(33, 22) // error  because string cannot + with number 

console.log("new number : ", new_number)

function sum_wrong_type_2(a: number, b: number): number {
    return "abc" // error
}

console.log("sum with wrong type: ", sum_wrong_type_2(11, 22))

let new_number_2 = 10
new_number_2 = sum_wrong_type_2(33, 22) // no error

console.log("new number 2 : ", new_number_2)

export { }

// lesson 29: optional parameter

function sum(a: number, b: number, c?: number) {
    if (c) return a + b + c
    return a + b;
}

console.log(">>> sum(6, 7): ", sum(6, 7))
// console.log(">>> sum(): ", sum()) // error

export { }


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

// lesson 31: rest parameter

// Note: even param is number[], but you must pass the parameter as they are seperate item
// Ex: getTotal(6, 7, 8) -> 7, 8 is 'an array'

function getTotal(...number_array: number[]): number {
    let total = 0
    number_array.forEach((i) => total += i)
    return total
}

// console.log(">>> getTotal(6, 7, 8): ", getTotal(6, 7, 8))

function multipleItems(times: number, ...number_array: number[]): number[] {
    let new_array = number_array.map((i) => i * times)
    return new_array
}

console.log(">>> multipleItems(10, 2,3,4,5,6): ", multipleItems(10, 2, 3, 4, 5, 6))

function greetingMembers(init_message: string, ...name_array: string[]): string {
    let greeting_str = init_message + name_array.join(", ")
    return greeting_str
}

console.log(
    ">>> greetingMembers('Hello', 'Jame', 'Schoch', 'Barry', 'Joe'): ",
    greetingMembers('Hello: ', 'Jame', 'Schoch', 'Barry', 'Joe')
)

export { }


// lesson 31: rest parameter

// Note: even param is number[], but you must pass the parameter as they are seperate item
// Ex: getTotal(6, 7, 8) -> 7, 8 is 'an array'

function getTotal(...number_array: number[]): number {
    let total = 0
    number_array.forEach((i) => total += i)
    return total
}

// console.log(">>> getTotal(6, 7, 8): ", getTotal(6, 7, 8))

function multipleItems(times: number, ...number_array: number[]): number[] {
    let new_array = number_array.map((i) => i * times)
    return new_array
}

console.log(">>> multipleItems(10, 2,3,4,5,6): ", multipleItems(10, 2, 3, 4, 5, 6))

function greetingMembers(init_message: string, ...name_array: string[]): string {
    let greeting_str = init_message + name_array.join(", ")
    return greeting_str
}

console.log(
    ">>> greetingMembers('Hello', 'Jame', 'Schoch', 'Barry', 'Joe'): ",
    greetingMembers('Hello: ', 'Jame', 'Schoch', 'Barry', 'Joe')
)

export { }


// lesson 32: overload function

// We want to combine addNumber and concateString

function addNumber(a: number, b: number): number {
    return a + b
}

function concateString(a: string, b: string): string {
    return a + b
}

// And here is how we do
function addOrConcate(a: number, b: number): number;

function addOrConcate(a: string, b: string): string;

function addOrConcate(a: any, b: any): number | string {
    return a + b
}

console.log(">>> check addOrConcate: ", addOrConcate(6, 9), addOrConcate("Tien", " & TypeScrip"))


class CountThing {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values: number[] = []
            for (let i = this.current; i <= target; i++) {
                // console.log(">>> i: ", i)
                values.push(i)
            }
            console.log("Values: ", values)
            return values
        }
        console.log("increase 1 for this.current: ", this.current)
        return ++this.current
    }
}

let count_obj = new CountThing();
count_obj.count() // this.current = 0
count_obj.count() // this.current = 1
count_obj.count() // this.current = 2
count_obj.count(10) // this.current = 3, 4, 5, 6, 7, 8, 9, 10

export { }


// lesson 33: class

class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, first_name: string, last_name: string) {
        this.firstName = first_name
        this.lastName = last_name
        this.ssn = ssn
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

let person = new Person("123", "Tien", "Nham")

console.log(">>> person: ", person)
console.log(">>> person.getFullName: ", person.getFullName())


export { }


// lesson 34: modifier

class Employee {
    private empcode: string;
    empName: string;

    constructor(code: string, name: string) {
        this.empName = name
        this.empcode = code
    }
}

class SaleEmployee extends Employee {
    protected department: string

    constructor(code: string, name: string, department: string) {
        super(code, name)
        this.department = department
    }
}

let sale_emp = new SaleEmployee("111", "Tien", "IT")

sale_emp.department = "Sale" // error

export { }
