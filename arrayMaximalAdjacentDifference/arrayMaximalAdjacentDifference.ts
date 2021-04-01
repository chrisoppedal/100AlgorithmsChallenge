export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let max = 0;

    for (let i = 0; i < inputArray.length - 1; i++) {
        max = Math.max(max, Math.abs(inputArray[i] - inputArray[i + 1]))
    }
    return max;
}

console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]));