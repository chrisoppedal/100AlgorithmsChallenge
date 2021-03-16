export function areSimilar(a: number[], b: number[]): boolean {

    const c: number[] = [];
    const d: number[] = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            c.push(a[i]);
            d.push(b[i]);
        }
    }
    return c.toString() === d.reverse().toString();
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
