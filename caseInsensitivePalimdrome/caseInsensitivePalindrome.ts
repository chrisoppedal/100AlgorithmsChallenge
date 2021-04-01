export function isCaseInsensitivePalindrome(inputString: string): boolean {
    inputString = inputString.toLowerCase();
    return inputString === inputString.split('').reverse().join('');
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));