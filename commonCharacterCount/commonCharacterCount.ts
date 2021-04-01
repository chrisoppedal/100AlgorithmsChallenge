export function commonCharacterCount(s1: string, s2: string): number {
    const a1 = s1.trim('');
    const a2 = s2.trim('');

    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        if (a2.includes(s1[i]) {
            a2.slice(i,0);
            count++;
        }
    }
    return count;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));