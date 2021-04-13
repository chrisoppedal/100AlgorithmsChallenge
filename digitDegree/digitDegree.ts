export function digitDegree(n: number): number {
    const getDigitSum = (num: number) => {
        const numArr = num.toString().split('');
        let sum: number = 0;
        numArr.forEach(num => {
            sum += +num;
        })
        return sum;
    }
    let timesReduced = 0;
    while (n >= 10) {
        n = getDigitSum(n);
        timesReduced++;
    }

    return timesReduced;
}

console.log(digitDegree(5));
console.log(digitDegree(100));
console.log(digitDegree(91));