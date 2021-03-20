export function checkPalindrome(inputString: string): boolean {
    inputString = inputString.toLowerCase();
    return inputString === inputString.split('').reverse().join('');
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
