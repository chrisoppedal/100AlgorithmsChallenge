export function sumAllPrimes(num: number): number {
    let isPrime = (numToTest): boolean => {
        for (let i = numToTest - 1; i > 1; i--) {
            if ((numToTest % i) === 0) {
                return false;
            }
        }
        return true;
    }
    let primeSum: number = 0;
    for (let i = 2; i <= num; i ++) {
        if (isPrime(i)) {
            primeSum += i;
        }
    }
    return primeSum;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));