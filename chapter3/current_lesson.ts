// lesson 35: modifier readonly

class Person {
    readonly birthDate: Date;
    constructor(birth_date: Date) {
        this.birthDate = birth_date
    }
}

let person = new Person(new Date(1985, 12, 31))
console.log(">>> person.birthDate: ", person.birthDate)
// person.birthDate = new Date(1998, 1, 12) // error

export { }
