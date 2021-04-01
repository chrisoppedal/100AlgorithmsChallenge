export function arrayChange(inputArray: number[]): number {
    let moveCount = 0;

    for (let i = 0; i < inputArray.length -1; i++) {
        while (inputArray[i + 1] <= inputArray[i]) {
            inputArray[i + 1] = inputArray[i + 1] + 1;
            moveCount++;
        }
    }
    return moveCount;
}

console.log(arrayChange([1, 1, 1]));
