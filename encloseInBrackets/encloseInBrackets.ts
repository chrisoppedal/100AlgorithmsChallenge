export function encloseInBrackets(inputString: string): string {
    let strArr: string[] = inputString.split('');
    return ['(', ...strArr, ')'].join('');
}

console.log(encloseInBrackets('abacaba'));