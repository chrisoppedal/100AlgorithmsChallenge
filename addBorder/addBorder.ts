export function addBorder(picture: string[]): string[] {
    picture.unshift('***');
    picture.push('***');

    for (let i = 0; i < picture.length; i++) {
        picture[i] = '*' + picture[i] + '*';
    };
    return picture;
}

console.log(addBorder(["abc", "ded"]));