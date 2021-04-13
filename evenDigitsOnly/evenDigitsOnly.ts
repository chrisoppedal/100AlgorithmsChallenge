export function evenDigitsOnly(n: number): boolean {
    const numArr: string[] = n.toString().split('');
    let areAllEven: boolean = true;
    numArr.forEach(num => {
        if (+num % 2 !== 0) {
            areAllEven = false;
        }
    })
    return areAllEven;
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));