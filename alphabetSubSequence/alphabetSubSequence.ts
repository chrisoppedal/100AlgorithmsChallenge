export function alphabetSubsequence(s: string): boolean {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const wordArr = s.split('');

    for( let i = 0; i < wordArr.length - 1; i++) {
        if (alphabet.indexOf(wordArr[i]) > alphabet.indexOf(wordArr[i + i])) {
            return false;
        }
    }
    return true;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
