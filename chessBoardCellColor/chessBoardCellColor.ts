export function chessBoardCellColor(cell1: string, cell2: string): boolean {
    const alphabet = ['placeholder', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    return alphabet.indexOf(cell1.split('')[0]) + +cell1.split('')[1] % 2 === alphabet.indexOf(cell2.split('')[0]) + +cell2.split('')[1] % 2;
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
