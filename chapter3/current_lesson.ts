// lesson 32: class

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
