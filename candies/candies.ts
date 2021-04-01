export function candies(n: number, m: number): number {
    console.log(10 % 3);
    return m - (m % n);
}

console.log(candies(3, 10));