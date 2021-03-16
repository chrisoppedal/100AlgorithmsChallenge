export function addTwoDigits(number: any): number {
    const numberArr = [...number.toString()];
    return Number(numberArr[0]) + Number(numberArr[1]);
}

console.log(addTwoDigits(89));