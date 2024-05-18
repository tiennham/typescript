function handleMessage(message: string) {
    message = "This is your message: " + message
    console.log(message)
}

function infinityLoop(): never {
    console.log("go inside infinityLoop")
    while (true) {
        console.log("inside while loop")
    }
}

let test_void = handleMessage(" yahoollllll!!")
console.log(test_void)

let test_never = infinityLoop
console.log(test_never)


export { }