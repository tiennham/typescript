// lesson 31: overload function

// We want to combine addNumber and concateString

function addNumber(a: number, b: number): number {
    return a + b
}

function concateString(a: string, b: string): string {
    return a + b
}

// And here is how we do
function addOrConcate(a: number, b: number): number;

function addOrConcate(a: string, b: string): string;

function addOrConcate(a: any, b: any): number | string {
    return a + b
}

console.log(">>> check addOrConcate: ", addOrConcate(6, 9), addOrConcate("Tien", " & TypeScrip"))


class CountThing {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values: number[] = []
            for (let i = this.current; i <= target; i++) {
                // console.log(">>> i: ", i)
                values.push(i)
            }
            console.log("Values: ", values)
            return values
        }
        console.log("increase 1 for this.current: ", this.current)
        return ++this.current
    }
}

let count_obj = new CountThing();
count_obj.count() // this.current = 0
count_obj.count() // this.current = 1
count_obj.count() // this.current = 2
count_obj.count(10) // this.current = 3, 4, 5, 6, 7, 8, 9, 10

export { }
