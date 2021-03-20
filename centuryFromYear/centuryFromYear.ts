export function centuryFromYear(year: number): number {
    if (year % 100 === 0) {
        year--;
    }
    return Math.ceil(year / 100) ;
}

console.log(centuryFromYear(1901));
console.log(centuryFromYear(1700));