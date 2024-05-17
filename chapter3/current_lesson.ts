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
