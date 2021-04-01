export function arrayConversion(inputArray: number[]): number {

    let isAdd = true;
    while (inputArray.length > 1) {
        let output = [];
        for (let i = 0; i < inputArray.length; i += 2) {
            output.push(isAdd ? inputArray[i] + inputArray[i + 1] : inputArray[i] * inputArray[i + 1]);
        }
        inputArray = output;
        isAdd = !isAdd;
    }
    return inputArray[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
