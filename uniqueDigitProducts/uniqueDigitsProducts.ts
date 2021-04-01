export function uniqueDigitProducts(productsArr: number[]): number {
    let uniqueMap = productsArr.reduce((accumulator, arr) => {
        let total = 1;
        arr.toString().split('').forEach(digit => {
            total = total * +digit;
        });
        accumulator.set(total, null);
        return accumulator;
    }, new Map())
    return uniqueMap.size;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));
