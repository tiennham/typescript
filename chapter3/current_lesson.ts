// lesson 36: modifier readonly

class Person {
    private _age: number;
    fristName: string;
    lastName: string;

    constructor(_age: number, fristName: string, lastName: string) {
        this._age = _age
        this.fristName = fristName
        this.lastName = lastName
    }

    getAge() {
        return this._age
    }

    get age() {
        return this._age
    }

    set age(age_number: number) {
        if (age_number < 0 || age_number > 150) {
            throw Error("Invalid age number")
        }
        this._age = age_number
    }
}

let person = new Person(22, "Janet", "Wattson")
console.log("person: ", person)
console.log("person.age: ", person.age)
// person.age = 200 // error
// console.log("person: ", person)
// person.age = -1 // error

// console.log("person: ", person)
person.age = 99
console.log("person age 99: ", person)

export { }
