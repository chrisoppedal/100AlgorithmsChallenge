export function convertString(containing: string, contained: string): boolean {
    // check every char in contained is in containing
    // check the indexOf values are increasing
    return contained.split('').reduce((accumulator: boolean, letter: string) => {
        accumulator = containing.indexOf(letter) >= 0;
        containing = containing.slice(containing.indexOf(letter) + 1);
        return accumulator;
     }, true);
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
