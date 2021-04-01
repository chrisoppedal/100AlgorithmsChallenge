export function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === elemToReplace) {
            inputArray[i] = substitutionElem;
        }
    }
    return inputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));