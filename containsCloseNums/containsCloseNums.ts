export function containsCloseNums(nums: number[], k: number): boolean {
    // iterate each index to see if it has a match
    // return true if distance <= k
    let isClose: boolean = false;
    nums.forEach((num, index) => {
        nums.forEach((innerNum, innerIndex) => {
            if (num === innerNum && index !== innerIndex) {
                const distance = Math.abs(index - innerIndex);
                if (distance <= k) {
                    isClose = true;
                }
            }
        });
    });
    return isClose;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));