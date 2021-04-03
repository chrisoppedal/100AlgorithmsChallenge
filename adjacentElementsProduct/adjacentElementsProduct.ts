export function adjacentElementsProduct(inputArray: number[]): number {

    let largest: number;
    for (let i: number = 0; i < inputArray.length - 1; i++) {
        if (!largest || inputArray[i] * inputArray[i + 1] > largest) {
            largest = inputArray[i] * inputArray[i + 1];
        }
    }
    return largest;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));