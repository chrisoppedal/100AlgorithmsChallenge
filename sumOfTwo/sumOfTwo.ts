export function sumOfTwo(a: number[], b: number[], numToFind: number): boolean {
    const largerArr = a.length > b.length ? a : b;
    const smallerArr = largerArr == a ? b : a;
    const sumArr = [];
    largerArr.forEach(num => {
        smallerArr.forEach(innerNum => {
            sumArr.push(num + innerNum);
        });
    });
    return sumArr.indexOf(numToFind) > -1;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 44));