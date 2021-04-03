export function allLongestStrings(inputArray: string[]): string[] {
    let longest: number = 0;
    inputArray.forEach(element => {
        if (element.length > longest) {
            longest = element.length;
        }
    })

    const result = [];
    inputArray.forEach(element => {
        if (element.length === longest) {
            result.push(element);
        }
    })
    return result;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));