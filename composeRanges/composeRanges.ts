export function composeRanges(nums: number[]): string[] {
    const resultArr = [];
    let first = nums[0];
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== (nums[i + 1] - 1)) {
            resultArr.push(first + '->' + nums[i+1]);
            first = nums[i+1];
        }
    }
    return resultArr;
}

// For nums = [-1, 0, 1, 2, 6, 7, 9], the output should be ["-1->2", "6->7", "9"];
console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));