// enum API_STATUS {
//     PENDING, // value wil be 0
//     FULFILLED, // value wil be 1
//     REJECTED, // value wil be 2
// }


enum API_STATUS {
    PENDING = "PENDING",
    FULFILLED = "FULFILLED",
    REJECTED = "REJECTED",
}

let status_pending = API_STATUS.PENDING
let status_fulfilled = API_STATUS.FULFILLED
let status_rejected = API_STATUS.REJECTED

console.log("status pending: ", status_pending)
console.log("status fulfilled: ", status_fulfilled)
console.log("status rejected: ", status_rejected)

export { }