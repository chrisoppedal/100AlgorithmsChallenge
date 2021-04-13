export function depositProfit(deposit: number, rate: number, threshold: number): number {
    let newTotal = deposit;
    let years = 0;
    while (newTotal <= threshold) {
        newTotal += newTotal * (rate / 100);
        years++;
    }
    return years;
}

console.log(depositProfit(100, 20, 170))