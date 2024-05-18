// lesson 37: inheritance

class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    describe() {
        return `This is describe`
    }

}

class Employee extends Person {
    private jobTitle: string;

    constructor(fristName: string, lastName: string, jobTitle: string) {
        super(fristName, lastName)
        this.jobTitle = jobTitle
    }

    describe(): string {
        return `${super.describe()} + for Employee class`
    }
}

let employee = new Employee("Tien", "Nham", "Data Engineering")
console.log(">>> employee.describe", employee.describe())


export { }
