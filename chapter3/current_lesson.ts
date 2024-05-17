// lesson 25: break keyword

let break_point = 5

for (let i = 0; i < 10; i++) {
    console.log(">>> i: ", i)
    if (i == 5) {
        break
    }
}

let products = [
    { name: "Mobile", price: 500 },
    { name: "Tablet", price: 1000 },
    { name: "Computer", price: 99999 },
]

let product = products[1]

switch (product.name) {
    case "Mobile":
        console.log(`Case Mobile`)
        console.log(`${product.name} price: `, product.price)
        break
    case "Tablet":
        console.log(`Case Tablet`)
        console.log(`${product.name} price: `, product.price)
        break
    case "Computer":
        console.log(`Case Computer`)
        console.log(`${product.name} price: `, product.price)
        break
    default:
        console.log(`Case default`)
        console.log("We don't have those product")

}
export { }
