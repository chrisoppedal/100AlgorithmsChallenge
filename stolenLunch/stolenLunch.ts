export function stolenLunch(note: string): string {
    let res: string[] = [];
    note.split('').forEach((char, index) => {
        if (Number.isInteger(+char)) {
            res[index] = String.fromCharCode(97 + +char);
            char =  String.fromCharCode(97 + +char);
        } else {
            res[index] = char;
        }
    })

    return res.toString().split(",").join("");
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));