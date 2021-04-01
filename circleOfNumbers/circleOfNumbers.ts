export function circleOfNumbers(n: number, firstNumber: number): number {
    let spacesToMove = Math.round(n / 2);
    return firstNumber + spacesToMove > n - 1 ? firstNumber - spacesToMove : firstNumber + spacesToMove;
}

console.log(circleOfNumbers(10, 2));