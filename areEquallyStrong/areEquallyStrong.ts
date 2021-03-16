export function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    return Math.max(yourLeft, yourRight) === Math.max(friendsLeft, friendsRight) && Math.min(yourLeft, yourRight) === Math.min(friendsLeft, friendsRight);
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
