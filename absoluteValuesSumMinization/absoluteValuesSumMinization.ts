export function absoluteValuesSumMinimization(arr: number[]): number {

    while (arr.length > 2) {
        arr.pop();
        arr.shift();
    }
    return arr[0];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));