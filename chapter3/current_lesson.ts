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
