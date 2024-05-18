// lesson 38: static

class Circle {
    static pi = 3.14
    radius: number
    constructor(radius: number) {
        this.radius = radius
    }

    static calculateArea(radius: number) {
        return this.pi * radius * radius
    }
}

console.log(">>> pi: ", Circle.pi)

console.log("Area 10: ", Circle.calculateArea(10))

let circle = new Circle(10)

// console.log(">>> circle 10 pi: ", circle.pi) // error
// console.log(">>> circle 10 area: ", circle.calculateArea(10)) // error


export { }
