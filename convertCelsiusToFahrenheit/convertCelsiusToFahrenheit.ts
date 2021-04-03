export function celsiusToFahrenheit(celsius: number): number {
    // multipy by 9/5 then add 32
    return (celsius * 9 / 5) + 32;
}

console.log(celsiusToFahrenheit(-30));
console.log(celsiusToFahrenheit(-10));
console.log(celsiusToFahrenheit(0));