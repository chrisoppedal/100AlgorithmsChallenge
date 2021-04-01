export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let max = 0;

    for (let i = 0; i < inputArray.length - 1; i++) {
        max = Math.max(inputArray[i] + inputArray[i + 1], max)
    }
    return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));