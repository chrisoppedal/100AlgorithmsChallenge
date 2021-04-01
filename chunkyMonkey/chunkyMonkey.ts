export function chunkyMonkey(arr: any[], size: number): any[][] {
    let monkey = [];

    while (arr.length >= size) {
        let arrToPush = [];
        for (let i = 0; i < size; i++) {
            arrToPush.push(arr.shift())
        }
        monkey.push(arrToPush);
        console.log(arr);
    }
    if (arr.length) {
        monkey.push(arr);
    }

    return monkey;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));