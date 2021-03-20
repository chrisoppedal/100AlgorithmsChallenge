export function bishopAndPawn(bishop: string, pawn: string): boolean {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const letterDistance = Math.abs(alphabet.indexOf(bishop.split('')[0]) - alphabet.indexOf(pawn.split('')[0]));
    const numberDistance = Math.abs(+bishop.split('')[1] - +pawn.split('')[1]);
    return letterDistance === numberDistance;
}

console.log(bishopAndPawn('a1', 'd4'));