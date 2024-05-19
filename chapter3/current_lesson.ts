// lesson 39: abstract class
interface IPerson {
    firstName: string,
    lastName: string,
    address?: string
}

function getFullNme(person: IPerson) {
    return `${person.firstName} ${person.lastName}`
}

let person = {
    firstName: "Tien",
    lastName: "Nham",
    // address: "HCMC"
}
console.log(">>> Full name: ", getFullNme(person))

export { }
