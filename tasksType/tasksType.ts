export function tasksTypes(deadlines: number[], today: number): number[] {

    // 1st index is <= date
    // 2nd index is date + 1 to date + 7
    // 3rd index is everything else
    return deadlines.reduce((accumulator, deadline) => {
        if (deadline <= today) {
            accumulator[0]++;
        } else if (deadline <= today + 7) {
            accumulator[1]++;
        } else {
            accumulator[2]++;
        }
        return accumulator;
    }, [0,0,0]);
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));
