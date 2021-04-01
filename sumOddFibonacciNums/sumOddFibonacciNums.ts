export function sumOddFibonacciNums(num: number): number {
    let fibArr: number[] = [0, 1, 1];
    while (fibArr[fibArr.length - 1] < num) {
        let fib = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
        fibArr.push(fib);
    }
    fibArr.pop();
    return fibArr.reduce((sum, next) => {
        return (next % 2) ? sum + next : sum;
    });
}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));