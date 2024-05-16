// This lesson is demonstrade difference between adding wrong data type for array 
// ts-node project/lesson6/lesson6.ts

//=============== error wrong type =========

// let my_number: number;

// my_number = "Tien" //error TS2322: Type 'string' is not assignable to type 'number'.
// 
// console.log("log my_number: ", my_number)


//=============== OK with correct type =========


// let my_number: number;

// my_number = 6 // OK

// console.log("log my_number: ", my_number)

//=============== error with wrong type =========

let string_arr_ts: string[] = ["TypeScript", "NodeJS", "AWS"]

// string_arr_ts.push(6) // error

string_arr_ts.push("Python") // OK

console.log("string array after push integer: ", string_arr_ts) // [ 'TypeScript', 'NodeJS', 'AWS', 'Python' ]

export { }

