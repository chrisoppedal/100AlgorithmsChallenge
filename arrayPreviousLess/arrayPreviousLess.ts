export function arrayPreviousLess(items: number[]): number[] {

    let output: number[] = [];
    for (let i = 0; i < items.length; i++) {
        let value: number = -1;
        for (let ind = 0; ind < i; ind++) {
            if (items[ind] < items[i]) {
                value = items[ind];
            }
        }
        output.push(value);
    }
    return output;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));