export function alphabeticShift(inputString: string): string {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    let wordArr = inputString.split('');
    for (let i = 0; i < wordArr.length; i++) {
        let index = 0;
        if (wordArr[i] !== 'z') {
            index = alphabet.indexOf(wordArr[i]) + 1;
        }
        wordArr[i] = alphabet[index];
    }
    return wordArr.join('');
}

console.log(alphabeticShift('crazy'));