// lesson 39: abstract class

abstract class Employee {

    constructor(private firstName: string, private lastName: string) { }

    abstract getSalary(): number;

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class fulltimeEmployee extends Employee {
    // firstName: string;
    // lastName: string;
    private salary: number;

    constructor(firstName: string, lastName: string, salary: number) {
        super(firstName, lastName)
        // this.firstName = firstName
        // this.lastName = lastName
        this.salary = salary
    }

    getSalary(): number {
        return this.salary
    }
}

let fulltime_employee = new fulltimeEmployee("Tien", "Nham", 1000)

console.log(">>> fulltime_employee: ", fulltime_employee)
console.log(">>> fulltime_employee getSalary: ", fulltime_employee.getSalary())
console.log(">>> fulltime_employee getFullName: ", fulltime_employee.getFullName())

export { }
