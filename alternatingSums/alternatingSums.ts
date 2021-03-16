export function alternatingSums(a: number[]): number[] {

    return a.reduce((accumulator, current, index) => {
        if (index % 2 == 0) {
            accumulator[0] = accumulator[0] + current;
        } else {
            accumulator[1] = accumulator[1] + current;
        }
        return accumulator;
    }, [0, 0])
}

console.log(alternatingSums([50, 60, 60, 45, 70]))