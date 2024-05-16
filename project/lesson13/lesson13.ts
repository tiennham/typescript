// tuple

// datatype, size, order

let student_tuple: [string, number, boolean];

student_tuple = ["Jane", 20, true]

console.log("studen tuple", student_tuple)

student_tuple.push(123) // OK (???)
student_tuple.push("ssss") // OK (???)

console.log("student_tuple 2: ", student_tuple)

let student_tuple_optional: [string, number, boolean?];

student_tuple_optional = ["Harry", 21]

console.log("student_tuple_optional: ", student_tuple_optional)

student_tuple_optional.push(123) // OK (???)
student_tuple_optional.push("ssss") // OK (???)

console.log("student_tuple_optiona 2: ", student_tuple_optional)

export { }
