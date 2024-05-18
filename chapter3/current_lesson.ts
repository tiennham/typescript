// lesson 34: modifier

class Employee {
    private empcode: string;
    empName: string;

    constructor(code: string, name: string) {
        this.empName = name
        this.empcode = code
    }
}

class SaleEmployee extends Employee {
    protected department: string

    constructor(code: string, name: string, department: string) {
        super(code, name)
        this.department = department
    }
}

let sale_emp = new SaleEmployee("111", "Tien", "IT")

sale_emp.department = "Sale" // error

export { }
