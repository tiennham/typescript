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
