export function crossingSum(matrix: number[][], a: number, b: number): number {
    const rowTotal: number = matrix[a].reduce((a,b) => a + b);
    let columnTotal: number = 0;

    for (let i = 0; i < matrix.length; i++) {
        if (i !== a) {
            columnTotal += matrix[i][b];
        }
    }
    return rowTotal + columnTotal;
}

console.log(crossingSum([[1, 1, 1, 1], 
    [2, 2, 2, 2], 
    [3, 3, 3, 3]], 1, 3));