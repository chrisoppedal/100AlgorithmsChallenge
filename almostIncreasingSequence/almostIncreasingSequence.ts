export function almostIncreasingSequence(sequence: number[]): boolean {

    let decreaseCount = 0;
    sequence.reduce( (accumulator, value) => {
        if (!accumulator.length || value > accumulator[accumulator.length - 1]) {
            accumulator.push(value);
        } else {
            decreaseCount++;
        }
        return accumulator;
    }, []);
    return decreaseCount < 2;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 