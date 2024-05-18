let single_type_arr: string[] = ["python", "java", "php"];
let mixing_type_arr: (string | number | boolean)[] = ["python", 12, false]
let auto_detect_type_arr = ["python", 12, false]

console.log("single_type_arr", single_type_arr)
console.log("mixing_type_arr", mixing_type_arr)
console.log("auto_detect_type_arr", auto_detect_type_arr)

export { }