export function switchLights(candleArr: number[]): number[] {

    candleArr.forEach((candle, index) => {
        for (let x = 1; x <= index; x++) {
            candleArr[x] = candleArr[x] === 1 ? 0 : 1;
        }
    })
    return candleArr;
}

console.log(switchLights([1, 1, 1, 1, 1]));
console.log(switchLights([0, 0]));