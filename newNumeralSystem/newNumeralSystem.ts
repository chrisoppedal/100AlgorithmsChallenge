export function reverseWords(words: string): string[] {

    // day warm a is this
    console.log(words);
    let wordsArr = [];
    for (let i = 0; i < words.length; i++) {
        console.log(i);
        let word = [];
        for (let i = 0; i < words.length; i++) {
            while(words[i] != ' ') {
                word.push(words[i]);
            }
            wordsArr.push(word);
        }
        console.log(word);
    }
    return wordsArr;
}

console.log(reverseWords('this is a warm day'));